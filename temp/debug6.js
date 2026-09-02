const fs = require('fs');
const slidesDir = "D:/新课开发/工作手册/岗位知识断点修复与传承/完整课程包/02-授课PPT/slides";
const files = fs.readdirSync(slidesDir).filter(f => f.startsWith('slide-') && f.endsWith('.js'));

files.forEach(f => {
  const content = fs.readFileSync(slidesDir + '/' + f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, i) => {
    // Find lines with the pattern: \"text"text" pattern (backslash-quote, content, quote, text, quote)
    // This indicates Chinese curly quotes inside strings that broke the JS
    if (l.match(/\\".*"[^\\]".*"[,"]/)) {
      console.log(f + ' Line ' + (i+1) + ': ' + JSON.stringify(l.substring(0,120)));
    }
  });
});