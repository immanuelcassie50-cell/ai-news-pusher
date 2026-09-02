const fs = require('fs');
const path = require('path');

// Fix all slide files with broken string escaping
const slidesDir = __dirname;
const files = fs.readdirSync(slidesDir)
  .filter(f => f.startsWith('slide-') && f.endsWith('.js'));

function fixFile(filepath) {
  let content = fs.readFileSync(filepath, 'utf8');
  const original = content;

  // Strategy: For each line, find all string values and escape internal quotes
  // Match patterns like: "text with "embedded" quotes"
  // We need to escape the embedded quotes

  // Simple regex replacement: find all occurrences of
  // "text"text"text" and replace with "text\"text\"text"

  // Do multiple passes to catch nested issues
  let maxIterations = 10;
  let iteration = 0;
  let changed = true;

  while (changed && iteration < maxIterations) {
    changed = false;
    iteration++;

    const newContent = content.replace(/"([^"一-龥]*?)"([^"一-龥]*?)"([^"一-龥]*?)"/g, (match, p1, p2, p3) => {
      // Check if this looks like a broken string
      // p1, p2, p3 are the parts between quotes
      // If any of them contains Chinese or meaningful text, escape the quotes
      changed = true;
      return `"${p1}\\""${p2}\\""${p3}"`;
    });

    content = newContent;
  }

  if (content !== original) {
    fs.writeFileSync(filepath, content);
    return true;
  }
  return false;
}

files.forEach(file => {
  const filepath = path.join(slidesDir, file);
  try {
    if (fixFile(filepath)) {
      console.log('Fixed:', file);
    }
  } catch (e) {
    console.error('Error fixing', file, ':', e.message);
  }
});
