const fs = require('fs');
const content = fs.readFileSync('D:/新课开发/营销/AI时代的营销/02_差异化声音重建：让内容无法被竞争对手复制/授课PPT/slides/slide-29.js', 'utf8');
const lines = content.split('\n');
const line = lines[145];
console.log('Line:', line);

// Show char codes for the quote-like characters
for (let i = 0; i < line.length; i++) {
  const ch = line[i];
  const code = line.charCodeAt(i);
  if (code === 0x22 || code === 0x300C || code === 0x300D || code === 0xFF02 || code > 0x2010) {
    console.log(`Pos ${i}: '${ch}' = U+${code.toString(16).toUpperCase().padStart(4, '0')}`);
  }
}
