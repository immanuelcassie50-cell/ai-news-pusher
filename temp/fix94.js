const fs = require('fs');
const path = require('path');

const slidesDir = "D:/新课开发/工作手册/岗位知识断点修复与传承/完整课程包/02-授课PPT/slides";
const filePath = path.join(slidesDir, 'slide-94.js');
let content = fs.readFileSync(filePath, 'utf8');

console.log('Before:');
console.log(JSON.stringify(content.split('\n')[50]));

// Fix the malformed bracket pattern
// Current: 从「追责文化「到「改进文化」——建设而非追究」
// Should be: 从「追责文化」到「改进文化」——建设而非追究
content = content.replace(/从「追责文化「到「改进文化」——建设而非追究」/g, '从「追责文化」到「改进文化」——建设而非追究');

console.log('\nAfter:');
console.log(JSON.stringify(content.split('\n')[50]));

fs.writeFileSync(filePath, content);
console.log('\nFixed slide-94.js');