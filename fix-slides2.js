const fs = require('fs');
const slidesDir = 'D:/新课开发/工作手册/专家隐性技能显性化/完整课程包/03-PPT演示课件/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.startsWith('slide-') && f.endsWith('.js'));

files.forEach(file => {
  const filePath = slidesDir + '/' + file;
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix pattern: ""text"" -> 「text」
  // This happens when Chinese curly quotes were inside JS strings
  // First, handle cases where there are two consecutive straight quotes at start of string content
  content = content.replace(/"([^"]*)"/g, function(match, p1) {
    // If the inner content has Chinese characters or specific patterns, use corner brackets
    if (/[一-龥]/.test(p1)) {
      return '「' + p1 + '」';
    }
    return match;
  });

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed', files.length, 'files');
