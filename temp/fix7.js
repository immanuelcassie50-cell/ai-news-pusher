const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/工作手册/创新路径-突破口-工作手册/完整课程包/03-授课PPT/slides';

const skipFiles = ['node_modules', 'compile.js'];

// Fix inner quotes in strings
// Strategy: For lines containing addText, find the string boundaries and escape inner quotes

function fixInnerQuotes(line) {
  // Only process lines with addText
  if (!line.includes('addText')) return line;
  
  // Find the opening and closing quotes for the first string argument
  // Pattern: addText("..." or addText("...", {
  // We need to find the first " after addText( and the matching closing "
  
  const result = [];
  let i = 0;
  let inString = false;
  let stringStart = -1;
  
  while (i < line.length) {
    const char = line[i];
    
    if (!inString) {
      result.push(char);
      if (char === '"') {
        inString = true;
        stringStart = result.length - 1;
      }
      i++;
    } else {
      if (char === '\') {
        // Escape sequence - keep both characters
        result.push(char);
        i++;
        if (i < line.length) {
          result.push(line[i]);
          i++;
        }
      } else if (char === '"') {
        // Check if this is the end of the string or an inner quote
        // Look ahead to see what's next
        const nextChar = line[i + 1];
        if (nextChar === '"' || nextChar === ',' || nextChar === '\n' || nextChar === ')') {
          // This is the end of the string
          result.push(char);
          inString = false;
          i++;
        } else {
          // This is an inner quote - escape it
          result.push('\\"');
          i++;
        }
      } else {
        result.push(char);
        i++;
      }
    }
  }
  
  return result.join('');
}

// Test on a specific problematic file
const slide08 = path.join(slidesDir, 'slide-08.js');
let content = fs.readFileSync(slide08, 'utf8');
const lines = content.split('\n');

let fixed = false;
const newLines = lines.map(line => {
  if (line.includes('addText') && line.includes('"知道"')) {
    const fixedLine = fixInnerQuotes(line);
    if (fixedLine !== line) {
      fixed = true;
      return fixedLine;
    }
  }
  return line;
});

if (fixed) {
  fs.writeFileSync(slide08, newLines.join('\n'));
  console.log('Fixed slide-08');
} else {
  console.log('No fix needed for slide-08');
}

// Check what the problematic line looks like
const line = lines[84];
console.log('Line 85:', line);
console.log('Has inner quotes:', line.includes('"知道"') || line.includes('"做到"'));
