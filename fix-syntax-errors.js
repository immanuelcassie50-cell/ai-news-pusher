const fs = require('fs');
const slidesDir = 'D:/新课开发/工作手册/专家隐性技能显性化/完整课程包/03-PPT演示课件/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.startsWith('slide-') && f.endsWith('.js'));

files.forEach(file => {
  const filePath = slidesDir + '/' + file;
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix 1: Remove all standalone 」 that are clearly wrong (after ASCII values)
  // Pattern: value」 followed by , or } or )
  content = content.replace(/([a-zA-Z0-9_])」([,}])/g, '$1"$2');

  // Fix 2: Chinese quote inside string: "text"more -> "text「more"
  // This happens when Chinese speech quotes were inside JS string
  content = content.replace(/"([^"]*)"([一-鿿])/g, '"$1「$2');
  content = content.replace(/([一-鿿])"([^"]*)"/g, '$1」$2"');

  // Fix 3: Escaped quotes that are wrong: \"
  content = content.replace(/\\"/g, '"');

  // Fix 4: Remaining 」 after simple ASCII strings
  content = content.replace(/([a-z])」/g, '$1"');
  content = content.replace(/([A-Z])」/g, '$1"');

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Applied fixes to', files.length, 'files');
