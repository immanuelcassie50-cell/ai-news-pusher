const fs = require('fs');
const content = fs.readFileSync('D:/新课开发/精益/1.精益重生：AI时代现场管理者的角色升级/04_PPT/slides/slide-127.js', 'utf8');
const lines = content.split('\n');
// Print lines 32-39 exactly
for (let i = 31; i < 39; i++) {
  console.log(`Line ${i+1}:`, JSON.stringify(lines[i]));
}
