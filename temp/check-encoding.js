const fs = require('fs');
// Check slide-57.js
const content57 = fs.readFileSync('D:/新课开发/精益/1.精益重生：AI时代现场管理者的角色升级/04_PPT/slides/slide-57.js');
console.log('slide-57.js:');
console.log('  Size:', content57.length);
console.log('  Last bytes:', content57.slice(-20).toString('hex'));
// Check if file ends with 0x0A (newline)
console.log('  Ends with newline:', content57[content57.length-1] === 0x0A);
// Try to parse
try {
  new Function(content57.toString('utf8'));
  console.log('  Parseable: YES');
} catch(e) {
  console.log('  Parseable: NO -', e.message);
}
