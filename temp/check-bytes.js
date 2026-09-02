const fs = require('fs');
const c = fs.readFileSync('D:/新课开发/精益/1.精益重生：AI时代现场管理者的角色升级/04_PPT/slides/slide-71.js', 'utf8');
const lines = c.split('\n');
const line82 = lines[81];
console.log('Line 82 raw bytes:');
for (let i = 0; i < 20; i++) {
  console.log(`  [${i}] char '${line82[i]}' (code ${line82.charCodeAt(i)})`);
}
// Find position of backtick
const backtickPos = line82.indexOf('`');
console.log('\nBacktick at position:', backtickPos);
console.log('Context around backtick:');
console.log(JSON.stringify(line82.substring(backtickPos - 5, backtickPos + 30)));
