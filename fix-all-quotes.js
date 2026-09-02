const fs = require('fs');
const slidesDir = 'D:/新课开发/工作手册/专家隐性技能显性化/完整课程包/03-PPT演示课件/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.startsWith('slide-') && f.endsWith('.js'));

// Chinese curly quotes
const leftQuote = '“';  // U+201C
const rightQuote = '”'; // U+201D

files.forEach(file => {
  const filePath = slidesDir + '/' + file;
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix 1: "text" where text has Chinese - add corner brackets around inner content
  // Pattern: "Chinese text" (where Chinese text doesn't have outer quotes)
  // Fix: addText("text, -> addText("「text」",

  // Fix 2: "text" (already valid) - no change needed

  // Fix 3: "text (missing closing quote) - this happens when Chinese quotes break
  // We need to find patterns where we have " followed by Chinese, and Chinese followed by "

  // Strategy: Find all addText arguments and fix broken ones
  content = content.replace(/addText\("([^"]*?)",/g, (match, inner) => {
    // If inner has unclosed corner bracket patterns, fix them
    if (inner.includes('「') && !inner.includes('」')) {
      return 'addText("「' + inner.replace('「', '') + '」",';
    }
    // If inner has Chinese text with weird quote patterns
    if (/[一-鿿]/.test(inner) && !inner.startsWith('「')) {
      // Check if this looks like it needs corner brackets
      return 'addText("「' + inner + '」",';
    }
    return match;
  });

  // Fix standalone corner brackets that lost their outer quotes
  // Pattern: addText(「something」, -> addText("「something」",
  content = content.replace(/addText\((「[^」]+」),/g, 'addText("$1",');

  // Fix remaining broken patterns like "text\« or text\"
  content = content.replace(/"([一-鿿][^"]*?)"/g, (match, inner) => {
    if (!inner.includes('「') && !inner.includes('」') && /[一-鿿]/.test(inner)) {
      return '"「' + inner + '」"';
    }
    return match;
  });

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed', files.length, 'files');
