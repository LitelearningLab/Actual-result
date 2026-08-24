from db.db import SQLiteDB
from db.models import User, ExamSchedule, Exam_Attempt, Answer, Categories, Exam, ExamMapping, ExamQuestionMapping, Question, Option,QuestionMapping
from sqlalchemy import func


def resolve_schedule_ids(session, args):
    schedule_id = args.get('schedule_id')
    if schedule_id:
        return [schedule_id]

    start_date_str = args.get('start_date')
    end_date_str = args.get('end_date')
    test_title = args.get('test_title') or args.get('exam_title')
    exam_id = args.get('exam_id')
    institute_id = args.get('institute_id')

    if not start_date_str or not end_date_str:
        return []

    try:
        from datetime import datetime
        start_date = datetime.strptime(start_date_str[:10], '%Y-%m-%d')
        end_date = datetime.strptime(end_date_str[:10] + ' 23:59:59', '%Y-%m-%d %H:%M:%S')
    except Exception:
        start_date = None
        end_date = None

    q = session.query(ExamSchedule)
    if institute_id:
        q = q.filter(ExamSchedule.institute_id == institute_id)

    if test_title:
        clean_title = test_title.strip().lower()
        exam_ids = [e.exam_id for e in session.query(Exam).filter(func.lower(Exam.title) == clean_title).all()]
        if exam_ids:
            q = q.filter((func.lower(ExamSchedule.title) == clean_title) | (ExamSchedule.exam_id.in_(exam_ids)))
        else:
            q = q.filter(func.lower(ExamSchedule.title) == clean_title)
    elif exam_id:
        q = q.filter(ExamSchedule.exam_id == exam_id)

    if start_date and end_date:
        q = q.filter(
            ((ExamSchedule.start_time >= start_date) & (ExamSchedule.start_time <= end_date)) |
            ((ExamSchedule.created_date >= start_date) & (ExamSchedule.created_date <= end_date))
        )

    schedules = q.all()
    if schedules:
        return [s.schedule_id for s in schedules]

    if test_title or exam_id:
        q_fallback = session.query(ExamSchedule)
        if test_title:
            clean_title = test_title.strip().lower()
            exam_ids = [e.exam_id for e in session.query(Exam).filter(func.lower(Exam.title) == clean_title).all()]
            if exam_ids:
                q_fallback = q_fallback.filter((func.lower(ExamSchedule.title) == clean_title) | (ExamSchedule.exam_id.in_(exam_ids)))
            else:
                q_fallback = q_fallback.filter(func.lower(ExamSchedule.title) == clean_title)
        elif exam_id:
            q_fallback = q_fallback.filter(ExamSchedule.exam_id == exam_id)
        schedules_fallback = q_fallback.all()
        return [s.schedule_id for s in schedules_fallback]

    return []


def get_user_wise_report(request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    args = getattr(request, 'args', {})
    schedule_ids = resolve_schedule_ids(session, args)
    if not schedule_ids:
        return {"statusMessage": "No schedules found matching criteria", "status": False}, 400

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
        # find distinct users who have attempts or answers for these schedules
        ans_users = session.query(Answer.user_id).filter(Answer.schedule_id.in_(schedule_ids)).distinct().all()
        att_users = session.query(Exam_Attempt.user_id).filter(Exam_Attempt.schedule_id.in_(schedule_ids)).distinct().all()
        user_ids = list(set([u[0] for u in ans_users if u and u[0]] + [u[0] for u in att_users if u and u[0]]))

        rows = []
        schedule = session.query(ExamSchedule).filter(ExamSchedule.schedule_id.in_(schedule_ids)).first()
        pass_mark = schedule.pass_mark if schedule and schedule.pass_mark is not None else None

        for uid in user_ids:
            user = session.query(User).filter(User.user_id == uid).first()
            if not user:
                continue

            answers = session.query(Answer).filter(Answer.schedule_id.in_(schedule_ids), Answer.user_id == uid).all()

            total_marks = session.query(func.sum(Question.marks)).filter(Question.question_id.in_(answer.question_id for answer in answers)).scalar() or 0

            grouped = session.query(Answer.question_id, func.max(Answer.is_correct).label('any_correct')).filter(Answer.schedule_id.in_(schedule_ids), Answer.user_id == uid).group_by(Answer.question_id).all()

            questions_attempted = len(grouped)
            correct = sum(1 for _qid, any_correct in grouped if (any_correct or 0) == 1)
            wrong = questions_attempted - correct
            marks = sum((a.marks_awarded or 0) for a in answers)

            attempts = session.query(Exam_Attempt).filter(Exam_Attempt.schedule_id.in_(schedule_ids), Exam_Attempt.user_id == uid).all()
            best_percentage = None
            result = ''
            if attempts:
                best_percentage = max((a.percentage or 0) for a in attempts)
                if pass_mark is not None:
                    result = 'Pass' if (best_percentage is not None and best_percentage >= pass_mark) else 'Fail'
                else:
                    result = 'Pass' if (best_percentage and best_percentage >= 50) else 'Fail'
            else:
                result = 'No Attempt'

            user_schedule_id = None
            if attempts and attempts[0].schedule_id:
                user_schedule_id = str(attempts[0].schedule_id)
            elif answers and answers[0].schedule_id:
                user_schedule_id = str(answers[0].schedule_id)
            elif schedule_ids:
                user_schedule_id = str(schedule_ids[0])

            rows.append({
                'user_id': uid,
                'schedule_id': user_schedule_id,
                'student_name': user.full_name,
                'questions_attempted': questions_attempted,
                'correct_answers': correct,
                'wrong_answers': wrong,
                'total_marks' : total_marks,
                'marks_obtained': marks,
                'result': result,
                'percentage': round(best_percentage, 2) if best_percentage is not None else None
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
        print(f'Error generating user-wise report {e}, at line {e.__traceback__.tb_lineno}')
        return {"statusMessage": f"Error generating report: {str(e)}", "status": False}, 500


def get_exam_analytics(request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    args = getattr(request, 'args', {})
    schedule_ids = resolve_schedule_ids(session, args)
    if not schedule_ids:
        return {"statusMessage": "No schedules found matching criteria", "status": False}, 400

    try:
        schedule = session.query(ExamSchedule).filter(ExamSchedule.schedule_id.in_(schedule_ids)).first()
        if not schedule:
            return {"statusMessage": "Schedule not found", "status": False}, 404
        exam_id = schedule.exam_id

        participant_ids = session.query(Answer.user_id).filter(Answer.schedule_id.in_(schedule_ids)).distinct().all()
        participant_count = len([p[0] for p in participant_ids])

        mappings = session.query(ExamMapping).filter(ExamMapping.exam_id == exam_id).all()

        question_summary = []
        
        eqm_qids = [qm.question_id for qm in session.query(ExamQuestionMapping.question_id).filter(ExamQuestionMapping.exam_id == exam_id).all()]

        cat_ids = [m.category_id for m in mappings if m.category_id]
        cat_qids = []
        if cat_ids:
            cat_qids = [qm.question_id for qm in session.query(QuestionMapping.question_id).filter(QuestionMapping.category_id.in_(cat_ids)).all()]

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
            try:
                category_data = session.query(Categories).join(
                    QuestionMapping, QuestionMapping.category_id == Categories.category_id
                ).filter(
                    QuestionMapping.question_id == qid
                ).first()
                category_name = category_data.name if category_data else None
                category_id = category_data.category_id if category_data else None
            except Exception:
                category_name = None
                category_id = None

            if not category_id:
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

            user_attempts = session.query(Answer.user_id).filter(Answer.schedule_id.in_(schedule_ids), Answer.question_id == qid).distinct().count()

            user_question_attempts = session.query(Answer.user_id, Answer.question_id).filter(
                Answer.schedule_id.in_(schedule_ids), Answer.question_id == qid).distinct().all()
            total_attempts = len(user_question_attempts)

            mistakes = session.query(Answer.user_id, Answer.question_id).filter(
                Answer.schedule_id.in_(schedule_ids), Answer.question_id == qid, Answer.is_correct == 0).distinct().count()
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
                participant_count = session.query(Answer.user_id).filter(Answer.schedule_id.in_(schedule_ids), Answer.question_id.in_(cat_qids_list)).distinct().count()
                user_question_attempts = session.query(
                    Answer.user_id,
                    Answer.question_id,
                ).filter(
                    Answer.schedule_id.in_(schedule_ids),
                    Answer.question_id.in_(cat_qids_list)
                ).group_by(Answer.user_id, Answer.question_id).all()
                total_attempts = len(set(user_question_attempts))

                total_wrong_answers = session.query(
                    Answer.user_id, Answer.question_id
                ).filter(
                    Answer.schedule_id.in_(schedule_ids),
                    Answer.question_id.in_(cat_qids_list),
                    Answer.is_correct == 0
                ).distinct().count()

                total_correct_answers = total_attempts - total_wrong_answers
            else:
                total_attempts = 0
                total_wrong_answers = 0
                participant_count = 0
                total_correct_answers = 0

            error_percentage = (total_wrong_answers / total_attempts * 100) if total_attempts > 0 else 0
            denom = (total_attempts * participant_count) if (total_attempts and participant_count) else 0
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
                'no_of_students': int(participant_count),
                'total_attempts': int(total_attempts),
                'correct_answers': int(total_correct_answers),
                'wrong_answers': int(total_wrong_answers),
                'error_percentage': round(error_percentage, 2),
                'impact_percentage': round(impact_percentage, 2)
            })

        wrong_answer_distribution = []
        for q in question_summary:
            qid = q['question_id']
            opt_counts = session.query(Option.options_id, Option.option_text, func.count(Answer.answer_id)).join(Answer, Answer.selected_option_id == Option.options_id).filter(Answer.schedule_id.in_(schedule_ids), Answer.question_id == qid, Answer.is_correct == 0).group_by(Option.options_id, Option.option_text).all()
            total_sel = sum([c[2] for c in opt_counts])
            dist = []
            for opt_id, opt_text, cnt in opt_counts:
                pct = (cnt / total_sel * 100) if total_sel > 0 else 0
                dist.append({ 'option_id': opt_id, 'option_text': opt_text, 'count': int(cnt), 'percentage': round(pct,2) })
            wrong_answer_distribution.append({ 'question_id': qid, 'question_text': q['question_text'], 'distribution': dist })

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
    schedule_ids = resolve_schedule_ids(session, args)
    question_id = args.get('question_id')
    if not schedule_ids or not question_id:
        return {"statusMessage": "Missing schedule/date criteria or question_id", "status": False}, 400

    try:
        opt_counts = session.query(Option.options_id, Option.option_text, func.count(Answer.answer_id)).join(Answer, Answer.selected_option_id == Option.options_id).filter(Answer.schedule_id.in_(schedule_ids), Answer.question_id == question_id).group_by(Option.options_id, Option.option_text).all()
        total_sel = sum([c[2] for c in opt_counts])
        distribution = []
        for opt_id, opt_text, cnt in opt_counts:
            pct = (cnt / total_sel * 100) if total_sel > 0 else 0
            distribution.append({ 'option_id': opt_id, 'option_text': opt_text, 'count': int(cnt), 'percentage': round(pct,2) })

        raw_wrong = session.query(Answer.written_answer, func.count(Answer.answer_id)).filter(Answer.schedule_id.in_(schedule_ids), Answer.question_id == question_id, Answer.is_correct == 0).group_by(Answer.written_answer).all()
        raw_list = []
        for txt, cnt in raw_wrong:
            option_obj = session.query(Option).filter(Option.option_text == txt, Option.question_id == question_id).first()
            option_id = option_obj.options_id if option_obj else None
            raw_list.append({'text': txt, 'count': int(cnt), 'option_id': option_id})

        return {'statusMessage': 'Question wrong answers retrieved', 'status': True, 'data': { 'question_id': question_id, 'distribution': distribution, 'raw': raw_list }}, 200
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
    schedule_ids = resolve_schedule_ids(session, args)
    option_id = args.get('option_id', None)
    answer_id = args.get('answer_id', None)
    question_id = args.get('question_id', None)
    answer_value = args.get('answer_value', None)

    try:
        if not schedule_ids:
            return {"statusMessage": "Missing schedule or date range criteria", "status": False}, 400

        q = session.query(Answer)
        q = q.filter(Answer.schedule_id.in_(schedule_ids), Answer.is_correct == 0)

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

        user_ids = list({ a.user_id for a in answers })
        users = session.query(User).filter(User.user_id.in_(user_ids)).all()
        out = []
        for user in users:
            out.append({ 'user_id': user.user_id, 'full_name': user.full_name, 'email': user.email })

        context = { 'schedule_ids': schedule_ids, 'question_id': question_id, 'option_id': option_id, 'answer_id': answer_id, 'answer_value': answer_value }
        return { 'statusMessage': 'Resources (users) retrieved', 'status': True, 'context': context, 'data': out }, 200
    except Exception as e:
        print('Error fetching resources for answer', e)
        return {"statusMessage": f"Error fetching resources: {str(e)}", "status": False}, 500

