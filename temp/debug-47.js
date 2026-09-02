const fs = require('fs');
const slidesDir = "D:/新课开发/工作手册/岗位知识断点修复与传承/完整课程包/02-授课PPT/slides";
const files = ['slide-47.js','slide-51.js','slide-57.js','slide-94.js'];

files.forEach(f => {
  const filePath = slidesDir + '/' + f;
  const content = fs.readFileSync(filePath, 'utf8');
  try {
    require(filePath);
    console.log(f + ': OK');
  } catch(e) {
    console.log(f + ': ' + e.message);
    const lines = content.split('\n');
    lines.forEach((l, i) => {
      if (l.includes('\\"') || l.includes('addText(""') || l.includes('addText(""') || l.match(/addText\(\\,/)) {
        console.log('  Line ' + (i+1) + ': ' + JSON.stringify(l.substring(0,100)));
      }
    });
  }
});