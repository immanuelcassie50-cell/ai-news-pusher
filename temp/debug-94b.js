const fs = require('fs');
const slidesDir = "D:/新课开发/工作手册/岗位知识断点修复与传承/完整课程包/02-授课PPT/slides";
const content = fs.readFileSync(slidesDir + '/slide-94.js', 'utf8');
const lines = content.split('\n');

console.log('Line 51:');
console.log(JSON.stringify(lines[50]));

// Check bytes
const line = lines[50];
console.log('\nChars around the issue:');
for (let i = 20; i < 40; i++) {
  const c = line[i];
  console.log(i, JSON.stringify(c), 'code:', c.charCodeAt(0));
}