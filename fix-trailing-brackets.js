const fs = require('fs');
const slidesDir = 'D:/新课开发/工作手册/专家隐性技能显性化/完整课程包/03-PPT演示课件/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.startsWith('slide-') && f.endsWith('.js'));

files.forEach(file => {
  const filePath = slidesDir + '/' + file;
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix: "value」 -> "value" (when value is plain ASCII)
  content = content.replace(/"([a-z]+)」/gi, '"$1"');

  // Fix: "value」, -> "value",
  content = content.replace(/"([a-z]+)」,/gi, '"$1",');

  // Fix: 「Chinese text」 where Chinese text is inside a JS string that lost its outer quotes
  // Only fix if preceded by addText( or similar
  content = content.replace(/addText\((「[^」]+」),/g, 'addText("$1",');

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed', files.length, 'files');
