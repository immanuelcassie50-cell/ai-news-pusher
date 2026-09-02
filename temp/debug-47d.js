const fs = require('fs');
const slidesDir = "D:/新课开发/工作手册/岗位知识断点修复与传承/完整课程包/02-授课PPT/slides";
const content = fs.readFileSync(slidesDir + '/slide-47.js', 'utf8');
const lines = content.split('\n');

console.log('Line 21 (index 20):');
const line = lines[20];
console.log('JSON:', JSON.stringify(line));
console.log('Chars 12-20:');
for (let i = 12; i <= 20; i++) {
  const c = line[i];
  console.log(i, JSON.stringify(c), 'code:', c.charCodeAt(0));
}

console.log('\nFull line analysis:');
for (let i = 0; i < line.length; i++) {
  const c = line[i];
  if (c === '"' || c === '\\' || c === ',' || c === '(') {
    console.log(i, JSON.stringify(c), 'code:', c.charCodeAt(0));
  }
}