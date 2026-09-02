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
    slide.addText("11", {
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

    slide.addText("话术质量判断 · 认知自测", {
      x: 0.5, y: 0.2, w: 9, h: 0.5,
      fontSize: 26, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      margin: 0
    });

    // Scenario box
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: 1.05, w: 9, h: 0.8,
      fill: { color: theme.light },
      rectRadius: 0.08
    });

    slide.addText("场景：市场单日大跌超3%，持仓有亏损的高净值客户主动打来电话，语气有些激动", {
      x: 0.7, y: 1.05, w: 8.6, h: 0.8,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle",
      margin: 0
    });

    // Three version cards
    const versions = [
      { label: "A", text: "王总您好，今天市场确实比较大的调整，但这是正常的市场波动..." },
      { label: "B", text: "王总您好，今天市场很不好，我也一直关注着您的账户情况..." },
      { label: "C", text: "王总您好，我今天正想联系您。看到今天的行情..." }
    ];

    versions.forEach((v, i) => {
      const x = 0.5 + i * 3.1;

      // Card
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: x, y: 2.0, w: 2.9, h: 2.6,
        fill: { color: "ffffff" },
        line: { color: theme.light, width: 1 },
        rectRadius: 0.1
      });

      // Version label
      slide.addShape(pres.shapes.OVAL, {
        x: x + 1.1, y: 2.2, w: 0.7, h: 0.7,
        fill: { color: theme.secondary }
      });
      slide.addText(v.label, {
        x: x + 1.1, y: 2.2, w: 0.7, h: 0.7,
        fontSize: 24, fontFace: "Arial",
        color: "ffffff", bold: true,
        align: "center", valign: "middle",
        margin: 0
      });

      // Text
      slide.addText(v.text, {
        x: x + 0.15, y: 3.1, w: 2.6, h: 1.4,
        fontSize: 13, fontFace: "Microsoft YaHei",
        color: theme.primary,
        valign: "top",
        margin: 0
      });
    });

    // Footer
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: 4.8, w: 2.5, h: 0.45,
      fill: { color: theme.accent },
      rectRadius: 0.08
    });

    slide.addText("第一级难度 · 8分钟", {
      x: 0.5, y: 4.8, w: 2.5, h: 0.45,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center", valign: "middle",
      margin: 0
    });
  },

  slideConfig: {
    title: "话术质量判断 · 认知自测",
    layout: "LAYOUT_16x9",
    notes: ""
  }
};