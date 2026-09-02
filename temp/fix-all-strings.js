const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

let totalFixed = 0;

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Find all lines with addText or similar calls and fix Chinese quotes inside strings
  // Pattern: "text"word"text" where word is Chinese - fix to "text「word」text"
  
  // Replace Chinese terms that appear as "term" inside strings
  // These are terms enclosed in " that contain Chinese characters or specific phrases
  const lines = content.split('\n');
  const fixedLines = lines.map(line => {
    // Skip comment lines
    if (line.trim().startsWith('//')) return line;
    
    // For lines with addText or similar, fix the Chinese quoted terms
    // Pattern: "anything"term"anything" where term has no spaces and is 1-20 chars
    // We need to find these within string arguments and replace "term" with 「term」
    
    // Simple heuristic: if we see pattern like "text"word"text" where word is short
    // Replace it with proper Chinese quotes
    
    return line.replace(/"([^"]*)"([一-龥A-Za-z0-9/·()-]{1,25})"([^"]*)"/g, (match, p1, term, p2) => {
      // Make sure this is actually a Chinese quoted term, not a regular string
      // If term is surrounded by the same quote char, it's a Chinese quoted term
      return '"' + p1 + '「' + term + '」' + p2 + '"';
    });
  });
  
  content = fixedLines.join('\n');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    totalFixed++;
  }
});

console.log(`Fixed ${totalFixed} files`);
