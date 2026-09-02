// slide-02.js - Table of Contents
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'toc',
  index: 2,
  title: '课程全景图'
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
  slide.addText("课程全景图", {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("5个模块 · 90页精讲", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "left", valign: "middle"
  });

  // Divider line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.5, w: 2, h: 0.03,
    fill: { color: theme.accent }
  });

  // Module list
  const modules = [
    { num: "01", title: "先导部分", desc: "斯密是谁，为何重要" },
    { num: "02", title: "时代背景", desc: "18世纪苏格兰的启蒙运动" },
    { num: "03", title: "核心思想", desc: "看不见的手与道德哲学" },
    { num: "04", title: "现代回响", desc: "从哈耶克到弗里德曼" },
    { num: "05", title: "批判性反思", desc: "全球化时代的斯密" }
  ];

  const startY = 1.8;
  const rowHeight = 0.7;

  modules.forEach((mod, i) => {
    const y = startY + i * rowHeight;

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: y, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });

    slide.addText(mod.num, {
      x: 0.5, y: y, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Module title
    slide.addText(mod.title, {
      x: 1.2, y: y, w: 2.5, h: 0.5,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Module description
    slide.addText(mod.desc, {
      x: 3.7, y: y, w: 5, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "left", valign: "middle"
    });

    // Connector line
    if (i < modules.length - 1) {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 0.73, y: y + 0.5, w: 0.04, h: rowHeight - 0.5,
        fill: { color: theme.light, transparency: 50 }
      });
    }
  });

  // Right decorative element
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 9.0, y: 1.8, w: 0.8, h: 3.2,
    fill: { color: theme.light, transparency: 80 }
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });

  slide.addText("2", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Georgia",
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
  pres.writeFile({ fileName: "slide-02-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
