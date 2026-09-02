const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';
let content = fs.readFileSync(path, 'utf8');

// Explicitly check and replace using charCodeAt comparison
let result = '';
for (let i = 0; i < content.length; i++) {
  const c = content.charCodeAt(i);
  if (c === 0x201C) {
    result += '\u201C';
  } else if (c === 0x201D) {
    result += '\u201D';
  } else if (c === 0x2018) {
    result += '\u2018';
  } else if (c === 0x2019) {
    result += '\u2019';
  } else {
    result += content[i];
  }
}

console.log('Original length:', content.length);
console.log('Result length:', result.length);
console.log('Result has U+201C:', result.includes('\u201C'));
console.log('Result has \\u201C:', result.includes('\u201C'));

// Write and verify
fs.writeFileSync(path, result);

// Read back
const afterContent = fs.readFileSync(path, 'utf8');
console.log('After write, has U+201C:', afterContent.includes('\u201C'));
console.log('After write, has \\u201C:', afterContent.includes('\u201C'));
console.log('After write, line 34:', JSON.stringify(afterContent.split('\n')[33]));

// Test syntax
try {
  new Function(afterContent);
  console.log('Syntax OK!');
} catch(e) {
  console.log('Still broken:', e.message);
}
