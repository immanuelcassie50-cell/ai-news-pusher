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
    slide.addText("9", {
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

    slide.addText("什么是好的服务话术", {
      x: 0.5, y: 0.2, w: 9, h: 0.5,
      fontSize: 26, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      margin: 0
    });

    // Three standards as cards
    const standards = [
      {
        num: "1",
        title: "场景触发明确",
        desc: "读者一看就知道这套话术用在什么情况下"
      },
      {
        num: "2",
        title: "表达自然流畅",
        desc: "读起来像真人在说话，而不是念稿子"
      },
      {
        num: "3",
        title: "覆盖变体和雷区",
        desc: "包括客户可能的典型反应和应对方式，以及明确的'绝对不能说'清单"
      }
    ];

    standards.forEach((item, i) => {
      const x = 0.5 + i * 3.1;

      // Card
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: x, y: 1.2, w: 2.9, h: 3.6,
        fill: { color: "ffffff" },
        line: { color: theme.light, width: 1 },
        rectRadius: 0.1
      });

      // Top accent
      slide.addShape(pres.shapes.RECTANGLE, {
        x: x, y: 1.2, w: 2.9, h: 0.08,
        fill: { color: theme.secondary }
      });

      // Number circle
      slide.addShape(pres.shapes.OVAL, {
        x: x + 1.05, y: 1.5, w: 0.8, h: 0.8,
        fill: { color: theme.secondary }
      });
      slide.addText(item.num, {
        x: x + 1.05, y: 1.5, w: 0.8, h: 0.8,
        fontSize: 28, fontFace: "Arial",
        color: "ffffff", bold: true,
        align: "center", valign: "middle",
        margin: 0
      });

      // Title
      slide.addText(item.title, {
        x: x + 0.15, y: 2.5, w: 2.6, h: 0.7,
        fontSize: 17, fontFace: "Microsoft YaHei",
        color: theme.primary, bold: true,
        align: "center",
        margin: 0
      });

      // Description
      slide.addText(item.desc, {
        x: x + 0.15, y: 3.3, w: 2.6, h: 1.3,
        fontSize: 13, fontFace: "Microsoft YaHei",
        color: theme.accent,
        align: "center",
        margin: 0
      });
    });
  },

  slideConfig: {
    title: "什么是好的服务话术",
    layout: "LAYOUT_16x9",
    notes: ""
  }
};