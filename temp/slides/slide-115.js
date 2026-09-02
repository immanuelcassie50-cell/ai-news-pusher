// slide-115.js - Action Recommendations
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "8B0000",
  secondary: "333333",
  accent: "C41E3A",
  light: "999999",
  bg: "F5F5F5"
};
const slideConfig = { type: `content`, index: 115, title: `行动建议` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText(`行动建议`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // Five recommendations
  const recommendations = [
    `下次服务，先问"人"再问"分"`,
    `用三问过滤法处理信息`,
    `留空间让孩子自己说出最后那句话`,
    `案例用来证伪，不用来炫耀`,
    `把信息、判断力、产业认知打磨扎实`
  ];
  recommendations.forEach((rec, i) => {
    const y = 1.05 + i * 0.85;
    // Number circle
    slide.addShape(pres.shapes.OVAL, { x: 0.5, y: y + 0.1, w: 0.5, h: 0.5, fill: { color: theme.accent } });
    slide.addText(String(i + 1), { x: 0.5, y: y + 0.1, w: 0.5, h: 0.5, fontSize: 18, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
    // Content card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 1.15, y: y, w: 8.35, h: 0.7, fill: { color: `FFFFFF` }, rectRadius: 0.08, shadow: { type: `outer`, color: `000000`, blur: 4, offset: 1, angle: 135, opacity: 0.08 } });
    slide.addText(rec, { x: 1.35, y: y, w: 8, h: 0.7, fontSize: 15, fontFace: `Microsoft YaHei`, color: theme.secondary, valign: `middle` });
  });
  // Page number badge (circle style, bottom-left)
  slide.addShape(pres.shapes.OVAL, { x: 0.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`115`, { x: 0.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-115-preview.pptx` }).then(() => console.log(`Created slide-115-preview.pptx`));
}
