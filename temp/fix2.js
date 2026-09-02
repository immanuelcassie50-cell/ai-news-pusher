const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/工作手册/创新路径-突破口-工作手册/完整课程包/03-授课PPT/slides';

const skipFiles = ['node_modules', 'compile.js'];

const files = fs.readdirSync(slidesDir);

files.forEach(file => {
  if (skipFiles.includes(file)) return;
  if (!file.endsWith('.js')) return;

  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix triple backslashes that were incorrectly added
  let fixed = content
    .replace(/\\\\\\"/g, '"')   // triple backslash-quote -> quote
    .replace(/\\\\"/g, '"')     // double backslash-quote -> quote  
    .replace(/\\"/g, '"');      // single backslash-quote -> quote (for any remaining)

  // Also fix the Chinese quotation marks properly
  // Only replace Chinese quotes that are INSIDE string content
  // Strategy: Chinese quotes as standalone text should become regular quotes
  
  if (content !== fixed) {
    fs.writeFileSync(filePath, fixed, 'utf8');
    console.log('Fixed:', file);
  }
});

console.log('Done!');
