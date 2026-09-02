const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

let fixed = 0;

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Fix: require(「word」) -> require("word")
  content = content.replace(/require\("「([^」]+)」"\)/g, 'require("$1")');
  content = content.replace(/require\('「([^」]+)」'\)/g, "require('$1')");
  
  // Actually the pattern is require(「word」) - no outer quotes
  content = content.replace(/require\("([^"]+)"\)/g, 'require("$1")');
  content = content.replace(/require\("([^"]+)"\)/g, 'require("$1")');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    fixed++;
  }
});

console.log(`Fixed ${fixed} files`);
