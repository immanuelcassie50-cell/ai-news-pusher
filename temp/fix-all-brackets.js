const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

let fixed = 0;

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Replace all 「 (U+300C LEFT CORNER BRACKET) with " (U+0022 QUOTATION MARK)
  // Replace all 」 (U+300D RIGHT CORNER BRACKET) with " (U+0022 QUOTATION MARK)
  content = content.replace(/「/g, '"');
  content = content.replace(/」/g, '"');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    fixed++;
  }
});

console.log(`Fixed ${fixed} files`);
