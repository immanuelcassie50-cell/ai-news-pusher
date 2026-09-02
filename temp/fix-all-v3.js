const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

let fixed = 0;

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Fix require(「word」) -> require("word")
  content = content.replace(/require\("「([^」]+)」"\)/g, 'require("$1")');
  content = content.replace(/require\('「([^」]+)」'\)/g, "require('$1')");
  
  // Fix require(word) where word has Chinese brackets
  content = content.replace(/require\("([^"]+)"\)/g, 'require("$1")');
  
  // Fix any remaining patterns: replace all 「 that are used as JS string delimiters with "
  // Pattern: (「something」, or : 「something」, or = 「something」
  content = content.replace(/\("「([^」]+)」",?/g, '("$1",');
  content = content.replace(/, "「([^」]+)」,?/g, ', "$1",');
  content = content.replace(/: "「([^」]+)」,?/g, ': "$1",');
  content = content.replace(/= "「([^」]+)」,?/g, '= "$1",');
  
  // Fix standalone 「 at start of string arg
  content = content.replace(/\("「([^」]+)」/g, '("$1"');
  content = content.replace(/, "「([^」]+)」/g, ', "$1"');
  content = content.replace(/: "「([^」]+)」/g, ': "$1"');
  content = content.replace(/= "「([^」]+)」/g, '= "$1"');
  
  // For slideConfig and other object properties
  content = content.replace(/title: "「([^」]+)」/g, 'title: "$1"');
  content = content.replace(/type: "「([^」]+)」/g, 'type: "$1"');
  content = content.replace(/index: "「([^」]+)」/g, 'index: $1');
  
  // Fix fontFace values
  content = content.replace(/fontFace: "「([^」]+)」/g, 'fontFace: "$1"');
  
  // Fix align/valign values  
  content = content.replace(/align: "「([^」]+)」/g, 'align: "$1"');
  content = content.replace(/valign: "「([^」]+)」/g, 'valign: "$1"');
  
  // Fix color values like "FFFFFF"
  content = content.replace(/color: "「([^」]+)」/g, 'color: "$1"');
  content = content.replace(/fill: \{ color: "「([^」]+)」 \}/g, 'fill: { color: "$1" }');

  // Fix theme colors in standalone theme objects
  content = content.replace(/(theme\.\w+): "「([^」]+)」/g, '$1: "$2"');
  
  // Fix bold and margin values
  content = content.replace(/bold: "「([^」]+)」/g, 'bold: $1');
  content = content.replace(/margin: "「([^」]+)」/g, 'margin: $1');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    fixed++;
  }
});

console.log(`Fixed ${fixed} files`);
