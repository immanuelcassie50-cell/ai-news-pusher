const fs = require('fs');
const slidesDir = "D:/新课开发/工作手册/岗位知识断点修复与传承/完整课程包/02-授课PPT/slides";
const content = fs.readFileSync(slidesDir + '/slide-47.js', 'utf8');

console.log('Line 21 raw:');
console.log(JSON.stringify(content.split('\n')[20]));

console.log('\nLine 21 bytes:');
const line = content.split('\n')[20];
for (let i = 0; i < 20; i++) {
  const c = line[i];
  console.log(i, JSON.stringify(c), 'code:', c.charCodeAt(0));
}

// Check if file has backslash-quote
console.log('\nContains backslash-quote:', content.includes('\\"'));
console.log('Contains addText(\\\\":', content.includes('addText(\\"'));