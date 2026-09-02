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

    slide.background = { color: theme.bg };

    // Page badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 9.3, y: 5.1, w: 0.5, h: 0.35,
      fill: { color: theme.secondary },
      rectRadius: 0.08
    });
    slide.addText("3", {
      x: 9.3, y: 5.1, w: 0.5, h: 0.35,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle",
      margin: 0
    });

    // Large chapter number
    slide.addText("09", {
      x: 0.5, y: 0.8, w: 3, h: 1.8,
      fontSize: 96, fontFace: "Arial",
      color: theme.secondary, bold: true,
      margin: 0
    });

    // Vertical accent line
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 3.3, y: 1.0, w: 0.04, h: 2.2,
      fill: { color: theme.accent }
    });

    // Chapter title
    slide.addText("AI生成的工作原理", {
      x: 3.6, y: 1.1, w: 6, h: 0.8,
      fontSize: 36, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      margin: 0
    });

    // Subtitle
    slide.addText("理解AI在这里能做什么、不能做什么", {
      x: 3.6, y: 1.9, w: 6, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.accent,
      margin: 0
    });

    // Decorative elements
    slide.addShape(pres.shapes.OVAL, {
      x: 7.5, y: 3.5, w: 2.2, h: 2.2,
      fill: { color: theme.secondary, transparency: 90 }
    });

    slide.addShape(pres.shapes.OVAL, {
      x: 8.2, y: 3.8, w: 1.5, h: 1.5,
      fill: { color: theme.accent, transparency: 75 }
    });

    // Bottom bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 5.0, w: 10, h: 0.625,
      fill: { color: theme.primary }
    });

    slide.addText("第 9 章", {
      x: 0.5, y: 5.15, w: 2, h: 0.35,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "ffffff",
      margin: 0
    });
  },

  slideConfig: {
    title: "09 - AI生成的工作原理",
    layout: "LAYOUT_16x9",
    notes: ""
  }
};