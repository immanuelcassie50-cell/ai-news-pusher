const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/';

// All slides with issues based on compile output
const allBroken = [6,7,8,9,10,21,22,23,31,36,37,38,39,40,45,46,47,48,49,50,56,57,58,59,60,71,73,74,75,77,79,80,83,84,85,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120];

let fixed = 0, stillBroken = [];

allBroken.forEach(n => {
  const f = path.join(slidesDir, 'slide-' + String(n).padStart(2, '0') + '.js');
  if (!fs.existsSync(f)) return;
  
  let content = fs.readFileSync(f, 'utf8');
  const original = content;
  
  // Strategy: Replace all curly/smart quotes with unicode escapes
  // U+201C = "  U+201D = "  U+2018 = '  U+2019 = '
  content = content.replace(/\u201C/g, '\u201C');
  content = content.replace(/\u201D/g, '\u201D');
  content = content.replace(/\u2018/g, '\u2018');
  content = content.replace(/\u2019/g, '\u2019');
  
  if (content !== original) {
    fs.writeFileSync(f, content);
    fixed++;
  }
  
  // Verify syntax
  try {
    new Function(content);
  } catch(e) {
    stillBroken.push({n, err: e.message.substring(0, 40)});
  }
});

console.log('Fixed ' + fixed + ' files');
console.log('Still broken: ' + stillBroken.length);
stillBroken.forEach(b => console.log('  slide-' + String(b.n).padStart(2,'0') + ': ' + b.err));
