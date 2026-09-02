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

// Find the 升值 position in bytes
const升值Pos = lineBytes.indexOf('升值');
console.log('升值 at byte offset',升值Pos);

// The issue: after 升值 there's \"\"
// In bytes: 5c 22 (backslash-quote) followed by 22 (quote) which is the closing string delimiter
// But we have: 5c 22 22 - that's backslash-quote-quote (extra quote)
// We need: 5c 22 - just backslash-quote (which escapes the quote in Chinese context)

console.log('Bytes around 升值:');
for(let i =升值Pos - 2; i <升值Pos + 6; i++) {
  console.log(i, lineBytes[i], '0x'+lineBytes[i].toString(16), lineBytes.toString('utf8')[i]);
}

// Fix: change the sequence after 升值 from [5c 22 22] to [5c 22]
// That is: remove one byte (the extra quote at position升值Pos+3 if 0-indexed from升值Pos)

// Actually let's look at the exact positions
// 升值 starts at position (let's find it relative to line start)
const lineStr = lineBytes.toString('utf8');
const升值Idx = lineStr.indexOf('升值');
console.log('升值 character index in line:',升值Idx);

// The bytes are:
//升值Idx-2: 5c (backslash before opening quote)
//升值Idx-1: 22 (opening quote)
//升值Idx: 53 (升)
//升值Idx+1: 47 (值)
//升值Idx+2: 5c (backslash before closing quote)
//升值Idx+3: 22 (closing quote - but this is where the problem might be)

// Wait, the issue might be different. Let me just fix it directly:
// If we have \"升值\"", the fix is to change it to \"升值\"
// That means: if after 升值 we have \"]\" (5c 22) followed by another 22, we remove one 22

// Let me build the fix
let newLineBytes = Buffer.from(lineStr.replace('"升值"",', '"升值"",'), 'utf8');
console.log('Fixed line should be:', newLineBytes.toString('utf8'));

// Actually that didn't change anything. Let me try a different approach
// The pattern is: \"升值\"\"\" -> should be \"升值\"\"
// So backslash-quote, 升值, backslash-quote, quote-quote -> backslash-quote, 升值, backslash-quote, quote

// In regex terms (matching the string):
// Match: \\"升值\\""
// Replace with: \\"升值\\"

// Let me use string manipulation
const idx = lineStr.indexOf('升值');
if(idx >= 0) {
  // Get the substring after 升值
  const after = lineStr.substring(idx + 2); // after 升值 (2 chars)
  console.log('After 升值:', JSON.stringify(after));
  // We expect after to start with \"",
  // If it starts with \\"", then there's an extra quote
}

fs.writeFileSync(p, buf);
console.log('Done');