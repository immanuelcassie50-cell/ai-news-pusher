const fs = require('fs');
const content = fs.readFileSync('D:/新课开发/工作手册/岗位知识断点修复与传承/完整课程包/02-授课PPT/slides/slide-27.js', 'utf8');
const line15 = content.split('\n')[14];
console.log('Line 15 raw:', JSON.stringify(line15));
console.log('Line 15 chars 13-20:');
for (let i = 13; i <= 20; i++) {
  console.log('  pos', i, JSON.stringify(line15[i]), 'code:', line15.charCodeAt(i));
}

// Test if the regex would match
const test1 = 'addText(\\", {';  // what I think it is
const test2 = 'addText(\\", {';  // actual content might be different
console.log('\nTest patterns:');
console.log('test1 matches /addText\\(\\"\\",\\s*\\{/:', test1.match(/addText\("\\",\s*\{/));
console.log('test1 matches /addText\\(\\,/:', test1.match(/addText\(\\,/));

// Actual regex to match
console.log('\nActual line matches /addText\\(\\,/:', line15.match(/addText\(\\,/));
console.log('Actual line matches /addText\\(\\\\"/:', line15.match(/addText\(\\"/));