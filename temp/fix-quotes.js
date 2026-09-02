const fs = require('fs');
const files = ['slide-36.js', 'slide-46.js', 'slide-56.js'];
const slidesDir = 'D:/新课开发/政治学/03_政策显影-一项公共政策如何被制定执行与评估/授课PPT/slides';

files.forEach(f => {
  const path = slidesDir + '/' + f;
  let content = fs.readFileSync(path, 'utf8');
  // Replace triple ASCII double-quotes followed by comma or brace with curly quote + same
  const fixed = content.replace(/"{3}([,}])/g, '""$1');
  if (fixed !== content) {
    fs.writeFileSync(path, fixed);
    console.log('Fixed:', f);
  } else {
    console.log('No change:', f);
  }
});
