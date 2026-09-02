const fs = require('fs');
const slidesDir = 'D:/新课开发/工作手册/专家隐性技能显性化/完整课程包/03-PPT演示课件/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.startsWith('slide-') && f.endsWith('.js'));

files.forEach(file => {
  const filePath = slidesDir + '/' + file;
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix decorative quote issue: addText(""", { -> addText('"', {
  // This happens when a standalone quote mark is used as decorative element
  content = content.replace(/addText\(""",/g, "addText('\"',");

  // Fix any remaining issues with empty strings followed by comma
  content = content.replace(/addText\("",\s*{/g, "addText('\"', {");

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed', files.length, 'files');
