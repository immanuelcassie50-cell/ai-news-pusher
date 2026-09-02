const fs = require('fs');
const slidesDir = 'D:/新课开发/工作手册/专家隐性技能显性化/完整课程包/03-PPT演示课件/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.startsWith('slide-') && f.endsWith('.js'));

files.forEach(file => {
  const filePath = slidesDir + '/' + file;
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix pattern: \"Chinese text\"
  // This is broken - should be 「Chinese text」
  // Pattern in actual file: \\"Chinese text\\"
  content = content.replace(/\\"([一-鿿]+[^\\]*)\\",/g, '「$1」",');
  content = content.replace(/\\"([一-鿿]+[^\\]*)\\"(,)/g, '「$1」$2');

  // Fix the specific broken case: \"text\\「
  content = content.replace(/\\"([^\\]+)\\",/g, (m, inner) => {
    if (/[一-鿿]/.test(inner)) {
      return '「' + inner + '」';
    }
    return m;
  });

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed', files.length, 'files');
