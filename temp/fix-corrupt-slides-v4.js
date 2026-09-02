// Script to fix corrupted slide files - v4
// The issue: Files have unescaped quotes inside strings, especially after Chinese characters
// Solution: Find patterns like Chinese+" and replace with Chinese+""

const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/专精特新/03核心技术人才招募与保留对抗大厂虹吸效应/03演示文稿/slides';

const corruptedSlides = [
  'slide-08.js', 'slide-09.js', 'slide-10.js',
  'slide-11.js', 'slide-18.js', 'slide-20.js',
  'slide-21.js', 'slide-23.js', 'slide-25.js',
  'slide-29.js', 'slide-30.js', 'slide-31.js', 'slide-32.js',
  'slide-37.js', 'slide-39.js', 'slide-42.js', 'slide-43.js',
  'slide-45.js', 'slide-49.js', 'slide-60.js', 'slide-62.js'
];

corruptedSlides.forEach(slideFile => {
  const filePath = path.join(slidesDir, slideFile);

  if (!fs.existsSync(filePath)) {
    console.log(`✗ ${slideFile}: File not found`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let fixed = false;

  // Pattern 1: Chinese character followed by unescaped " that should be \"
  // e.g.,  发光""  -> 发光\"\"
  // But we need to be smarter - if there's already a \" before, we need two \"
  // Actually the issue is: inside a string like "text\"more"" the second " is stray

  // Simple approach: find all \"([一-龥]+)"" patterns and fix
  // This is: backslash-quote, Chinese chars, quote-quote (should be backslash-quote, Chinese chars, backslash-quote)
  content = content.replace(/\\"([一-龥]+)""/g, (match, chinese) => {
    // match is like \"发光""  (but actually the \" is two chars: backslash and quote)
    // We want to keep the content but escape the trailing quote
    fixed = true;
    return '\\"' + chinese + '\\"\\"';
  });

  // Pattern 2: If we have Chinese text ending with \" and then an unescaped quote, fix it
  // e.g.,  \"发光\""  should be \"发光\\"
  // The pattern is: \"Chinese\" (unescaped) followed by "
  // We need to escape the second quote
  content = content.replace(/\\"([一-龥]+)"(?=[^\\])/g, (match, chinese) => {
    // This handles \"发光" (unescaped second quote) -> \"发光\"
    // But only if NOT already followed by backslash
    fixed = true;
    return '\\"' + chinese + '\\"';
  });

  // Pattern 3: Handle cases where we have \"Chinese\"" (the second quote is unescaped)
  // Actually let's just do a simpler pass - find any " after Chinese that's NOT preceded by \
  // and appears before the string ending quote

  // Most direct fix: Find all instances of Chinese+" or Chinese+"" and fix them
  // Chinese char followed by quote-quote should become Chinese+\"\"
  content = content.replace(/([一-龥])""/g, (match, chinese) => {
    // Chinese followed by two quotes - the first should be escaped
    fixed = true;
    return chinese + '\\"\\"';
  });

  // Also fix single quote after Chinese within a string context
  // \"Chinese" (unescaped quote after Chinese) -> \"Chinese\"
  content = content.replace(/\\"([一-龥]+)"(?=[,\s\]])"/g, (match, chinese, offset, str) => {
    // Check if the quote after Chinese is NOT already escaped
    // Only fix if not preceded by backslash
    const beforeQuote = str[offset - 1];
    if (beforeQuote !== '\\') {
      fixed = true;
      return '\\"' + chinese + '\\"';
    }
    return match;
  });

  if (fixed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ ${slideFile}: Fixed unescaped quotes`);
  } else {
    console.log(`○ ${slideFile}: No obvious unescaped quotes`);
  }
});

console.log('\nDone. Run compile.js again to test.');