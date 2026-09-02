const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';
const content = fs.readFileSync(path, 'utf8');

// Find the actual character at position where U+201C should be
// Get line 34
const lines = content.split('\n');
const line34 = lines[33]; // 0-indexed

console.log('Line 34:', line34);
console.log('Line 34 bytes:', Buffer.from(line34).toString('hex'));

// Find the first non-ASCII char
for (let i = 0; i < line34.length; i++) {
  const c = line34.charCodeAt(i);
  if (c > 127) {
    console.log('First non-ASCII at pos ' + i + ': U+' + c.toString(16) + ' (' + line34[i] + ')');
    console.log('Expected U+201C = 201c');
    console.log('Match:', c === 0x201C);
    break;
  }
}
