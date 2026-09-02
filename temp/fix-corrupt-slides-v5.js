// Script to fix corrupted slide files - v5
// Fix double quotes and unescaped quotes

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

  // Fix 1: "" at start of string content (Chinese opening quote corruption)
  // Pattern: (open quote)(open quote)Chinese -> (open quote)Chinese
  // But only when the first quote is a string delimiter
  content = content.replace(/"("+)([一-龥])/g, (match, extraQuotes, chinese) => {
    // If we have ""Chinese, replace with "Chinese
    if (extraQuotes.length > 0) {
      fixed = true;
      return '"' + chinese;
    }
    return match;
  });

  // Fix 2: Chinese text followed by \" and then more Chinese without closing escape
  // Pattern: Chinese\"Chinese"  -> Chinese\"Chinese\"
  content = content.replace(/([一-龥])\\"([一-龥]+)"(?!\\)/g, (match, c1, c2) => {
    // Chinese followed by \" and Chinese and unescaped quote
    // Add the missing escape
    fixed = true;
    return c1 + '\\"' + c2 + '\\"';
  });

  // Fix 3: Handle remaining unescaped quotes after Chinese
  // Pattern: Chinese" -> Chinese\"  (only when inside a string context)
  // This is tricky - let's just do a simple global pass for specific patterns

  // Fix 4: If we have \"\" (escaped quote followed by unescaped quote), fix it
  content = content.replace(/\\""/g, (match) => {
    fixed = true;
    return '\\"\\"';
  });

  if (fixed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ ${slideFile}: Applied fixes`);
  } else {
    // Check if still has issues
    try {
      require(filePath);
      console.log(`✓ ${slideFile}: Verified OK`);
    } catch(e) {
      console.log(`✗ ${slideFile}: Still broken - ${e.message}`);
    }
  }
});

console.log('\nDone.');