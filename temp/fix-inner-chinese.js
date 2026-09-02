const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Fix Chinese quoted terms inside strings
  // Pattern: "text"ChineseTerm"text" or "ChineseTerm" 
  // Replace "ChineseTerm" with 「ChineseTerm」 when inside a string arg
  
  // Simple approach: find all "word" where word contains Chinese and replace with 「word」
  content = content.replace(/"([一-龥A-Za-z0-9/·()-]{1,30})"/g, (m, term) => {
    // If term contains Chinese chars, it's a Chinese quoted term
    if (/[一-龥]/.test(term)) {
      return '「' + term + '」';
    }
    return m;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content);
  }
});

console.log('Done');
