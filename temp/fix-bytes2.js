const fs = require('fs');
const p = 'D:/新课开发/专精特新/03核心技术人才招募与保留对抗大厂虹吸效应/03演示文稿/slides/slide-09.js';

// Read as buffer
const buf = fs.readFileSync(p);

// Find line 41 (index 40) start and end
const content = buf.toString('utf8');
const lines = content.split('\n');

// Find byte positions of line 41
let byteOffset = 0;
for(let i = 0; i < 40; i++) {
  byteOffset = content.indexOf('\n', byteOffset) + 1;
}
const lineEnd = content.indexOf('\n', byteOffset);
const lineBytes = buf.slice(byteOffset, lineEnd);

console.log('Line 41 bytes:', lineBytes.toString('hex'));
console.log('Line 41 string:', lineBytes.toString('utf8'));

// Find "升值" position
const targetStr = '升值';
const targetIdx = lineBytes.indexOf(targetStr);
console.log('Target index:', targetIdx);

if(targetIdx >= 0) {
  console.log('Bytes around target:');
  for(let i = targetIdx - 3; i < targetIdx + 8; i++) {
    if(i < lineBytes.length) {
      const byte = lineBytes[i];
      console.log(i, byte, '0x'+byte.toString(16), lineBytes.toString('utf8')[i]);
    }
  }
}

// The line is:
// 20 20 20 20 20 20 20 20 22 74 61 72 67 65 74 3a 20 22 e7 b3 b0 e7 b3 84 e5 9c b0 e8 ae a9 e4 ba ba 5c 22 53 47 50 3c 5c 22 22 2c
// Let me parse this:
// 20 20... = spaces
// 22 = "
// 74 61 72 67 65 74 = target
// 3a = :
// 20 = space
// 22 = " (opening quote of string)
// e7 b3 b0... = 系统性地让人才
// 5c 22 = \" (escaped quote)
// 53 47 50 3c = 升值 (UTF-8)
// 5c 22 = \" (escaped quote)
// 22 = " (extra unescaped quote - THIS IS THE BUG)
// 2c = ,

// Fix: change byte at position targetIdx+6 from 22 to something else, or insert a backslash before it

// Actually looking at: 5c 22 53 47 50 3c 5c 22 22
// That's: \" 升 值 \" \"
// The last 22 is an extra quote that should be a closing string delimiter \" (which it already is, but it's not escaped!)

// The fix should be: change 22 (extra quote) to 5c 22 (escaped quote)
// OR: just remove one of the two consecutive quotes

// Current: ... \"升值\"\",  (ends with: backslash-quote 升值 backslash-quote quote-quote comma)
// Should be: ... \"升值\",   (ends with: backslash-quote 升值 backslash-quote quote comma)

// Wait, if the string is "系统性地让人才\"升值"， then the closing quote is already there before the comma.
// So we have: "系统性地让人才\"升值\""
// That's 5c 22 (escaped quote) before 升值, and 5c 22 (escaped quote) after 升值, then the closing 22

// But we have: 5c 22 升 值 5c 22 22 2c
// That is: \"升值\"\", - we have TWO closing quotes (one escaped, one not), then comma

// So we need to remove one 22
// The fix is to replace the sequence [5c 22 22 2c] with [5c 22 2c]

// Let's modify the buffer
const newLine = lineBytes.toString('utf8').replace('"升值"",', '"升值"",');
// Wait, the issue is subtle. Let me just check the raw replacement

const buf2 = Buffer.from(newLine, 'utf8');
console.log('New line bytes:', buf2.toString('hex'));
console.log('New line string:', buf2.toString('utf8'));