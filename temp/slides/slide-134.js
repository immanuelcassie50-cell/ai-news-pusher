// slide-134.js - How to Continue Learning
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 134, title: `持续学习路径` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  // Title
  slide.addText(`持续学习路径`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // 8 future courses in 2 columns
  const courses = [
    { num: `1`, title: `问题力`, desc: `如何把模糊的问题定义清楚` },
    { num: `2`, title: `驱动而非套用`, desc: `如何用思维模型给AI设定思考路径` },
    { num: `3`, title: `审辨2.0`, desc: `如何识别AI输出里的漏洞和过度自信` },
    { num: `4`, title: `模型失灵地带`, desc: `当框架不管用时，如何在模糊中做判断` },
    { num: `5`, title: `系统思维再升级`, desc: `如何看到二阶、三阶效应` },
    { num: `6`, title: `偏误免疫2.0`, desc: `AI如何放大你的认知盲区` },
    { num: `7`, title: `说服的结构`, desc: `如何把AI的框架变成有说服力的表达` },
    { num: `8`, title: `判断力资产化`, desc: `如何把经验判断显性化` }
  ];
  courses.forEach((c, i) => {
    const col = i < 4 ? 0 : 1;
    const row = i % 4;
    const x = 0.5 + col * 4.8;
    const y = 1.0 + row * 1.05;
    // Number badge
    slide.addShape(pres.shapes.OVAL, { x: x, y: y + 0.15, w: 0.35, h: 0.35, fill: { color: theme.accent } });
    slide.addText(c.num, { x: x, y: y + 0.15, w: 0.35, h: 0.35, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
    // Title
    slide.addText(c.title, { x: x + 0.5, y: y + 0.05, w: 1.8, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    // Description
    slide.addText(c.desc, { x: x + 0.5, y: y + 0.45, w: 3.8, h: 0.5, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  // Decorative element
  slide.addShape(pres.shapes.LINE, { x: 4.9, y: 1.0, w: 0, h: 4.0, line: { color: theme.light, width: 1 } });
  // Page number
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`134`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-134-preview.pptx` }).then(() => console.log(`Created slide-134-preview.pptx`));
}