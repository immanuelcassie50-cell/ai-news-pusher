const fs = require('fs');

// Read the actual file
const buf = fs.readFileSync('D:/新课开发/工作手册/创新路径-突破口-工作手册/完整课程包/03-授课PPT/slides/slide-16.js');
const content = buf.toString('utf8');
const lines = content.split('\n');
const actualLine113 = lines[112];

console.log('Line 113 (JSON):', JSON.stringify(actualLine113));
console.log('Line 113 bytes:', Buffer.from(actualLine113, 'utf8').toString('hex'));

// The actual string content when parsed
const stringContent = actualLine113.trim().slice(0, -1); // Remove trailing , and spaces
console.log('\nString content (JSON):', JSON.stringify(stringContent));

// What should work
const shouldWork = '    "\\"创意不错，但是不是太激进了？\\",';
console.log('\nShould work (JSON):', JSON.stringify(shouldWork));
console.log('Should work bytes:', Buffer.from(shouldWork, 'utf8').toString('hex'));

// Are they the same?
console.log('\nAre they equal?', actualLine113 === shouldWork);

// Now try to eval a simple case with the exact same bytes
const simpleCase = 'const x = "\\"创意不错\\"";';
console.log('\nSimple case:', simpleCase);
try {
  eval(simpleCase);
  console.log('Simple case SUCCESS');
} catch(e) {
  console.log('Simple case FAILED:', e.message);
}

// Try the exact string as it appears in the file
const exactString = '"\\"创意不错，但是不是太激进了？\\""';
console.log('\nExact string for eval:', exactString);
try {
  const result = eval('const x = ' + exactString);
  console.log('Exact string SUCCESS, x =', JSON.stringify(result));
} catch(e) {
  console.log('Exact string FAILED:', e.message);
}
