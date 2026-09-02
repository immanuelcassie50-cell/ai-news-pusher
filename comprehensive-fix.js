const fs = require('fs');
const slidesDir = 'D:/新课开发/工作手册/专家隐性技能显性化/完整课程包/03-PPT演示课件/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.startsWith('slide-') && f.endsWith('.js'));

let fixedCount = 0;
let errorCount = 0;

files.forEach(file => {
  const filePath = slidesDir + '/' + file;
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;

    // Remove all 」 that appear after ASCII string values
    content = content.replace(/"([a-z][a-z0-9_]*)」/gi, '"$1"');
    content = content.replace(/"([A-Z][a-zA-Z0-9_]*)」/gi, '"$1"');

    // Fix Chinese text inside strings: "text「inner」more" -> "text「inner」more"
    // Pattern: "Chinese...」, or : "value」 etc
    content = content.replace(/([a-z])」/gi, '$1"');
    content = content.replace(/」,/g, '",');

    // Fix escaped quotes that became \「 or \"
    content = content.replace(/\\"/g, '"');

    // Fix remaining patterns where 」 should be "
    content = content.replace(/([a-z0-9])」/gi, '$1"');
    content = content.replace(/」\)/g, '")');
    content = content.replace(/」\}/g, '"}');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      fixedCount++;
    }

    // Try to require it
    delete require.cache[require.resolve(filePath)];
    require(filePath);
  } catch (e) {
    errorCount++;
    if (errorCount <= 5) {
      console.log(`Error in ${file}: ${e.message}`);
    }
  }
});

console.log(`Fixed: ${fixedCount}, Errors remaining: ${errorCount}`);
