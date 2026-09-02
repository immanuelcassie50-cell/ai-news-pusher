const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/';

const files = [45, 71, 83, 89, 90];

files.forEach(n => {
  const f = path + 'slide-' + String(n).padStart(2, '0') + '.js';
  let content = fs.readFileSync(f, 'utf8');
  const original = content;
  
  // Replace curly quotes WITHIN string content (not as string delimiters)
  // The issue: curly quotes appear inside strings as content
  // Replace U+201C with \u201C and U+201D with \u201D within string literals
  
  // Strategy: for each line, if it has Chinese text and curly quotes,
  // replace the curly quotes with unicode escapes
  const lines = content.split('\n');
  const fixed = lines.map(line => {
    // Check if this line has curly quotes that are inside string content
    // Look for patterns like "text" where the quotes are curly
    // Replace curly quotes used as Chinese quotation marks with escaped unicode
    let fixedLine = line;
    
    // Replace curly quotes with unicode escapes (only if it looks like content, not string delimiter)
    // We need to be careful: some lines use curly quotes as string delimiters which breaks JS
    // Others use curly quotes inside strings as content which is fine but may cause display issues
    
    // For simplicity, let's just replace all curly quotes with their unicode escape form
    // This will make them appear correctly in the output
    fixedLine = fixedLine.replace(/\u201C/g, '\u005Cu201C');
    fixedLine = fixedLine.replace(/\u201D/g, '\u005Cu201D');
    
    return fixedLine;
  });
  
  content = fixed.join('\n');
  
  if (content !== original) {
    fs.writeFileSync(f, content);
    console.log('Fixed slide-' + n);
  }
  
  // Verify
  try {
    new Function(content);
    console.log('  Syntax OK');
  } catch(e) {
    console.log('  Still broken:', e.message.substring(0, 50));
  }
});
