const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace all Chinese brackets with regular quotes first
  content = content.replace(/「/g, '"');
  content = content.replace(/」/g, '"');
  
  // Now process addText lines - escape quotes within strings
  const lines = content.split('\n');
  const fixedLines = lines.map(line => {
    // Match addText("content", {
    const match = line.match(/^(.*addText\(")(.*)(",\s*\{.*)$/);
    if (match) {
      const prefix = match[1];
      let inner = match[2];
      const suffix = match[3];
      
      // Escape any double quotes that aren't already escaped
      inner = inner.replace(/([^\])"/g, '$1\\"');
      
      return prefix + inner + suffix;
    }
    return line;
  });
  
  content = fixedLines.join('\n');
  fs.writeFileSync(filePath, content);
});

console.log('Done');
