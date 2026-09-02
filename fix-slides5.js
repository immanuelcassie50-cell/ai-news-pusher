const fs = require('fs');
const slidesDir = 'D:/新课开发/工作手册/专家隐性技能显性化/完整课程包/03-PPT演示课件/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.startsWith('slide-') && f.endsWith('.js'));

files.forEach(file => {
  const filePath = slidesDir + '/' + file;
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix lines where "" (two straight quotes) are wrapping Chinese text
  // Replace ""text"" with 「text」
  // This regex finds patterns like: ""Chinese text""
  const lines = content.split('\n');
  let modified = false;

  const newLines = lines.map(line => {
    // Match: addText(""some chinese text"", ...) or similar patterns
    // The key is finding "" followed by Chinese characters
    if (/"[一-鿿]/.test(line) && /"[一-鿿]/.test(line)) {
      // Replace the first "" with 「 and last "" with 」
      let replaced = false;
      let newLine = line.replace(/""/g, () => {
        if (!replaced) {
          replaced = true;
          return '「';
        } else {
          return '」';
        }
      });
      if (replaced) {
        modified = true;
        return newLine;
      }
    }
    return line;
  });

  if (modified) {
    fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
  }
});

console.log('Fixed', files.length, 'files');
