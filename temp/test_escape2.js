// Test with actual string construction
const backslash = String.fromCharCode(0x5C);  // literal backslash
const u = 'u';
const hex = '201C';
const escaped = backslash + u + hex;
console.log('Escaped string length:', escaped.length);
console.log('Escaped chars:', escaped.split('').map(c => c.charCodeAt(0).toString(16)));

// Now test that it works when written to file
const fs = require('fs');
fs.writeFileSync('D:/CC/temp/test_escape_output.txt', escaped);
const readBack = fs.readFileSync('D:/CC/temp/test_escape_output.txt', 'utf8');
console.log('Read back length:', readBack.length);
console.log('Read back chars:', readBack.split('').map(c => c.charCodeAt(0).toString(16)));
