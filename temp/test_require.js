const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';

// Read as buffer first
const buf = fs.readFileSync(path);
console.log('Buffer length:', buf.length);
console.log('First 50 bytes:', buf.slice(0, 50).toString('hex'));

// Try different encodings
const utf8 = fs.readFileSync(path, 'utf8');
const ascii = fs.readFileSync(path, 'ascii');
console.log('UTF8 length:', utf8.length);
console.log('ASCII length:', ascii.length);

// Check if they're different
console.log('UTF8 first 50 chars:', utf8.substring(0, 50));
console.log('ASCII first 50 chars:', ascii.substring(0, 50));

// Check for non-ascii in first 100 chars of ascii version
for (let i = 0; i < Math.min(100, ascii.length); i++) {
  if (ascii.charCodeAt(i) > 127) {
    console.log('Non-ASCII at', i, ': U+' + ascii.charCodeAt(i).toString(16));
  }
}
