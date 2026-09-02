// Fix inner quotes using regex replacement
const fs = require('fs');
const path = require('path');

const dir = "D:/新课开发/工作手册/团队隐性角色识别与激活/完整课程包/03-授课PPT/slides";

// Test on slide-13 line 20
const content = fs.readFileSync(path.join(dir, 'slide-13.js'), 'utf8');
const line20 = content.split('\n')[19];
console.log('Original:', JSON.stringify(line20));

// Strategy: For Chinese quotation marks, we need to escape them
// Pattern: "text" where the " is used as Chinese quote (inside a string that should be continuous)
// The problem is the string is split: "text" then more text "text"
// So we need to find where this happens and fix it

// Let's use a targeted regex approach:
// Replace pattern: CJK + " + CJK with CJK + \" + CJK (escape the inner quote)
// Also handle patterns like: "text" followed by CJK + " (closing quote that was split)

function fixLineV2(line) {
  // Pattern 1: "团队"小病" -> "团队\"小病\""
  // Match: any quote between CJK characters
  let result = line.replace(/([一-龥])"([一-龥])/g, '$1\\"$2');

  // Pattern 2: "text" followed by CJK, then more text until unclosed quote
  // e.g., "团队"小病", -> "团队\"小病\","

  return result;
}

console.log('Fixed:', JSON.stringify(fixLineV2(line20)));

// Also check what fix-curly-quotes.js output was
console.log('\n--- Current file content ---');
console.log('Line 20:', JSON.stringify(line20));