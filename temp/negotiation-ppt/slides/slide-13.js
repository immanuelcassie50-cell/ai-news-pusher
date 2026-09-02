// slide-13.js - 5个错误认知 - overview
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 13, title: '5 个错误认知' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M1 · 五个错误认知", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("你可能有的五个谈判错误认知", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("接下来的 5 页，每页拆解一个——识别它们，才知道该用什么样的正确认知替代", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // 5 error cards
  const errors = [
    { n: "01", t: "谈判是天生能力", a: "砍价思维：谁能耍赖谁赢" },
    { n: "02", t: "零和游戏，对方赢我就输", a: "分饼思维：固定一块饼" },
    { n: "03", t: "开价高了得罪人", a: "底线暴露：不敢要" },
    { n: "04", t: "开价要高，态度要硬", a: "强压思维：让别人怕我" },
    { n: "05", t: "谈判 = 对立，关系会僵", a: "短视思维：只顾这单" }
  ];

  errors.forEach((e, i) => {
    const x = 0.4 + (i % 5) * 1.88;
    const y = 1.75;
    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 1.78, h: 2.6,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // Top dark
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 1.78, h: 0.55,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(e.n, {
      x: x, y: y + 0.05, w: 1.78, h: 0.45,
      fontSize: 22, fontFace: "Arial",
      color: theme.accent, bold: true, align: "center"
    });
    // Title
    slide.addText(e.t, {
      x: x + 0.12, y: y + 0.7, w: 1.55, h: 0.7,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center", valign: "middle", lineSpacing: 17
    });
    // Divider
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.65, y: y + 1.45, w: 0.5, h: 0.02,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
    });
    // X mark and replace
    slide.addText("✕  错", {
      x: x + 0.12, y: y + 1.55, w: 1.55, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", bold: true
    });
    slide.addText(e.a, {
      x: x + 0.12, y: y + 1.9, w: 1.55, h: 0.6,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", italic: true, lineSpacing: 13
    });
  });

  // Footer
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.6, w: 9.2, h: 0.55,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("接下来 5 页：每个错误认知配一个真实案例 + 正确替代认知", {
    x: 0.6, y: 4.6, w: 8.8, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("13", {
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
  pres.writeFile({ fileName: "slide-13-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
