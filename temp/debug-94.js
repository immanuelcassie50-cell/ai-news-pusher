const fs = require('fs');
const slidesDir = "D:/新课开发/工作手册/岗位知识断点修复与传承/完整课程包/02-授课PPT/slides";
const content = fs.readFileSync(slidesDir + '/slide-94.js', 'utf8');
const lines = content.split('\n');

console.log('=== slide-94.js issues ===');
lines.forEach((l, i) => {
  if (l.includes('\\"') || l.includes('addText(""') || l.includes('addText(""')) {
    console.log('Line ' + (i+1) + ': ' + JSON.stringify(l.substring(0, 100)));
  }
});

try {
  require(slidesDir + '/slide-94.js');
  console.log('slide-94.js: OK');
} catch(e) {
  console.log('slide-94.js: ' + e.message);
}