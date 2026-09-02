const fs = require('fs');
const slidesDir = 'D:/新课开发/工作手册/专家隐性技能显性化/完整课程包/03-PPT演示课件/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.startsWith('slide-') && f.endsWith('.js'));

files.forEach(file => {
  const filePath = slidesDir + '/' + file;
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix pattern: \"Chinese text\「 -> 「Chinese text」
  // This is broken - appears to be Chinese text with mismatched escape sequences
  content = content.replace(/\\"([一-鿿]+[^\\]*)\\"\「/g, '「$1」');

  // Fix pattern: addText("...\ <- this is incomplete
  // Pattern: "text\「 where \ is a broken escape
  content = content.replace(/([一-鿿]+)\\"\「/g, '$1」');

  // Fix any remaining \「 that should just be 」 (when preceded by Chinese text)
  content = content.replace(/([一-鿿]+)\\"\「/g, '$1」');

  // Fix pattern: \"text without proper closing - just remove the escapes
  content = content.replace(/\\"([一-鿿]+)/g, '「$1');

  // Fix remaining broken escaped quotes
  content = content.replace(/\\"([^\\]*)"/g, (match, inner) => {
    if (/[一-鿿]/.test(inner)) {
      return '「' + inner + '」';
    }
    return '"' + inner + '"';
  });

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed', files.length, 'files');
