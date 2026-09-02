const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';
const content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

console.log('Line 34:', JSON.stringify(lines[33]));
console.log('Line 34 chars:');
for (let i = 0; i < Math.min(lines[33].length, 50); i++) {
  const c = lines[33].charCodeAt(i);
  if (c > 127 || c === 92 || c === 34) {
    console.log('  ' + i + ': U+' + c.toString(16).padStart(4,'0') + ' ' + JSON.stringify(lines[33][i]));
  }
}

// Also check if line 34 is inside a string or not
// The line should be: slide.addText("...", { but we wrote: slide.addText(\u201C..., {
console.log('\nDoes line start with slide.addText ?', lines[33].trim().startsWith('slide.addText'));
console.log('Has opening quote after slide.addText ?', lines[33].includes('slide.addText("') || lines[33].includes('slide.addText(\u201C'));
