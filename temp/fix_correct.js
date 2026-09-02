const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';
const content = fs.readFileSync(path, 'utf8');

// The problem: the file contains literal \u201C but Node re-interprets escape sequences
// Solution: use Buffer to write raw bytes without UTF-8 interpretation

let result = '';
for (let i = 0; i < content.length; i++) {
  const c = content.charCodeAt(i);
  if (c === 0x201C) {
    result += '\u201C';
  } else if (c === 0x201D) {
    result += '\u201D';
  } else {
    result += content[i];
  }
}

// Now result contains literal \u201C as ASCII characters
// Write using Buffer to avoid any re-interpretation
const buf = Buffer.from(result, 'utf8');
fs.writeFileSync(path, buf);
console.log('Written with Buffer. File length:', buf.length);

// Verify by reading raw bytes
const verify = fs.readFileSync(path);
const hasBackslash = verify.includes(Buffer.from('\u201C'));
console.log('File contains literal backslash-u201C:', hasBackslash);
