// Script to fix corrupted slide files - v3
// The issue: Files have \" (backslash-quote) which is invalid JavaScript outside a string
// Solution: Replace \" with " (just the quote)

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

corruptedSlides.forEach(slideFile => {
  const filePath = path.join(slidesDir, slideFile);

  if (!fs.existsSync(filePath)) {
    console.log(`✗ ${slideFile}: File not found`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if file has backslash-quote patterns
  if (!content.includes('\\"')) {
    console.log(`○ ${slideFile}: No backslash-quote found`);
    return;
  }

  // Replace \" with " (backslash-quote -> just quote)
  content = content.replace(/\\"/g, '"');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ ${slideFile}: Fixed \\" -> "`);
});

console.log('\nDone. Run compile.js again to test.');