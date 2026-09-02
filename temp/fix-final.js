const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

let totalFixed = 0;

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Replace all 「 and 」 with " since they're being used as JS string delimiters
  // We need to be careful: 「 at start of string arg should become "
  // and 」 at end should become "
  
  // Simple approach: replace ALL 「 and 」 with "
  content = content.replace(/「/g, '"');
  content = content.replace(/」/g, '"');
  
  // This breaks Chinese quoted terms like "经验萃取转化"
  // We need to restore those as 「经验萃取转化」
  
  // Pattern: after replacing, we have ""term"" which is two consecutive quoted terms
  // Replace "term" (no spaces, Chinese) with 「term」
  
  // First, let's fix patterns like ,"term", or ("term", or :"term",
  content = content.replace(/"([A-Za-z0-9一-龥]{1,20})",/g, '「$1",');
  content = content.replace(,"([A-Za-z0-9一-龥]{1,20})"/g, ',"$1」');
  
  // Actually, let me try a different approach
  // Replace all " that are adjacent to Chinese chars with 「 or 」 appropriately
  
  // Reset and do it properly
  content = original;
  
  // Step 1: Find all Chinese quoted terms ""term"" and fix them first
  // These appear when we have: "text"term"text" 
  // We want: "text「term」text"
  content = content.replace(/"([^"]*)"([一-龥A-Za-z0-9/·-]+)"([^"]*)"/g, (match, p1, term, p2) => {
    return `"${p1}「${term}」${p2}"`;
  });
  
  // Step 2: Now replace all remaining 「 and 」 with "
  content = content.replace(/「/g, '"');
  content = content.replace(/」/g, '"');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    totalFixed++;
  }
});

console.log(`Fixed ${totalFixed} files`);
