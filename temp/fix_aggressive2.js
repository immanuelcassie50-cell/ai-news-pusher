const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/';

const backslash = String.fromCharCode(0x5C);

const files = [45, 71, 89, 90];

files.forEach(n => {
  const f = path + 'slide-' + String(n).padStart(2, '0') + '.js';
  let content = fs.readFileSync(f, 'utf8');
  
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
  
  try {
    new Function(result);
    console.log('slide-' + n + ': OK');
  } catch(e) {
    console.log('slide-' + n + ': ' + e.message.substring(0, 60));
  }
});
