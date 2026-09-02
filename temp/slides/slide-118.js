// slide-118.js - Content: 练习4.3：30天行动计划
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 118, title: `练习4.3：30天行动计划` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  slide.addText(`练习4.3：30天行动计划`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // Using F10 form
  slide.addText(`使用F10表单制定计划：`, { x: 0.5, y: 0.95, w: 4, h: 0.35, fontSize: 13, fontFace: `Microsoft YaHei`, color: theme.accent, bold: true });
  // Three phases
  const phases = [
    { period: `第1-10天`, title: `建立习惯`, desc: `每次用AI处理复杂任务前，先画判断力地图`, check: `是否有意识地先画图再开始？` },
    { period: `第11-20天`, title: `专项训练`, desc: `训练'前提检验'——每次AI给结论前，先问'前提是什么'`, check: `是否养成检验前提的习惯？` },
    { period: `第21-30天`, title: `迁移验证`, desc: `把判断力地图迁移到不同类型任务上，验证通用性`, check: `能否在不同场景中灵活运用？` }
  ];
  phases.forEach((p, i) => {
    const y = 1.4 + i * 1.25;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9, h: 1.1, fill: { color: theme.light } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 1.5, h: 1.1, fill: { color: theme.accent } });
    slide.addText(p.period, { x: 0.5, y: y, w: 1.5, h: 1.1, fontSize: 12, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
    slide.addText(p.title, { x: 2.2, y: y + 0.1, w: 2, h: 0.35, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(p.desc, { x: 2.2, y: y + 0.45, w: 7, h: 0.3, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
    slide.addText(`检验：` + p.check, { x: 2.2, y: y + 0.75, w: 7, h: 0.25, fontSize: 10, fontFace: `Microsoft YaHei`, color: theme.accent });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`118`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-118-preview.pptx` }).then(() => console.log(`Created slide-118-preview.pptx`));
}