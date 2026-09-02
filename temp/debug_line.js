const fs = require('fs');
const p = 'D:/新课开发/心理学/19-依恋类型：认清你在关系中的行为模式/授课PPT/slides/slide-64-67.js';
const content = fs.readFileSync(p, 'utf8');
const lines = content.split('\n');

const line = lines[480]; // 0-indexed
console.log('Line 481:');
console.log(line);
console.log('');
console.log('Quote analysis:');
for (let i = 0; i < line.length; i++) {
  if (line[i] === '"') {
    const prevCode = i > 0 ? line[i-1].charCodeAt(0) : 0;
    const nextCode = i + 1 < line.length ? line[i+1].charCodeAt(0) : 0;
    console.log(`pos ${i}: prev=U+${prevCode.toString(16).toUpperCase()} next=U+${nextCode.toString(16).toUpperCase()}`);
  }
  if (i > 0 && line[i-1] === '\\' && line[i] === '"') {
    console.log(`ESCAPED quote at pos ${i}`);
  }
}