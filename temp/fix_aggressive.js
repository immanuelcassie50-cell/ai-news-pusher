const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/';

const files = [45, 71, 89, 90];

files.forEach(n => {
  const f = path + 'slide-' + String(n).padStart(2, '0') + '.js';
  let content = fs.readFileSync(f, 'utf8');
  
  // Replace ALL curly quotes with unicode escape sequences
  // The escape sequence \u201C is 6 characters: \ u 2 0 1 C
  // We need to construct this as ASCII characters
  
  const backslash = '\';  // This is a single backslash character
  
  let result = '';
  for (let i = 0; i < content.length; i++) {
    const c = content.charCodeAt(i);
    if (c === 0x201C) {
      result += backslash + 'u201C';
    } else if (c === 0x201D) {
      result += backslash + 'u201D';
    } else {
      result += content[i];
    }
  }
  
  fs.writeFileSync(f, result);
  
  // Verify
  try {
    new Function(result);
    console.log('slide-' + n + ': OK');
  } catch(e) {
    console.log('slide-' + n + ': ' + e.message.substring(0, 60));
    // Show context
    const lines = result.split('\n');
    lines.forEach((line, i) => {
      if (line.includes('刷脸') || line.includes('不会的') || line.includes('机器哪有真人靠谱')) {
        console.log('  Line ' + (i+1) + ':', line.substring(0, 70));
      }
    });
  }
});
