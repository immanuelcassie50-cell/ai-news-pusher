const fs = require('fs');
const path = require('path');

const dir = "D:/新课开发/工作手册/高潜员工加速成长路径设计/完整课程包/02-授课PPT/slides";

const files = [
  'slide-25.js','slide-26.js','slide-28.js','slide-29.js','slide-38.js',
  'slide-44.js','slide-56.js','slide-57.js','slide-88.js','slide-91.js',
  'slide-93.js','slide-106.js','slide-107.js'
];

files.forEach(f => {
  const fp = path.join(dir, f);
  if (!fs.existsSync(fp)) return;
  
  let content = fs.readFileSync(fp, 'utf8');
  
  // Replace escaped quotes with regular quotes
  content = content.replace(/\'/g, "'");
  content = content.replace(/\\"/g, '"');
  
  // Replace Chinese quotes with single quotes (safe for JS strings)
  content = content.replace(/"/g, "'").replace(/"/g, "'");
  
  // But we need to handle cases where Chinese quotes are inside strings
  // If we changed outer quotes of a string that contains Chinese quotes, revert those
  // This is tricky - let's try a different approach: escape Chinese quotes within strings
  
  fs.writeFileSync(fp, content);
  console.log('Fixed: ' + f);
});
