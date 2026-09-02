const fs = require('fs');
const slidesDir = 'D:/新课开发/工作手册/专家隐性技能显性化/完整课程包/03-PPT演示课件/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.startsWith('slide-') && f.endsWith('.js'));

files.forEach(file => {
  const filePath = slidesDir + '/' + file;
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix escaped quotes pattern: \"Chinese text\"
  // Replace with: 「Chinese text」
  content = content.replace(/\\"([一-鿿][^\\]*)\\",/g, '「$1」",');

  // Also fix: addText("...\"text\"... -> addText("...「text」...
  content = content.replace(/addText\("([^"]*)\\"([一-鿿][^"]*)\\",/g, (match, prefix, inner) => {
    return 'addText("' + prefix + '「' + inner + '」",';
  });

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed', files.length, 'files');
