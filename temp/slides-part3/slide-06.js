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
    slide.addText("6", {
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

    slide.addText("核心使用原则", {
      x: 0.5, y: 0.2, w: 9, h: 0.5,
      fontSize: 26, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      margin: 0
    });

    // Large quote box
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.8, y: 1.3, w: 8.4, h: 2.0,
      fill: { color: theme.secondary, transparency: 92 },
      line: { color: theme.secondary, width: 3 },
      rectRadius: 0.12
    });

    // Quote marks
    slide.addText('"', {
      x: 1.0, y: 1.2, w: 0.6, h: 0.8,
      fontSize: 72, fontFace: "Georgia",
      color: theme.secondary,
      margin: 0
    });

    // Quote text
    slide.addText("AI生成的所有内容，都当做'待验证的草稿'", {
      x: 1.5, y: 1.7, w: 7.0, h: 1.0,
      fontSize: 26, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle",
      margin: 0
    });

    // Subtext box
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.8, y: 3.6, w: 8.4, h: 1.4,
      fill: { color: "ffffff" },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.1
    });

    slide.addText("不要因为看起来很整齐就直接使用，每一条话术、每一个步骤，都需要你用真实的服务经验来验证它是否准确可用。", {
      x: 1.1, y: 3.75, w: 7.8, h: 1.1,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.accent,
      align: "center", valign: "middle",
      margin: 0
    });

    // Decorative element
    slide.addShape(pres.shapes.OVAL, {
      x: 8.5, y: 4.5, w: 1.0, h: 1.0,
      fill: { color: theme.accent, transparency: 70 }
    });
  },

  slideConfig: {
    title: "核心使用原则",
    layout: "LAYOUT_16x9",
    notes: ""
  }
};