const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

let fixed = 0;

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Fix patterns like "word" where word is a Chinese term that should use 「」
  // Pattern: "ChineseText" - short Chinese terms inside double quotes
  // These appear as: "本课程既不是"经验萃取转化"类课程"
  
  // Replace "word" with 「word」 when:
  // 1. word contains Chinese characters
  // 2. word is 2-15 characters (short term)
  // 3. The quotes are INSIDE a string (preceded by Chinese char or , or ( and followed by Chinese char or , or ) or ： or 。
  
  content = content.replace(/([""])([一-龥]{2,15})([""])/g, (match, openQ, term, closeQ) => {
    // If both open and close are the same quote character, this is a Chinese quoted term
    if (openQ === closeQ) {
      return `「${term}」`;
    }
    return match;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    fixed++;
    console.log(`Fixed: ${file}`);
  }
});

console.log(`\nTotal fixed: ${fixed} files`);
