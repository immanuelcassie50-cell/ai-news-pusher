const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/';

const files = [45, 71, 89, 90];

files.forEach(n => {
  const f = path + 'slide-' + String(n).padStart(2, '0') + '.js';
  let content = fs.readFileSync(f, 'utf8');
  const original = content;
  
  // Replace curly/smart double quotes used as Chinese quotation marks
  // with corner brackets 「」 which don't conflict with JS string delimiters
  // U+201C (") and U+201D (") -> U+300C (「) and U+300D (」)
  content = content.replace(/\u201C/g, '\u300C');
  content = content.replace(/\u201D/g, '\u300D');
  
  fs.writeFileSync(f, content);
  
  try {
    new Function(content);
    console.log('slide-' + n + ': OK');
  } catch(e) {
    console.log('slide-' + n + ': ' + e.message.substring(0, 60));
    // Show problematic line
    const lines = content.split('\n');
    lines.forEach((line, i) => {
      if (line.includes('\u300C') || line.includes('\u300D')) {
        console.log('  Line ' + (i+1) + ' has corner brackets');
      }
    });
  }
});
