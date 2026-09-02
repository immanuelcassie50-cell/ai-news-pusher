const fs = require('fs');
const slidesDir = 'D:/新课开发/工作手册/专家隐性技能显性化/完整课程包/03-PPT演示课件/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.startsWith('slide-') && f.endsWith('.js'));

files.forEach(file => {
  const filePath = slidesDir + '/' + file;
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix items array issues: [text", -> ["text",
  // Pattern: [word", becomes ["word",
  content = content.replace(/\[([一-鿿][^\]]*)",/g, '["$1",');

  // Fix: items: [中文", 「中文」, 「中文」]
  // First item often has trailing " instead of 」
  content = content.replace(/items: \[([一-鿿][^\]]*)",\s*「/g, 'items: ["$1", 「');

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed', files.length, 'files');
