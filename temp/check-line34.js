const fs = require('fs');
const content = fs.readFileSync('D:/新课开发/精益/1.精益重生：AI时代现场管理者的角色升级/04_PPT/slides/slide-127.js', 'utf8');
const lines = content.split('\n');
const line34 = lines[33];
console.log('Line 34 bytes:');
for (let i = 0; i < line34.length; i++) {
  const code = line34.charCodeAt(i);
  if (code < 32 || code > 126) {
    console.log(`  [${i}] U+${code.toString(16).toUpperCase().padStart(4,'0')} '${line34[i]}'`);
  }
}
console.log('\nFirst 20 chars:', JSON.stringify(line34.substring(0, 20)));
