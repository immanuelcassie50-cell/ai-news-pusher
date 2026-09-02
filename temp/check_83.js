const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-83.js';
const content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

// Find lines with issues
lines.forEach((line, i) => {
  if (line.includes('addText') || line.includes('addShape')) {
    console.log('Line ' + (i+1) + ':', line.trim().substring(0, 70));
  }
});

// Try parsing and show error
try {
  new Function(content);
} catch(e) {
  console.log('\nError:', e.message);
  // Binary search to find the line
  let low = 0, high = lines.length - 1;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const testContent = lines.slice(0, mid + 1).join('\n');
    try {
      new Function(testContent);
      low = mid + 1;
    } catch(e2) {
      if (e2.message === e.message) {
        high = mid;
      } else {
        console.log('Error changes at line', mid+1, ':', e2.message);
        break;
      }
    }
  }
  if (low < lines.length) {
    console.log('Problematic line:', lines[low]);
  }
}
