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
    slide.addText("4", {
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

    slide.addText("AI在这个环节能做什么", {
      x: 0.5, y: 0.2, w: 9, h: 0.5,
      fontSize: 26, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      margin: 0
    });

    // Content items - two columns
    const items = [
      { title: "快速结构化", desc: "把散乱的访谈素材，转化成话术、SOP、案例框架" },
      { title: "基于场景生成", desc: "根据你提供的场景信息生成初稿" },
      { title: "输出多个变体", desc: "同时输出多种方案供选择" },
      { title: "流程转化", desc: "把文字话术转化成带判断节点的操作流程" },
      { title: "效率提升", desc: "把原本需要3-4周的初稿工作，压缩到几个小时" }
    ];

    items.forEach((item, i) => {
      const col = i < 3 ? 0 : 1;
      const row = i < 3 ? i : i - 3;
      const x = col === 0 ? 0.5 : 5.2;
      const y = 1.15 + row * 1.35;

      // Card
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: x, y: y, w: 4.5, h: 1.2,
        fill: { color: "ffffff" },
        line: { color: theme.light, width: 1 },
        rectRadius: 0.1
      });

      // Number circle
      slide.addShape(pres.shapes.OVAL, {
        x: x + 0.15, y: y + 0.35, w: 0.5, h: 0.5,
        fill: { color: theme.secondary }
      });
      slide.addText(String(i + 1), {
        x: x + 0.15, y: y + 0.35, w: 0.5, h: 0.5,
        fontSize: 16, fontFace: "Arial",
        color: "ffffff", bold: true,
        align: "center", valign: "middle",
        margin: 0
      });

      // Title
      slide.addText(item.title, {
        x: x + 0.8, y: y + 0.15, w: 3.5, h: 0.45,
        fontSize: 17, fontFace: "Microsoft YaHei",
        color: theme.primary, bold: true,
        margin: 0
      });

      // Description
      slide.addText(item.desc, {
        x: x + 0.8, y: y + 0.6, w: 3.5, h: 0.5,
        fontSize: 13, fontFace: "Microsoft YaHei",
        color: theme.accent,
        margin: 0
      });
    });

    // Visual flow at bottom
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 1.5, y: 4.7, w: 7, h: 0.55,
      fill: { color: theme.light },
      rectRadius: 0
    });

    const flowLabels = ["Raw Material", "AI Processing", "Structured Output"];
    const flowX = [1.8, 4.3, 6.8];
    flowLabels.forEach((label, i) => {
      slide.addText(label, {
        x: flowX[i], y: 4.78, w: 1.8, h: 0.4,
        fontSize: 12, fontFace: "Arial",
        color: theme.primary, bold: true,
        align: "center",
        margin: 0
      });

      if (i < 2) {
        slide.addText("→", {
          x: flowX[i] + 1.7, y: 4.78, w: 0.5, h: 0.4,
          fontSize: 20, fontFace: "Arial",
          color: theme.secondary, bold: true,
          align: "center",
          margin: 0
        });
      }
    });
  },

  slideConfig: {
    title: "AI在这个环节能做什么",
    layout: "LAYOUT_16x9",
    notes: ""
  }
};