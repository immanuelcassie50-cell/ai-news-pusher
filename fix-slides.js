const fs = require('fs');
const files = fs.readdirSync('D:/新课开发/工作手册/专家隐性技能显性化/完整课程包/03-PPT演示课件/slides')
  .filter(f => f.startsWith('slide-') && f.endsWith('.js'));

// Chinese curly quotes
const leftQuote = '“';  // "
const rightQuote = '”'; // "

files.forEach(file => {
  const filePath = 'D:/新课开发/工作手册/专家隐性技能显性化/完整课程包/03-PPT演示课件/slides/' + file;
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace Chinese curly quotes used as speech marks with CJK corner brackets
  // These won't break JavaScript strings
  content = content.split(leftQuote).join('「');   // 「
  content = content.split(rightQuote).join('」');  // 」

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed', files.length, 'files');
