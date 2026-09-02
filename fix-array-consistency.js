const fs = require('fs');
const slidesDir = 'D:/新课开发/工作手册/专家隐性技能显性化/完整课程包/03-PPT演示课件/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.startsWith('slide-') && f.endsWith('.js'));

files.forEach(file => {
  const filePath = slidesDir + '/' + file;
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix array items - make all consistent with 「」
  // Pattern: items: ["text", 「text」, 「text」] -> items: ["「text」", "「text」", "「text」"]
  // or better: items: [「text」, 「text」, 「text」]

  // First fix: normalize first item if it has "
  content = content.replace(/items: \["([^"]+)"/g, (m, inner) => {
    return 'items: ["「' + inner + '」"';
  });

  // Second fix: replace remaining "text" patterns in arrays with 「text」
  content = content.replace(/"([一-鿿][^"]*)",/g, (m, inner) => {
    return '"「' + inner + '」",';
  });

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed', files.length, 'files');
