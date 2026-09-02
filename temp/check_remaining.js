const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/';

const remaining = [45, 71, 83, 89, 90];

remaining.forEach(n => {
  const f = path + 'slide-' + String(n).padStart(2, '0') + '.js';
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  
  console.log('=== slide-' + n + ' ===');
  
  // Find lines with backticks
  lines.forEach((line, i) => {
    if (line.includes('`')) {
      console.log('  Line ' + (i+1) + ' has backtick: ' + line.trim().substring(0, 60));
    }
  });
  
  // Try to find exact error location
  try {
    new Function(content);
  } catch(e) {
    console.log('  Error:', e.message);
    // Show context around the error
    const match = e.message.match(/line (\d+)/);
    if (match) {
      const lineNum = parseInt(match[1]);
      console.log('  Context:', lines.slice(Math.max(0,lineNum-2), lineNum+1).map((l,i,arr) => (lineNum-1+i === lineNum-1 ? '>' : ' ') + l).join('\n'));
    }
  }
});
