const fs = require('fs');
const buf = fs.readFileSync('D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js');

// Find the second occurrence of 'slide.addText' by byte search
const search = Buffer.from('slide.addText');
let occurrences = [];
for (let i = 0; i < buf.length - search.length; i++) {
  let match = true;
  for (let j = 0; j < search.length; j++) {
    if (buf[i+j] !== search[j]) { match = false; break; }
  }
  if (match) occurrences.push(i);
}

console.log('Found slide.addText at byte positions:', occurrences);

// The second occurrence should be line 34 (first is in line 10 or so)
if (occurrences.length >= 2) {
  const pos = occurrences[1]; // second occurrence
  console.log('Second occurrence at byte', pos);
  
  // Show 60 bytes from there
  console.log('Bytes:', buf.slice(pos, pos+60).toString('hex'));
  console.log('String:', buf.slice(pos, pos+60).toString('utf8'));
  
  // Find where this line starts (go back to find \n)
  let lineStart = pos;
  while (lineStart > 0 && buf[lineStart-1] !== 0x0a) lineStart--;
  console.log('Line starts at byte', lineStart);
  console.log('Line content:', buf.slice(lineStart, pos + 50).toString('utf8'));
}
