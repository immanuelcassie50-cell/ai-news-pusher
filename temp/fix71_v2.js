const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-71.js';
let content = fs.readFileSync(path, 'utf8');

// The issue is that the file contains literal curly quotes that break JS parsing
// We need to replace them with unicode escapes

// Check what's on line 26
const lines = content.split('\n');
console.log('Line 26 bytes:', Buffer.from(lines[25]).toString('hex'));
console.log('Line 26:', lines[25]);

// Find all non-ASCII characters
for (let i = 0; i < lines[25].length; i++) {
  const c = lines[25].charCodeAt(i);
  if (c > 127) {
    console.log('  pos ' + i + ': U+' + c.toString(16) + ' (' + lines[25][i] + ')');
  }
}
