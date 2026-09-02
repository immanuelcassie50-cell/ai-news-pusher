const fs = require('fs');
const slidesDir = "D:/新课开发/工作手册/岗位知识断点修复与传承/完整课程包/02-授课PPT/slides";

// Debug slide-47
const content47 = fs.readFileSync(slidesDir + '/slide-47.js', 'utf8');
console.log('=== slide-47.js ===');
const lines47 = content47.split('\n');
lines47.forEach((l, i) => {
  if (l.match(/addText|addShape/)) {
    console.log('Line ' + (i+1) + ': ' + JSON.stringify(l.substring(0, 80)));
  }
});

console.log('\n=== slide-94.js ===');
const content94 = fs.readFileSync(slidesDir + '/slide-94.js', 'utf8');
const lines94 = content94.split('\n');
lines94.forEach((l, i) => {
  if (l.match(/addText|addShape/) && (l.includes('"') || l.includes('\\"'))) {
    console.log('Line ' + (i+1) + ': ' + JSON.stringify(l.substring(0, 80)));
  }
});