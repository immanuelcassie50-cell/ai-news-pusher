const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';
const content = fs.readFileSync(path, 'utf8');

const backslash = String.fromCharCode(0x5C);
const u = 'u';

let result = '';
for (let i = 0; i < content.length; i++) {
  const c = content.charCodeAt(i);
  if (c === 0x201C) {
    result += backslash + u + '201C';
  } else if (c === 0x201D) {
    result += backslash + u + '201D';
  } else {
    result += content[i];
  }
}

fs.writeFileSync(path, result);
console.log('Written. Verifying...');

const written = fs.readFileSync(path, 'utf8');
const lines = written.split('\n');
console.log('Line 34:', JSON.stringify(lines[33]));
console.log('Line 34 has backslash:', lines[33].includes('\u005C'));

try {
  new Function(written);
  console.log('Syntax OK!');
} catch(e) {
  console.log('Still broken:', e.message);
}
