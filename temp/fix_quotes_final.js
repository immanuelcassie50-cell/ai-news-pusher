const fs = require('fs');
const path = require('path');

const dir = "D:/新课开发/工作手册/高潜员工加速成长路径设计/完整课程包/02-授课PPT/slides";

const problematic = ['slide-26.js','slide-28.js','slide-29.js','slide-38.js','slide-88.js','slide-91.js','slide-93.js'];

problematic.forEach(f => {
  const fp = path.join(dir, f);
  let content = fs.readFileSync(fp, 'utf8');
  
  // Replace all instances of \' with '
  content = content.replace(/\'/g, "'");
  // Replace all instances of \" with "
  content = content.replace(/\\"/g, '"');
  
  fs.writeFileSync(fp, content);
  console.log('Fixed: ' + f);
});
