const fs = require('fs');

let exams = fs.readFileSync('backend/others/exams.py', 'utf8');
const exEol = exams.includes('\r\n') ? '\r\n' : '\n';

// 1. Remove the artificial min(conf, 50) cap on line 5436
const oldCap = [
  '                    if is_uncertain:',
  '                        conf = min(conf, 50)'
].join(exEol);

if (exams.includes(oldCap)) {
  exams = exams.replace(oldCap + exEol, '');
  console.log('SUCCESS: removed artificial min(conf, 50) cap');
} else {
  console.log('NOTICE: oldCap not found');
}

// 2. Only force manual_review if anchor is uncertain AND no successful AI evaluation verified it
const oldManualReview = '                manual_review = 1 if is_uncertain else 0';
const newManualReview = '                manual_review = 1 if (is_uncertain and not ev) else 0';

if (exams.includes(oldManualReview)) {
  exams = exams.replace(oldManualReview, newManualReview);
  console.log('SUCCESS: updated manual_review logic');
} else {
  console.log('NOTICE: oldManualReview not found');
}

fs.writeFileSync('backend/others/exams.py', exams, 'utf8');

