const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';
const content = fs.readFileSync(path, 'utf8');

let result = '';
for (let i = 0; i < content.length; i++) {
  const c = content.charCodeAt(i);
  if (c === 0x201C) {
    result += '\u201C';
  } else if (c === 0x201D) {
    result += '\u201D';
  } else {
    result += content[i];
  }
}

// Check byte content around position 825 (where U+201C was found)
console.log('Bytes at position 825-835 in result:');
for (let i = 825; i < 835 && i < result.length; i++) {
  console.log('  pos ' + i + ': char=' + JSON.stringify(result[i]) + ' code=U+' + result.charCodeAt(i).toString(16));
}

// Check if the backslash is actually there
const pos = result.indexOf('\u201C');
console.log('Index of backslash-u201C:', pos);
if (pos >= 0) {
  console.log('Chars at that position:', JSON.stringify(result.substring(pos, pos+8)));
}
