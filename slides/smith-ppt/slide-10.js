// slide-10.js - Summary Page: 先导部分小结
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 10,
  title: '先导部分小结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Page title
  slide.addText("先导部分小结", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("模块一完结", {
    x: 0.5, y: 0.95, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "left", valign: "middle"
  });

  // Key takeaways - numbered list
  const takeaways = [
    { num: "01", title: "斯密的双重身份", desc: "既是经济学之父，也是道德哲学家；《国富论》与《道德情操论》不可分割" },
    { num: "02", title: "时代塑造思想", desc: "18世纪苏格兰启蒙运动孕育了斯密的问题意识——商业革命、理性主义、道德危机" },
    { num: "03", title: "三大核心概念", desc: "看不见的手、分工与专业化、公正的旁观者——构成斯密思想的基石" },
    { num: "04", title: "多元解读可能", desc: "自由市场者、制度主义者、道德哲学家、批判理论家——各有其斯密" }
  ];

  const startY = 1.5;
  const itemHeight = 0.85;

  takeaways.forEach((item, i) => {
    const y = startY + i * itemHeight;

    // Number badge
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.55, h: 0.55,
      fill: { color: i < 2 ? theme.primary : theme.accent }
    });

    slide.addText(item.num, {
      x: 0.5, y: y, w: 0.55, h: 0.55,
      fontSize: 16, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(item.title, {
      x: 1.2, y: y, w: 3, h: 0.35,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(item.desc, {
      x: 1.2, y: y + 0.32, w: 8.3, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "left", valign: "top"
    });
  });

  // Transition box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.85, w: 9, h: 0.55,
    fill: { color: theme.secondary }
  });

  slide.addText("下一模块：斯密的时代背景 — 18世纪苏格兰启蒙运动", {
    x: 0.5, y: 4.85, w: 9, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });

  slide.addText("10", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "780000",
    secondary: "003049",
    accent: "c1121f",
    light: "669bbc",
    bg: "fdf0d5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-10-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
