const fs = require('fs');
const path = require('path');

const slidesDir = "D:/新课开发/工作手册/岗位知识断点修复与传承/完整课程包/02-授课PPT/slides";
const files = ['slide-27.js','slide-28.js','slide-30.js','slide-31.js','slide-32.js','slide-17.js','slide-34.js','slide-37.js','slide-39.js','slide-40.js','slide-43.js','slide-90.js','slide-94.js'];

files.forEach(f => {
  const filePath = path.join(slidesDir, f);
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, i) => {
    // Look for addText with empty or malformed first argument
    if (l.includes('addText') && l.match(/addText\(\s*[,{]/)) {
      console.log(f + ' Line ' + (i+1) + ': ' + JSON.stringify(l.substring(0,100)));
    }
    // Look for malformed strings with only backslash-quote
    if (l.match(/\\["]/) && !l.includes('\\\\')) {
      console.log(f + ' Line ' + (i+1) + ' (backslash): ' + JSON.stringify(l.substring(0,100)));
    }
  });
});