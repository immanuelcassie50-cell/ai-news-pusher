const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

let totalFixed = 0;

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Fix Chinese quoted terms inside strings
  // Pattern: "text"term"text" where term is Chinese or short text
  // Replace with "text「term」text"
  
  // Replace all instances of "word" where word contains Chinese chars or specific phrases
  // with 「word」 when it's clearly an inner quoted term
  
  content = content.replace(/"([^"]*)"([一-龥A-Za-z0-9/·()-]{1,20})"([^"]*)"/g, 
    (m, p1, term, p2) => `"${p1}「${term}」${p2}"`);

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    totalFixed++;
  }
});

console.log(`Fixed ${totalFixed} files`);
