// slide-44.js - 关于步骤颗粒度的判断
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 44,
  title: '关于步骤颗粒度的判断'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("关于步骤颗粒度的判断", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape("rect", {
    x: 0.5, y: 1.05, w: 1.5, h: 0.05,
    fill: { color: theme.accent }
  });

  // Rule card
  slide.addShape("rect", {
    x: 0.5, y: 1.35, w: 9, h: 1.3,
    fill: { color: theme.secondary }
  });
  slide.addText("Rule", {
    x: 0.7, y: 1.45, w: 1, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true
  });
  slide.addText([
    { text: "如果一个步骤的\"做法\"部分超过了5句话，考虑把它拆成两步。", options: { breakLine: true } },
    { text: "如果一个步骤描述得很短但你实际上需要做很多不同的判断，考虑把它展开。" }
  ], {
    x: 0.7, y: 1.85, w: 8.6, h: 0.7,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Good SOP quote
  slide.addShape("rect", {
    x: 0.5, y: 2.85, w: 9, h: 0.9,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.85, w: 0.08, h: 0.9,
    fill: { color: theme.accent }
  });
  slide.addText("Good SOP step:", {
    x: 0.8, y: 2.95, w: 2, h: 0.35,
    fontSize: 14, fontFace: "Arial",
    color: theme.secondary, bold: true
  });
  slide.addText("\"一个步骤，一件事，一个判断\"", {
    x: 0.8, y: 3.3, w: 8.4, h: 0.35,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Visual diagram - two scenarios
  // Too long
  slide.addShape("rect", {
    x: 0.5, y: 4.0, w: 4.3, h: 1.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 4.0, w: 4.3, h: 0.4,
    fill: { color: theme.light }
  });
  slide.addText("步骤做法 > 5句话", {
    x: 0.5, y: 4.0, w: 4.3, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });
  slide.addText("拆成两步", {
    x: 0.5, y: 4.5, w: 4.3, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center", valign: "middle"
  });

  // Too short
  slide.addShape("rect", {
    x: 5.2, y: 4.0, w: 4.3, h: 1.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });
  slide.addShape("rect", {
    x: 5.2, y: 4.0, w: 4.3, h: 0.4,
    fill: { color: theme.light }
  });
  slide.addText("短但多判断", {
    x: 5.2, y: 4.0, w: 4.3, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });
  slide.addText("展开描述", {
    x: 5.2, y: 4.5, w: 4.3, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("44", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
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
    primary: "22223b",
    secondary: "c94134",
    accent: "c9ada7",
    light: "f5f5f5",
    bg: "fafafa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides-part3/slide-44-preview.pptx" });
}

module.exports = { createSlide, slideConfig };