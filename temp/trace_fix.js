const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';
const content = fs.readFileSync(path, 'utf8');

console.log('Original char at 825:', content[825].charCodeAt(0).toString(16));

let result = '';
let replaced = 0;
for (let i = 0; i < content.length; i++) {
  const c = content.charCodeAt(i);
  if (c === 0x201C) {
    result += '\u201C';
    replaced++;
    // If this is position 825, note it
    if (i === 825) {
      console.log('Replaced char at 825');
    }
  } else if (c === 0x201D) {
    result += '\u201D';
    replaced++;
  } else {
    result += content[i];
  }
}

console.log('Total replacements:', replaced);
console.log('Result length:', result.length);
console.log('Result char at 825:', result[825].charCodeAt(0).toString(16));
console.log('Result char at 826:', result[826].charCodeAt(0).toString(16));

// Write to verify
fs.writeFileSync(path + '.tmp', result);
const written = fs.readFileSync(path + '.tmp', 'utf8');
console.log('Written file char at 825:', written[825].charCodeAt(0).toString(16));
