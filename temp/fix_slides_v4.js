const fs = require('fs');

const failed = [9,10,11,12,13,14,31,32,34,35,37,58,61,68,73,79];

failed.forEach(n => {
  const fname = 'slide-' + n + '.js';
  if (!fs.existsSync(fname)) { console.log('NOT FOUND:', fname); return; }

  let c = fs.readFileSync(fname, 'utf8');
  const original = c;

  // The problem: addText('string with 'inner' quotes') breaks
  // Solution: For each addText call, if the content has unmatched quotes,
  // change the outer delimiter to backticks and escape any inner backticks

  // Replace all curly/Chinese quotes back first
  c = c.replace(/'/g, "'").replace(/'/g, "'");

  // Now find addText('...' ) calls where content has '
  // We need to find patterns like: addText('text with 'quoted' text',
  const lines = c.split('\n');
  const fixed = lines.map(line => {
    // Find addText('...') patterns
    const idx = line.indexOf("addText('");
    if (idx === -1) return line;

    // Extract the string content - find the pattern: addText('content',
    const start = idx + 8; // after addText('
    const closeIdx = line.indexOf("',", start);
    if (closeIdx === -1) return line;

    const content = line.substring(start, closeIdx);

    // Check if content has unescaped single quotes
    if (content.includes("'")) {
      // Escape them
      const escaped = content.replace(/'/g, "\\'");
      line = line.substring(0, idx) + "addText('" + escaped + "'" + line.substring(closeIdx + 1);
    }
    return line;
  });

  c = fixed.join('\n');

  // Also handle { text: '...' } patterns
  const lines2 = c.split('\n');
  const fixed2 = lines2.map(line => {
    // Find { text: '...' } patterns
    const match = line.match(/^\s*\{ text: '([^']*)'(,\s*options)?( \})?$/);
    if (match) {
      const content = match[1];
      const suffix = match[2] || '';
      const closing = match[3] || '';

      // Check if content has unescaped single quotes
      if (content.includes("'")) {
        const escaped = content.replace(/'/g, "\\'");
        line = line.replace(/\{ text: '([^']*)'/, "{ text: '" + escaped + "'");
      }
    }
    return line;
  });

  c = fixed2.join('\n');

  if (c !== original) {
    fs.writeFileSync(fname, c);
    console.log('Fixed:', fname);
  } else {
    console.log('No change:', fname);
  }
});

console.log('Done');