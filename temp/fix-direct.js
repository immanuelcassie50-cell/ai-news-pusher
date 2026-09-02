const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

let fixed = 0;

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Direct character replacement: 「 (U+300C) and 」 (U+300D) to " (U+0022)
  // But ONLY when used as JS string delimiters, not when they represent Chinese quotes in content
  
  // Pattern 1: require(「word」) -> require("word")
  content = content.replace(/require\("([^"]+)"\)/g, 'require("$1")');
  
  // Pattern 2: (「word」, -> ("word",
  content = content.replace(/\("「([^」]+)」",?/g, '("$1",');
  
  // Pattern 3: ,「word」, -> ,"$1",
  content = content.replace(/,"「([^」]+)」",?/g, ',"$1",');
  
  // Pattern 4: :「word」, -> :"$1",
  content = content.replace(/:「([^」]+)」",?/g, ':"$1",');
  
  // Pattern 5: =「word」, -> ="$1",
  content = content.replace(/=「([^」]+)」",?/g, '="$1",');
  
  // Pattern 6: word followed by 」 and then end of string arg
  content = content.replace(/「([^」]+)」/g, '"$1"');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    fixed++;
  }
});

console.log(`Fixed ${fixed} files`);
