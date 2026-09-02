const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/工作手册/创新路径-突破口-工作手册/完整课程包/03-授课PPT/slides';

const skipFiles = ['node_modules', 'compile.js'];

// Chinese curly quote Unicode codepoints
const CHINESE_OPEN_QUOTE = '\u201C';  // "
const CHINESE_CLOSE_QUOTE = '\u201D'; // "

function fixFile(content) {
  // Find all Chinese curly quotes and escape them properly
  // This regex finds Chinese quotes inside string literals and replaces them
  
  // Simple approach: replace Chinese quotes with escaped regular quotes
  let fixed = content
    .replace(/\u201C/g, '\\"')
    .replace(/\u201D/g, '\\"')
    .replace(/\u2018/g, "\'")
    .replace(/\u2019/g, "\'");
  
  return fixed;
}

const files = fs.readdirSync(slidesDir);

files.forEach(file => {
  if (skipFiles.includes(file)) return;
  if (!file.endsWith('.js')) return;

  const filePath = path.join(slidesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if file contains Chinese quotes
  if (content.includes('\u201C') || content.includes('\u201D')) {
    const fixed = fixFile(content);
    fs.writeFileSync(filePath, fixed, 'utf8');
    console.log('Fixed:', file);
  }
});

console.log('Done!');
