const fs = require('fs');
// Read as buffer (raw bytes)
const content = fs.readFileSync('D:/新课开发/制造/10-经验萃取与技术传承应对断层危机/05-授课PPT/slides/slide-01.js');

console.log('First 50 bytes:');
for (let i = 0; i < 50; i++) {
  process.stdout.write(content[i].toString(16).padStart(2, '0') + ' ');
  if ((i+1) % 16 === 0) console.log();
}
console.log('\n');

// Check for 5c 5c 22 pattern
let found = false;
for (let i = 0; i < content.length - 2; i++) {
  if (content[i] === 0x5c && content[i+1] === 0x5c && content[i+2] === 0x22) {
    if (!found) {
      console.log('Found \\\\q" pattern at position', i);
      found = true;
    }
  }
}
if (!found) {
  console.log('No \\\\q" pattern found');
}
