const fs = require('fs');
const path = require('path');

const baseDir = 'D:/新课开发/供应链/AI版/11 文化基建：供应链自动化推进中不能松手的一线信任与安全感/PPT/slides';

const files = [
  'slide-29.js', 'slide-37.js', 'slide-40.js', 'slide-41.js',
  'slide-43.js', 'slide-44.js', 'slide-46.js', 'slide-54.js',
  'slide-56.js', 'slide-77.js', 'slide-79.js', 'slide-80.js',
  'slide-99.js', 'slide-100.js', 'slide-101.js', 'slide-105.js',
  'slide-106.js', 'slide-108.js'
];

function fixLine(line) {
  if (!line.includes('"')) return line;

  // Find all quote positions
  const quotePositions = [];
  for (let i = 0; i < line.length; i++) {
    if (line[i] === '"') quotePositions.push(i);
  }

  if (quotePositions.length <= 2) return line;

  // Process the line with a proper state machine approach
  // Track whether we're inside a string and handle inner quotes
  let result = '';
  let i = 0;
  let inString = false;
  let stringOpenPos = -1;
  let innerQuoteOpen = false; // Track if we opened an inner quote

  while (i < line.length) {
    const char = line[i];

    if (char !== '"') {
      result += char;
      i++;
      continue;
    }

    // We're at a quote
    // Determine context
    let before = i > 0 ? line[i - 1] : ' ';
    let after = i < line.length - 1 ? line[i + 1] : ' ';

    // Skip spaces for context
    let bi = i - 1;
    while (bi >= 0 && line[bi] === ' ') bi--;
    before = bi >= 0 ? line[bi] : ' ';

    let ai = i + 1;
    while (ai < line.length && line[ai] === ' ') ai++;
    after = ai < line.length ? line[ai] : ' ';

    const isBeforeChinese = /[\u4e00-\u9fff]/.test(before);
    const isAfterChinese = /[\u4e00-\u9fff]/.test(after);
    const isAfterPunctuation = /[,:\[\\(]/.test(before);
    const isAfterSpace = /[\s\(]/.test(line[i-1]) && !isBeforeChinese;
    const isBeforeClose = /[,\)\]:;}]/.test(after);

    if (!inString) {
      // Not in string - this quote opens a string
      if (isBeforeChinese && !isBeforeClose) {
        // Quote follows Chinese char - this might be an inner quote opening
        // But if we're not in a string, this should open one
        // Unless the previous char is Chinese and we're starting an inner quote
        if (isBeforeChinese) {
          // Opening inner quote
          result += '「';
          inString = true;
          stringOpenPos = i;
          innerQuoteOpen = true;
        } else {
          result += '"';
          inString = true;
          stringOpenPos = i;
        }
      } else {
        result += '"';
        inString = true;
        stringOpenPos = i;
      }
    } else {
      // Currently in a string
      if (isBeforeChinese && isAfterChinese) {
        // Quote between two Chinese chars - inner quote
        result += innerQuoteOpen ? '」' : '「';
        innerQuoteOpen = !innerQuoteOpen;
      } else if (isBeforeChinese && !isBeforeClose) {
        // Quote after Chinese, not before typical close - inner quote closing
        result += '」';
        innerQuoteOpen = false;
      } else if (isAfterChinese && !isAfterPunctuation) {
        // Quote before Chinese, not after typical open - inner quote opening
        result += '「';
        innerQuoteOpen = true;
      } else if (isBeforeClose || (isAfterSpace && isBeforeClose)) {
        // Quote before comma/paren/etc - likely string closing
        result += '"';
        inString = false;
        innerQuoteOpen = false;
      } else {
        // Default - treat as string delimiter
        result += '"';
        inString = false;
        innerQuoteOpen = false;
      }
    }

    i++;
  }

  return result;
}

let fixed = 0;
let verified = 0;
let errors = [];

for (const file of files) {
  const filePath = path.join(baseDir, file);

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const fixedLines = [];

    let changed = false;
    for (const line of lines) {
      const fixedLine = fixLine(line);
      if (fixedLine !== line) changed = true;
      fixedLines.push(fixedLine);
    }

    const fixedContent = fixedLines.join('\n');

    if (changed) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      fixed++;
      console.log(`Fixed: ${file}`);
    } else {
      console.log(`No changes: ${file}`);
    }

    try {
      require(filePath);
      verified++;
      console.log(`  Verified OK: ${file}`);
    } catch (e) {
      errors.push({ file, error: e.message });
      console.log(`  Verification FAILED: ${file} - ${e.message}`);
    }

  } catch (e) {
    console.log(`Error: ${file} - ${e.message}`);
    errors.push({ file, error: e.message });
  }
}

console.log('\n--- Summary ---');
console.log(`Fixed: ${fixed} files`);
console.log(`Verified OK: ${verified} files`);
console.log(`Errors: ${errors.length} files`);
if (errors.length > 0) {
  console.log('\nFailed files:');
  errors.forEach(e => console.log(`  ${e.file}: ${e.error}`));
}
