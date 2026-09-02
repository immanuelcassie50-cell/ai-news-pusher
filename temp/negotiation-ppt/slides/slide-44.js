// slide-44.js - M3 章节封面
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'section', index: 44, title: '模块 3：谈判前准备' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  slide.addText("M3", {
    x: 0.6, y: 0.6, w: 3.5, h: 2.5,
    fontSize: 200, fontFace: "Arial",
    color: theme.accent, bold: true
  });

  slide.addText("MODULE  THREE", {
    x: 4.0, y: 1.4, w: 5, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.accent, charSpacing: 8
  });

  slide.addText("谈判前准备", {
    x: 4.0, y: 1.8, w: 5.5, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("BATNA · 三个数字 · 六张牌 · 八步法", {
    x: 4.0, y: 2.7, w: 5.5, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  slide.addShape("rect", {
    x: 4.0, y: 3.3, w: 1, h: 0.02,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  slide.addText("核心内容：", {
    x: 4.0, y: 3.45, w: 5.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("·  BATNA 的概念与对自身权力的影响\n·  三个数字：期望值 / 底线 / BATNA\n·  六张可交换的牌：时间/信息/关系/退路/灵活/专业\n·  八步准备流程：从接到谈判到坐下来的所有动作\n·  现场演练：模拟一场谈判的准备", {
    x: 4.0, y: 3.75, w: 5.5, h: 1.2,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, lineSpacing: 16
  });

  slide.addText("学习时长：2-2.5 小时", {
    x: 0.6, y: 4.95, w: 6, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("44", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "1A2B4C", secondary: "8B5A3C", accent: "C9A961", light: "E8E0D0", bg: "FAF7F2" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-44-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
