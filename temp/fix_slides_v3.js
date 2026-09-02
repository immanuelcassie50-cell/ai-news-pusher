const fs = require('fs');

const failed = [9,10,11,12,13,14,31,32,34,35,37,58,61,68,73,79];

failed.forEach(n => {
  const fname = 'slide-' + n + '.js';
  if (!fs.existsSync(fname)) { console.log('NOT FOUND:', fname); return; }

  let c = fs.readFileSync(fname, 'utf8');
  const original = c;

  // Strategy: find all string-like patterns and fix them
  // First replace all curly/Chinese quotes with placeholders
  c = c.replace(/'/g, '');  // ' -> placeholder
  c = c.replace(/"/g, '');  // " -> placeholder
  c = c.replace(/'/g, '');  // ' -> placeholder
  c = c.replace(/"/g, '');  // " -> placeholder

  // Now restore proper quotes for string delimiters
  // For addText, slide.addShape, etc. - the first arg is a string
  // Pattern: addText(F001...F003, ...) - F001 is opening quote, F003 is closing
  // But we also need to handle cases where content has quotes inside

  // For addText calls specifically, fix the pattern
  // addText(F001contentF003, options) -> addText('content', options)
  c = c.replace(/addText\(F001([^F003]*?)F003,/g, (m, content) => {
    // Escape any placeholder quotes within content
    content = content.replace(//g, "'").replace(//g, "'");
    return "addText('" + content + "',";
  });

  // For slide.addText with array of objects: addText([{ text: '...' }])
  // Fix { text: F001...F003 } patterns
  c = c.replace(/\{ text: F001([^F003]*?)F003,/g, (m, content) => {
    content = content.replace(//g, "'").replace(//g, "'");
    return "{ text: '" + content + "',";
  });

  // For slide.addText with closing brace: addText([{ text: '...' }])
  c = c.replace(/\{ text: F001([^F003]*?)F003 \}/g, (m, content) => {
    content = content.replace(//g, "'").replace(//g, "'");
    return "{ text: '" + content + "' }";
  });

  // For any remaining F001...F003 patterns in strings (like slide.addText("title"))
  c = c.replace(/\(F001([^F004]*?)F004,/g, (m, content) => {
    content = content.replace(//g, "'").replace(//g, "'");
    return "('" + content + "',";
  });

  // Restore any remaining placeholders as proper straight quotes
  c = c.replace(//g, "'").replace(//g, '"');
  c = c.replace(//g, "'").replace(//g, '"');

  if (c !== original) {
    fs.writeFileSync(fname, c);
    console.log('Fixed:', fname);
  } else {
    console.log('No change:', fname);
  }
});

console.log('Done');