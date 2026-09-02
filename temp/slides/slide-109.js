// slide-109.js - Q&A: Entry Timing
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "8B0000",    // deep red
  secondary: "333333",  // dark gray
  accent: "C41E3A",     // bright red
  light: "999999",      // gray
  bg: "F5F5F5"          // light gray background
};
const slideConfig = { type: `content`, index: 109, title: `Q&A：入行来得及吗` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  // Top accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });
  // Title
  slide.addText("Q&A：入行来得及吗", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  // Q section
  slide.addShape("roundRect", {
    x: 0.5, y: 1.0, w: 9, h: 1.1,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });
  slide.addText("Q", {
    x: 0.7, y: 1.1, w: 0.5, h: 0.5,
    fontSize: 28, fontFace: "Arial",
    color: "FFFFFF", bold: true
  });
  slide.addText("现在入行还来得及吗，会不会已经太晚了，红利期已经过去了？", {
    x: 1.3, y: 1.1, w: 7.9, h: 0.9,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle"
  });
  // A section
  slide.addShape("roundRect", {
    x: 0.5, y: 2.3, w: 9, h: 2.6,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1.5 },
    rectRadius: 0.1
  });
  slide.addText("A", {
    x: 0.7, y: 2.4, w: 0.5, h: 0.5,
    fontSize: 28, fontFace: "Arial",
    color: theme.secondary, bold: true
  });
  slide.addText([
    { text: `不确定"红利期"这个说法对不对。如果指的是靠信息差轻松赚钱的阶段，确实已经过去了。`, options: { breakLine: true } },
    { text: ', options: { breakLine: true } },
    { text: "但如果问的是这份工作本身值不值得投入，判断是值得的——因为真正的核心价值（", options: {} },
    { text: "判断力、产业认知", options: { bold: true, color: theme.accent } },
    { text: "）的门槛不但没降低，反而因为AI把基础工作接管走变得更重要了。", options: { breakLine: true } },
    { text: ', options: { breakLine: true } },
    { text: "晚不晚取决于你打算靠哪部分活下去。", options: { bold: true } },
    { text: "靠信息差确实晚了；靠判断力什么时候开始都不算晚。", options: {} }
  ], {
    x: 1.3, y: 2.4, w: 7.9, h: 2.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top"
  });
  // Page number badge (circle, bottom-left)
  slide.addShape("ellipse", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("109", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-109-preview.pptx` }).then(() => console.log(`Created slide-109-preview.pptx`));
}
