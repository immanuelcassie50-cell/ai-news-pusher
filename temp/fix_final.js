const fs = require('fs');
const path = require('path');

const dir = "D:/新课开发/工作手册/高潜员工加速成长路径设计/完整课程包/02-授课PPT/slides";
const files = ['slide-22.js', 'slide-25.js', 'slide-26.js', 'slide-28.js', 'slide-29.js', 'slide-38.js',
               'slide-63.js', 'slide-74.js', 'slide-88.js', 'slide-91.js', 'slide-93.js', 'slide-101.js'];

files.forEach(f => {
  const fp = path.join(dir, f);
  if (!fs.existsSync(fp)) return;
  
  let content = fs.readFileSync(fp, 'utf8');
  let lines = content.split('\n');
  
  // Fix: replace single quotes used as Chinese quotes inside strings with escaped quotes
  // Pattern: 'text'quote'text' -> 'text\"quote\"text'
  lines = lines.map(line => {
    if (line.includes('addText')) {
      // Replace any ' that is used as Chinese quote within text
      // The issue is when we have 'text' inside a 'string'
      // Strategy: if line has both opening and closing quotes for addText, 
      // and contains Chinese quoted text, escape inner quotes
      const match = line.match(/addText\((['"])(.*?)\1/);
      if (match) {
        let inner = match[2];
        // Check if inner contains unescaped quotes (used as Chinese quotes)
        if (inner.includes("'") && !inner.includes("\'")) {
          // Replace ' used as Chinese quote with escaped version - but only when not already escaped
          inner = inner.replace(/'(?=[^\x00-\x7F]|$)/g, "\'");
          line = line.replace(/addText\((['"])(.*?)\1/, `addText(${match[1]}${inner}${match[1]}`);
        }
      }
    }
    return line;
  });
  
  fs.writeFileSync(fp, lines.join('\n'));
  console.log('Fixed: ' + f);
});
