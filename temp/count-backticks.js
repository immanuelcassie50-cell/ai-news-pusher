const fs = require('fs');
const content = fs.readFileSync('D:/新课开发/精益/1.精益重生：AI时代现场管理者的角色升级/04_PPT/slides/slide-127.js', 'utf8');
let count = 0;
for (const ch of content) {
  if (ch === '`') count++;
}
console.log('Total backticks:', count);
// Find line with backtick
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('`')) {
    console.log('Line with backtick:', i+1, ':', JSON.stringify(l));
  }
});
