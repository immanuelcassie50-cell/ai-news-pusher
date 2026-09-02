const fs = require('fs');
let content = fs.readFileSync('D:/新课开发/精益/1.精益重生：AI时代现场管理者的角色升级/04_PPT/slides/slide-127.js', 'utf8');

// Fix line 34 - replace the unbalanced template literal
content = content.replace(
  /`AI已经开始承担精益最核心的\\"发现问题\\"动作",/,
  "\"AI已经开始承担精益最核心的\\\"发现问题\\\"动作\","
);

fs.writeFileSync('D:/新课开发/精益/1.精益重生：AI时代现场管理者的角色升级/04_PPT/slides/slide-127.js', content, 'utf8');
console.log('Fixed');
