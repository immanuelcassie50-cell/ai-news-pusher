const fs = require('fs');
const slidesDir = "D:/新课开发/工作手册/岗位知识断点修复与传承/完整课程包/02-授课PPT/slides";
const files = ['slide-17.js','slide-28.js','slide-30.js','slide-31.js','slide-34.js','slide-39.js','slide-40.js'];

files.forEach(f => {
  const filePath = slidesDir + '/' + f;
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  console.log('=== ' + f + ' ===');
  lines.forEach((l, i) => {
    if (l.includes('\\"') || l.includes('addText(""")') || l.match(/addText\(\\,/) || l.match(/addText\(\\$/)) {
      console.log('Line ' + (i+1) + ': ' + JSON.stringify(l.substring(0,120)));
    }
  });
});