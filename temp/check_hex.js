const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';
let content = fs.readFileSync(path, 'utf8');

// Find where U+201C is and check surrounding bytes
for (let i = 0; i < content.length; i++) {
  if (content.charCodeAt(i) === 0x201C) {
    console.log('Found U+201C at position', i);
    console.log('Context:', JSON.stringify(content.substring(i-5, i+10)));
    console.log('Next 10 char codes:', 
      content.substring(i, i+10).split('').map(c => 'U+' + c.charCodeAt(0).toString(16)).join(', '));
    break;
  }
}
