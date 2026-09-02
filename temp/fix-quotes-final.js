const fs = require('fs');
const path = require('path');

const slidesDir = "D:/新课开发/工作手册/团队隐性角色识别与激活/完整课程包/03-授课PPT/slides";

// Unicode curly quotes
const CURLY_OPEN = '“';  // U+201C
const CURLY_CLOSE = '”'; // U+201D

// ASCII quote
const ASCII_QUOTE = '"';

function fixFile(content) {
  let result = '';
  let i = 0;
  
  while (i < content.length) {
    const char = content[i];
    const code = content.charCodeAt(i);
    
    if (code === 0x201C) {
      // Curly open quote - determine if delimiter or content
      // Find previous non-whitespace character
      let prevNonWs = i - 1;
      while (prevNonWs >= 0 && content[prevNonWs] === ' ') prevNonWs--;
      const prevChar = content[prevNonWs];
      
      // If previous meaningful char is ( or , or = or whitespace/start, likely delimiter
      if (prevChar === '(' || prevChar === '=' || prevChar === ',' || prevChar === ' ' || prevChar === '\t' || i === 0) {
        result += ASCII_QUOTE;
      } else {
        // Likely content
        result += CURLY_OPEN;
      }
      i++;
    } else if (code === 0x201D) {
      // Curly close quote - determine if delimiter or content
      const nextChar = content[i + 1];
      
      // If next meaningful char is , or ) or ; or whitespace/end, likely delimiter
      if (nextChar === ',' || nextChar === ')' || nextChar === ';' || nextChar === '\n' || nextChar === undefined) {
        result += ASCII_QUOTE;
      } else {
        result += CURLY_CLOSE;
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
