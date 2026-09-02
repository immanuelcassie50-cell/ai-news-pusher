// slide-114.js - Course Summary
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "8B0000",
  secondary: "333333",
  accent: "C41E3A",
  light: "999999",
  bg: "F5F5F5"
};
const slideConfig = { type: `content`, index: 114, title: `课程总结` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText(`课程总结`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // Three cards layout
  const cards = [
    { num: `01`, title: `模块一：认知重塑`, desc: `冲稳保是语法不是方法` },
    { num: `02`, title: `模块二：协作沟通`, desc: `风险偏好翻译与冲突处理` },
    { num: `03`, title: `模块三：职业心态`, desc: `替人做决定的风险与口碑` }
  ];
  const cardW = 2.9;
  const cardH = 3.2;
  const startX = 0.55;
  const gap = 0.25;
  cards.forEach((c, i) => {
    const x = startX + i * (cardW + gap);
    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: 1.1, w: cardW, h: cardH, fill: { color: `FFFFFF` }, rectRadius: 0.1, shadow: { type: `outer`, color: `000000`, blur: 8, offset: 2, angle: 135, opacity: 0.1 } });
    // Top accent bar
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: 1.1, w: cardW, h: 0.12, fill: { color: theme.accent } });
    // Number
    slide.addText(c.num, { x: x, y: 1.4, w: cardW, h: 0.5, fontSize: 28, fontFace: `Arial`, color: theme.accent, bold: true, align: `center` });
    // Title
    slide.addText(c.title, { x: x + 0.2, y: 2.0, w: cardW - 0.4, h: 0.5, fontSize: 14, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true, align: `center` });
    // Divider
    slide.addShape(pres.shapes.LINE, { x: x + 0.5, y: 2.6, w: cardW - 1, h: 0, line: { color: theme.light, width: 1 } });
    // Description
    slide.addText(c.desc, { x: x + 0.2, y: 2.75, w: cardW - 0.4, h: 1.2, fontSize: 12, fontFace: `Microsoft YaHei`, color: theme.secondary, align: `center`, valign: `top` });
  });
  // Page number badge (circle style, bottom-left)
  slide.addShape(pres.shapes.OVAL, { x: 0.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`114`, { x: 0.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-114-preview.pptx` }).then(() => console.log(`Created slide-114-preview.pptx`));
}
