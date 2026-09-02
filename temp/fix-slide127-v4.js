const fs = require('fs');
let content = fs.readFileSync('D:/新课开发/精益/1.精益重生：AI时代现场管理者的角色升级/04_PPT/slides/slide-127.js', 'utf8');

// Replace all Chinese quotes with escaped regular quotes
content = content.replace(/\u201c/g, '\\"');
content = content.replace(/\u201d/g, '\\"');

fs.writeFileSync('D:/新课开发/精益/1.精益重生：AI时代现场管理者的角色升级/04_PPT/slides/slide-127.js', content, 'utf8');
console.log('Fixed Chinese quotes');
