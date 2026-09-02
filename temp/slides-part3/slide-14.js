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
    slide.addText("14", {
      x: 9.3, y: 5.1, w: 0.5, h: 0.35,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle",
      margin: 0
    });

    // Header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 0.9,
      fill: { color: theme.primary }
    });

    slide.addText("共情和懂得的区别", {
      x: 0.5, y: 0.2, w: 9, h: 0.5,
      fontSize: 26, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      margin: 0
    });

    // Two circles diagram
    // Left circle - 共情
    slide.addShape(pres.shapes.OVAL, {
      x: 1.5, y: 1.5, w: 2.5, h: 2.5,
      fill: { color: theme.accent, transparency: 60 },
      line: { color: theme.accent, width: 2 }
    });
    slide.addText("共情", {
      x: 1.5, y: 2.2, w: 2.5, h: 0.6,
      fontSize: 24, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center",
      margin: 0
    });
    slide.addText("往上看", {
      x: 1.5, y: 2.8, w: 2.5, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.accent,
      align: "center",
      margin: 0
    });

    // VS
    slide.addText("VS", {
      x: 4.2, y: 2.4, w: 1, h: 0.6,
      fontSize: 24, fontFace: "Arial",
      color: theme.secondary, bold: true,
      align: "center",
      margin: 0
    });

    // Right circle - 懂得
    slide.addShape(pres.shapes.OVAL, {
      x: 5.5, y: 1.5, w: 2.5, h: 2.5,
      fill: { color: theme.secondary, transparency: 80 },
      line: { color: theme.secondary, width: 2 }
    });
    slide.addText("懂得", {
      x: 5.5, y: 2.2, w: 2.5, h: 0.6,
      fontSize: 24, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center",
      margin: 0
    });
    slide.addText("平视", {
      x: 5.5, y: 2.8, w: 2.5, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center",
      margin: 0
    });

    // Key insight box
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: 4.2, w: 9, h: 1.1,
      fill: { color: theme.secondary, transparency: 92 },
      line: { color: theme.secondary, width: 2 },
      rectRadius: 0.1
    });

    slide.addText("客户不需要被同情，他需要被懂得。", {
      x: 0.8, y: 4.3, w: 8.4, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center",
      margin: 0
    });

    slide.addText("「您不用太担心」这句话，是在替客户决定他该有什么情绪——这件事，只有他自己能决定。", {
      x: 0.8, y: 4.8, w: 8.4, h: 0.45,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.accent,
      align: "center",
      margin: 0
    });
  },

  slideConfig: {
    title: "共情和懂得的区别",
    layout: "LAYOUT_16x9",
    notes: ""
  }
};