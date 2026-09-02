const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/';

// Slides with curly quote issues
const broken = [45, 71, 74, 75, 77, 79, 80, 83, 84, 85, 89, 90];

broken.forEach(n => {
  const f = path + 'slide-' + String(n).padStart(2, '0') + '.js';
  let content = fs.readFileSync(f, 'utf8');
  
  // Replace curly quotes with regular ASCII double quotes for string delimiters
  // U+201C (") and U+201D (") both become " for string quoting purposes
  // The issue is using curly quotes as JS string delimiters - just replace them
  content = content.replace(/\u201C/g, '"');
  content = content.replace(/\u201D/g, '"');
  
  fs.writeFileSync(f, content);
  
  // Verify
  try {
    new Function(content);
    console.log('slide-' + String(n).padStart(2,'0') + ': OK');
  } catch(e) {
    console.log('slide-' + String(n).padStart(2,'0') + ': ' + e.message.substring(0, 40));
  }
});
