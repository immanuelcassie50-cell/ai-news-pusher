const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/工作手册/创新路径-突破口-工作手册/完整课程包/03-授课PPT/slides';

const skipFiles = ['node_modules', 'compile.js'];

function fixFile(content) {
  // The problem: Chinese curly quotes inside strings got converted to regular quotes
  // which broke the string literals. We need to find these and escape them.
  
  // Strategy: For each line, find string literals and within them, 
  // convert any remaining Chinese quotes to escaped regular quotes
  
  const result = [];
  const lines = content.split('\n');
  
  for (let line of lines) {
    // Check if this line has addText with potential Chinese quotes
    if (line.includes('addText') && (line.includes('\u201C') || line.includes('\u201D') || line.includes('\u2018') || line.includes('\u2019'))) {
      // Replace Chinese quotes that appear to be INSIDE string content
      // These are U+201C " U+201D " U+2018 ' U+2019 '
      line = line
        .replace(/\u201C/g, '\\"')  // " LEFT DOUBLE QUOTATION MARK -> \"
        .replace(/\u201D/g, '\\"')  // " RIGHT DOUBLE QUOTATION MARK -> \"
        .replace(/\u2018/g, "\'")  // ' LEFT SINGLE QUOTATION MARK -> \'
        .replace(/\u2019/g, "\'"); // ' RIGHT SINGLE QUOTATION MARK -> \'
    }
    result.push(line);
  }
  
  return result.join('\n');
}

const files = fs.readdirSync(slidesDir);
let fixedCount = 0;

files.forEach(file => {
  if (skipFiles.includes(file)) return;
  if (!file.endsWith('.js')) return;

  const filePath = path.join(slidesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const fixed = fixFile(content);

  if (content !== fixed) {
    fs.writeFileSync(filePath, fixed, 'utf8');
    console.log('Fixed:', file);
    fixedCount++;
  }
});

console.log(`Done! Fixed ${fixedCount} files`);
