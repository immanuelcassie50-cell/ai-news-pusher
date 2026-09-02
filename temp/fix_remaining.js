const fs = require('fs');
const path = require('path');

const dir = "D:/新课开发/工作手册/高潜员工加速成长路径设计/完整课程包/02-授课PPT/slides";

// Read each file and fix addText lines with quote issues
const files = ['slide-26.js','slide-28.js','slide-29.js','slide-38.js','slide-88.js','slide-91.js','slide-93.js'];

files.forEach(f => {
  const fp = path.join(dir, f);
  if (!fs.existsSync(fp)) return;
  
  let content = fs.readFileSync(fp, 'utf8');
  let lines = content.split('\n');
  
  lines = lines.map(line => {
    // Fix addText lines with embedded quotes
    if (line.includes('addText')) {
      // Replace \' with regular '
      line = line.replace(/\'/g, "'");
      // If line has single-quote delimited string with inner single quotes, fix it
      // Match: slide.addText('...text with 'quoted' text...'
      const match = line.match(/addText\('([^']*)'\s*,/);
      if (match && match[1].includes("'")) {
        // Inner string has single quotes - change delimiter to double quote
        line = line.replace(/addText\('/, 'addText("').replace(/'\s*,/, '",');
      }
    }
    return line;
  });
  
  fs.writeFileSync(fp, lines.join('\n'));
  console.log('Fixed: ' + f);
});
