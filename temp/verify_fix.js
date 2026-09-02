const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';

// Read the current file state
const content = fs.readFileSync(path, 'utf8');

// Check if it still has the raw curly quotes
console.log('File has U+201C char:', content.includes('\u201C'));
console.log('File has backslash-u201C:', content.includes('\u201C'));

// Read line 34 directly from file
const lines = content.split('\n');
const line34 = lines[33];
console.log('Line 34 from file:', JSON.stringify(line34));
console.log('Line 34 has U+201C:', line34.includes('\u201C'));
console.log('Line 34 has backslash-u201C:', line34.includes('\u201C'));
