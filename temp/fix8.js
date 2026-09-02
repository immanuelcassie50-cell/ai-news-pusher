const fs = require('fs');
const path = require('path');

const slidesDir = "D:/新课开发/工作手册/岗位知识断点修复与传承/完整课程包/02-授课PPT/slides";
const files = fs.readdirSync(slidesDir).filter(f => f.startsWith('slide-') && f.endsWith('.js'));

let fixedCount = 0;

for (const file of files) {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Fix: addText(""", { should be addText(""", {  - three quotes is wrong
  // Replace with proper decorative left double quote
  content = content.replace(/addText\("""\s*,\s*\{/g, 'addText("“", {');
  content = content.replace(/addText\("""\s*,\s*/g, 'addText("“",');
  content = content.replace(/addText\("""\s*\)/g, 'addText("“")');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    fixedCount++;
    console.log('Fixed:', file);
  }
}

console.log('\nTotal fixed:', fixedCount, 'files');