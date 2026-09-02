const fs = require('fs');
const path = require('path');

const slidesDir = "D:/新课开发/工作手册/岗位知识断点修复与传承/完整课程包/02-授课PPT/slides";
const filePath = path.join(slidesDir, 'slide-28.js');
let content = fs.readFileSync(filePath, 'utf8');

console.log('Original line 120:');
console.log(JSON.stringify(content.split('\n')[119]));

// The pattern: "content" — more-content", {
// Where the bare text " — more-content" should be merged into the string
// And there's a stray " before the comma

// Fix: "first" — second", {  → "first — second", {
content = content.replace(/"([^\n]+?)"\s*—\s*([^\n]+?)",\s*\{/g, '"$1 — $2", {');

console.log('\nFixed line 120:');
console.log(JSON.stringify(content.split('\n')[119]));

fs.writeFileSync(filePath, content);
console.log('\nFixed slide-28.js');