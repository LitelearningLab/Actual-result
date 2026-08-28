from db.db import SQLiteDB
from db.models import User, ExamSchedule, Exam_Attempt, Answer, Categories, Exam, ExamMapping, ExamQuestionMapping, Question, Option, QuestionMapping, ExamScheduleMapping
from sqlalchemy import func, or_, String
from datetime import datetime


def resolve_report_context(session, args):
    start_date_str = args.get('start_date')
    end_date_str = args.get('end_date')
    schedule_id = args.get('schedule_id')
    test_title = args.get('test_title') or args.get('exam_title')
    exam_id = args.get('exam_id')
    institute_id = args.get('institute_id')

    # Date Range Mode is active if start_date and end_date are provided
    is_date_range = bool(start_date_str and end_date_str)

    if is_date_range:
        try:
            start_date = datetime.strptime(start_date_str[:10] + ' 00:00:00', '%Y-%m-%d %H:%M:%S')
            end_date = datetime.strptime(end_date_str[:10] + ' 23:59:59', '%Y-%m-%d %H:%M:%S')
        except Exception:
            start_date = None
            end_date = None

        if not start_date or not end_date:
            return {'status': False, 'message': 'Invalid date range format'}

        # Find all schedule IDs for the selected test / exam
        q_sched = session.query(ExamSchedule)
        if institute_id:
            q_sched = q_sched.filter(
                (ExamSchedule.institute_id == institute_id) |
                (func.cast(ExamSchedule.institute_id, String) == str(institute_id))
            )

        target_exam_ids = []
        if test_title:
            clean_title = test_title.strip().lower()
            exams = session.query(Exam).filter(
                (func.lower(Exam.title) == clean_title) |
                (func.lower(Exam.title).contains(clean_title))
            ).all()
            target_exam_ids = [e.exam_id for e in exams if e and e.exam_id]

            conds = [
                func.lower(ExamSchedule.title) == clean_title,
                func.lower(ExamSchedule.title).contains(clean_title)
            ]
            if target_exam_ids:
                conds.append(
                    (ExamSchedule.exam_id.in_(target_exam_ids)) |
                    (func.cast(ExamSchedule.exam_id, String).in_([str(eid) for eid in target_exam_ids]))
                )

            q_sched = q_sched.filter(or_(*conds))
        elif exam_id:
            q_sched = q_sched.filter(
                (ExamSchedule.exam_id == exam_id) |
                (func.cast(ExamSchedule.exam_id, String) == str(exam_id))
            )
            target_exam_ids = [exam_id]

        all_test_schedules = q_sched.all()
        all_schedule_ids = [s.schedule_id for s in all_test_schedules if s and s.schedule_id]

        # Fallback matching by title if institute filter produced no schedule
        if not all_schedule_ids and test_title:
            clean_title = test_title.strip().lower()
            q_fallback = session.query(ExamSchedule).filter(
                (func.lower(ExamSchedule.title) == clean_title) |
                (func.lower(ExamSchedule.title).contains(clean_title))
            )
            all_test_schedules = q_fallback.all()
            all_schedule_ids = [s.schedule_id for s in all_test_schedules if s and s.schedule_id]

        if not all_schedule_ids:
            return {'status': False, 'message': 'No schedules found for the selected test'}

        str_sched_ids = [str(sid) for sid in all_schedule_ids]
        attempt_date_expr = func.coalesce(Exam_Attempt.submitted_date, Exam_Attempt.started_date)
        q_attempts = session.query(Exam_Attempt).filter(
            (Exam_Attempt.schedule_id.in_(all_schedule_ids)) |
            (func.cast(Exam_Attempt.schedule_id, String).in_(str_sched_ids)),
            attempt_date_expr >= start_date,
            attempt_date_expr <= end_date
        )

        matching_attempts = q_attempts.all()
        matching_attempt_ids = [a.attempt_id for a in matching_attempts]
        user_ids_set = {a.user_id for a in matching_attempts if a.user_id}

        # Also pull users from ExamScheduleMapping and Answer tables
        try:
            mappings = session.query(ExamScheduleMapping).filter(
                (ExamScheduleMapping.schedule_id.in_(all_schedule_ids)) |
                (func.cast(ExamScheduleMapping.schedule_id, String).in_(str_sched_ids))
            ).all()
            for m in mappings:
                if m.user_id:
                    user_ids_set.add(m.user_id)
                elif m.department_id:
                    dept_users = session.query(User.user_id).filter(
                        (User.department_id == m.department_id) |
                        (func.cast(User.department_id, String) == str(m.department_id))
                    ).all()
                    for (duid,) in dept_users:
                        if duid:
                            user_ids_set.add(duid)
                elif m.team_id:
                    team_users = session.query(User.user_id).filter(
                        (User.team_id == m.team_id) |
                        (func.cast(User.team_id, String) == str(m.team_id))
                    ).all()
                    for (tuid,) in team_users:
                        if tuid:
                            user_ids_set.add(tuid)
                elif m.campus_id:
                    campus_users = session.query(User.user_id).filter(
                        (User.campus_id == m.campus_id) |
                        (func.cast(User.campus_id, String) == str(m.campus_id))
                    ).all()
                    for (cuid,) in campus_users:
                        if cuid:
                            user_ids_set.add(cuid)
        except Exception:
            pass

        try:
            ans_uids = session.query(Answer.user_id).filter(
                (Answer.schedule_id.in_(all_schedule_ids)) |
                (func.cast(Answer.schedule_id, String).in_(str_sched_ids))
            ).distinct().all()
            for (auid,) in ans_uids:
                if auid:
                    user_ids_set.add(auid)
        except Exception:
            pass

        matching_user_ids = list(user_ids_set)
        resolved_exam_id = target_exam_ids[0] if target_exam_ids else (all_test_schedules[0].exam_id if all_test_schedules else None)
        pass_mark = None
        if all_test_schedules and all_test_schedules[0].pass_mark is not None:
            pass_mark = all_test_schedules[0].pass_mark
        elif resolved_exam_id:
            ex = session.query(Exam).filter(Exam.exam_id == resolved_exam_id).first()
            if ex:
                pass_mark = ex.pass_mark

        return {
            'status': True,
            'mode': 'daterange',
            'schedules': all_test_schedules,
            'schedule_ids': all_schedule_ids,
            'attempt_ids': matching_attempt_ids,
            'attempts': matching_attempts,
            'user_ids': matching_user_ids,
            'exam_id': resolved_exam_id,
            'pass_mark': pass_mark,
            'start_date': start_date,
            'end_date': end_date
        }

    else:
        # Select Schedule Mode: Filter strictly by schedule_id
        if not schedule_id:
            return {'status': False, 'message': 'Missing schedule_id or date range criteria'}

        str_sid = str(schedule_id).strip()
        schedule = session.query(ExamSchedule).filter(
            (ExamSchedule.schedule_id == schedule_id) |
            (func.cast(ExamSchedule.schedule_id, String) == str_sid)
        ).first()

        # Fallback: search schedule by title or exam_id if not found by schedule_id directly
        if not schedule:
            schedule = session.query(ExamSchedule).filter(
                (func.lower(ExamSchedule.title) == str_sid.lower()) |
                (ExamSchedule.exam_id == schedule_id) |
                (func.cast(ExamSchedule.exam_id, String) == str_sid)
            ).first()

        if not schedule:
            return {'status': False, 'message': 'Schedule not found'}

        found_sid = schedule.schedule_id
        schedule_ids = [found_sid]
        str_sched_ids = [str(found_sid)]

        q_attempts = session.query(Exam_Attempt).filter(
            (Exam_Attempt.schedule_id == found_sid) |
            (func.cast(Exam_Attempt.schedule_id, String).in_(str_sched_ids))
        )
        matching_attempts = q_attempts.all()
        matching_attempt_ids = [a.attempt_id for a in matching_attempts]
        user_ids_set = {a.user_id for a in matching_attempts if a.user_id}

        # Pull assigned users from ExamScheduleMapping
        try:
            mappings = session.query(ExamScheduleMapping).filter(
                (ExamScheduleMapping.schedule_id == found_sid) |
                (func.cast(ExamScheduleMapping.schedule_id, String).in_(str_sched_ids))
            ).all()
            for m in mappings:
                if m.user_id:
                    user_ids_set.add(m.user_id)
                elif m.department_id:
                    dept_users = session.query(User.user_id).filter(
                        (User.department_id == m.department_id) |
                        (func.cast(User.department_id, String) == str(m.department_id))
                    ).all()
                    for (duid,) in dept_users:
                        if duid:
                            user_ids_set.add(duid)
                elif m.team_id:
                    team_users = session.query(User.user_id).filter(
                        (User.team_id == m.team_id) |
                        (func.cast(User.team_id, String) == str(m.team_id))
                    ).all()
                    for (tuid,) in team_users:
                        if tuid:
                            user_ids_set.add(tuid)
                elif m.campus_id:
                    campus_users = session.query(User.user_id).filter(
                        (User.campus_id == m.campus_id) |
                        (func.cast(User.campus_id, String) == str(m.campus_id))
                    ).all()
                    for (cuid,) in campus_users:
                        if cuid:
                            user_ids_set.add(cuid)
        except Exception:
            pass

        # Pull users from Answer table
        try:
            ans_uids = session.query(Answer.user_id).filter(
                (Answer.schedule_id == found_sid) |
                (func.cast(Answer.schedule_id, String).in_(str_sched_ids))
            ).distinct().all()
            for (auid,) in ans_uids:
                if auid:
                    user_ids_set.add(auid)
        except Exception:
            pass

        # If still no users found, fall back to institute users if schedule has institute_id
        if not user_ids_set and schedule.institute_id:
            try:
                inst_users = session.query(User.user_id).filter(
                    (User.institute_id == schedule.institute_id) |
                    (func.cast(User.institute_id, String) == str(schedule.institute_id))
                ).all()
                for (iuid,) in inst_users:
                    if iuid:
                        user_ids_set.add(iuid)
            except Exception:
                pass

        matching_user_ids = list(user_ids_set)

        pass_mark = schedule.pass_mark
        if pass_mark is None and schedule.exam_id:
            ex = session.query(Exam).filter(Exam.exam_id == schedule.exam_id).first()
            if ex:
                pass_mark = ex.pass_mark

        return {
            'status': True,
            'mode': 'schedule',
            'schedules': [schedule],
            'schedule_ids': schedule_ids,
            'attempt_ids': matching_attempt_ids,
            'attempts': matching_attempts,
            'user_ids': matching_user_ids,
            'exam_id': schedule.exam_id,
            'pass_mark': pass_mark
        }


def get_user_wise_report(request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    args = getattr(request, 'args', {})
    ctx = resolve_report_context(session, args)
    if not ctx.get('status'):
        return {"statusMessage": ctx.get('message', "No schedules found matching criteria"), "status": False}, 400

    schedule_ids = ctx['schedule_ids']
    attempt_ids = ctx['attempt_ids']
    mode = ctx['mode']
    q = (args.get('q') or '').strip().lower()

    try:
        page = int(args.get('page', 1))
    except Exception:
        page = 1
    try:
        page_size = int(args.get('page_size', 25))
    except Exception:
        page_size = 25

    try:
        user_sched_pairs = set()

        for att in ctx['attempts']:
            if att.user_id and att.schedule_id:
                user_sched_pairs.add((att.user_id, att.schedule_id))

        if mode == 'daterange':
            ans_rows = session.query(Answer.user_id, Answer.schedule_id).filter(
                Answer.schedule_id.in_(schedule_ids),
                Answer.created_date >= ctx['start_date'],
                Answer.created_date <= ctx['end_date']
            ).distinct().all()
            for uid, sid in ans_rows:
                if uid and sid:
                    user_sched_pairs.add((uid, sid))
        else:
            ans_rows = session.query(Answer.user_id, Answer.schedule_id).filter(
                Answer.schedule_id.in_(schedule_ids)
            ).distinct().all()
            for uid, sid in ans_rows:
                if uid and sid:
                    user_sched_pairs.add((uid, sid))

        if not user_sched_pairs:
            for uid in ctx['user_ids']:
                if schedule_ids:
                    user_sched_pairs.add((uid, schedule_ids[0]))

        user_sched_list = list(user_sched_pairs)
        rows = []
        default_pass_mark = ctx.get('pass_mark')

        for uid, sid in user_sched_list:
            user = session.query(User).filter(
                (User.user_id == uid) |
                (func.cast(User.user_id, String) == str(uid))
            ).first()
            if not user:
                continue

            if args.get('department_id'):
                depts = [d.strip() for d in args.get('department_id').split(',') if d.strip()]
                if user.department_id not in depts:
                    continue
            if args.get('team_id'):
                teams = [t.strip() for t in args.get('team_id').split(',') if t.strip()]
                if user.team_id not in teams:
                    continue
            if args.get('campus_id') and user.campus_id != args.get('campus_id'):
                continue
            if args.get('active_status'):
                req_active = 1 if args.get('active_status').lower() == 'active' else 0
                if user.active_status != req_active:
                    continue
            if args.get('country_id') and user.country_id != args.get('country_id'):
                continue
            if args.get('city_id') and user.city_id != args.get('city_id'):
                continue

            if mode == 'daterange':
                att_ids_for_pair = [a.attempt_id for a in ctx['attempts'] if a.user_id == uid and a.schedule_id == sid]
                if att_ids_for_pair:
                    answers = session.query(Answer).filter(
                        Answer.user_id == uid,
                        Answer.schedule_id == sid,
                        (Answer.attempt_id.in_(att_ids_for_pair)) | (
                            (Answer.created_date >= ctx['start_date']) &
                            (Answer.created_date <= ctx['end_date'])
                        )
                    ).all()
                else:
                    answers = session.query(Answer).filter(
                        Answer.user_id == uid,
                        Answer.schedule_id == sid,
                        Answer.created_date >= ctx['start_date'],
                        Answer.created_date <= ctx['end_date']
                    ).all()
            else:
                answers = session.query(Answer).filter(Answer.schedule_id == sid, Answer.user_id == uid).all()

            grouped = {}
            for ans in answers:
                qid = ans.question_id
                is_corr = (ans.is_correct or 0)
                if qid not in grouped or is_corr > grouped[qid]:
                    grouped[qid] = is_corr

            questions_attempted = len(grouped)
            correct = sum(1 for qid, is_corr in grouped.items() if is_corr == 1)
            wrong = questions_attempted - correct

            question_ids = list(grouped.keys())
            total_marks = 0
            if question_ids:
                total_marks = session.query(func.sum(Question.marks)).filter(Question.question_id.in_(question_ids)).scalar() or 0

            marks = sum((a.marks_awarded or 0) for a in answers)

            if mode == 'daterange':
                user_attempts = [a for a in ctx['attempts'] if a.user_id == uid and a.schedule_id == sid]
            else:
                user_attempts = session.query(Exam_Attempt).filter(Exam_Attempt.schedule_id == sid, Exam_Attempt.user_id == uid).all()

            sched_obj = next((s for s in ctx.get('schedules', []) if str(s.schedule_id) == str(sid)), None)
            pass_mark = sched_obj.pass_mark if (sched_obj and sched_obj.pass_mark is not None) else default_pass_mark

            best_percentage = None
            result = ''
            if user_attempts:
                best_percentage = max((a.percentage or 0) for a in user_attempts)
                if pass_mark is not None:
                    result = 'Pass' if (best_percentage is not None and best_percentage >= pass_mark) else 'Fail'
                else:
                    result = 'Pass' if (best_percentage and best_percentage >= 50) else 'Fail'
            elif answers:
                result = 'Evaluated' if any(a.is_validated for a in answers) else 'Submitted'
            else:
                result = 'No Attempt'

            attempt_date_str = None
            if user_attempts:
                dt = user_attempts[0].submitted_date or user_attempts[0].started_date
                if dt:
                    attempt_date_str = dt.strftime('%Y-%m-%d %H:%M:%S')
            if not attempt_date_str and answers and answers[0].created_date:
                attempt_date_str = answers[0].created_date.strftime('%Y-%m-%d %H:%M:%S')

            all_user_sched_attempts = session.query(Exam_Attempt).filter(
                Exam_Attempt.schedule_id == sid,
                Exam_Attempt.user_id == uid
            ).order_by(Exam_Attempt.started_date.asc()).all()

            retest_attempts = [a for a in all_user_sched_attempts if (a.attempt_number and a.attempt_number > 1)]
            retest_taken = "Yes" if retest_attempts else "No"
            retest_pct = None
            retest_date_str = None
            retest_result = None
            if retest_attempts:
                best_retest = max(retest_attempts, key=lambda a: (a.percentage or 0))
                retest_pct = best_retest.percentage
                rdt = best_retest.submitted_date or best_retest.started_date
                if rdt:
                    retest_date_str = rdt.strftime('%Y-%m-%d %H:%M:%S')
                if pass_mark is not None:
                    retest_result = 'Pass' if (retest_pct is not None and retest_pct >= pass_mark) else 'Fail'
                else:
                    retest_result = 'Pass' if (retest_pct is not None and retest_pct >= 50) else 'Fail'

            rows.append({
                'user_id': uid,
                'schedule_id': str(sid),
                'student_name': user.full_name,
                'test_taken_date': attempt_date_str,
                'questions_attempted': questions_attempted,
                'correct_answers': correct,
                'wrong_answers': wrong,
                'total_marks': total_marks,
                'marks_obtained': marks,
                'result': result,
                'percentage': round(best_percentage, 2) if best_percentage is not None else None,
                'retest_taken': retest_taken,
                'retest_percentage': round(retest_pct, 2) if retest_pct is not None else None,
                'retest_date': retest_date_str,
                'retest_result': retest_result
            })

        if q:
            rows = [r for r in rows if q in (r['student_name'] or '').lower()]

        sort_by = args.get('sort_by', 'student_name')
        order = args.get('order', 'asc')
        reverse = (order.lower() == 'desc')
        try:
            rows.sort(key=lambda r: (r.get(sort_by) is None, r.get(sort_by)), reverse=reverse)
        except Exception:
            rows.sort(key=lambda r: r.get('student_name', '').lower())

        total = len(rows)
        start = (page - 1) * page_size
        end = start + page_size
        paged = rows[start:end]

        return {
            'statusMessage': 'User-wise report retrieved',
            'status': True,
            'data': {
                'items': paged,
                'total': total,
                'page': page,
                'page_size': page_size
            }
        }, 200
    except Exception as e:
        lineno = e.__traceback__.tb_lineno if getattr(e, "__traceback__", None) else 'N/A'
        print(f'Error generating user-wise report {e}, at line {lineno}')
        return {"statusMessage": f"Error generating report: {str(e)}", "status": False}, 500


def get_exam_analytics(request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    args = getattr(request, 'args', {})
    ctx = resolve_report_context(session, args)
    if not ctx.get('status'):
        return {"statusMessage": ctx.get('message', "No schedules found matching criteria"), "status": False}, 400

    schedule_ids = ctx['schedule_ids']
    attempt_ids = ctx['attempt_ids']
    mode = ctx['mode']
    exam_id = ctx.get('exam_id')

    try:
        if not exam_id and schedule_ids:
            sched = session.query(ExamSchedule).filter(ExamSchedule.schedule_id.in_(schedule_ids)).first()
            if sched:
                exam_id = sched.exam_id

        if mode == 'daterange':
            if attempt_ids:
                ans_q = session.query(Answer.user_id).filter(Answer.attempt_id.in_(attempt_ids))
            else:
                ans_q = session.query(Answer.user_id).filter(
                    Answer.schedule_id.in_(schedule_ids),
                    Answer.created_date >= ctx['start_date'],
                    Answer.created_date <= ctx['end_date']
                )
        else:
            ans_q = session.query(Answer.user_id).filter(Answer.schedule_id.in_(schedule_ids))

        participant_ids = ans_q.distinct().all()
        participant_count = len([p[0] for p in participant_ids if p and p[0]])

        mappings = session.query(ExamMapping).filter(ExamMapping.exam_id == exam_id).all() if exam_id else []

        question_summary = []
        eqm_qids = [qm.question_id for qm in session.query(ExamQuestionMapping.question_id).filter(ExamQuestionMapping.exam_id == exam_id).all()] if exam_id else []

        cat_ids = [m.category_id for m in mappings if m.category_id]
        cat_qids = []
        if cat_ids:
            cat_qids = [qm.question_id for qm in session.query(QuestionMapping.question_id).filter(QuestionMapping.category_id.in_(cat_ids)).all()]

        if mode == 'daterange':
            if attempt_ids:
                ans_qids = [qid[0] for qid in session.query(Answer.question_id).filter(Answer.attempt_id.in_(attempt_ids)).distinct().all()]
            else:
                ans_qids = [qid[0] for qid in session.query(Answer.question_id).filter(
                    Answer.schedule_id.in_(schedule_ids),
                    Answer.created_date >= ctx['start_date'],
                    Answer.created_date <= ctx['end_date']
                ).distinct().all()]
        else:
            ans_qids = [qid[0] for qid in session.query(Answer.question_id).filter(Answer.schedule_id.in_(schedule_ids)).distinct().all()]

        combined_qids = []
        seen_qids = set()
        for qid in eqm_qids + cat_qids + ans_qids:
            if qid and qid not in seen_qids:
                seen_qids.add(qid)
                combined_qids.append(qid)

        question_ids = combined_qids

        for idx, qid in enumerate(question_ids, start=1):
            qobj = session.query(Question).filter(Question.question_id == qid).first()
            if not qobj:
                continue

            category_data = session.query(Categories).join(
                QuestionMapping, QuestionMapping.category_id == Categories.category_id
            ).filter(
                QuestionMapping.question_id == qid
            ).first()
            category_name = category_data.name if category_data else None
            category_id = category_data.category_id if category_data else None

            if not category_id and exam_id:
                try:
                    eqm = session.query(ExamQuestionMapping).filter(
                        ExamQuestionMapping.exam_id == exam_id,
                        ExamQuestionMapping.question_id == qid
                    ).first()
                    if eqm and eqm.category_id:
                        cat = session.query(Categories).filter(Categories.category_id == eqm.category_id).first()
                        category_id = eqm.category_id
                        category_name = cat.name if cat else str(eqm.category_id)
                except Exception:
                    pass

            if mode == 'daterange':
                if attempt_ids:
                    user_attempts_q = session.query(Answer.user_id).filter(Answer.attempt_id.in_(attempt_ids), Answer.question_id == qid)
                    user_q_attempts_q = session.query(Answer.user_id, Answer.question_id).filter(Answer.attempt_id.in_(attempt_ids), Answer.question_id == qid)
                    mistakes_q = session.query(Answer.user_id, Answer.question_id).filter(Answer.attempt_id.in_(attempt_ids), Answer.question_id == qid, Answer.is_correct == 0)
                else:
                    user_attempts_q = session.query(Answer.user_id).filter(Answer.schedule_id.in_(schedule_ids), Answer.created_date >= ctx['start_date'], Answer.created_date <= ctx['end_date'], Answer.question_id == qid)
                    user_q_attempts_q = session.query(Answer.user_id, Answer.question_id).filter(Answer.schedule_id.in_(schedule_ids), Answer.created_date >= ctx['start_date'], Answer.created_date <= ctx['end_date'], Answer.question_id == qid)
                    mistakes_q = session.query(Answer.user_id, Answer.question_id).filter(Answer.schedule_id.in_(schedule_ids), Answer.created_date >= ctx['start_date'], Answer.created_date <= ctx['end_date'], Answer.question_id == qid, Answer.is_correct == 0)
            else:
                user_attempts_q = session.query(Answer.user_id).filter(Answer.schedule_id.in_(schedule_ids), Answer.question_id == qid)
                user_q_attempts_q = session.query(Answer.user_id, Answer.question_id).filter(Answer.schedule_id.in_(schedule_ids), Answer.question_id == qid)
                mistakes_q = session.query(Answer.user_id, Answer.question_id).filter(Answer.schedule_id.in_(schedule_ids), Answer.question_id == qid, Answer.is_correct == 0)

            user_attempts = user_attempts_q.distinct().count()
            user_question_attempts = user_q_attempts_q.distinct().all()
            total_attempts = len(user_question_attempts)
            mistakes = mistakes_q.distinct().count()
            error_pct = (mistakes / total_attempts * 100) if total_attempts > 0 else 0

            question_summary.append({
                'sno': idx,
                'question_id': qid,
                'category_id': category_id,
                'category_name': category_name,
                'question_text': qobj.question_text,
                'user_attempts': int(user_attempts),
                'attempts': int(total_attempts),
                'mistakes': int(mistakes),
                'error_percentage': round(error_pct, 2)
            })

        category_rows = []
        mapped_cat_ids = []
        for m in mappings:
            if m.category_id:
                cid_str = str(m.category_id).strip()
                if cid_str and cid_str not in mapped_cat_ids:
                    mapped_cat_ids.append(cid_str)

        for q in question_summary:
            cid = q.get('category_id')
            if cid:
                cid_str = str(cid).strip()
                if cid_str and cid_str not in mapped_cat_ids:
                    mapped_cat_ids.append(cid_str)

        for cat_id in mapped_cat_ids:
            cat_qs = [q for q in question_summary if q.get('category_id') is not None and str(q.get('category_id')) == str(cat_id)]
            cat_qids_list = [q['question_id'] for q in cat_qs]

            if cat_qs:
                total_questions = len(cat_qs)
            else:
                m = next((mp for mp in mappings if mp.category_id == cat_id), None)
                total_questions = (m.number_of_questions or 0) if m else 0

            if cat_qids_list:
                if mode == 'daterange':
                    if attempt_ids:
                        cat_part_q = session.query(Answer.user_id).filter(Answer.attempt_id.in_(attempt_ids), Answer.question_id.in_(cat_qids_list))
                        cat_att_q = session.query(Answer.user_id, Answer.question_id).filter(Answer.attempt_id.in_(attempt_ids), Answer.question_id.in_(cat_qids_list))
                        cat_wrong_q = session.query(Answer.user_id, Answer.question_id).filter(Answer.attempt_id.in_(attempt_ids), Answer.question_id.in_(cat_qids_list), Answer.is_correct == 0)
                    else:
                        cat_part_q = session.query(Answer.user_id).filter(Answer.schedule_id.in_(schedule_ids), Answer.created_date >= ctx['start_date'], Answer.created_date <= ctx['end_date'], Answer.question_id.in_(cat_qids_list))
                        cat_att_q = session.query(Answer.user_id, Answer.question_id).filter(Answer.schedule_id.in_(schedule_ids), Answer.created_date >= ctx['start_date'], Answer.created_date <= ctx['end_date'], Answer.question_id.in_(cat_qids_list))
                        cat_wrong_q = session.query(Answer.user_id, Answer.question_id).filter(Answer.schedule_id.in_(schedule_ids), Answer.created_date >= ctx['start_date'], Answer.created_date <= ctx['end_date'], Answer.question_id.in_(cat_qids_list), Answer.is_correct == 0)
                else:
                    cat_part_q = session.query(Answer.user_id).filter(Answer.schedule_id.in_(schedule_ids), Answer.question_id.in_(cat_qids_list))
                    cat_att_q = session.query(Answer.user_id, Answer.question_id).filter(Answer.schedule_id.in_(schedule_ids), Answer.question_id.in_(cat_qids_list))
                    cat_wrong_q = session.query(Answer.user_id, Answer.question_id).filter(Answer.schedule_id.in_(schedule_ids), Answer.question_id.in_(cat_qids_list), Answer.is_correct == 0)

                cat_participant_count = cat_part_q.distinct().count()
                cat_user_q_attempts = cat_att_q.group_by(Answer.user_id, Answer.question_id).all()
                total_attempts = len(set(cat_user_q_attempts))
                total_wrong_answers = cat_wrong_q.distinct().count()
                total_correct_answers = total_attempts - total_wrong_answers
            else:
                total_attempts = 0
                total_wrong_answers = 0
                cat_participant_count = 0
                total_correct_answers = 0

            error_percentage = (total_wrong_answers / total_attempts * 100) if total_attempts > 0 else 0
            denom = (total_attempts * cat_participant_count) if (total_attempts and cat_participant_count) else 0
            impact_percentage = (total_wrong_answers / denom * 100) if denom > 0 else 0

            category_name = None
            if cat_qs and cat_qs[0].get('category_name'):
                category_name = cat_qs[0]['category_name']
            else:
                try:
                    cat = session.query(Categories).filter(Categories.category_id == cat_id).first()
                    if cat:
                        category_name = cat.name
                except Exception:
                    category_name = None

            category_rows.append({
                'category_id': cat_id,
                'category_name': category_name or str(cat_id),
                'total_questions': int(total_questions),
                'no_of_students': int(cat_participant_count),
                'total_attempts': int(total_attempts),
                'correct_answers': int(total_correct_answers),
                'wrong_answers': int(total_wrong_answers),
                'error_percentage': round(error_percentage, 2),
                'impact_percentage': round(impact_percentage, 2)
            })

        wrong_answer_distribution = []
        for q in question_summary:
            qid = q['question_id']
            if mode == 'daterange':
                if attempt_ids:
                    opt_q = session.query(Option.options_id, Option.option_text, func.count(Answer.answer_id)).join(Answer, Answer.selected_option_id == Option.options_id).filter(Answer.attempt_id.in_(attempt_ids), Answer.question_id == qid, Answer.is_correct == 0)
                else:
                    opt_q = session.query(Option.options_id, Option.option_text, func.count(Answer.answer_id)).join(Answer, Answer.selected_option_id == Option.options_id).filter(Answer.schedule_id.in_(schedule_ids), Answer.created_date >= ctx['start_date'], Answer.created_date <= ctx['end_date'], Answer.question_id == qid, Answer.is_correct == 0)
            else:
                opt_q = session.query(Option.options_id, Option.option_text, func.count(Answer.answer_id)).join(Answer, Answer.selected_option_id == Option.options_id).filter(Answer.schedule_id.in_(schedule_ids), Answer.question_id == qid, Answer.is_correct == 0)

            opt_counts = opt_q.group_by(Option.options_id, Option.option_text).all()
            total_sel = sum([c[2] for c in opt_counts])
            dist = []
            for opt_id, opt_text, cnt in opt_counts:
                pct = (cnt / total_sel * 100) if total_sel > 0 else 0
                dist.append({'option_id': opt_id, 'option_text': opt_text, 'count': int(cnt), 'percentage': round(pct, 2)})
            wrong_answer_distribution.append({'question_id': qid, 'question_text': q['question_text'], 'distribution': dist})

        result = {
            'statusMessage': 'Analytics generated',
            'status': True,
            'data': {
                'category_report': category_rows,
                'question_summary': question_summary,
                'wrong_answer_distribution': wrong_answer_distribution
            }
        }
        return result, 200
    except Exception as e:
        lineno = e.__traceback__.tb_lineno if getattr(e, "__traceback__", None) else 'N/A'
        print(f"Error generating analytics: {e} Line # {lineno}")
        return {"statusMessage": f"Error generating analytics: {str(e)}", "status": False}, 500


def get_question_wrong_answers(request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    args = getattr(request, 'args', {})
    question_id = args.get('question_id')
    if not question_id:
        return {"statusMessage": "Missing question_id parameter", "status": False}, 400

    ctx = resolve_report_context(session, args)

    try:
        qobj = session.query(Question).filter(
            (Question.question_id == question_id) |
            (func.cast(Question.question_id, String) == str(question_id))
        ).first()

        target_qid = qobj.question_id if qobj else question_id
        cat_name = None
        if target_qid:
            cat_mapping = session.query(QuestionMapping).filter(
                (QuestionMapping.question_id == target_qid) |
                (func.cast(QuestionMapping.question_id, String) == str(target_qid))
            ).first()
            if cat_mapping and cat_mapping.category_id:
                cat_obj = session.query(Categories).filter(
                    (Categories.category_id == cat_mapping.category_id) |
                    (func.cast(Categories.category_id, String) == str(cat_mapping.category_id))
                ).first()
                if cat_obj:
                    cat_name = getattr(cat_obj, 'category_name', None) or getattr(cat_obj, 'name', None)

        options_db = session.query(Option).filter(
            (Option.question_id == target_qid) |
            (func.cast(Option.question_id, String) == str(target_qid))
        ).order_by(Option.options_id).all()

        opts_data = []
        opt_id_to_num = {}
        for idx, opt in enumerate(options_db, 1):
            opt_id_to_num[str(opt.options_id)] = idx
            if opt.option_text:
                opt_id_to_num[opt.option_text.strip()] = idx
            opts_data.append({
                'option_id': str(opt.options_id),
                'option_text': opt.option_text,
                'option_number': idx,
                'is_correct': int(opt.is_correct or 0)
            })

        q_type = 'Multiple' if getattr(qobj, 'question_type', '') in ['multi', 'multiple'] else 'Single' if getattr(qobj, 'question_type', '') in ['choose', 'single'] else (getattr(qobj, 'question_type', '') or 'Single')

        question_details = {
            'question_id': str(target_qid),
            'question_text': getattr(qobj, 'question_text', None) or '',
            'question_type': q_type,
            'category_name': cat_name,
            'options': opts_data
        }

        # Query wrong answer distribution & combinations
        if ctx.get('status'):
            schedule_ids = ctx['schedule_ids']
            attempt_ids = ctx['attempt_ids']
            mode = ctx['mode']
            if mode == 'daterange':
                if attempt_ids:
                    opt_q = session.query(Option.options_id, Option.option_text, func.count(Answer.answer_id)).join(Answer, Answer.selected_option_id == Option.options_id).filter(Answer.attempt_id.in_(attempt_ids), Answer.question_id == target_qid, Answer.is_correct == 0, func.coalesce(Option.is_correct, 0) == 0)
                    raw_q = session.query(Answer.written_answer, func.count(Answer.answer_id)).filter(Answer.attempt_id.in_(attempt_ids), Answer.question_id == target_qid, Answer.is_correct == 0)
                    tot_attempts = session.query(func.count(Answer.attempt_id.distinct())).filter(Answer.attempt_id.in_(attempt_ids), Answer.question_id == target_qid).scalar() or 0
                    wrong_ans_records = session.query(Answer).filter(Answer.attempt_id.in_(attempt_ids), Answer.question_id == target_qid, Answer.is_correct == 0).all()
                else:
                    opt_q = session.query(Option.options_id, Option.option_text, func.count(Answer.answer_id)).join(Answer, Answer.selected_option_id == Option.options_id).filter(Answer.schedule_id.in_(schedule_ids), Answer.created_date >= ctx['start_date'], Answer.created_date <= ctx['end_date'], Answer.question_id == target_qid, Answer.is_correct == 0, func.coalesce(Option.is_correct, 0) == 0)
                    raw_q = session.query(Answer.written_answer, func.count(Answer.answer_id)).filter(Answer.schedule_id.in_(schedule_ids), Answer.created_date >= ctx['start_date'], Answer.created_date <= ctx['end_date'], Answer.question_id == target_qid, Answer.is_correct == 0)
                    tot_attempts = session.query(func.count(Answer.attempt_id.distinct())).filter(Answer.schedule_id.in_(schedule_ids), Answer.created_date >= ctx['start_date'], Answer.created_date <= ctx['end_date'], Answer.question_id == target_qid).scalar() or 0
                    wrong_ans_records = session.query(Answer).filter(Answer.schedule_id.in_(schedule_ids), Answer.created_date >= ctx['start_date'], Answer.created_date <= ctx['end_date'], Answer.question_id == target_qid, Answer.is_correct == 0).all()
            else:
                opt_q = session.query(Option.options_id, Option.option_text, func.count(Answer.answer_id)).join(Answer, Answer.selected_option_id == Option.options_id).filter(Answer.schedule_id.in_(schedule_ids), Answer.question_id == target_qid, Answer.is_correct == 0, func.coalesce(Option.is_correct, 0) == 0)
                raw_q = session.query(Answer.written_answer, func.count(Answer.answer_id)).filter(Answer.schedule_id.in_(schedule_ids), Answer.question_id == target_qid, Answer.is_correct == 0)
                tot_attempts = session.query(func.count(Answer.attempt_id.distinct())).filter(Answer.schedule_id.in_(schedule_ids), Answer.question_id == target_qid).scalar() or 0
                wrong_ans_records = session.query(Answer).filter(Answer.schedule_id.in_(schedule_ids), Answer.question_id == target_qid, Answer.is_correct == 0).all()
        else:
            opt_q = session.query(Option.options_id, Option.option_text, func.count(Answer.answer_id)).join(Answer, Answer.selected_option_id == Option.options_id).filter(Answer.question_id == target_qid, Answer.is_correct == 0, func.coalesce(Option.is_correct, 0) == 0)
            raw_q = session.query(Answer.written_answer, func.count(Answer.answer_id)).filter(Answer.question_id == target_qid, Answer.is_correct == 0)
            tot_attempts = session.query(func.count(Answer.attempt_id.distinct())).filter(Answer.question_id == target_qid).scalar() or 0
            wrong_ans_records = session.query(Answer).filter(Answer.question_id == target_qid, Answer.is_correct == 0).all()

        opt_counts = opt_q.group_by(Option.options_id, Option.option_text).all()
        total_sel = sum([c[2] for c in opt_counts])
        total_attempts = tot_attempts if tot_attempts > 0 else (total_sel or 1)

        question_details['attempts'] = total_attempts
        question_details['mistakes'] = sum([c[1] for c in raw_q.group_by(Answer.written_answer).all()]) or sum([c[2] for c in opt_counts]) or 0

        distribution = []
        for opt_id, opt_text, cnt in opt_counts:
            pct = (cnt / total_attempts * 100) if total_attempts > 0 else 0
            opt_num = opt_id_to_num.get(str(opt_id))
            distribution.append({
                'option_id': str(opt_id),
                'option_text': opt_text,
                'option_number': opt_num,
                'count': int(cnt),
                'percentage': round(pct, 2),
                'pct': f"{pct:.2f}%"
            })

        raw_wrong = raw_q.group_by(Answer.written_answer).all()
        raw_list = []
        for txt, cnt in raw_wrong:
            option_obj = session.query(Option).filter(Option.option_text == txt, Option.question_id == target_qid).first()
            option_id = str(option_obj.options_id) if option_obj else None
            opt_num = opt_id_to_num.get(str(option_id)) if option_id else None
            pct = (cnt / total_attempts * 100) if total_attempts > 0 else 0
            raw_list.append({
                'text': txt,
                'count': int(cnt),
                'option_id': option_id,
                'option_number': opt_num,
                'percentage': round(pct, 2),
                'pct': f"{pct:.2f}%"
            })

        attempt_options_map = {}
        for ans in wrong_ans_records:
            att_key = ans.attempt_id or ans.user_id or ans.answer_id
            if att_key not in attempt_options_map:
                attempt_options_map[att_key] = set()
            if ans.selected_option_id:
                attempt_options_map[att_key].add(str(ans.selected_option_id))
            elif ans.written_answer:
                attempt_options_map[att_key].add(str(ans.written_answer).strip())

        combo_counts = {}
        for att_key, opt_set in attempt_options_map.items():
            if not opt_set:
                continue
            nums = []
            for item in opt_set:
                if item in opt_id_to_num:
                    nums.append(opt_id_to_num[item])
                elif item.isdigit():
                    nums.append(int(item))
            nums.sort()
            if nums:
                combo_str = ",".join(str(n) for n in nums)
            else:
                combo_str = ",".join(sorted(list(opt_set)))
            combo_counts[combo_str] = combo_counts.get(combo_str, 0) + 1

        total_wrong_attempts = sum(combo_counts.values()) or len(attempt_options_map) or 1
        combinations_list = []
        for combo_str, count in sorted(combo_counts.items(), key=lambda x: x[1], reverse=True):
            pct = round((count / total_wrong_attempts) * 100, 2)
            combinations_list.append({
                'combination': combo_str,
                'count': count,
                'percentage': pct,
                'pct': f"{pct}%"
            })

        if not combinations_list and distribution:
            for item in distribution:
                c_name = str(item.get('option_number') or item.get('option_text') or 'Answer')
                combinations_list.append({
                    'combination': c_name,
                    'count': item.get('count', 0),
                    'percentage': item.get('percentage', 0),
                    'pct': f"{item.get('percentage', 0)}%"
                })

        return {'statusMessage': 'Question wrong answers retrieved', 'status': True, 'data': {'question_id': str(target_qid), 'question_details': question_details, 'distribution': distribution, 'raw': raw_list, 'combinations': combinations_list}}, 200
    except Exception as e:
        lineno = e.__traceback__.tb_lineno if getattr(e, "__traceback__", None) else 'N/A'
        print(f"Error fetching question wrong answers: {e} Line # {lineno}")
        return {"statusMessage": f"Error fetching wrong answers: {str(e)}", "status": False}, 500


def get_resources_for_answer(request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    args = getattr(request, 'args', {})
    ctx = resolve_report_context(session, args)
    if not ctx.get('status'):
        return {"statusMessage": "Missing schedule or date range criteria", "status": False}, 400

    schedule_ids = ctx['schedule_ids']
    attempt_ids = ctx['attempt_ids']
    mode = ctx['mode']

    option_id = args.get('option_id', None)
    answer_id = args.get('answer_id', None)
    question_id = args.get('question_id', None)
    answer_value = args.get('answer_value', None)

    try:
        q = session.query(Answer).filter(Answer.is_correct == 0)

        if mode == 'daterange':
            if attempt_ids:
                q = q.filter(Answer.attempt_id.in_(attempt_ids))
            else:
                q = q.filter(Answer.schedule_id.in_(schedule_ids), Answer.created_date >= ctx['start_date'], Answer.created_date <= ctx['end_date'])
        else:
            q = q.filter(Answer.schedule_id.in_(schedule_ids))

        if answer_id:
            q = q.filter(Answer.answer_id == answer_id)
        elif option_id:
            q = q.filter(Answer.selected_option_id == option_id)
        elif answer_value:
            if question_id:
                q = q.filter(Answer.question_id == question_id)
            q = q.filter(Answer.written_answer == answer_value)
        elif question_id:
            q = q.filter(Answer.question_id == question_id)
        else:
            return {"statusMessage": "Missing identifier (answer_id or option_id or question_id or answer_value)", "status": False}, 400

        answers = q.all()
        if not answers:
            return {"statusMessage": "No answers found for given parameters", "status": False}, 404

        user_ids = list({a.user_id for a in answers})
        users = session.query(User).filter(User.user_id.in_(user_ids)).all()
        out = []
        for user in users:
            out.append({'user_id': user.user_id, 'full_name': user.full_name, 'email': user.email})

        context = {'schedule_ids': schedule_ids, 'question_id': question_id, 'option_id': option_id, 'answer_id': answer_id, 'answer_value': answer_value}
        return {'statusMessage': 'Resources (users) retrieved', 'status': True, 'context': context, 'data': out}, 200
    except Exception as e:
        print('Error fetching resources for answer', e)
        return {"statusMessage": f"Error fetching resources: {str(e)}", "status": False}, 500


