const fs = require('fs');
const slidesDir = 'D:/新课开发/工作手册/专家隐性技能显性化/完整课程包/03-PPT演示课件/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.startsWith('slide-') && f.endsWith('.js'));

// Fix slideConfig titles: title: 「text」 -> title: "text"
files.forEach(file => {
  const filePath = slidesDir + '/' + file;
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix: title: 「 -> title: "
  content = content.replace(/title: 「/g, 'title: "');
  // Fix: title: "text」 -> title: "text"
  content = content.replace(/title: "([^"]*)」/g, 'title: "$1"');

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed config titles in', files.length, 'files');
