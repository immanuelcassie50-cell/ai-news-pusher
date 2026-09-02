const fs = require('fs');

const failed = [9,10,11,12,13,14,31,32,34,35,37,58,61,68,73,79];

failed.forEach(n => {
  const fname = 'slide-' + n + '.js';
  if (!fs.existsSync(fname)) { console.log('NOT FOUND:', fname); return; }

  let c = fs.readFileSync(fname, 'utf8');
  const original = c;

  // Strategy: Replace ALL single-quoted strings that contain unescaped single quotes
  // by converting them to backtick strings (template literals)
  // Pattern to find: addText('content with 'inner' quotes',
  // Pattern to fix: convert outer single quotes to backticks, escape inner backticks

  // First pass: for addText calls, if content has ' inside, use backticks
  const lines = c.split('\n');
  const fixed = lines.map(line => {
    // Match: slide.addText('content',
    const addTextMatch = line.match(/^(\s*slide\.addText\()'(.*)'(,\s*\{.*)?$/);
    if (addTextMatch) {
      const prefix = addTextMatch[1]; // "slide.addText("
      let content = addTextMatch[2]; // the string content
      const suffix = addTextMatch[3] || ''; // ", { ..."

      // Check if content has unescaped single quotes
      if (content.includes("'") && !content.includes("\\'")) {
        // Escape any existing backticks first
        content = content.replace(/`/g, '\\`');
        // Change outer quotes to backticks
        return prefix + '`' + content + '`' + suffix;
      }
    }

    // Match: { text: 'content' } or { text: 'content', options: ... }
    const textMatch = line.match(/^(\s*\{ text: )'(.*)'(,\s*options.*)?( \})?$/);
    if (textMatch) {
      const prefix = textMatch[1]; // "{ text: "
      let content = textMatch[2]; // the string content
      const suffix = textMatch[3] || ''; // ", options: ..."
      const closing = textMatch[4] || ''; // " }"

      if (content.includes("'") && !content.includes("\\'")) {
        content = content.replace(/`/g, '\\`');
        return prefix + '`' + content + '`' + suffix + closing;
      }
    }

    return line;
  });

  c = fixed.join('\n');

  if (c !== original) {
    fs.writeFileSync(fname, c);
    console.log('Fixed:', fname);
  } else {
    console.log('No change:', fname);
  }
});

console.log('Done');