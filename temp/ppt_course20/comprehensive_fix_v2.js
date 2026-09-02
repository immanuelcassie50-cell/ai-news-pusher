const fs = require('fs');

// Comprehensive fix for ALL slide files
const files = fs.readdirSync('.')
  .filter(f => f.startsWith('slide-') && f.endsWith('.js'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Replace all Chinese quotation marks with escaped quotes
  content = content.replace(/“/g, '\\"');
  content = content.replace(/”/g, '\\"');
  content = content.replace(/‘/g, "\\'");
  content = content.replace(/’/g, "\\'");

  // Now fix any double-escapes or remaining issues
  // Replace any \" that appears without proper context

  const fixed = content;

  if (fixed !== content) {
    fs.writeFileSync(file, fixed);
    console.log('Fixed:', file);
  }
});
