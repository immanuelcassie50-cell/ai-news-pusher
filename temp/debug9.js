const fs = require('fs');
const slidesDir = "D:/新课开发/工作手册/岗位知识断点修复与传承/完整课程包/02-授课PPT/slides";
const content = fs.readFileSync(slidesDir + '/slide-28.js', 'utf8');
const line = content.split('\n')[119];

// Find the exact position of key characters
console.log('Line 120 hex dump of key section:');
const section = line.substring(27, 55); // from "让 to after 导航仪"
for (let i = 0; i < section.length; i++) {
  const c = section[i];
  console.log(i, JSON.stringify(c), 'U+' + section.charCodeAt(i).toString(16).toUpperCase().padStart(4, '0'));
}