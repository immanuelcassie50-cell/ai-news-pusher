const fs = require('fs');
const content = fs.readFileSync('D:/新课开发/营销/AI时代的营销/02_差异化声音重建：让内容无法被竞争对手复制/授课PPT/slides/slide-29.js', 'utf8');

// Check for any curly quote characters
const hasLeftDouble = content.includes('\u201C');
const hasRightDouble = content.includes('\u201D');
const hasLeftSingle = content.includes('\u2018');
const hasRightSingle = content.includes('\u2019');
console.log('Has LEFT double quote (U+201C):', hasLeftDouble);
console.log('Has RIGHT double quote (U+201D):', hasRightDouble);
console.log('Has LEFT single quote (U+2018):', hasLeftSingle);
console.log('Has RIGHT single quote (U+2019):', hasRightSingle);

// Show the problematic line
const lines = content.split('\n');
console.log('\nLine 146:', lines[145]);

// Count curly quotes in file
let curlyCount = 0;
for (let i = 0; i < content.length; i++) {
  const code = content.charCodeAt(i);
  if (code === 0x201C || code === 0x201D || code === 0x2018 || code === 0x2019) {
    curlyCount++;
  }
}
console.log('\nTotal curly quote chars in file:', curlyCount);
