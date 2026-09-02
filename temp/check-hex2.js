const fs = require('fs');
// Read as buffer (raw bytes)
const content = fs.readFileSync('D:/新课开发/制造/10-经验萃取与技术传承应对断层危机/05-授课PPT/slides/slide-01.js');

// Print bytes 60-100 to see the require line
console.log('Bytes 60-100:');
for (let i = 60; i < 100; i++) {
  process.stdout.write(content[i].toString(16).padStart(2, '0') + ' ');
  if ((i+1) % 16 === 0) console.log();
}

// Also check what the actual line looks like
const lines = content.toString('utf8').split('\n');
console.log('\nLine 2:', JSON.stringify(lines[1]));
console.log('Line 2 bytes:', Buffer.from(lines[1], 'utf8').toString('hex'));
