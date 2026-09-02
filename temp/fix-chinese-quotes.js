const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/自然科学/20.伪科学鉴别/授课PPT/slides';

const problemFiles = [42,47,83,84,85,86,88,89,90,91,92,93,94,95,96,97,99,102,103,104,105,106,107,109,110,111,113,114,115,116,117,118,119,123,128,131,135,140,142];

problemFiles.forEach(n => {
  const num = String(n).padStart(2,'0');
  const filePath = path.join(slidesDir, 'slide-' + num + '.js');
  let content = fs.readFileSync(filePath, 'utf8');

  // 策略：把中文引号替换为\\"  - 但要先处理已经转义的情况
  // 先把已有的 \" 变回 "
  content = content.replace(/\\"/g, '"');
  // 再把中文引号替换为转义的"
  content = content.replace(/\u201c/g, '\\"').replace(/\u201d/g, '\\"');

  fs.writeFileSync(filePath, content);

  // 验证
  try {
    new Function(content);
    console.log(num + ': OK');
  } catch(e) {
    console.log(num + ': STILL BROKEN - ' + e.message);
  }
});
