const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';
const content = fs.readFileSync(path, 'utf8');

let replacements = 0;
let result = '';
for (let i = 0; i < content.length; i++) {
  const c = content.charCodeAt(i);
  if (c === 0x201C) {
    result += '\u201C';
    replacements++;
  } else if (c === 0x201D) {
    result += '\u201D';
    replacements++;
  } else {
    result += content[i];
  }
}

console.log('Total replacements:', replacements);
console.log('Result length:', result.length);
console.log('Result has U+201C:', result.includes('\u201C'));
console.log('Result has backslash-u:', result.includes('\u201C'));

// Check line 34 in result
const lines = result.split('\n');
console.log('Line 34 in result:', JSON.stringify(lines[33]));
