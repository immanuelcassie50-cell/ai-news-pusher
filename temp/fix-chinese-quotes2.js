// fix-chinese-quotes2.js - Fix Chinese curly quotes in slide files
const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/制造/10-经验萃取与技术传承应对断层危机/05-授课PPT/slides';

// Chinese curly quotes
const OPEN_CHINESE = '“';  // "
const CLOSE_CHINESE = '”'; // "

let totalFiles = 0;
let fixedFiles = 0;
let failedFiles = [];

const files = fs.readdirSync(slidesDir).filter(f => f.startsWith('slide-') && f.endsWith('.js'));

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  totalFiles++;

  if (!content.includes(OPEN_CHINESE) && !content.includes(CLOSE_CHINESE)) {
    return; // Skip files without Chinese quotes
  }

  // Process character by character to find problematic strings
  const chars = content.split('');
  const result = [];
  let i = 0;

  while (i < chars.length) {
    const char = chars[i];

    // Check if we're at a double-quoted string that contains Chinese quotes
    if (char === '"') {
      // Find the end of this string
      let j = i + 1;
      let hasChineseQuote = false;
      let depth = 1;

      while (j < chars.length && depth > 0) {
        const c = chars[j];
        if (c === '\\"') {
          j += 2; // Skip escaped quote
          continue;
        }
        if (c === '"') {
          depth = 0;
          break;
        }
        if (c === OPEN_CHINESE || c === CLOSE_CHINESE) {
          hasChineseQuote = true;
        }
        j++;
      }

      const stringContent = chars.slice(i, j + 1).join('');

      if (hasChineseQuote) {
        // Convert to backtick string
        let inner = stringContent.slice(1, -1); // remove outer quotes
        inner = inner.replace(/`/g, '\\`'); // escape backticks
        result.push('`' + inner + '`');
        i = j + 1;
        fixedFiles++;
      } else {
        result.push(stringContent);
        i = j + 1;
      }
    } else {
      result.push(char);
      i++;
    }
  }

  const newContent = result.join('');

  if (newContent !== original) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Fixed: ${file}`);
  }
});

console.log(`\nTotal files: ${totalFiles}`);
console.log(`Fixed files: ${fixedFiles}`);
