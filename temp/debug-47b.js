const fs = require('fs');
const slidesDir = "D:/新课开发/工作手册/岗位知识断点修复与传承/完整课程包/02-授课PPT/slides";
const files = ['slide-47.js','slide-51.js','slide-57.js','slide-94.js'];

files.forEach(f => {
  const filePath = slidesDir + '/' + f;
  const content = fs.readFileSync(filePath, 'utf8');
  console.log('=== ' + f + ' ===');
  console.log('Total lines:', content.split('\n').length);

  // Try to find any non-ASCII characters that might be problematic
  const lines = content.split('\n');
  lines.forEach((l, i) => {
    // Look for lines with unusual quote patterns
    if (l.match(/['"`].*['"`]/) && l.includes('addText')) {
      console.log('Line ' + (i+1) + ' (quote): ' + JSON.stringify(l.substring(0,80)));
    }
  });

  // Try to parse
  try {
    require(filePath);
    console.log(f + ': OK');
  } catch(e) {
    console.log(f + ': ERROR - ' + e.message);
  }
  console.log('');
});