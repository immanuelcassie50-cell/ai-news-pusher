const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Step 1: Replace all 「 and 」 with "
  content = content.replace(/「/g, '"');
  content = content.replace(/」/g, '"');
  
  // Step 2: Fix Chinese quoted terms - patterns like "term" inside strings
  // These appear as nested quotes like "text"word"text" or just "word" as arg
  // Replace patterns where we have quote-chinese-quote within a larger context
  
  // Pattern: (word) after ( or , - replace inner "word" with 「word」
  // But this breaks the JS string delimiter...
  
  // Actually the issue is: we want 「」 for Chinese quotes, but regular " for JS
  // After step 1, we have "word" which could be Chinese or JS
  // For Chinese terms like 讲党课, 经验萃取转化, we want them to stay as 「word」
  
  // Fix: "term" where term is Chinese (has Chinese chars) should become 「term」
  content = content.replace(/"([一-龥]+)"/g, '「$1」');

  fs.writeFileSync(filePath, content);
});

console.log('Done');
