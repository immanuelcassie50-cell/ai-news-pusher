const fs = require('fs');
const slidesDir = "D:/新课开发/工作手册/岗位知识断点修复与传承/完整课程包/02-授课PPT/slides";
const content = fs.readFileSync(slidesDir + '/slide-28.js', 'utf8');
const line = content.split('\n')[119]; // line 120

console.log('Line 120 characters:');
for (let i = 14; i < 60; i++) { // start from "slide.addText"
  const c = line[i];
  console.log(i, JSON.stringify(c), 'code:', c.charCodeAt(0));
}

// Check for curly quote codes
console.log('\nCurly quote codes check:');
console.log('U+201C (left double quote):', '“'.charCodeAt(0));
console.log('U+201D (right double quote):', '”'.charCodeAt(0));