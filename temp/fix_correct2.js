const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';
const content = fs.readFileSync(path, 'utf8');

const backslash = String.fromCharCode(0x5C);  // literal backslash

let result = '';
for (let i = 0; i < content.length; i++) {
  const c = content.charCodeAt(i);
  if (c === 0x201C) {
    result += backslash + 'u201C';
  } else if (c === 0x201D) {
    result += backslash + 'u201D';
  } else {
    result += content[i];
  }
}

// Check
const idx = result.indexOf(backslash + 'u201C');
console.log('Index of literal backslash-u201C:', idx);

if (idx >= 0) {
  console.log('Chars at that position:');
  for (let i = idx; i < idx + 7 && i < result.length; i++) {
    console.log('  ' + i + ': U+' + result.charCodeAt(i).toString(16) + ' (' + JSON.stringify(result[i]) + ')');
  }
}

// Write
fs.writeFileSync(path, result);
console.log('Written');

// Verify by reading raw bytes
const verify = fs.readFileSync(path);
console.log('Verify bytes around position:', verify.slice(idx, idx+10).toString('hex'));
console.log('Verify string:', verify.slice(idx, idx+10).toString('utf8'));
