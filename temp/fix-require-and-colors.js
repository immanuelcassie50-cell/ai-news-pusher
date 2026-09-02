const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

let fixed = 0;

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Fix 1: require("「word」") -> require("word")
  content = content.replace(/require\("「([^」]+)」"\)/g, 'require("$1")');
  
  // Fix 2: theme colors: primary: 「780000」 -> primary: "780000"
  content = content.replace(/(theme\.\w+): 「([0-9a-fA-F]{6})」/g, '$1: "$2"');
  
  // Fix 3: fontFace: 「Arial」 -> fontFace: "Arial"
  content = content.replace(/fontFace: 「([^」]+)」/g, 'fontFace: "$1"');
  
  // Fix 4: align: 「center」 -> align: "center" 
  content = content.replace(/align: 「([^」]+)」/g, 'align: "$1"');
  
  // Fix 5: valign: 「middle」 -> valign: "middle"
  content = content.replace(/valign: 「([^」]+)」/g, 'valign: "$1"');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    fixed++;
  }
});

console.log(`Fixed ${fixed} files`);
