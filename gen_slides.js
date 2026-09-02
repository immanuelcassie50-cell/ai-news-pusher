// gen_slides.js - Generate all 139 slide JS files from slides_data.json
const fs = require('fs');
const path = require('path');

const SLIDES_DIR = 'D:/temp/slides';
const DATA_FILE = 'D:/temp/slides/slides_data.json';

const THEME = `const theme = {
  primary: "B5401F",
  secondary: "5A5A5A",
  accent: "C4501A",
  light: "8A8A8A",
  bg: "FAFAF8"
};`;

function mks(num, title, stype, content, sub) {
  const badge = stype === 'cover' ? '' : `
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("${num}", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });`;

  let code;
  if (stype === 'cover') {
    code = `const pptxgen = require("pptxgenjs");
const sc = { type: "cover", index: ${num}, title: "${title}" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };
  slide.addText("02", { x: 6.5, y: 0.5, w: 3.5, h: 3, fontSize: 160, fontFace: "Arial", color: "FFFFFF", bold: true, align: "right", transparency: 85 });
  slide.addText("公众表达实战工具箱 · 第2课", { x: 0.6, y: 1.2, w: 6, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF", transparency: 40 });
  slide.addText("${title}", { x: 0.6, y: 1.8, w: 7, h: 1.5, fontSize: 44, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addText("什么时候提，对方最容易被打动", { x: 0.6, y: 3.4, w: 7, h: 0.6, fontSize: 20, fontFace: "Microsoft YaHei", color: "FFFFFF", transparency: 20 });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; ${THEME}; createSlide(pres, theme); pres.writeFile({ fileName: "./output/slide-${String(num).padStart(2, '0')}-preview.pptx" }); }
module.exports = { createSlide, slideConfig: sc };`;
  } else if (stype === 'divider') {
    const mn = String(num).padStart(2, '0');
    code = `const pptxgen = require("pptxgenjs");
const sc = { type: "divider", index: ${num}, title: "${title}" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };
  slide.addText("${mn}", { x: 0.5, y: 0.8, w: 3, h: 2.5, fontSize: 140, fontFace: "Arial", color: "FFFFFF", bold: true, transparency: 85 });
  slide.addText("${title}", { x: 0.6, y: 2.0, w: 8, h: 1.2, fontSize: 42, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addText("${sub || ''}", { x: 0.6, y: 3.3, w: 8, h: 0.6, fontSize: 16, fontFace: "Microsoft YaHei", color: "FFFFFF", transparency: 30 });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.2, w: 10, h: 0.425, fill: { color: theme.accent } });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; ${THEME}; createSlide(pres, theme); pres.writeFile({ fileName: "./output/slide-${String(num).padStart(2, '0')}-preview.pptx" }); }
module.exports = { createSlide, slideConfig: sc };`;
  } else {
    // Escape backticks and ${} in content for template literal
    const escapedContent = content.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
    code = `const pptxgen = require("pptxgenjs");
const sc = { type: "content", index: ${num}, title: "${title}" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("${title}", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 26, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText(\`${escapedContent}\`, { x: 0.5, y: 1.1, w: 9, h: 3.8, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, valign: "top" });${badge}
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; ${THEME}; createSlide(pres, theme); pres.writeFile({ fileName: "./output/slide-${String(num).padStart(2, '0')}-preview.pptx" }); }
module.exports = { createSlide, slideConfig: sc };`;
  }

  const filename = path.join(SLIDES_DIR, `slide-${String(num).padStart(2, '0')}.js`);
  fs.writeFileSync(filename, code, 'utf8');
  console.log(`Created: slide-${String(num).padStart(2, '0')}.js (${title})`);
}

// Load slides data
const slidesData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));

console.log(`Loaded ${slidesData.length} slides from slides_data.json`);

// Generate all slides
for (const item of slidesData) {
  const num = item[0];
  const title = item[1];
  const stype = item[2] || 'content';
  const content = item[3] || '';
  const sub = item[4] || '';

  mks(num, title, stype, content, sub);
}

console.log(`\nAll ${slidesData.length} slides generated!`);