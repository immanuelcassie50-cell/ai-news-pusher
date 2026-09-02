const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';
const content = fs.readFileSync(path, 'utf8');

console.log('File length:', content.length);
console.log('Last 50 chars:', JSON.stringify(content.slice(-50)));
console.log('Last char code:', content.charCodeAt(content.length - 1).toString(16));

// Check for module.exports
console.log('Has module.exports:', content.includes('module.exports'));

// Check the full line count
const lines = content.split('\n');
console.log('Line count:', lines.length);
console.log('Last line:', JSON.stringify(lines[lines.length - 1]));
