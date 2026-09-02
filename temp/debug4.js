const fs = require('fs');
const slidesDir = "D:/新课开发/工作手册/岗位知识断点修复与传承/完整课程包/02-授课PPT/slides";
const content = fs.readFileSync(slidesDir + '/slide-17.js', 'utf8');
const lines = content.split('\n');
console.log('Total lines:', lines.length);
console.log('Line 7 chars:');
const l7 = lines[6]; // 0-indexed
for (let i = 0; i < l7.length; i++) {
  const c = l7[i];
  console.log(i, JSON.stringify(c), 'code:', c.charCodeAt(0));
}