const fs = require('fs');
// Read raw bytes
const content = fs.readFileSync('D:/新课开发/制造/10-经验萃取与技术传承应对断层危机/05-授课PPT/slides/slide-09.js');

// Look at line 32 in bytes
const lines = content.toString('utf8').split('\n');
console.log('Line 32:', JSON.stringify(lines[31]));
console.log('\nLine 32 bytes:');
for (let i = 0; i < lines[31].length; i++) {
  const code = lines[31].charCodeAt(i);
  if (code > 127 || code === 34) {
    process.stdout.write('[' + code + ']');
  }
  process.stdout.write(lines[31][i]);
}
console.log('\n\nSearching for quote-related issues on line 32:');
const line32 = lines[31];
let inString = false;
let stringStart = -1;
for (let i = 0; i < line32.length; i++) {
  if (line32[i] === '"' && (i === 0 || line32[i-1] !== '\\')) {
    if (!inString) {
      inString = true;
      stringStart = i;
      console.log('String starts at', i, ':', JSON.stringify(line32.slice(Math.max(0,i-5), i+20)));
    } else {
      inString = false;
      console.log('String ends at', i, ':', JSON.stringify(line32.slice(stringStart, i+1)));
      // Check if what's between these quotes contains nested quotes
      const inner = line32.slice(stringStart + 1, i);
      if (inner.includes('"')) {
        console.log('  PROBLEM: Inner content has quotes:', JSON.stringify(inner));
      }
    }
  }
}
