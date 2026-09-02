const fs = require('fs');
const slidesDir = 'D:/新课开发/工作手册/专家隐性技能显性化/完整课程包/03-PPT演示课件/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.startsWith('slide-') && f.endsWith('.js'));

files.forEach(file => {
  const filePath = slidesDir + '/' + file;
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix: ""Chinese text"" -> "「Chinese text」"
  // The outer quotes must remain for valid JS
  content = content.replace(/"("([^"]|\n)*")"/g, (match, inner) => {
    if (/[一-鿿]/.test(inner)) {
      return '"「' + inner + '」"';
    }
    return match;
  });

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed', files.length, 'files');
