const fs = require('fs');
let content = fs.readFileSync('D:/新课开发/精益/1.精益重生：AI时代现场管理者的角色升级/04_PPT/slides/slide-127.js', 'utf8');
const lines = content.split('\n');

// Fix lines 34 and 35
lines[33] = '    "AI已经开始承担精益最核心的\\"发现问题\\\"动作",';
lines[34] = '    "现场管理者的价值从\\\"发现问题\\\"升级为\\\"判断问题\\\"",';

content = lines.join('\n');
fs.writeFileSync('D:/新课开发/精益/1.精益重生：AI时代现场管理者的角色升级/04_PPT/slides/slide-127.js', content, 'utf8');
console.log('Fixed lines 34 and 35');
