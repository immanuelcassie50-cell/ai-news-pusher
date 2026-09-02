const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

let fixed = 0;

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  const lines = content.split('\n');
  const fixedLines = lines.map(line => {
    // For each line, find addText and similar calls and fix inner quotes
    // Pattern: inside a string, Chinese terms are quoted like "term"
    // We need to replace "term" with 「term」 when term contains Chinese or is a specific pattern
    
    // Simple approach: look for patterns like "word" inside addText calls
    // Replace Chinese terms that appear between Chinese quotes
    
    // Match: inside a string arg, replace "ChineseTerm" with 「ChineseTerm」
    // A Chinese quoted term has: quote, Chinese chars, quote (all inline)
    
    // Find all occurrences of "..." where ... contains Chinese characters
    // But this would also match JS string delimiters
    
    // Better: Find addText( and similar, then within that line's string args, fix quotes
    
    // Very targeted: replace patterns where we see ,"word" or ("word" or :"word"
    // These are likely Chinese quoted terms inside a string
    
    // Most targeted: find patterns like ,"term" where term has no spaces and contains Chinese
    return line;
  });
  
  content = fixedLines.join('\n');
  
  // More targeted fix: replace Chinese quoted terms in strings
  // Pattern: "text"term"text" where term is Chinese (no spaces around term)
  // This appears as: "本课程既不是"经验萃取转化"类课程
  // We want: "本课程既不是「经验萃取转化」类课程
  
  content = content.replace(/"([^"]*)"([一-龥A-Za-z0-9/·-]+)"([^"]*)"/g, (match, before, term, after) => {
    // If the term looks like a Chinese quoted phrase (short, no spaces)
    if (term.length <= 15 && term.length >= 2) {
      return `"${before}「${term}」${after}"`;
    }
    return match;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    fixed++;
  }
});

console.log(`Fixed ${fixed} files`);
