const fs = require('fs');
const buf = fs.readFileSync('D:/新课开发/工作手册/创新路径-突破口-工作手册/完整课程包/03-授课PPT/slides/slide-16.js');
const content = buf.toString('utf8');
const lines = content.split('\n');

// Check first few bytes for BOM
console.log('First 10 bytes:', buf.slice(0, 10).toString('hex'));

// Check line 113 in detail
const line113 = lines[112];
console.log('Line 113 length:', line113.length);
console.log('Line 113 chars:');
for (let i = 0; i < line113.length; i++) {
  const code = line113.charCodeAt(i);
  if (code > 127 || code < 32) {
    console.log(i, 'special:', code.toString(16), JSON.stringify(line113[i]));
  }
}

// Try to eval the whole array assignment
console.log('\nTrying to eval meetingNotes array:');
const meetingNotesLines = lines.slice(112, 116).join('\n');
console.log('Content:', JSON.stringify(meetingNotesLines));

try {
  // This should fail if there's an issue
  const fn = new Function(meetingNotesLines);
  console.log('Function creation succeeded');
} catch(e) {
  console.log('Function creation failed:', e.message);
}

// Check for any non-visible characters
console.log('\nChecking for invisible chars in line 113:');
for (let i = 0; i < line113.length; i++) {
  const code = line113.charCodeAt(i);
  if (code < 32 && code !== 9) { // not tab
    console.log('Invisible char at position', i, ':', code, '(' + line113[i] + ')');
  }
}
