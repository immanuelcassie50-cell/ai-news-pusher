const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-71.js';
let content = fs.readFileSync(path, 'utf8');

console.log('Before fix, line 26:', content.split('\n')[25]);

// Fix line 26: ""我不想刷脸"" -> \u201C我不想刷脸\u201D
content = content.replace(/addText\(""([^"]+)""/g, 'addText("\u201C$1\u201D"');

fs.writeFileSync(path, content);
console.log('After fix, line 26:', content.split('\n')[25]);

// Verify
try {
  new Function(content);
  console.log('Syntax OK');
} catch(e) {
  console.log('Still broken:', e.message);
}
