// slide-129.js - Tools Summary Part 2 (F6-F10)
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 129, title: `工具表单汇总（二）` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  // Title
  slide.addText(`工具表单汇总（二）`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // F6-F10 cards
  const tools = [
    { id: `F6`, name: `判断力坐标系四象限卡`, desc: `四象限定位人机分工` },
    { id: `F7`, name: `个人判断力地图`, desc: `为具体任务绘制人机分工地图` },
    { id: `F8`, name: `迁移使用三问卡`, desc: `判断方法能否迁移到新任务` },
    { id: `F9`, name: `场景卡`, desc: `选定贯穿课程的真实任务` },
    { id: `F10`, name: `30天行动计划卡`, desc: `制定和承诺落地计划` }
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
    slide.addText(tool.name, { x: x + 0.1, y: y + 0.8, w: 2.7, h: 0.45, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    // Description
    slide.addText(tool.desc, { x: x + 0.1, y: y + 1.25, w: 2.7, h: 0.5, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  // Page number
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`129`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-129-preview.pptx` }).then(() => console.log(`Created slide-129-preview.pptx`));
}