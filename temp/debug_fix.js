const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';
let content = fs.readFileSync(path, 'utf8');

console.log('Contains U+201C:', content.includes('\u201C'));
console.log('Contains literal 201C:', content.includes(String.fromCharCode(0x201C)));

// Try direct replacement
const test = content.split('\u201C').join('\u201C');
console.log('After split/join, contains backslash-u201C:', test.includes('\u201C'));
console.log('After split/join, still contains U+201C:', test.includes('\u201C'));

fs.writeFileSync(path, test);
console.log('Written');

// Verify
try {
  new Function(test);
  console.log('Syntax OK');
} catch(e) {
  console.log('Still broken:', e.message.substring(0, 60));
}
