// slide-113.js - 模块四过渡页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section',
  index: 113,
  title: '模块四：试真'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Large decorative shape on left
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 3.5, h: 5.625,
    fill: { color: theme.accent }
  });

  // Module number
  slide.addText("模块四", {
    x: 0.3, y: 1.5, w: 2.9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Module name in Chinese
  slide.addText("试真", {
    x: 0.3, y: 2.1, w: 2.9, h: 1.0,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // English subtitle
  slide.addText("Validation", {
    x: 0.3, y: 3.0, w: 2.9, h: 0.5,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF"
  });

  // Decorative line on right side
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.0, y: 1.5, w: 0.08, h: 3.0,
    fill: { color: theme.light }
  });

  // Main title on right
  slide.addText("验证价值的最后一公里", {
    x: 4.4, y: 1.5, w: 5.2, h: 0.8,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText("验证创新的商业价值和社会价值", {
    x: 4.4, y: 2.3, w: 5.2, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Core question box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.4, y: 3.0, w: 5.2, h: 1.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.12 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.4, y: 3.0, w: 5.2, h: 0.06,
    fill: { color: theme.accent }
  });
  slide.addText("核心问题", {
    x: 4.6, y: 3.15, w: 1.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("如何验证创新方案真正有效？", {
    x: 4.6, y: 3.5, w: 4.8, h: 0.55,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Module preview
  slide.addText("模块预览", {
    x: 4.4, y: 4.4, w: 2, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const previewItems = ["市场验证", "用户验证", "商业验证", "价值验证"];
  previewItems.forEach((item, i) => {
    const x = 4.4 + i * 1.35;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: 4.8, w: 1.2, h: 0.4,
      fill: { color: theme.light },
      rectRadius: 0.05
    });
    slide.addText(item, {
      x: x, y: 4.8, w: 1.2, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, align: "center", valign: "middle"
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: "FFFFFF" }
  });
  slide.addText("113", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "333333",
    secondary: "666666",
    accent: "C41A1A",
    light: "D9D9D9",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-113-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
