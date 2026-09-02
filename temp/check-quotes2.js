const fs = require('fs');
const content = fs.readFileSync('D:/新课开发/制造/10-经验萃取与技术传承应对断层危机/05-授课PPT/slides/slide-01.js', 'utf8');

// Find all occurrences of \\"
const matches = [];
for (let i = 0; i < content.length - 2; i++) {
  if (content[i] === '\\' && content[i+1] === '\\' && content[i+2] === '"') {
    matches.push(i);
  }
}
console.log('Found', matches.length, 'instances of \\\\q" (double backslash-quote)');
console.log('First 10 positions:', matches.slice(0, 10));
if (matches.length > 0) {
  console.log('First match context:', JSON.stringify(content.slice(Math.max(0,matches[0]-5), matches[0]+10)));
}
