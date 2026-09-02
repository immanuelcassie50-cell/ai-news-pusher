const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/自然科学/20.伪科学鉴别/授课PPT/slides';
const files = [42,47,83,84,85,86,88,89,90,91,92,93,94,95,96,97,99,102,103,104,105,106,107,109,110,111,113,114,115,116,117,118,119,123,128,131,135,140,142];

files.forEach(n => {
  const num = String(n).padStart(2,'0');
  const filePath = path.join(slidesDir, 'slide-' + num + '.js');
  let content = fs.readFileSync(filePath, 'utf8');

  // 替换中文引号为转义的英文引号
  content = content.replace(/\u201c/g, '\\"').replace(/\u201d/g, '\\"');
  content = content.replace(/\u2018/g, "\\'").replace(/\u2019/g, "\\'");

  fs.writeFileSync(filePath, content);
  console.log('Fixed: slide-' + num + '.js');
});

console.log('Done!');
