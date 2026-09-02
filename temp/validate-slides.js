const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/自然科学/20.伪科学鉴别/授课PPT/slides';
const files = [42,47,83,84,85,86,88,89,90,91,92,93,94,95,96,97,99,102,103,104,105,106,107,109,110,111,113,114,115,116,117,118,119,123,128,131,135,140,142];

let ok = 0, fail = 0;
files.forEach(n => {
  const num = String(n).padStart(2,'0');
  const filePath = path.join(slidesDir, 'slide-' + num + '.js');
  try {
    new Function(fs.readFileSync(filePath, 'utf8'));
    ok++;
  } catch(e) {
    console.log(num + ': ' + e.message);
    fail++;
  }
});
console.log('OK: ' + ok + ', Failed: ' + fail);
