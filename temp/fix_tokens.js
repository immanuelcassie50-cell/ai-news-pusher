const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/';

const stillBroken = [45,71,74,75,77,79,80,83,84,85,89,90];

stillBroken.forEach(n => {
  const f = path.join(slidesDir, 'slide-' + String(n).padStart(2, '0') + '.js');
  let content = fs.readFileSync(f, 'utf8');
  const original = content;
  
  // The issue: files contain actual curly quote characters that break JS parsing
  // We need to find them and replace with unicode escape strings
  // These are: " (U+201C), " (U+201D), ' (U+2018), ' (U+2019)
  
  // Replace using char codes directly
  content = content.split('\u201C').join('\u201C');
  content = content.split('\u201D').join('\u201D');
  content = content.split('\u2018').join('\u2018');
  content = content.split('\u2019').join('\u2019');
  
  if (content !== original) {
    fs.writeFileSync(f, content);
    console.log('Fixed slide-' + String(n).padStart(2,'0'));
  }
  
  try {
    new Function(content);
    console.log('  Syntax OK');
  } catch(e) {
    console.log('  Still broken: ' + e.message.substring(0, 60));
    // Show the problematic area
    const lines = content.split('\n');
    lines.forEach((line, i) => {
      // Check for non-ASCII characters that might be problematic
      for (let j = 0; j < line.length; j++) {
        const c = line.charCodeAt(j);
        if (c > 0x2019 && c < 0x3000) {
          console.log('  Line ' + (i+1) + ' pos ' + j + ': U+' + c.toString(16));
        }
      }
    });
  }
});
