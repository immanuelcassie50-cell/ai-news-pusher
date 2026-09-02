const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';
const buf = fs.readFileSync(path);

// Find second slide.addText occurrence (should be line 34)
const search = Buffer.from('slide.addText');
let count = 0;
for (let i = 0; i < buf.length - search.length; i++) {
  let match = true;
  for (let j = 0; j < search.length; j++) {
    if (buf[i+j] !== search[j]) { match = false; break; }
  }
  if (match) {
    count++;
    if (count === 2) {
      console.log('Second slide.addText at byte', i);
      // Show next 60 bytes
      console.log('Bytes:', buf.slice(i, i+60).toString('hex'));
      console.log('String:', buf.slice(i, i+60).toString('utf8'));
      
      // Also check if it has backslash-u
      const slice = buf.slice(i, i+60).toString('utf8');
      console.log('Contains literal backslash:', slice.includes('\u005Cu201C'));
      break;
    }
  }
}
