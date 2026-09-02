const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/';

const files = [45, 71, 89, 90];

files.forEach(n => {
  const f = path + 'slide-' + String(n).padStart(2, '0') + '.js';
  let content = fs.readFileSync(f, 'utf8');
  const original = content;
  
  // Fix: When curly quotes appear INSIDE a string (not as string delimiters),
  // they break the string parsing. We need to escape them.
  
  // Strategy: Process line by line. For each line that has addText with a string parameter,
  // find curly quotes inside the string content and replace them with unicode escapes.
  
  const lines = content.split('\n');
  const fixed = lines.map(line => {
    // Skip comment lines
    if (line.trim().startsWith('//')) return line;
    
    // For lines with addText, we need to fix inner quotes
    // Pattern: "text with "quoted" content inside"
    // This is complex, so let's use a simpler approach:
    // Replace all curly quotes with their unicode escape sequence
    
    // But we have to be careful not to break valid string delimiters
    // The issue is when we have: "text"text"more text"
    // This breaks because the inner " ends the string
    
    // Replace curly quotes used as Chinese quotation marks with escaped unicode
    // U+201C = "  U+201D = "
    // In JavaScript string content, these should work fine IF they stay as content
    // The problem is when they're adjacent to regular quotes
    
    let result = line;
    
    // Replace curly open quote (when it appears after a regular quote, starting an inner quote)
    result = result.replace(/"(\u201C)/g, '\u201C');
    // Replace curly close quote (when it appears before a regular quote, ending an inner quote)
    result = result.replace(/(\u201D)"/g, '\u201D');
    
    return result;
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
    console.log('  Still broken:', e.message.substring(0, 60));
  }
});
