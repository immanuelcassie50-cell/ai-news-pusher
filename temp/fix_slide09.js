const fs = require('fs');
const slidesDir = '/d/新课开发/金融/6、保险增员面谈与代理人团队裂变——从招人到留人/授课PPT/slides';
process.chdir(slidesDir);

const failed = [9,10,11,12,13,14,31,32,34,35,37,39,40,41,42,50,58,61,68,73,79];

failed.forEach(n => {
  const fname = 'slide-' + n + '.js';
  if (!fs.existsSync(fname)) { console.log('NOT FOUND:', fname); return; }

  let c = fs.readFileSync(fname, 'utf8');
  const original = c;

  // Fix 1: Replace curly quotes used as Chinese quotation marks
  c = c.replace(/‘/g, "'").replace(/’/g, "'");  // ' '
  c = c.replace(/“/g, '"').replace(/”/g, '"');  // " "
  c = c.replace(/「/g, "'").replace(/」/g, "'");  // 「 」

  // Fix 2: Pattern { text: 'content' } where content has unescaped single quotes
  // Replace { text: '...text with ' in middle...' } with { text: `...text with ' in middle...` }
  // Non-greedy: .+? stops at first single quote
  c = c.replace(/\{ text: '(.+?)'(,|\\})/g, (match, content, suffix) => {
    // content might have ' inside - escape them if they exist
    const hasInnerQuotes = content.includes("'");
    if (hasInnerQuotes) {
      return '{ text: `' + content + '`' + suffix;
    }
    return match;
  });

  // Fix 3: More aggressive - find all text values with inner quotes
  // Match { text: 'text' or { text: 'text',
  const lines = c.split('\n');
  const fixed = [];
  lines.forEach(line => {
    // Skip comment lines
    if (line.trim().startsWith('//')) {
      fixed.push(line);
      return;
    }
    // If line has { text: ' and the closing ' is followed by , options or }
    // we need to check if content has inner quotes
    if (line.includes("{ text: '")) {
      const idx = line.indexOf("{ text: '");
      const after = line.substring(idx + 8); // after { text: '
      const endIdx = after.indexOf("'");
      if (endIdx >= 0) {
        const potentialContent = after.substring(0, endIdx);
        const afterContent = after.substring(endIdx + 1);
        // If afterContent starts with , or } then this is a simple case
        // If afterContent starts with another letter, there might be inner quotes
        if (afterContent.match(/^[^a-zA-Z]/) || afterContent.trim() === '') {
          fixed.push(line);
        } else {
          // Has inner quotes - escape or use backticks
          // Replace this { text: 'content' with { text: `content`
          line = line.replace(/\{ text: '([^']*)'/g, '{ text: `$1`');
          fixed.push(line);
        }
      } else {
        fixed.push(line);
      }
    } else {
      fixed.push(line);
    }
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