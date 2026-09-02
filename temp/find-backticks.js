const fs = require('fs');
const c = fs.readFileSync('D:/新课开发/精益/1.精益重生：AI时代现场管理者的角色升级/04_PPT/slides/slide-71.js', 'utf8');
const lines = c.split('\n');
// Find lines with backticks
lines.forEach((l, i) => {
  if (l.includes('`')) {
    console.log('Line', i+1, ':', JSON.stringify(l));
  }
});
