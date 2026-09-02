const fs = require('fs');
const slidesDir = "D:/新课开发/工作手册/岗位知识断点修复与传承/完整课程包/02-授课PPT/slides";

// Check slide-28 which has a different pattern
const content = fs.readFileSync(slidesDir + '/slide-28.js', 'utf8');
const lines = content.split('\n');
console.log('Line 120 (119 in 0-index):');
const l120 = lines[119];
for (let i = 0; i < Math.min(l120.length, 80); i++) {
  const c = l120[i];
  console.log(i, JSON.stringify(c), 'code:', c.charCodeAt(0));
}