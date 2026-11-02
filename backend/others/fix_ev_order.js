const fs = require('fs');
let exams = fs.readFileSync('backend/others/exams.py', 'utf8');
const exEol = exams.includes('\r\n') ? '\r\n' : '\n';

const oldOrder = [
  '                manual_review = 1 if (is_uncertain and not ev) else 0',
  '                ev = evaluations_by_qid.get(qid_str) if is_detected else None'
].join(exEol);

const newOrder = [
  '                ev = evaluations_by_qid.get(qid_str) if is_detected else None',
  '                manual_review = 1 if (is_uncertain and not ev) else 0'
].join(exEol);

if (exams.includes(oldOrder)) {
  exams = exams.replace(oldOrder, newOrder);
  fs.writeFileSync('backend/others/exams.py', exams, 'utf8');
  console.log('SUCCESS: swapped order of ev and manual_review');
} else {
  console.log('NOTICE: oldOrder not found');
}

