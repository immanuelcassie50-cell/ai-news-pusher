const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Fix patterns like ""term"" where term is a Chinese question or phrase
  // Replace inner "" with 「」
  content = content.replace(/"([^"]*)"([一-龥])/g, (m, p1, ch) => {
    // If p1 ends with a quote, this is a nested quote pattern
    if (p1.endsWith('"')) {
      return '「' + p1.slice(0, -1) + ch;
    }
    return m;
  });
  
  content = content.replace(/([一-龥])"([^"]*)"([,)]|$)/g, (m, ch1, inner, suffix) => {
    // If inner starts with a quote, this is a nested quote pattern
    if (inner.startsWith('"')) {
      return ch1 + '「' + inner.slice(1) + '」' + suffix;
    }
    return m;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${file}`);
  }
});

console.log('Done');
