const fs = require('fs');
const slidesDir = "D:/新课开发/工作手册/岗位知识断点修复与传承/完整课程包/02-授课PPT/slides";
const content = fs.readFileSync(slidesDir + '/slide-47.js', 'utf8');

console.log('First 500 chars hex:');
for (let i = 0; i < 500 && i < content.length; i++) {
  const c = content[i];
  if (c === '\\' || c === '"' || c === '(') {
    console.log(i, JSON.stringify(c), 'U+' + c.charCodeAt(0).toString(16).toUpperCase());
  }
}

console.log('\nLine 21 full:');
const lines = content.split('\n');
console.log(lines[20]);

// Try to compile
try {
  require(slidesDir + '/slide-47.js');
  console.log('\nslide-47.js: OK');
} catch(e) {
  console.log('\nslide-47.js: ' + e.message);
}