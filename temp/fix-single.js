const fs = require('fs');
const p = 'D:/新课开发/专精特新/03核心技术人才招募与保留对抗大厂虹吸效应/03演示文稿/slides/slide-09.js';
let c = fs.readFileSync(p, 'utf8');
// The issue: \"升值\"", should be \"升值\"
// Let's trace: "升值\"" is quote-backslash-quote-升值-backslash-quote-quote
// But we need: \"升值\"  (quote-backslash-quote-升值-backslash-quote-quote) where the last " is the closing string delimiter
// Current: "升值\"" - the , comes right after
// Should be: "升值\"" - wait, that looks the same

// Actually let me just search and replace the specific bad pattern
// The bad pattern in bytes is: 5c 22 (backslash-quote) followed by Chinese, then 5c 22 22 (backslash-quote-quote)
// The fix is to remove one backslash-quote from before the closing

// Better approach: find the exact text and replace with corrected version
const badPattern = '"系统性地让人才\\"升值\\"",';
const goodPattern = '"系统性地让人才\\"升值\\"",';

if (c.includes(badPattern)) {
  c = c.replace(badPattern, goodPattern);
  fs.writeFileSync(p, c);
  console.log('Fixed using bad/good pattern');
} else {
  // The escapes might be different. Let me try to find it another way
  // Search for "升值" followed by \",
  const lines = c.split('\n');
  let modified = false;
  lines.forEach((line, i) => {
    if (line.includes('升值') && line.includes(',')) {
      // Check if there's an issue with quotes
      const match = line.match(/"[^"]*升值[^"]*"",/);
      if (match) {
        console.log('Found issue at line', i+1, ':', JSON.stringify(match[0]));
        // Fix: replace the matched portion
        const fixed = match[0].replace(/\\"([^"]*)"",/, '\\"$1"",');
        line = line.replace(match[0], fixed);
        lines[i] = line;
        modified = true;
      }
    }
  });
  if (modified) {
    fs.writeFileSync(p, lines.join('\n'));
    console.log('Fixed using regex');
  } else {
    console.log('Could not find pattern to fix');
    console.log('Line 41:', JSON.stringify(lines[40]));
  }
}