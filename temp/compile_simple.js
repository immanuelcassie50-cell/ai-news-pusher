const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = '民族主义思想史——一个概念如何塑造现代世界';
pres.author = '政治学系列课程';

const theme = {
  primary: '1a2744',
  secondary: '8b2828',
  accent: 'c9a96e',
  light: 'f5f0e6',
  bg: 'faf8f5'
};

const slidesDir = __dirname;
const maxSlide = 120;
let compiled = 0;
let errors = [];

// Pre-load slide-base
const slideBase = require(path.join(slidesDir, 'slide-base.js'));

for (let i = 1; i <= maxSlide; i++) {
  const num = String(i).padStart(2, '0');
  const slidePath = path.join(slidesDir, `slide-${num}.js`);

  if (!fs.existsSync(slidePath)) continue;

  try {
    let code = fs.readFileSync(slidePath, 'utf8');

    // Fix: remove stray backslashes before quotes
    code = code.replace(/\\"/g, '"');

    if (code.includes("require('./slide-base')") || code.includes('require("./slide-base")')) {
      const slideModule = require(slidePath);
      if (slideModule && slideModule.createSlide) {
        slideModule.createSlide(pres, theme);
        compiled++;
      }
    } else {
      const cnVars = [...code.matchAll(/(?:const|let|var)\s+(\S+)\s*=/g)]
        .filter(m => /[^\x00-\x7F]/.test(m[1]));
      const extraDecls = cnVars.map(m => `var ${m[1]}=[];`).join('');

      const fn = new Function('pres', 'theme', 'require', 'console', 'module', 'exports',
        `${extraDecls}\n${code}; return createSlide(pres, theme);`
      );
      fn(pres, theme, require, console, { exports: {} }, {});
      compiled++;
    }
  } catch (err) {
    errors.push({ num, err: err.message.split('\n')[0] });
  }
}

console.log(`Compiled ${compiled}/${maxSlide} slides`);
if (errors.length > 0) {
  console.log(`Errors (${errors.length}):`);
  errors.slice(0, 15).forEach(e => console.log(`  slide-${e.num}: ${e.err}`));
}

const outputPath = path.join(slidesDir, 'output', 'presentation.pptx');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
pres.writeFile({ fileName: outputPath })
  .then(() => console.log(`Output: ${outputPath}`))
  .catch(err => console.error('Write error:', err));
