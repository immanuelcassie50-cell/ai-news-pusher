const { pptxgen } = require("pptxgenjs");

module.exports = {
  createSlide: (pres) => {
    const slide = pres.addSlide();
    const theme = {
      primary: "22223b",
      secondary: "c94134",
      accent: "c9ada7",
      light: "f5f5f5",
      bg: "fafafa"
    };

    // Light background
    slide.background = { color: theme.bg };

    // Top accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 0.12,
      fill: { color: theme.secondary }
    });

    // Left decorative element - vertical line
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: 1.2, w: 0.04, h: 2.8,
      fill: { color: theme.secondary }
    });

    // Main title
    slide.addText("AI辅助生成——话术与SOP", {
      x: 0.9, y: 1.5, w: 8.5, h: 1.2,
      fontSize: 44, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      margin: 0
    });

    // Subtitle
    slide.addText("高净值客户服务经验萃取工作坊 · 第三部分", {
      x: 0.9, y: 2.7, w: 8.5, h: 0.6,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: theme.accent,
      margin: 0
    });

    // Bottom section with company name
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 4.8, w: 10, h: 0.825,
      fill: { color: theme.primary }
    });

    slide.addText("招商证券", {
      x: 0.6, y: 4.95, w: 3, h: 0.5,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      margin: 0
    });

    // Decorative circles on right
    slide.addShape(pres.shapes.OVAL, {
      x: 7.8, y: 1.5, w: 1.8, h: 1.8,
      fill: { color: theme.secondary, transparency: 85 }
    });

    slide.addShape(pres.shapes.OVAL, {
      x: 8.4, y: 2.4, w: 1.2, h: 1.2,
      fill: { color: theme.accent, transparency: 70 }
    });
  },

  slideConfig: {
    title: "AI辅助生成——话术与SOP",
    layout: "LAYOUT_16x9",
    notes: ""
  }
};