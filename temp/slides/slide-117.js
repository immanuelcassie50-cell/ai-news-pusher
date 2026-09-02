// slide-117.js - Content: 练习4.2：人机协作方案设计
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 117, title: `练习4.2：人机协作方案设计` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  slide.addText(`练习4.2：人机协作方案设计`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // Instruction
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 9, h: 0.5, fill: { color: theme.primary } });
  slide.addText(`为你的F9场景任务设计完整的协作方案`, { x: 0.7, y: 0.95, w: 8.6, h: 0.5, fontSize: 13, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, valign: `middle` });
  // Table header
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.6, w: 9, h: 0.5, fill: { color: theme.accent } });
  slide.addText(`步骤`, { x: 0.5, y: 1.6, w: 0.8, h: 0.5, fontSize: 12, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  slide.addText(`AI做什么`, { x: 1.3, y: 1.6, w: 2.2, h: 0.5, fontSize: 12, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  slide.addText(`人做什么`, { x: 3.5, y: 1.6, w: 2.2, h: 0.5, fontSize: 12, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  slide.addText(`产出`, { x: 5.7, y: 1.6, w: 2.0, h: 0.5, fontSize: 12, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  slide.addText(`检验标准`, { x: 7.7, y: 1.6, w: 1.8, h: 0.5, fontSize: 12, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  // Table rows (empty template)
  for (let i = 0; i < 5; i++) {
    const y = 2.1 + i * 0.55;
    const bgColor = i % 2 === 0 ? theme.light : "FFFFFF";
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9, h: 0.5, fill: { color: bgColor }, line: { color: theme.secondary, width: 0.5 } });
    slide.addText(String(i + 1), { x: 0.5, y: y, w: 0.8, h: 0.5, fontSize: 11, fontFace: `Arial`, color: theme.secondary, align: `center`, valign: `middle` });
    slide.addText(`___`, { x: 1.3, y: y, w: 2.2, h: 0.5, fontSize: 11, fontFace: `Microsoft YaHei`, color: theme.secondary, align: `center`, valign: `middle` });
    slide.addText(`___`, { x: 3.5, y: y, w: 2.2, h: 0.5, fontSize: 11, fontFace: `Microsoft YaHei`, color: theme.secondary, align: `center`, valign: `middle` });
    slide.addText(`___`, { x: 5.7, y: y, w: 2.0, h: 0.5, fontSize: 11, fontFace: `Microsoft YaHei`, color: theme.secondary, align: `center`, valign: `middle` });
    slide.addText(`___`, { x: 7.7, y: y, w: 1.8, h: 0.5, fontSize: 11, fontFace: `Microsoft YaHei`, color: theme.secondary, align: `center`, valign: `middle` });
  }
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`117`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-117-preview.pptx` }).then(() => console.log(`Created slide-117-preview.pptx`));
}