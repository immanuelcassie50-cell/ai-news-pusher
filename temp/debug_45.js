const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';
let content = fs.readFileSync(path, 'utf8');

// Check if there are any other problematic characters
// Look for: backticks, unclosed strings, etc.

const lines = content.split('\n');
lines.forEach((line, i) => {
  // Check for backticks
  if (line.includes('`')) {
    console.log('Line ' + (i+1) + ' has backtick:', JSON.stringify(line.substring(0, 60)));
  }
  // Check for odd quote patterns
  if (line.match(/[^'"]"[^'"]"[^'"]/)) {
    console.log('Line ' + (i+1) + ' has odd quote pattern:', JSON.stringify(line.substring(0, 60)));
  }
});

// Try removing all non-ASCII chars and see if it parses
const asciiOnly = content.replace(/[^\x00-\x7F]/g, '');
try {
  new Function(asciiOnly);
  console.log('ASCII-only version parses OK');
} catch(e) {
  console.log('ASCII-only still broken:', e.message);
}

// Try finding the exact issue by checking character by character
console.log('\nSearching for issues...');
for (let i = 0; i < content.length; i++) {
  const c = content.charCodeAt(i);
  // Check for problematic control chars or unusual punctuation
  if ((c > 0x00 && c < 0x20 && c !== 0x0a && c !== 0x09) || c === 0x7F) {
    console.log('Suspicious char at pos ' + i + ': U+' + c.toString(16));
  }
}
