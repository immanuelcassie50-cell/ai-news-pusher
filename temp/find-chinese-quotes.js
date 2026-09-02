const fs = require('fs');
const c = fs.readFileSync('D:/新课开发/精益/1.精益重生：AI时代现场管理者的角色升级/04_PPT/slides/slide-71.js', 'utf8');
const lines = c.split('\n');
const chineseOpen = '\u201c';
const chineseClose = '\u201d';
// Find any line with Chinese quotes
lines.forEach((l, i) => {
  if (l.includes(chineseOpen) || l.includes(chineseClose)) {
    console.log('Line', i+1, ':', JSON.stringify(l.substring(0, 100)));
  }
});
// Also find unbalanced backticks
let inBacktick = false;
lines.forEach((l, i) => {
  for (const ch of l) {
    if (ch === '`') inBacktick = !inBacktick;
  }
});
console.log('Ended with inBacktick =', inBacktick);
