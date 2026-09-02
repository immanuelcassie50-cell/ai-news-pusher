const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/';

// Slides that need fixing
const files = [45, 71, 89, 90];

files.forEach(n => {
  const f = path + 'slide-' + String(n).padStart(2, '0') + '.js';
  let content = fs.readFileSync(f, 'utf8');
  
  // The issue: original curly quotes used as string delimiters were replaced with escapes
  // But we need REGULAR quotes as delimiters, with escapes only for content
  
  // Strategy: For lines that look like function calls with string params,
  // ensure proper quote structure by using a simple heuristic:
  // - If a line has (  followed later by  , {  it should have quotes in between
  
  const lines = content.split('\n');
  const fixed = lines.map(line => {
    // Check if this is a line that needs fixing - has unclosed string after fix
    // Pattern: slide.addText(\u201C... or similar
    if (line.match(/addText\(\u201[C|D]/)) {
      // This line has escape sequence but no proper string delimiters
      // Replace \u201C with " (regular quote) at the start of the string
      // Replace \u201D with " (regular quote) at the end of the string
      let fixedLine = line;
      // Find first occurrence of (\u201C or (\u201D and add opening quote before it
      fixedLine = fixedLine.replace(/addText\(([\]u201[C|D])/, 'addText("$1');
      // Find last occurrence of \u201D, followed by , { and add closing quote after
      fixedLine = fixedLine.replace(/([\]u201D),(\s*\{)/, '"$1,$2');
      return fixedLine;
    }
    return line;
  });
  
  content = fixed.join('\n');
  fs.writeFileSync(f, content);
  
  try {
    new Function(content);
    console.log('slide-' + n + ': OK');
  } catch(e) {
    console.log('slide-' + n + ': ' + e.message.substring(0, 60));
  }
});
