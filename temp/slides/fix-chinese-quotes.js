// fix-chinese-quotes.js - Fix Chinese quotation marks in slide files
const fs = require('fs');
const path = require('path');

const slidesDir = __dirname;

// Get all slide-*.js files
const slideFiles = fs.readdirSync(slidesDir)
  .filter(f => /^slide-\d+\.js$/.test(f))
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);
    return numA - numB;
  });

let fixedCount = 0;
let errorCount = 0;

for (const file of slideFiles) {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;

  // Check if file contains Chinese quotation marks
  if (!content.includes('"') && !content.includes('"')) {
    continue;
  }

  try {
    // Strategy: Replace strings that contain Chinese quotes with template strings
    // We need to find patterns like: "text with "chinese quotes" inside" and convert to `text with "chinese quotes" inside`

    // Replace patterns: find strings containing "" and convert to template literals
    // This regex finds content between regular quotes that contains Chinese quotes
    const regex = /"([^"\\]*?)"([^"'\\]*?)"([^"\\]*?)"([^"'\\]*?)"/g;

    // Actually, let's use a simpler approach - find lines with Chinese quotes and fix them
    const lines = content.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Skip if line doesn't have Chinese quotes
      if (!line.includes('"') && !line.includes('"')) continue;

      // Skip comments
      if (line.trim().startsWith('//')) continue;

      // Find all string literals in the line and check if they contain Chinese quotes
      // Simple approach: if line has both regular quotes and Chinese quotes
      if (line.match(/"[^"]*"[^"]*"[^"]*"/)) {
        // This line has multiple quoted strings - check if any contain Chinese quotes
        // Replace each string segment that contains Chinese quotes with backtick version

        let newLine = line;
        // Match strings that contain Chinese quotes
        const chineseQuoteRegex = /"([^"]*[""][^"]*)"/g;
        let match;
        while ((match = chineseQuoteRegex.exec(line)) !== null) {
          const original = match[0];
          const inner = match[1];
          if (inner.includes('"') || inner.includes('"')) {
            // Replace with template string
            const replacement = '`' + inner + '`';
            newLine = newLine.replace(original, replacement);
          }
        }
        lines[i] = newLine;
      }
    }

    content = lines.join('\n');

    // Verify the fix by trying to parse the file
    try {
      new Function(content);
      // If we got here, the content is valid JavaScript
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        fixedCount++;
        console.log(`Fixed: ${file}`);
      }
    } catch (parseErr) {
      // Still has errors, need more sophisticated fix
      console.log(`Partial fix for ${file}: ${parseErr.message}`);
      // Write what we have anyway
      fs.writeFileSync(filePath, content, 'utf8');
      errorCount++;
    }

  } catch (err) {
    console.log(`Error processing ${file}: ${err.message}`);
    errorCount++;
  }
}

console.log(`\nFixed ${fixedCount} files, ${errorCount} files still have issues`);