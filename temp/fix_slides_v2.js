const fs = require('fs');

const failed = [10,11,12,13,14,31,32,34,35,37,58,61,68,73,79];

failed.forEach(n => {
  const fname = 'slide-' + n + '.js';
  if (!fs.existsSync(fname)) { console.log('NOT FOUND:', fname); return; }

  let c = fs.readFileSync(fname, 'utf8');
  const original = c;

  // Fix: replace Chinese/curly single quotes with straight single quotes
  c = c.replace(/‘/g, "'").replace(/’/g, "'");

  // Now find all addText('...') calls and fix inner quotes
  const lines = c.split('\n');
  const fixed = lines.map(line => {
    // Match lines with addText('...')
    const idx = line.indexOf("addText('");
    if (idx === -1) return line;

    // Find the opening and closing quotes for the string
    const start = idx + 8; // after addText('
    // Find the matching closing quote - look for ', or ')
    // Simple approach: find pattern ',\s*
    const rest = line.substring(start);
    const closeIdx = rest.indexOf("',");
    if (closeIdx === -1) return line;

    const content = rest.substring(0, closeIdx);
    const suffix = rest.substring(closeIdx + 1);

    // Check if content has raw single quotes
    if (content.includes("'")) {
      // Escape them
      const escapedContent = content.replace(/'/g, "\\'");
      line = line.substring(0, idx) + "addText('" + escapedContent + "'" + suffix;
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