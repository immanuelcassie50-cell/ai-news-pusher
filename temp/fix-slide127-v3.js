const fs = require('fs');
let content = fs.readFileSync('D:/新课开发/精益/1.精益重生：AI时代现场管理者的角色升级/04_PPT/slides/slide-127.js', 'utf8');
const lines = content.split('\n');

// Fix line 34 (index 33) - replace the backtick with a quote
if (lines[33].includes('`')) {
  lines[33] = lines[33].replace(/`/, '"').replace(/",$/, '",');
  console.log('Fixed line 34');
  console.log('New line 34:', JSON.stringify(lines[33]));
}

content = lines.join('\n');
fs.writeFileSync('D:/新课开发/精益/1.精益重生：AI时代现场管理者的角色升级/04_PPT/slides/slide-127.js', content, 'utf8');
