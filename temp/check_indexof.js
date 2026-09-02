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

// Check what's at position 825
console.log('Char at 825:', result[825], 'code:', result.charCodeAt(825).toString(16));

// Check the string that indexOf is searching for
const searchStr = '\u201C';
console.log('Search string length:', searchStr.length);
console.log('Search string chars:', searchStr.split('').map(c => c.charCodeAt(0).toString(16)));

// The indexOf might be matching something unexpected
// Let me search for the ACTUAL backslash character
const backslashIdx = result.indexOf('\u005C');  // actual backslash
console.log('Index of actual backslash (U+005C):', backslashIdx);

if (backslashIdx >= 0) {
  console.log('Chars around backslash:', JSON.stringify(result.substring(backslashIdx, backslashIdx+10)));
}
