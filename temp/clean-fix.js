const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.match(/^slide-\d+\.js$/)).sort();

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace ALL Chinese brackets with regular quotes
  // This is the ONLY fix we need - don't do anything else
  content = content.replace(/「/g, '"');
  content = content.replace(/」/g, '"');
  
  fs.writeFileSync(filePath, content);
});

console.log('Done - replaced all Chinese brackets with quotes');
