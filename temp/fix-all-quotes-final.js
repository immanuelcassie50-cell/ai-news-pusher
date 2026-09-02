const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Replace ALL 「 and 」 with " since they're being used incorrectly as JS string delimiters
  content = content.replace(/「/g, '"');
  content = content.replace(/」/g, '"');
  
  // Now fix Chinese quoted terms: "Chinese text" -> should keep as regular string
  // The Chinese terms like 讲党课, 业务干部 etc are just Chinese text, not quoted terms
  // So "Chinese text" is correct if it was meant as a regular string
  
  // For strings like "「讲党课」" we should convert to just "讲党课" since the 「」 were the original Chinese quotes
  // Actually in the original, 「讲党课」 was meant to be Chinese quoted text
  // After our replace, "「讲党课」" becomes ""讲党课"" which is wrong
  
  // Fix: ""Chinese text"" -> "Chinese text" (collapse double quotes)
  // Or more precisely: if we see ""term"" replace with "term"
  content = content.replace(/"+"([^"]+)"+"/g, '"$1"');
  
  // Also fix patterns where Chinese text got wrapped in extra quotes
  // "term" where term is Chinese should become just the Chinese term
  // But we need to be careful not to break valid strings
  
  // Simplest approach: replace any remaining consecutive quotes
  content = content.replace(/"+"/g, '"');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
  }
});

console.log('Done');
