// slides/compile.js
const path = require('path');
const pptxgen = require('pptxgenjs');

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.author = '智策罗盘工作坊';
pres.title = '系统思考与人机协同决策——智策罗盘工作坊';

// Deep professional dark theme (matching design spec)
const theme = {
  primary:   "0e1116",  // near-black background
  secondary: "1a1d23",  // dark gray card
  accent:    "d4a574",  // amber gold — emphasis
  light:     "c8553d",  // deep red — warnings/highlights
  bg:        "e8e8e8",  // light text on dark
  // extras for table cells/dividers
  divider:   "2a2e35",  // subtle divider
  muted:     "8a8f99",  // muted text
  panel:     "181c22"   // slightly darker panel
};

const TOTAL = 120;

for (let i = 1; i <= TOTAL; i++) {
  const num = String(i).padStart(3, '0');
  try {
    const slideModule = require(`./slide-${num}.js`);
    slideModule.createSlide(pres, theme);
    if (i % 10 === 0) console.log(`  ✓ Built slide ${num}`);
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      console.error(`  ✗ Missing slide-${num}.js — aborting.`);
      process.exit(1);
    } else {
      console.error(`  ✗ Error in slide-${num}.js:`, e.message);
      process.exit(1);
    }
  }
}

const outPath = path.resolve(__dirname, '..', '..', '..', 'Downloads', 'KF系统思考和理性决策', '完整课程包', '04_授课PPT', '系统思考与人机协同决策_授课PPT.pptx');
pres.writeFile({ fileName: outPath }).then(() => {
  console.log(`\n✅ Wrote: ${outPath}`);
});