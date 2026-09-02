const fs = require('fs');
const content = fs.readFileSync('D:/新课开发/制造/10-经验萃取与技术传承应对断层危机/05-授课PPT/slides/slide-09.js', 'utf8');

// Look for Chinese curly quotes
const OPEN = '“';  // "
const CLOSE = '”'; // "

let found = false;
for (let i = 0; i < content.length; i++) {
  const code = content.charCodeAt(i);
  if (code === 0x201C || code === 0x201D) {
    if (!found) {
      console.log('Found Chinese curly quotes!');
      found = true;
    }
    console.log('  Pos ' + i + ': U+' + code.toString(16).toUpperCase() + ' (' + content[i] + ')');
    console.log('  Context:', JSON.stringify(content.slice(Math.max(0,i-10), i+15)));
  }
}
if (!found) {
  console.log('No Chinese curly quotes found in this file');
  // Check what quote characters ARE present
  for (let i = 0; i < content.length; i++) {
    const code = content.charCodeAt(i);
    if (code > 0x2000 && code < 0x2100) {
      console.log('Pos ' + i + ': U+' + code.toString(16) + ' (' + content[i] + ')');
    }
  }
}
