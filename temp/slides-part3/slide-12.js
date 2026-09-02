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
    slide.addText("12", {
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

    slide.addText("话术版本深度解析", {
      x: 0.5, y: 0.2, w: 9, h: 0.5,
      fontSize: 26, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      margin: 0
    });

    // Version C is best badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: 1.1, w: 1.8, h: 0.45,
      fill: { color: theme.secondary },
      rectRadius: 0.08
    });

    slide.addText("版本C最佳", {
      x: 0.5, y: 1.1, w: 1.8, h: 0.45,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center", valign: "middle",
      margin: 0
    });

    // Three layers
    const layers = [
      { num: "1", title: "主动性", desc: "我今天正想联系您", color: theme.secondary },
      { num: "2", title: "情绪接住", desc: "这种感受完全理解", color: theme.secondary },
      { num: "3", title: "让客户先说", desc: "您能跟我说说您最主要的顾虑是什么吗", color: theme.secondary }
    ];

    layers.forEach((layer, i) => {
      const y = 1.7 + i * 1.0;

      // Layer card
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 0.5, y: y, w: 9, h: 0.85,
        fill: { color: "ffffff" },
        line: { color: theme.light, width: 1 },
        rectRadius: 0.08
      });

      // Left accent
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 0.5, y: y, w: 0.1, h: 0.85,
        fill: { color: theme.secondary }
      });

      // Number
      slide.addText(layer.num, {
        x: 0.8, y: y + 0.15, w: 0.5, h: 0.55,
        fontSize: 28, fontFace: "Arial",
        color: theme.secondary, bold: true,
        align: "center", valign: "middle",
        margin: 0
      });

      // Title
      slide.addText(layer.title, {
        x: 1.4, y: y + 0.15, w: 1.5, h: 0.55,
        fontSize: 18, fontFace: "Microsoft YaHei",
        color: theme.primary, bold: true,
        valign: "middle",
        margin: 0
      });

      // Desc
      slide.addText("「" + layer.desc + "」", {
        x: 3.0, y: y + 0.15, w: 6.3, h: 0.55,
        fontSize: 16, fontFace: "Microsoft YaHei",
        color: theme.accent,
        valign: "middle",
        margin: 0
      });
    });

    // Worst version note
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: 4.75, w: 9, h: 0.55,
      fill: { color: theme.light },
      rectRadius: 0.08
    });

    slide.addText("最差：版本A - 第一句话就开始上课，客户还没感觉到被接住，就开始听讲课", {
      x: 0.7, y: 4.75, w: 8.6, h: 0.55,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle",
      margin: 0
    });
  },

  slideConfig: {
    title: "话术版本深度解析",
    layout: "LAYOUT_16x9",
    notes: ""
  }
};