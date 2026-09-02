const fs = require('fs');
const path = require('path');

const slidesDir = "D:/新课开发/工作手册/岗位知识断点修复与传承/完整课程包/02-授课PPT/slides";
const files = fs.readdirSync(slidesDir).filter(f => f.startsWith('slide-') && f.endsWith('.js'));

let fixedCount = 0;

for (const file of files) {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Fix: pres.shapes.ELLIPSE doesn't exist, should be pres.shapes.OVAL
  content = content.replace(/pres\.shapes\.ELLIPSE/g, 'pres.shapes.OVAL');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    fixedCount++;
    console.log('Fixed:', file);
  }
}

console.log('\nTotal fixed:', fixedCount, 'files');
