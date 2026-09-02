const fs = require('fs');

// Read the actual file and try to parse just the array
const buf = fs.readFileSync('D:/新课开发/工作手册/创新路径-突破口-工作手册/完整课程包/03-授课PPT/slides/slide-16.js');
const content = buf.toString('utf8');
const lines = content.split('\n');

// Get the lines for the array
const arrayLines = [
  '  const meetingNotes = [',
  '    "\\"创意不错，但是不是太激进了？\\",',
  '    "\\"我们要不要先做个试点？\\",',
  '    "\\"这个方案如果失败了怎么办？\\",',
  '    "\\"能不能再稳妥一点？\\"',
  '  ];'
];

console.log('Trying to eval the array declaration:');
const code = arrayLines.join('\n');
console.log('Code:');
console.log(code);
console.log('\nEval result:');
try {
  eval(code);
  console.log('SUCCESS');
} catch(e) {
  console.log('FAILED:', e.message);
}

// Now try the actual file's lines
console.log('\n\nTrying actual file lines 112-117:');
const actualArrayLines = lines.slice(111, 117);
const actualCode = actualArrayLines.join('\n');
console.log('Code:');
console.log(actualCode);
console.log('\nEval result:');
try {
  eval(actualCode);
  console.log('SUCCESS');
} catch(e) {
  console.log('FAILED:', e.message);
}
