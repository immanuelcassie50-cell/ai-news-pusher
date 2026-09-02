const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Strategy: Within addText/slide.addText calls, find the string content
  // and escape any unescaped quotes that appear inside
  // Pattern: slide.addText("content", options)
  
  // Replace all Chinese brackets with regular quotes first
  content = content.replace(/「/g, '"');
  content = content.replace(/」/g, '"');
  
  // Now fix: for addText content, any " inside a string needs to be escaped
  // We do this by processing line by line
  const lines = content.split('\n');
  const fixedLines = lines.map(line => {
    // Only process lines that have addText
    if (line.includes('addText') && line.includes('"')) {
      // Find the pattern: addText("...", { or addText('...', {
      // We need to escape inner quotes that would break the string
      
      // Simple heuristic: if we have more than 2 unescaped quotes on a line
      // and it's an addText call, we need to fix it
      
      // Count the quote groups - a valid JS string should have exactly 2 (opening/closing)
      // before the comma
      
      // Match: addText("SOMETHING", {
      const match = line.match(/^(.*addText\(")(.*)(",\s*\{.*)$/);
      if (match) {
        const prefix = match[1]; // addText("
        let inner = match[2];    // content
        const suffix = match[3]; // ", {
        
        // Escape any unescaped double quotes in inner content
        inner = inner.replace(/(?<!\)"/g, '\\"');
        
        return prefix + inner + suffix;
      }
    }
    return line;
  });
  
  content = fixedLines.join('\n');
  
  fs.writeFileSync(filePath, content);
});

console.log('Done - fixed quotes properly');
