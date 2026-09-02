const { pptxgen } = require("pptxgenjs");

module.exports = {
  createSlide: function(pres) {
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
    slide.addText("10", {
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

    slide.addText("话术和脚本的区别", {
      x: 0.5, y: 0.2, w: 9, h: 0.5,
      fontSize: 26, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      margin: 0
    });

    // Core insight box
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: 1.15, w: 9, h: 1.2,
      fill: { color: theme.secondary, transparency: 92 },
      line: { color: theme.secondary, width: 2 },
      rectRadius: 0.1
    });

    slide.addText("脚本是让你逐字背的，话术是让你理解逻辑、用自己的语言表达的", {
      x: 0.8, y: 1.15, w: 8.4, h: 1.2,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle",
      margin: 0
    });

    // Key point box
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: 2.6, w: 9, h: 1.8,
      fill: { color: "ffffff" },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.1
    });

    slide.addText("好的话术模板，核心价值是帮你理解", {
      x: 0.8, y: 2.8, w: 8.4, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary,
      align: "center",
      margin: 0
    });

    slide.addText("\"这一步的目的是什么、要避开什么\"", {
      x: 0.8, y: 3.3, w: 8.4, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center",
      margin: 0
    });

    slide.addText("而不是给你一个固定的台词。", {
      x: 0.8, y: 3.8, w: 8.4, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary,
      align: "center",
      margin: 0
    });

    // Contrast visual at bottom
    var contrastItems = [
      { label: "脚本", desc: "逐字背诵", color: theme.accent },
      { label: "话术", desc: "理解逻辑", color: theme.secondary }
    ];

    contrastItems.forEach(function(item, i) {
      var x = 2.5 + i * 4;

      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: x, y: 4.6, w: 2.0, h: 0.8,
        fill: { color: item.color },
        rectRadius: 0.08
      });

      slide.addText(item.label + " - " + item.desc, {
        x: x, y: 4.6, w: 2.0, h: 0.8,
        fontSize: 14, fontFace: "Microsoft YaHei",
        color: "ffffff", bold: true,
        align: "center", valign: "middle",
        margin: 0
      });
    });

    slide.addText("VS", {
      x: 4.3, y: 4.6, w: 0.8, h: 0.8,
      fontSize: 20, fontFace: "Arial",
      color: theme.primary, bold: true,
      align: "center", valign: "middle",
      margin: 0
    });
  },

  slideConfig: {
    title: "话术和脚本的区别",
    layout: "LAYOUT_16x9",
    notes: ""
  }
};