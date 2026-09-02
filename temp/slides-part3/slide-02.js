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
    slide.addText("2", {
      x: 9.3, y: 5.1, w: 0.5, h: 0.35,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle",
      margin: 0
    });

    // Header bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 0.9,
      fill: { color: theme.primary }
    });

    slide.addText("本部分学习地图", {
      x: 0.5, y: 0.2, w: 9, h: 0.5,
      fontSize: 26, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      margin: 0
    });

    // Content area
    slide.addText("目录", {
      x: 0.5, y: 1.2, w: 9, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      margin: 0
    });

    // Three chapters in cards
    const chapters = [
      { num: "09", title: "AI生成的工作原理", sub: "理解AI在这里能做什么、不能做什么" },
      { num: "10", title: "服务话术模板的生成与优化", sub: "使用提示词生成话术，人工验证和优化" },
      { num: "11", title: "服务SOP的生成与优化", sub: "把经验固化成可执行的操作流程" }
    ];

    chapters.forEach((ch, i) => {
      const y = 1.85 + i * 1.1;

      // Card background
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 0.5, y: y, w: 9, h: 0.95,
        fill: { color: "ffffff" },
        line: { color: theme.light, width: 1 },
        rectRadius: 0.08
      });

      // Chapter number circle
      slide.addShape(pres.shapes.OVAL, {
        x: 0.7, y: y + 0.2, w: 0.55, h: 0.55,
        fill: { color: theme.secondary }
      });
      slide.addText(ch.num, {
        x: 0.7, y: y + 0.2, w: 0.55, h: 0.55,
        fontSize: 14, fontFace: "Arial",
        color: "ffffff", bold: true,
        align: "center", valign: "middle",
        margin: 0
      });

      // Title
      slide.addText(ch.title, {
        x: 1.5, y: y + 0.15, w: 7.8, h: 0.4,
        fontSize: 18, fontFace: "Microsoft YaHei",
        color: theme.primary, bold: true,
        margin: 0
      });

      // Subtitle
      slide.addText(ch.sub, {
        x: 1.5, y: y + 0.55, w: 7.8, h: 0.35,
        fontSize: 13, fontFace: "Microsoft YaHei",
        color: theme.accent,
        margin: 0
      });
    });
  },

  slideConfig: {
    title: "本部分学习地图",
    layout: "LAYOUT_16x9",
    notes: ""
  }
};