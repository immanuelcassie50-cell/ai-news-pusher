// slide-128.js - Tools Summary Part 1 (F1-F5)
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 128, title: `工具表单汇总（一）` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  // Title
  slide.addText(`工具表单汇总（一）`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // F1-F5 cards
  const tools = [
    { id: `F1`, name: `AI能力边界图`, desc: `识别AI的能力边界` },
    { id: `F2`, name: `问题定义四问卡`, desc: `清晰定义真正的问题` },
    { id: `F3`, name: `框架选择依据卡`, desc: `选择正确的分析框架` },
    { id: `F4`, name: `前提检验三步法卡`, desc: `检验AI结论的前提假设` },
    { id: `F5`, name: `价值判断类型卡`, desc: `识别和处理价值判断` }
  ];
  tools.forEach((tool, i) => {
    const x = 0.5 + (i % 3) * 3.1;
    const y = i < 3 ? 1.1 : 3.3;
    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: y, w: 2.9, h: 1.9, fill: { color: `FFFFFF` }, line: { color: theme.light, width: 1 }, rectRadius: 0.1 });
    // ID badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x + 0.1, y: y + 0.1, w: 0.6, h: 0.4, fill: { color: theme.accent }, rectRadius: 0.1 });
    slide.addText(tool.id, { x: x + 0.1, y: y + 0.1, w: 0.6, h: 0.4, fontSize: 14, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
    // Icon placeholder
    slide.addShape(pres.shapes.OVAL, { x: x + 0.9, y: y + 0.2, w: 0.5, h: 0.5, fill: { color: theme.light } });
    slide.addText(`◈`, { x: x + 0.9, y: y + 0.2, w: 0.5, h: 0.5, fontSize: 18, fontFace: `Arial`, color: theme.accent, align: `center`, valign: `middle` });
    // Tool name
    slide.addText(tool.name, { x: x + 0.1, y: y + 0.8, w: 2.7, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    // Description
    slide.addText(tool.desc, { x: x + 0.1, y: y + 1.25, w: 2.7, h: 0.5, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  // Page number
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`128`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-128-preview.pptx` }).then(() => console.log(`Created slide-128-preview.pptx`));
}