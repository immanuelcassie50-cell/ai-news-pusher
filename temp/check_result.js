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

// Check what's in result
const idx = result.indexOf('\u201C');
console.log('Index of backslash-u in result:', idx);
if (idx >= 0) {
  console.log('Chars at that position:');
  for (let i = idx; i < idx + 8 && i < result.length; i++) {
    console.log('  ' + i + ': char=' + JSON.stringify(result[i]) + ' code=U+' + result.charCodeAt(i).toString(16));
  }
}

// Write and check
const buf = Buffer.from(result, 'utf8');
fs.writeFileSync(path + '.test', buf);
const written = fs.readFileSync(path + '.test');
const writtenIdx = written.indexOf(Buffer.from('\u201C'));
console.log('Written file index of backslash-u:', writtenIdx);
