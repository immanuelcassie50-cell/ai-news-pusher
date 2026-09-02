const fs = require('fs');
const c = fs.readFileSync('slide-11.js', 'utf8');
const lines = c.split('\n');
const line = lines[60];
console.log('Line 61:', JSON.stringify(line));
// Find all quote-like characters
const chars = [];
for (let i = 0; i < line.length; i++) {
  const code = line.charCodeAt(i);
  if (code === 39 || code === 8216 || code === 8217 || code === 8220 || code === 8221 || code === 96) {
    chars.push({ pos: i, char: line[i], code: 'U+' + code.toString(16).toUpperCase().padStart(4, '0') });
  }
}
console.log('Quote-like chars:', chars);