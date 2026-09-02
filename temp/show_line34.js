const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';
const content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');
const line34 = lines[33]; // 0-indexed
console.log('Line 34 raw:', line34);
console.log('Line 34 bytes:', Buffer.from(line34).toString('hex'));
// Show each character
for (let i = 0; i < line34.length; i++) {
  const c = line34.charCodeAt(i);
  if (c > 127 || c === 92) { // non-ASCII or backslash
    console.log('  pos ' + i + ': U+' + c.toString(16).padStart(4,'0') + ' (' + JSON.stringify(line34[i]) + ')');
  }
}
