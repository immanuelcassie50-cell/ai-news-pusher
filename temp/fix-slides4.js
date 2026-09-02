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
  // Check if line has any quotes at all
  if (!line.includes('"')) return line;

  // Find all occurrences of " and track which are string delimiters vs inner quotes
  // A string delimiter is:
  // - The first " after a ( or : or = or similar (opening delimiter)
  // - The last " before a , or ) or similar (closing delimiter)

  // Count total quotes
  const quotePositions = [];
  for (let i = 0; i < line.length; i++) {
    if (line[i] === '"') quotePositions.push(i);
  }

  if (quotePositions.length <= 2) return line; // No inner quotes possible

  // For lines with more than 2 quotes, we need to identify inner quotes
  // Strategy: for each pair of quotes, determine if they're delimiters or content

  // Simple heuristic: quotes that are adjacent to Chinese characters are likely inner quotes
  // because proper string delimiters usually have space or punctuation before/after

  let result = '';
  let i = 0;
  let innerQuoteCount = 0;

  while (i < line.length) {
    if (line[i] !== '"') {
      result += line[i];
      i++;
      continue;
    }

    // We're at a quote
    const quotePos = i;

    // Find context: what comes before and after this quote
    let before = '';
    let after = '';
    let bi = quotePos - 1;
    while (bi >= 0 && line[bi] === ' ') bi--;
    if (bi >= 0) before = line[bi];

    let ai = quotePos + 1;
    while (ai < line.length && line[ai] === ' ') ai++;
    if (ai < line.length) after = line[ai];

    // Check if this quote is between two Chinese characters
    // If so, it's definitely an inner quote
    const isBeforeChinese = /[\u4e00-\u9fff]/.test(before);
    const isAfterChinese = /[\u4e00-\u9fff]/.test(after);

    if (isBeforeChinese && isAfterChinese) {
      // Quote between Chinese chars - inner quote
      result += innerQuoteCount % 2 === 0 ? '「' : '」';
      innerQuoteCount++;
      i++;
      continue;
    }

    // Also check if quote is right after a Chinese char and before a non-quote
    if (isBeforeChinese && after !== '"' && after !== ',' && after !== ')' && after !== ';' && after !== '{' && after !== '}') {
      // Quote after Chinese, not followed by typical closing chars
      result += '」';
      innerQuoteCount++;
      i++;
      continue;
    }

    // Check if quote is followed by Chinese char (opening inner quote)
    if (isAfterChinese && before !== '(' && before !== ':' && before !== '=' && before !== ' ' && before !== '"') {
      // Quote before Chinese, not preceded by typical opening chars
      result += '「';
      innerQuoteCount++;
      i++;
      continue;
    }

    // Otherwise, treat as regular quote (delimiter or actual content)
    result += line[i];
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

    // Verify by requiring the module
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
