const fs = require('fs');
const path = require('path');

const baseDir = 'D:/新课开发/供应链/AI版/11 文化基建：供应链自动化推进中不能松手的一线信任与安全感/PPT/slides';

const files = [
  'slide-29.js', 'slide-37.js', 'slide-40.js', 'slide-44.js', 'slide-46.js',
  'slide-54.js', 'slide-56.js', 'slide-77.js', 'slide-79.js', 'slide-80.js',
  'slide-99.js', 'slide-100.js', 'slide-101.js', 'slide-105.js', 'slide-106.js', 'slide-108.js'
];

function hasChineseAround(line, quoteIndex) {
  // Check if there's a Chinese character immediately before or after this quote
  if (quoteIndex > 0) {
    const before = line[quoteIndex - 1];
    if (/[\u4e00-\u9fff]/.test(before)) return true;
  }
  if (quoteIndex < line.length - 1) {
    const after = line[quoteIndex + 1];
    if (/[\u4e00-\u9fff]/.test(after)) return true;
  }
  return false;
}

function fixLine(line) {
  if (!line.includes('"')) return line;

  // Find all quote positions
  const quotePositions = [];
  for (let i = 0; i < line.length; i++) {
    if (line[i] === '"') quotePositions.push(i);
  }

  if (quotePositions.length <= 2) return line;

  // Only fix quotes that have Chinese characters around them
  // Other quotes are valid string delimiters
  const quotesToFix = [];
  for (const pos of quotePositions) {
    if (hasChineseAround(line, pos)) {
      quotesToFix.push(pos);
    }
  }

  if (quotesToFix.length === 0) return line;

  // Replace quotesToFix alternating with 「 and 」
  let result = '';
  let fixIndex = 0;
  for (let i = 0; i < line.length; i++) {
    if (line[i] === '"' && quotesToFix.includes(i)) {
      result += fixIndex % 2 === 0 ? '「' : '」';
      fixIndex++;
    } else {
      result += line[i];
    }
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
