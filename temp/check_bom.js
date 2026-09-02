const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';
const content = fs.readFileSync(path, 'utf8');

// Check first 20 characters
console.log('First 20 chars:');
for (let i = 0; i < Math.min(20, content.length); i++) {
  console.log('  ' + i + ': U+' + content.charCodeAt(i).toString(16).padStart(4,'0') + ' (' + JSON.stringify(content[i]) + ')');
}

// Check for BOM
console.log('First char is BOM (FEFF):', content.charCodeAt(0) === 0xFEFF);

// Check if file starts with comment
const firstLine = content.split('\n')[0];
console.log('First line:', JSON.stringify(firstLine));
