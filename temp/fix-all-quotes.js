const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

let fixed = 0;

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Step 1: Replace all 「 used as JS string delimiters with "
  // Pattern: after ( or , or : or =, followed by 「 and ending with 」 before , or ) or {
  // These are clearly JS string delimiters that should be "
  
  // Replace patterns like (「something」, or : 「something」, or = 「something」
  content = content.replace(/\(「([^」]+)」,?/g, (m, inner) => {
    return `("${inner}",`.slice(0, -1) === m ? `("${inner}")` : `("${inner}",`;
  });
  content = content.replace(/, 「([^」]+)」,?/g, ', "$1",');
  content = content.replace(/: 「([^」]+)」,?/g, ': "$1",');
  content = content.replace(/= 「([^」]+)」,?/g, '= "$1",');
  
  // Step 2: Fix remaining Chinese quote issues
  // Replace any remaining 「 that is clearly a JS delimiter (followed by non-Chinese)
  content = content.replace(/「([A-Za-z0-9 +-]+)」/g, '"$1"');
  
  // Step 3: Fix patterns like 「word」 that are inside strings
  // These appear when Chinese text uses 「」 for emphasis
  content = content.replace(/"([^"]*)「([^」]+)」([^"]*)"/g, '"$1「$2」$3"');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    fixed++;
  }
});

console.log(`Fixed ${fixed} files`);
