const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Step 1: Replace all Chinese brackets with regular quotes
  content = content.replace(/「/g, '"');
  content = content.replace(/」/g, '"');
  
  // Step 2: Fix Chinese quoted terms - patterns like "word" inside a string
  // where word is 1-20 chars and contains Chinese or special chars
  // These appear as nested quotes like "text"word"text"
  content = content.replace(/"([^"]*)"([一-龥A-Za-z0-9/·()-]{1,20})"([^"]*)"/g, 
    (m, p1, term, p2) => `"${p1}「${term}」${p2}"`);

  if (content !== original) {
    fs.writeFileSync(filePath, content);
  }
});

console.log('Done');
