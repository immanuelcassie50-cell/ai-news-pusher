const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/';

[45, 71, 89, 90].forEach(n => {
  const f = path + 'slide-' + String(n).padStart(2, '0') + '.js';
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  
  console.log('=== slide-' + n + ' ===');
  
  try {
    new Function(content);
    console.log('  OK');
  } catch(e) {
    console.log('  Error:', e.message);
    
    // Find the specific line
    for (let i = 0; i < lines.length; i++) {
      try {
        new Function(lines.slice(0, i+1).join('\n'));
      } catch(e2) {
        if (e2.message !== e.message && !e2.message.includes('expected')) {
          console.log('  Problem around line', i+1);
          console.log('  Line:', lines[i].substring(0, 80));
          break;
        }
      }
    }
  }
});
