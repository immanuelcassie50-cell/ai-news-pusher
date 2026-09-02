const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-71.js';
const content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

// Show lines 25-30
for (let i = 24; i < 30; i++) {
  console.log('Line ' + (i+1) + ':', JSON.stringify(lines[i]));
}

// Check for addText with quotes
lines.forEach((line, i) => {
  if (line.includes('addText') && line.includes('"')) {
    console.log('\nLine ' + (i+1) + ' has addText with quotes:', line.trim().substring(0, 70));
  }
});
