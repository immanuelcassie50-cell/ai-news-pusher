const fs = require('fs');
const slidesDir = 'D:/新课开发/工作手册/专家隐性技能显性化/完整课程包/03-PPT演示课件/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.startsWith('slide-') && f.endsWith('.js'));

files.forEach(file => {
  const filePath = slidesDir + '/' + file;
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix any remaining 」 that should be " - when inside a JS string value
  // Pattern: : "value」 or , "value」 or ( "value」
  content = content.replace(/: "([^"]+)」/g, ': "$1"');
  content = content.replace(/, "([^"]+)」/g, ', "$1"');
  content = content.replace(/\( "([^"]+)」/g, '( "$1"');

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed', files.length, 'files');
