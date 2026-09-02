const fs = require('fs');
const slidesDir = "D:/新课开发/工作手册/岗位知识断点修复与传承/完整课程包/02-授课PPT/slides";
const content = fs.readFileSync(slidesDir + '/slide-28.js', 'utf8');
const lines = content.split('\n');
console.log('Lines 118-123:');
for (let i = 117; i <= 122; i++) {
  console.log('Line ' + (i+1) + ': ' + JSON.stringify(lines[i]));
}

// Try parsing to see where the error is
try {
  const module = require(slidesDir + '/slide-28.js');
  console.log('\nslide-28.js: OK');
} catch(e) {
  console.log('\nslide-28.js error:', e.message);
}