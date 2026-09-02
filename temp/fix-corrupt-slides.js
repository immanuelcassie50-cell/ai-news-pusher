// Script to fix corrupted slide files
// The issue: Chinese curly quotes "" inside double-quoted JS strings break parsing
// Solution: Replace "" with 「」 (corner brackets)

const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/专精特新/03核心技术人才招募与保留对抗大厂虹吸效应/03演示文稿/slides';

const corruptedSlides = [
  'slide-07.js', 'slide-08.js', 'slide-09.js', 'slide-10.js',
  'slide-11.js', 'slide-12.js', 'slide-18.js', 'slide-20.js',
  'slide-21.js', 'slide-23.js', 'slide-24.js', 'slide-25.js',
  'slide-29.js', 'slide-30.js', 'slide-31.js', 'slide-32.js',
  'slide-37.js', 'slide-39.js', 'slide-42.js', 'slide-43.js',
  'slide-45.js', 'slide-49.js', 'slide-60.js', 'slide-62.js'
];

// Read a working slide to get the template
function getWorkingSlideContent() {
  // Read slide-01.js as reference for proper formatting
  const content = fs.readFileSync(path.join(slidesDir, 'slide-01.js'), 'utf8');
  return content;
}

corruptedSlides.forEach(slideFile => {
  const filePath = path.join(slidesDir, slideFile);

  if (!fs.existsSync(filePath)) {
    console.log(`✗ ${slideFile}: File not found`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace Chinese curly quotes with corner brackets
  // " (LEFT DOUBLE QUOTATION MARK, U+201C) → 「 (U+300C)
  // " (RIGHT DOUBLE QUOTATION MARK, U+201D) → 」 (U+300D)
  let hasChineseQuotes = content.includes('"') || content.includes('"');

  if (!hasChineseQuotes) {
    console.log(`○ ${slideFile}: No Chinese curly quotes found`);
    return;
  }

  // Replace the curly quotes
  content = content.replace(/"/g, '「');
  content = content.replace(/"/g, '」');

  // Also fix any remaining escaped quotes that might be broken
  // The pattern \\" followed by Chinese text followed by \" is problematic
  // Replace \" (backslash-quote) that appears inside strings with just the quote
  // But we need to be careful not to break actual JS syntax

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ ${slideFile}: Fixed Chinese curly quotes`);
});

console.log('\nDone fixing slides. Run compile.js again to test.');