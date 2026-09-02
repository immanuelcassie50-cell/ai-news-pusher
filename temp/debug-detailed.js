const fs = require('fs');
const slidesDir = "D:/新课开发/工作手册/岗位知识断点修复与传承/完整课程包/02-授课PPT/slides";

// Debug each problematic slide
const files = ['slide-28.js','slide-30.js','slide-31.js','slide-34.js'];

files.forEach(f => {
  const content = fs.readFileSync(slidesDir + '/' + f, 'utf8');
  const lines = content.split('\n');
  console.log('=== ' + f + ' ===');
  lines.forEach((l, i) => {
    // Show lines with backslash-quote patterns
    if (l.includes('\\"') || l.includes('addText(""') || l.includes('addText(""')) {
      console.log('Line ' + (i+1) + ': ' + JSON.stringify(l));
    }
  });
});