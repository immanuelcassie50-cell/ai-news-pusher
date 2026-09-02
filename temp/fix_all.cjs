const fs = require('fs');
const path = require('path');

const dir = "D:/新课开发/工作手册/隐性风险识别与日常稽核手册(岗位级)/完整课程包/04-授课PPT/slides";
const files = fs.readdirSync(dir).filter(f => f.startsWith('slide-') && f.endsWith('.js')).sort();

let totalFixed = 0;
let totalErrors = 0;

for (const file of files) {
  const filepath = path.join(dir, file);
  try {
    let content = fs.readFileSync(filepath, 'utf8');
    const original = content;
    
    // Fix pattern: regular ASCII " followed by Chinese text, followed by mixed quotes, ending with .
    // Pattern: "...something"Chinese"more"..." - the inner quotes break JS
    // Replace all instances of "text" where text contains Chinese with 「text」
    
    // More specific: find patterns like "word" where word contains Chinese characters
    // and there are unbalanced quotes
    content = content.replace(/"([^\n"]*(?:[一-龥][^\n"]*)+)"/g, (match, p1) => {
      // Check if the inner content has quote issues (starts with " or ends with ")
      if (p1.startsWith('"') || p1.endsWith('"')) {
        return match; // already fixed or not our pattern
      }
      // Replace inner quotes with fullwidth brackets
      const fixed = p1.replace(/"/g, '「').replace(/"/g, '」');
      return '"' + fixed + '"';
    });
    
    if (content !== original) {
      fs.writeFileSync(filepath, content, 'utf8');
      totalFixed++;
      console.log('Fixed:', file);
    }
  } catch (e) {
    totalErrors++;
    console.error('Error:', file, e.message);
  }
}

console.log('\nTotal fixed:', totalFixed);
console.log('Total errors:', totalErrors);
