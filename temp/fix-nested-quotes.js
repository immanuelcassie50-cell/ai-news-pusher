const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix nested quotes that broke after our simple replacement
  // Pattern: text followed by "word" where the inner " needs to become '
  // We need to replace "text" with \"text\" when inside a JS string
  
  // Simple approach: replace all remaining Chinese brackets first
  // Then escape any remaining double quotes that are inside strings
  
  // More targeted: find all addText calls and fix the content
  // Replace "..." inner quotes with \"...\" or '...'
  
  // Actually the safest approach: replace any isolated " that appears mid-string
  // by checking if it's between two other "
  
  // Let's use a different strategy - replace " that is surrounded by word chars with \"
  // This handles cases like: "不是"经验萃取转化"类" -> "不是\"经验萃取转化\"类"
  
  // But this is complex. Let's instead replace inner Chinese quotes with escaped version
  // before we replace all brackets.
  
  // Simpler: just replace the pattern where " is followed by Chinese chars and preceded by Chinese chars
  content = content.replace(/(?<=[一-龥])"(?=[一-龥])/g, '\\"');
  
  fs.writeFileSync(filePath, content);
});

console.log('Done - fixed nested quotes');
