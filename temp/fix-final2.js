const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

let totalFixed = 0;

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Step 1: Replace Chinese quoted terms ""term"" with 「term」
  // Pattern: "text"term"text" -> "text「term」text"
  content = content.replace(/"([^"]*)"([一-龥A-Za-z0-9/·-]{1,20})"([^"]*)"/g, (match, p1, term, p2) => {
    return '"' + p1 + '「' + term + '」' + p2 + '"';
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
