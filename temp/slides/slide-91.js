// slide-91.js - Chapter 12 Summary
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 91,
  title: '本章小结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Light gray background
  slide.background = { color: theme.bg };

  // Title
  slide.addText("本章小结", {
    x: 0.5, y: 0.4, w: 9, h: 0.8,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Summary card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.4, w: 9, h: 3.4,
    fill: { color: "FFFFFF" },
    rectRadius: 0.12,
    shadow: { type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.1 }
  });

  // Takeaway 1
  slide.addShape(pres.shapes.OVAL, {
    x: 0.8, y: 1.7, w: 0.45, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText("1", {
    x: 0.8, y: 1.7, w: 0.45, h: 0.45,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("选错专业是一次挫折，替他做选择是拿走机会", {
    x: 1.45, y: 1.7, w: 7.8, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    valign: "middle"
  });

  // Divider line
  slide.addShape(pres.shapes.LINE, {
    x: 0.8, y: 2.35, w: 8.4, h: 0,
    line: { color: theme.bg, width: 1 }
  });

  // Takeaway 2
  slide.addShape(pres.shapes.OVAL, {
    x: 0.8, y: 2.55, w: 0.45, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText("2", {
    x: 0.8, y: 2.55, w: 0.45, h: 0.45,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("结果正确不等于过程正确", {
    x: 1.45, y: 2.55, w: 7.8, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    valign: "middle"
  });

  // Divider line
  slide.addShape(pres.shapes.LINE, {
    x: 0.8, y: 3.2, w: 8.4, h: 0,
    line: { color: theme.bg, width: 1 }
  });

  // Takeaway 3
  slide.addShape(pres.shapes.OVAL, {
    x: 0.8, y: 3.4, w: 0.45, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText("3", {
    x: 0.8, y: 3.4, w: 0.45, h: 0.45,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("最大的风险：从“提供判断”变成“替他做决定”", {
    x: 1.45, y: 3.4, w: 7.8, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    valign: "middle"
  });

  // Divider line
  slide.addShape(pres.shapes.LINE, {
    x: 0.8, y: 4.05, w: 8.4, h: 0,
    line: { color: theme.bg, width: 1 }
  });

  // Takeaway 4
  slide.addShape(pres.shapes.OVAL, {
    x: 0.8, y: 4.25, w: 0.45, h: 0.45,
    fill: { color: theme.accent }
  });
  slide.addText("4", {
    x: 0.8, y: 4.25, w: 0.45, h: 0.45,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("最后一句话要由孩子自己说出口", {
    x: 1.45, y: 4.25, w: 7.8, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    valign: "middle"
  });

  // Page number badge - circle style, bottom-left
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("91", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-91-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
