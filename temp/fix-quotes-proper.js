const fs = require('fs');
const path = require('path');

const slidesDir = "D:/新课开发/工作手册/团队隐性角色识别与激活/完整课程包/03-授课PPT/slides";

// Unicode curly quotes
const CURLY_OPEN = '“';  // "
const CURLY_CLOSE = '”'; // "

// Literal “ escape sequence
const BACKSLASH = String.fromCharCode(0x5C);
const ESC_OPEN = BACKSLASH + 'u201C';
const ESC_CLOSE = BACKSLASH + 'u201D';

function fixFile(content) {
  // Find all string literals and process them
  // Strategy: find patterns like slide.addText("...") where " is actually curly quote
  
  let result = '';
  let i = 0;
  
  while (i < content.length) {
    const char = content[i];
    const code = content.charCodeAt(i);
    
    if (code === 0x201C) {
      // Curly open quote - could be string delimiter or content
      // Check if this is at a position where it could be a string delimiter
      // (followed by content and then a curly close)
      
      // Simple heuristic: if the previous meaningful char is (, =, ,, or whitespace, it's likely a delimiter
      let prevNonWs = i - 1;
      while (prevNonWs >= 0 && content[prevNonWs] === ' ') prevNonWs--;
      const prevChar = content[prevNonWs];
      
      if (prevChar === '(' || prevChar === '=' || prevChar === ',' || prevChar === ' ') {
        // Likely a string delimiter - replace with ASCII quote
        result += '"';
      } else {
        // Likely content - replace with escape
        result += ESC_OPEN;
      }
      i++;
    } else if (code === 0x201D) {
      // Curly close quote
      // Check if this is likely a string delimiter (followed by , ) or ;)
      const nextChar = content[i + 1];
      if (nextChar === ',' || nextChar === ')' || nextChar === ';' || nextChar === ' ' || nextChar === '\n') {
        result += '"';
      } else {
        result += ESC_CLOSE;
      }
      i++;
    } else {
      result += char;
      i++;
    }
  }
  
  return result;
}

let fixed = 0;

for (let i = 1; i <= 130; i++) {
  const filename = 'slide-' + String(i).padStart(2, '0') + '.js';
  const filepath = path.join(slidesDir, filename);

  try {
    let content = fs.readFileSync(filepath, 'utf8');
    let newContent = fixFile(content);

    if (content !== newContent) {
      fs.writeFileSync(filepath, newContent, 'utf8');
      fixed++;
      console.log('Fixed: ' + filename);
    }
  } catch(e) {
    console.log('Error ' + filename + ': ' + e.message);
  }
}

console.log('\nTotal fixed: ' + fixed + ' files');
