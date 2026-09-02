const fs = require('fs');
const path = require('path');

const slidesDir = "D:/新课开发/工作手册/团队隐性角色识别与激活/完整课程包/03-授课PPT/slides";

// Unicode curly quotes
const CURLY_OPEN = '“';  // "
const CURLY_CLOSE = '”'; // "

// Literal “ (backslash + u + 4 hex digits) using char codes
const BACKSLASH = String.fromCharCode(0x5C);
const ESC_OPEN = BACKSLASH + 'u201C';
const ESC_CLOSE = BACKSLASH + 'u201D';

console.log('ESC_OPEN:', ESC_OPEN, 'length:', ESC_OPEN.length);

// Test on slide-01
const filepath = path.join(slidesDir, 'slide-01.js');
let content = fs.readFileSync(filepath, 'utf8');

// Count occurrences of U+201C before
let countBefore = 0;
for (let i = 0; i < content.length; i++) {
  if (content.charCodeAt(i) === 0x201C) countBefore++;
}
console.log('U+201C count before:', countBefore);

// Replace
let newContent = content.split(CURLY_OPEN).join(ESC_OPEN);
newContent = newContent.split(CURLY_CLOSE).join(ESC_CLOSE);

// Count occurrences of U+201C after
let countAfter = 0;
for (let i = 0; i < newContent.length; i++) {
  if (newContent.charCodeAt(i) === 0x201C) countAfter++;
}
console.log('U+201C count after:', countAfter);
console.log('Same:', content === newContent);

// Write
if (content !== newContent) {
  fs.writeFileSync(filepath, newContent, 'utf8');
  console.log('Written!');
}
