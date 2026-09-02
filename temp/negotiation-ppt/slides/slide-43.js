// slide-43.js - 过渡到模块3
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 43, title: '过渡到 M3' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  slide.addShape("rect", {
    x: 0.4, y: 0.4, w: 0.5, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("TRANSITION", {
    x: 0.4, y: 0.55, w: 5, h: 0.3,
    fontSize: 11, fontFace: "Arial",
    color: theme.accent, charSpacing: 6
  });

  slide.addText("讲完了\"为什么要挖利益\"、\"怎么挖\"", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.55,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });
  slide.addText("——下一个问题：坐下来谈之前，", {
    x: 0.4, y: 1.9, w: 9.2, h: 0.55,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("你该怎么准备？", {
    x: 0.4, y: 2.5, w: 9.2, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addShape("rect", {
    x: 0.4, y: 3.5, w: 1.5, h: 0.02,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  slide.addText("模块 3：谈判前准备", {
    x: 0.4, y: 3.7, w: 9.2, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("——BATNA、三个数字、六张牌、八步法", {
    x: 0.4, y: 4.1, w: 9.2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Next preview
  slide.addShape("rect", {
    x: 0.4, y: 4.6, w: 9.2, h: 0.6,
    fill: { color: "FFFFFF" }, line: { color: "FFFFFF", width: 0 }
  });
  slide.addText("\"准备充分，谈判就赢了一半\"——M3 会让你成为那个永远准备充分的人", {
    x: 0.6, y: 4.6, w: 8.7, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, bold: true, valign: "middle"
  });

  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("43", {
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
  pres.writeFile({ fileName: "slide-43-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
