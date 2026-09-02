const fs = require('fs');
const path = require('path');

const dir = "D:/新课开发/工作手册/高潜员工加速成长路径设计/完整课程包/02-授课PPT/slides";

// Get all slide files
const files = fs.readdirSync(dir).filter(f => f.startsWith('slide-') && f.endsWith('.js'));

files.forEach(f => {
  const fp = path.join(dir, f);
  let content = fs.readFileSync(fp, 'utf8');
  
  // Fix 1: Remove backslash escaping of quotes - replace \' with ' and \" with "
  content = content.replace(/\'/g, "'");
  content = content.replace(/\\"/g, '"');
  
  // Fix 2: For addText calls with Chinese text that has embedded quotes,
  // find and fix patterns like addText('text with 'quotes' text',
  const lines = content.split('\n');
  const fixed = lines.map(line => {
    // Match addText with single-quoted string containing single quotes
    // Pattern: addText('...anything with 'quoted' parts...',
    if (line.match(/addText\('[^']*'[^']*'\s*,/)) {
      // Change to double quotes
      line = line.replace(/addText\('/, 'addText("').replace(/'\s*,/, '",');
    }
    return line;
  });
  content = fixed.join('\n');
  
  fs.writeFileSync(fp, content);
});

console.log(`Fixed ${files.length} files`);
