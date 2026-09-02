const fs = require('fs');
const filepath1 = 'D:/新课开发/心理学/19-依恋类型：认清你在关系中的行为模式/授课PPT/slides/slide-54-58.js';
const filepath2 = 'D:/新课开发/心理学/19-依恋类型：认清你在关系中的行为模式/授课PPT/slides/slide-64-67.js';

function isChineseCode(code) {
  return code >= 0x4E00 && code <= 0x9FFF;
}

function fixFile(filepath) {
  let content = fs.readFileSync(filepath, 'utf8');

  // Fix 1: Empty string corruption - two quotes followed by space instead of comma
  // Pattern: { text: "" options: -> { text: "", options:
  content = content.replace(/\{ text: "" options:/g, '{ text: "", options:');

  // Fix 2: Chinese quoted text that has unescaped inner quotes
  const result = [];
  let i = 0;

  while (i < content.length) {
    if (content[i] === '"') {
      const prevCode = i > 0 ? content[i-1].charCodeAt(0) : 0;
      const nextCode = i + 1 < content.length ? content[i+1].charCodeAt(0) : 0;

      const prevIsChinese = isChineseCode(prevCode);
      const nextIsChinese = isChineseCode(nextCode);

      if (prevIsChinese && nextIsChinese) {
        result.push('\\"');
        i++;
        continue;
      }
    }

    result.push(content[i]);
    i++;
  }

  fs.writeFileSync(filepath, result.join(''), 'utf8');
  console.log('Fixed:', filepath);
}

fixFile(filepath1);
fixFile(filepath2);
console.log('Done');