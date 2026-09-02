const fs = require('fs');

// Read the actual file
const buf = fs.readFileSync('D:/新课开发/工作手册/创新路径-突破口-工作手册/完整课程包/03-授课PPT/slides/slide-16.js');
const content = buf.toString('utf8');
const lines = content.split('\n');
const actualLine113 = lines[112];

console.log('Line 113 char by char:');
for (let i = 0; i < actualLine113.length; i++) {
  const code = actualLine113.charCodeAt(i);
  console.log(i, 'U+' + code.toString(16).padStart(4, '0'), JSON.stringify(actualLine113[i]));
}

// Also check the actual context around the array
console.log('\n\nContext (lines 110-120):');
for (let i = 109; i < 120 && i < lines.length; i++) {
  console.log('Line', i+1, ':', JSON.stringify(lines[i]));
}

// Maybe the issue is that we have backslash-backslash-quote in the file?
// Let me check position 5-6
console.log('\n\nPositions 4-7 specifically:');
console.log('Pos 4:', actualLine113.charCodeAt(4).toString(16), JSON.stringify(actualLine113[4]));
console.log('Pos 5:', actualLine113.charCodeAt(5).toString(16), JSON.stringify(actualLine113[5]));
console.log('Pos 6:', actualLine113.charCodeAt(6).toString(16), JSON.stringify(actualLine113[6]));

// Construct what should work and compare
const workingVersion = '    \"\\\"创意不错，但是不是太激进了？\\\",';
console.log('\n\nWorking version:');
for (let i = 0; i < workingVersion.length; i++) {
  const code = workingVersion.charCodeAt(i);
  console.log(i, 'U+' + code.toString(16).padStart(4, '0'), JSON.stringify(workingVersion[i]));
}
