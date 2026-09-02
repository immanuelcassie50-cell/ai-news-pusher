const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';
const content = fs.readFileSync(path, 'utf8');

// Try to parse just to get line number
try {
  new Function(content);
} catch(e) {
  console.log('Error:', e.message);
  // Try to find which line
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    try {
      new Function(lines.slice(0, i+1).join('\n'));
    } catch(e2) {
      if (e2.message !== e.message) {
        console.log('Error introduced at line', i+1);
        console.log('Line', i+1, ':', lines[i]);
        break;
      }
    }
  }
}
