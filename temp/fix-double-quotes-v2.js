const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Fix ""Chinese text"" -> "「Chinese text」"
  content = content.replace(/"+"([^"]+)"+"/g, (m, inner) => {
    // Collapse multiple quotes to proper format
    return '"' + inner + '"';
  });
  
  // Fix "text"term"text" -> "text「term」text"
  content = content.replace(/"([^"]*)"([一-龥])/g, (m, p1, ch) => `"${p1}「${ch}`);
  content = content.replace(/([一-龥])"([^"]*)"([,)]|$)/g, (m, ch1, inner, suffix) => `${ch1}「${inner}」${suffix || ''}`);

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${file}`);
  }
});

console.log('Done');
