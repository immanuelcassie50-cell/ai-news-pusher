const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';
let content = fs.readFileSync(path, 'utf8');

// Show around line 34
const lines = content.split('\n');
console.log('Line 34 BEFORE:', JSON.stringify(lines[33]));

// Check what the replacement looks like
const before = lines[33];
const after = before.split('\u201C').join('\u201C');
console.log('After replacement:', JSON.stringify(after));
console.log('Contains literal backslash-u:', after.includes('\u201C'));
console.log('Contains U+201C char:', after.includes('\u201C'));
