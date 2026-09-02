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
    slide.addText("7", {
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

    slide.addText("提示词的作用", {
      x: 0.5, y: 0.2, w: 9, h: 0.5,
      fontSize: 26, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      margin: 0
    });

    // Core message
    slide.addText("你给AI的内容越具体，它生成的内容越贴合你的实际场景", {
      x: 0.5, y: 1.1, w: 9, h: 0.6,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center",
      margin: 0
    });

    // Two columns comparison
    // Left column - Fuzzy instruction
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: 1.85, w: 4.3, h: 2.8,
      fill: { color: "ffffff" },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.1
    });

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: 1.85, w: 4.3, h: 0.55,
      fill: { color: theme.accent }
    });

    slide.addText("模糊指令", {
      x: 0.5, y: 1.85, w: 4.3, h: 0.55,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center", valign: "middle",
      margin: 0
    });

    slide.addText("→", {
      x: 1.8, y: 2.6, w: 2.0, h: 0.6,
      fontSize: 36, fontFace: "Arial",
      color: theme.accent,
      align: "center",
      margin: 0
    });

    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 1.0, y: 3.3, w: 3.3, h: 1.1,
      fill: { color: theme.light },
      rectRadius: 0.08
    });

    slide.addText("通用输出", {
      x: 1.0, y: 3.3, w: 3.3, h: 1.1,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.accent,
      align: "center", valign: "middle",
      margin: 0
    });

    // Right column - Detailed instruction
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 5.2, y: 1.85, w: 4.3, h: 2.8,
      fill: { color: "ffffff" },
      line: { color: theme.secondary, width: 2 },
      rectRadius: 0.1
    });

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.2, y: 1.85, w: 4.3, h: 0.55,
      fill: { color: theme.secondary }
    });

    slide.addText("详细指令", {
      x: 5.2, y: 1.85, w: 4.3, h: 0.55,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center", valign: "middle",
      margin: 0
    });

    slide.addText("→", {
      x: 6.5, y: 2.6, w: 2.0, h: 0.6,
      fontSize: 36, fontFace: "Arial",
      color: theme.secondary,
      align: "center",
      margin: 0
    });

    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 5.7, y: 3.3, w: 3.3, h: 1.1,
      fill: { color: theme.secondary, transparency: 88 },
      line: { color: theme.secondary, width: 1 },
      rectRadius: 0.08
    });

    slide.addText("贴合实际的初稿", {
      x: 5.7, y: 3.3, w: 3.3, h: 1.1,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle",
      margin: 0
    });

    // Detail items under detailed instruction
    const details = ["客户特征", "触发情境", "合规边界", "关键经验素材"];
    details.forEach((item, i) => {
      slide.addText("• " + item, {
        x: 5.4, y: 4.55 + i * 0.28, w: 4, h: 0.28,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.accent,
        margin: 0
      });
    });
  },

  slideConfig: {
    title: "提示词的作用",
    layout: "LAYOUT_16x9",
    notes: ""
  }
};