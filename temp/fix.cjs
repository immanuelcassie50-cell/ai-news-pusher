const fs = require('fs');
const path = require('path');

const dir = "D:/新课开发/工作手册/隐性风险识别与日常稽核手册(岗位级)/完整课程包/04-授课PPT/slides";
const files = fs.readdirSync(dir).filter(f => f.startsWith('slide-') && f.endsWith('.js')).sort();

let fixed = 0;
for (const file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  const original = content;
  
  // Replace curly quotes with fullwidth brackets
  content = content.replace(/“/g, '「');  // " -> "
  content = content.replace(/”/g, '」');  // " -> "
  
  if (content !== original) {
    fs.writeFileSync(path.join(dir, file), content, 'utf8');
    fixed++;
    console.log('Fixed:', file);
  }
}
console.log('Total fixed:', fixed);
