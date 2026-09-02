const fs = require('fs');
const slidesDir = 'D:/新课开发/工作手册/专家隐性技能显性化/完整课程包/03-PPT演示课件/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.startsWith('slide-') && f.endsWith('.js'));

// Chinese quote marks that should be used for Chinese speech
const leftQuote = '“';  // "
const rightQuote = '”'; // "

files.forEach(file => {
  const filePath = slidesDir + '/' + file;
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Pattern: "" followed by Chinese text and then ""
  // This is broken because Chinese quotes were replaced with straight quotes
  // Match: ""<chinese text>""
  const regex = /"("([^"]|\n)*")"/g;
  const newContent = content.replace(regex, (match, inner) => {
    // Check if inner contains Chinese characters
    if (/[一-鿿]/.test(inner)) {
      modified = true;
      return '「' + inner + '」';
    }
    return match;
  });

  if (modified) {
    fs.writeFileSync(filePath, newContent, 'utf8');
  }
});

console.log('Fixed', files.length, 'files');
