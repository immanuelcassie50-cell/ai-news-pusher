// slide-120.js - Content: 如何识别AI的错误
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 120, title: `如何识别AI的错误` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  slide.addText(`如何识别AI的错误`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // Five types of errors
  const errors = [
    { type: `事实错误`, desc: `AI编造的数据或信息`, detect: `交叉验证数据来源` },
    { type: `逻辑错误`, desc: `推理过程中的漏洞`, detect: `检查推演步骤` },
    { type: `前提错误`, desc: `基于错误假设的分析`, detect: `检验前提假设` },
    { type: `范围错误`, desc: `把A领域的框架错误应用到B领域`, detect: `确认框架适用性` },
    { type: `过度自信`, desc: `AI用确定语气表达不确定的判断`, detect: `关注语气与确定性匹配` }
  ];
  errors.forEach((e, i) => {
    const y = 1.0 + i * 0.85;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9, h: 0.75, fill: { color: theme.light } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.12, h: 0.75, fill: { color: theme.accent } });
    slide.addText(e.type, { x: 0.8, y: y + 0.08, w: 1.8, h: 0.3, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(e.desc, { x: 0.8, y: y + 0.38, w: 3.5, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary });
    slide.addText(`识别：` + e.detect, { x: 4.5, y: y + 0.15, w: 4.7, h: 0.45, fontSize: 11, fontFace: `Microsoft YaHei`, color: theme.accent, valign: `middle` });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`120`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-120-preview.pptx` }).then(() => console.log(`Created slide-120-preview.pptx`));
}