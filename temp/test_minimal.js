const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';
const content = fs.readFileSync(path, 'utf8');

// Try to eval just the problematic function
const lines = content.split('\n');
console.log('Total lines:', lines.length);

// Find any line with unusual characters
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (let j = 0; j < line.length; j++) {
    const c = line.charCodeAt(j);
    if (c > 0x3000 && c < 0x9FFF) {
      // This is a CJK character range - check if it looks OK
    }
    if (c > 127 && c < 160) {
      console.log('Line', i+1, 'pos', j, ': U+' + c.toString(16), 'might be control char');
    }
  }
}

// Also check for any sequence that looks like it could break parsing
// Check for unescaped newlines or special chars
try {
  new Function(content);
  console.log('Function parses OK');
} catch(e) {
  console.log('Parse error:', e.message);
  // Find which line
  const testLines = [];
  for (let i = 0; i < lines.length; i++) {
    testLines.push(lines[i]);
    try {
      new Function(testLines.join('\n'));
    } catch(e2) {
      console.log('Error at line', i+1, ':', lines[i].substring(0, 60));
      break;
    }
  }
}
