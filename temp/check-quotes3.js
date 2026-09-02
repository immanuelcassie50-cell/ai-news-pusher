const fs = require('fs');
// Read as buffer (raw bytes)
const content = fs.readFileSync('D:/新课开发/制造/10-经验萃取与技术传承应对断层危机/05-授课PPT/slides/slide-01.js');

// Find all occurrences of backslash-quote (0x5c 0x22)
const matches = [];
for (let i = 0; i < content.length - 1; i++) {
  if (content[i] === 0x5c && content[i+1] === 0x22) {
    matches.push(i);
  }
}
console.log('Found', matches.length, 'instances of backslash-quote (0x5c 0x22)');
console.log('First 10 positions:', matches.slice(0, 10));
if (matches.length > 0) {
  // Show context
  const pos = matches[0];
  const start = Math.max(0, pos - 10);
  const end = Math.min(content.length, pos + 15);
  const context = content.slice(start, end);
  console.log('Context around first match:');
  console.log(Buffer.from(context).toString('hex'));
  console.log('As string:', JSON.stringify(context.toString('utf8')));
}
