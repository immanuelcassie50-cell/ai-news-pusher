const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';
const content = fs.readFileSync(path, 'utf8');

const lines = content.split('\n');

// Binary search to find the line that causes the issue
let low = 0, high = lines.length - 1;
while (low < high) {
  const mid = Math.floor((low + high) / 2);
  const testContent = lines.slice(0, mid + 1).join('\n');
  try {
    new Function(testContent);
    low = mid + 1;
  } catch(e) {
    high = mid;
  }
}

console.log('First problematic line:', low + 1);
console.log('Content of that line:', JSON.stringify(lines[low]));
console.log('Line length:', lines[low].length);

// Check for any unusual chars in that line
for (let i = 0; i < lines[low].length; i++) {
  const c = lines[low].charCodeAt(i);
  if (c > 127 && c < 160) {
    console.log('  Control char at pos', i, ': U+' + c.toString(16));
  }
  if (c > 0x2000 && c < 0x206F) {
    console.log(' 特殊空格 at pos', i, ': U+' + c.toString(16));
  }
}
