const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Fix slide.addText(「text」, -> slide.addText("text",
  content = content.replace(/slide\.addText\("([^"]+)"\)/g, 'slide.addText("$1",');
  
  // Also fix addText with just 「text」 without proper outer quotes
  content = content.replace(/slide\.addText\(([^")]+)\)/g, (m, inner) => {
    // If inner contains Chinese brackets, fix them
    if (inner.includes('「') || inner.includes('」')) {
      const fixed = inner.replace(/「/g, '"').replace(/」/g, '"');
      return 'slide.addText(' + fixed + ')';
    }
    return m;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${file}`);
  }
});

console.log('Done');
