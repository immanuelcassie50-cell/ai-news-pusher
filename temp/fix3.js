const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/工作手册/创新路径-突破口-工作手册/完整课程包/03-授课PPT/slides';

const skipFiles = ['node_modules', 'compile.js'];

const files = fs.readdirSync(slidesDir);

files.forEach(file => {
  if (skipFiles.includes(file)) return;
  if (!file.endsWith('.js')) return;

  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace Chinese curly quotes with escaped regular quotes
  let fixed = content
    .replace(/\u201C/g, '\\"')  // " LEFT DOUBLE QUOTATION MARK
    .replace(/\u201D/g, '\\"'); // " RIGHT DOUBLE QUOTATION MARK
  
  // Also replace single Chinese quotes
  fixed = fixed.replace(/\u2018/g, "\'")  // ' LEFT SINGLE QUOTATION MARK
  fixed = fixed.replace(/\u2019/g, "\'"); // ' RIGHT SINGLE QUOTATION MARK

  if (content !== fixed) {
    fs.writeFileSync(filePath, fixed, 'utf8');
    console.log('Fixed:', file);
  }
});

console.log('Done!');
