const fs = require('fs');
const content = fs.readFileSync('D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-71.js', 'utf8');
try {
  new Function(content);
  console.log('OK');
} catch(e) {
  console.log('Error: ' + e.message);
  const lines = content.split('\n');
  lines.forEach((line, i) => {
    if (line.includes('\u0060')) {
      console.log('Line ' + (i+1) + ': ' + line.trim().substring(0,80));
    }
  });
}
