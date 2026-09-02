const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/工作手册/商业讲师信任护城河/完整课程包/03-PPT/slides/';

// Read a file and find ALL mismatched quote issues
const fname = 'slide-01.js';
const content = fs.readFileSync(path.join(slidesDir, fname), 'utf8');

// Find lines with potential quote issues
const lines = content.split('
');
lines.forEach((line, i) => {
  // Check for mismatched quotes in string values
  // Pattern: a property followed by : and then quotes that dont match
  const singleOpen = (line.match(/'/g) || []).length;
  const doubleOpen = (line.match(/"/g) || []).length;
  if (singleOpen > 0 || doubleOpen > 0) {
    console.log('Line ' + (i+1) + ': ' + line.substring(0, 80));
    console.log('  single=' + singleOpen + ' double=' + doubleOpen);
  }
});
