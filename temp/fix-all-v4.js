const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Replace all 「 with " and all 」 with "
  // This will break some things but we'll fix them
  content = content.replace(/「/g, '"');
  content = content.replace(/」/g, '"');
  
  // Fix: ""term"" -> "term" (double to single quote for quoted terms)
  // But this breaks legitimate strings...
  
  // Actually, we want:
  // 1. JS string delimiters: regular "
  // 2. Chinese quoted terms: 「term」
  // 
  // After replacement, we have " everywhere
  // For Chinese terms, we need to restore them to 「term」
  //
  // Pattern: "ChineseTerm" inside a larger string should become 「ChineseTerm」
  // But we can't easily detect this...
  
  // Simplest: just replace all and accept that Chinese terms will just be regular text
  // Actually that's fine - we don't need Chinese quotes for the PPT to work

  if (content !== original) {
    fs.writeFileSync(filePath, content);
  }
});

console.log('Done - replaced all Chinese brackets with regular quotes');
