const fs = require('fs');
const content = fs.readFileSync('D:/新课开发/精益/1.精益重生：AI时代现场管理者的角色升级/04_PPT/slides/slide-69.js', 'utf8');
const lines = content.split('\n');
const line = lines[81];
// Find position of backticks
for (let i = 0; i < line.length; i++) {
  if (line[i] === '`' || line[i] === '"' || line[i] === "'") {
    console.log(`Position ${i}: ${JSON.stringify(line[i])} (char code ${line.charCodeAt(i)})`);
  }
}
console.log('\nFull line:');
console.log(line);
