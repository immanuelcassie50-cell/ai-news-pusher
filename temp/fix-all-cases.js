const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

let totalFixed = 0;

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Case 1: "text"term"text" -> "text「term」text"
  content = content.replace(/"([^"]*)"([一-龥A-Za-z0-9/·()-]{1,25})"([^"]*)"/g, 
    (m, p1, term, p2) => `"${p1}「${term}」${p2}"`);
  
  // Case 2: ""term" at start of string content (after : or , or =)
  content = content.replace(/:"([^"]*)"([一-龥])/g, (m, p1, ch) => `:「${p1}${ch}`);
  content = content.replace(/, "([^"]*)"([一-龥])/g, (m, p1, ch) => `, 「${p1}${ch}`);
  
  // Case 3: text ends with "term"" -> text「term」
  content = content.replace(/([一-龥])"([^"]*)"([,\)])/g, (m, ch, term, end) => `${ch}「${term}」${end}`);
  
  // Case 4: Full line patterns like text: ""term"" 
  content = content.replace(/"+([一-龥A-Za-z0-9/·()-]{1,20})"+/g, (m, term) => {
    // If multiple quotes, collapse them properly
    if (term.length > 0) return `「${term}」`;
    return m;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    totalFixed++;
  }
});

console.log(`Fixed ${totalFixed} files`);
