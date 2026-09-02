const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/工作手册/创新路径-突破口-工作手册/完整课程包/03-授课PPT/slides';

const skipFiles = ['node_modules', 'compile.js'];

// Chinese curly quote Unicode codepoints
const CHINESE_OPEN_QUOTE = '\u201C';  // "
const CHINESE_CLOSE_QUOTE = '\u201D'; // "

function fixFile(content) {
  // Process line by line
  const lines = content.split('\n');
  let hasChanges = false;
  
  const fixedLines = lines.map(line => {
    // Only process lines with addText
    if (!line.includes('addText')) return line;
    
    // Check for Chinese quotes in this line
    if (!line.includes(CHINESE_OPEN_QUOTE) && !line.includes(CHINESE_CLOSE_QUOTE)) {
      return line;
    }
    
    // Replace Chinese curly quotes with escaped regular quotes
    let fixedLine = line
      .replace(/\u201C/g, '\\"')
      .replace(/\u201D/g, '\\"');
    
    if (fixedLine !== line) {
      hasChanges = true;
    }
    
    return fixedLine;
  });
  
  return hasChanges ? fixedLines.join('\n') : null;
}

const files = fs.readdirSync(slidesDir);
let fixedCount = 0;

files.forEach(file => {
  if (skipFiles.includes(file)) return;
  if (!file.endsWith('.js')) return;

  const filePath = path.join(slidesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if file contains Chinese quotes
  if (content.includes('\u201C') || content.includes('\u201D')) {
    const fixed = fixFile(content);
    if (fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log('Fixed:', file);
      fixedCount++;
    }
  }
});

console.log(`Done! Fixed ${fixedCount} files`);
