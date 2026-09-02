// slide-110.js - Q&A: Talent
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "8B0000",    // deep red
  secondary: "333333",  // dark gray
  accent: "C41E3A",     // bright red
  light: "999999",      // gray
  bg: "F5F5F5"          // light gray background
};
const slideConfig = { type: `content`, index: 110, title: `Q&A：怎么判断天赋` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  // Top accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });
  // Title
  slide.addText("Q&A：怎么判断天赋", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  // Q section
  slide.addShape("roundRect", {
    x: 0.5, y: 1.0, w: 9, h: 0.9,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });
  slide.addText("Q", {
    x: 0.7, y: 1.1, w: 0.5, h: 0.5,
    fontSize: 28, fontFace: "Arial",
    color: "FFFFFF", bold: true
  });
  slide.addText("怎么判断自己在这行到底有没有天赋，还是说这件事纯粹靠积累？", {
    x: 1.3, y: 1.1, w: 7.9, h: 0.7,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle"
  });
  // A section
  slide.addShape("roundRect", {
    x: 0.5, y: 2.1, w: 9, h: 2.8,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1.5 },
    rectRadius: 0.1
  });
  slide.addText("A", {
    x: 0.7, y: 2.2, w: 0.5, h: 0.5,
    fontSize: 28, fontFace: "Arial",
    color: theme.secondary, bold: true
  });
  slide.addText([
    { text: `对"具体的人为什么会做出这个选择"这件事`, options: { breakLine: true } },
    { text: "天然有好奇心，愿意多问一句、多琢磨一下", options: { bold: true, color: theme.accent } },
    { text: "——这是好信号。", options: { breakLine: true } },
    { text: ', options: { breakLine: true } },
    { text: "如果更享受处理数据和规则本身，可能更适合往技术方向走。", options: { breakLine: true } },
    { text: ', options: { breakLine: true } },
    { text: "还有一点：", options: {} },
    { text: "这种好奇心不是一成不变的天赋标签，可以通过刻意练习培养。", options: { bold: true } }
  ], {
    x: 1.3, y: 2.2, w: 7.9, h: 2.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top"
  });
  // Page number badge (circle, bottom-left)
  slide.addShape("ellipse", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("110", {
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
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-110-preview.pptx` }).then(() => console.log(`Created slide-110-preview.pptx`));
}
