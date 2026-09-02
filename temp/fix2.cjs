const fs = require('fs');
const path = require('path');
const regex = /""([^"]+)""/g;

const dir = "D:/新课开发/工作手册/隐性风险识别与日常稽核手册(岗位级)/完整课程包/04-授课PPT/slides";
const files = fs.readdirSync(dir).filter(f => f.startsWith('slide-') && f.endsWith('.js')).sort();

let fixed = 0;
for (const file of files) {
  const filepath = path.join(dir, file);
  let content = fs.readFileSync(filepath, 'utf8');
  const original = content;
  
  // Replace ""Chinese text"" with 「Chinese text」
  content = content.replace(regex, '「$1」');
  
  if (content !== original) {
    fs.writeFileSync(filepath, content, 'utf8');
    fixed++;
    console.log('Fixed:', file);
  }
}
console.log('Total fixed:', fixed);
