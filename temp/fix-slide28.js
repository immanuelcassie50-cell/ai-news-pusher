const fs = require('fs');
const path = require('path');

const slidesDir = "D:/新课开发/工作手册/岗位知识断点修复与传承/完整课程包/02-授课PPT/slides";
const files = fs.readdirSync(slidesDir).filter(f => f.startsWith('slide-') && f.endsWith('.js'));

let fixedCount = 0;

for (const file of files) {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Fix pattern: addText("text" text, "text", { → addText("text — text", {
  // Where we have two quoted strings with bare text between them
  // Pattern: addText("content1" content2", { where content2 is bare text followed by a string
  content = content.replace(/addText\("([^"]+)"\s*([^"]+)",\s*"/g, 'addText("$1 $2", "');

  // Fix pattern: similar but with content: or title:
  content = content.replace(/:\s*"([^"]+)"\s*([^"]+)",\s*"/g, ': "$1 $2", "');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    fixedCount++;
    console.log('Fixed:', file);
  }
}

console.log('\nTotal fixed:', fixedCount, 'files');