const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';
const buf = fs.readFileSync(path);
const content = buf.toString('utf8');
const lines = content.split('\n');

// Find byte offset where line 34 starts
let offset = 0;
for (let i = 0; i < 33; i++) {
  offset += Buffer.from(lines[i] + '\n').length;
}

console.log('Line 34 starts at byte offset:', offset);
console.log('Bytes at offset to offset+50:');
const slice = buf.slice(offset, offset + 60);
console.log('Hex:', slice.toString('hex'));
console.log('String:', slice.toString('utf8'));

// Check what's at position 16 within line 34
const line34Start = offset;
const posInLine34 = 16; // 0-indexed position within line 34
const absolutePos = line34Start + posInLine34;
console.log('Absolute position of char 16 in line 34:', absolutePos);
console.log('Byte at that position:', buf[absolutePos].toString(16));

// Show surrounding bytes
console.log('Bytes around that position:', buf.slice(absolutePos - 5, absolutePos + 10).toString('hex'));
