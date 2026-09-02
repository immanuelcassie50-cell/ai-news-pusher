const fs = require('fs');

// Read the actual file
const buf = fs.readFileSync('D:/新课开发/工作手册/创新路径-突破口-工作手册/完整课程包/03-授课PPT/slides/slide-16.js');
const content = buf.toString('utf8');
const lines = content.split('\n');
const actualLine113 = lines[112];

// Construct what I think it should be
const expectedLine113 = '    \"\\\"创意不错，但是不是太激进了？\\\",';

console.log('Actual line 113 bytes:', Buffer.from(actualLine113, 'utf8').toString('hex'));
console.log('Expected line 113 bytes:', Buffer.from(expectedLine113, 'utf8').toString('hex'));

console.log('\nActual length:', actualLine113.length);
console.log('Expected length:', expectedLine113.length);

// Compare char by char
for (let i = 0; i < Math.max(actualLine113.length, expectedLine113.length); i++) {
  const actual = actualLine113.charCodeAt(i);
  const expected = expectedLine113.charCodeAt(i);
  if (actual !== expected) {
    console.log('Diff at', i, 'actual:', actual.toString(16), expected.toString(16));
  }
}

// Check if the actual file has proper line endings (LF not CRLF)
console.log('\nFile line ending check:');
const allLines = buf.toString('utf8').split('\n');
console.log('Total lines:', allLines.length);
console.log('Line 112 ends with:', JSON.stringify(allLines[111].slice(-5)));
console.log('Line 113 ends with:', JSON.stringify(allLines[112].slice(-5)));

// Now try to eval the actual content
console.log('\nTrying to eval actual meetingNotes:');
try {
  const meetingNotesLines = lines.slice(112, 116).join('\n');
  eval(meetingNotesLines);
  console.log('SUCCESS');
} catch(e) {
  console.log('FAILED:', e.message);
}

// Try with new Function
console.log('\nTrying with new Function:');
try {
  const meetingNotesLines = lines.slice(112, 116).join('\n');
  const fn = new Function(meetingNotesLines);
  console.log('SUCCESS');
} catch(e) {
  console.log('FAILED:', e.message, 'at position', e.message.match(/\d+/)?.[0]);
}
