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
    slide.addText("5", {
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

    slide.addText("AI在这个环节做不了什么", {
      x: 0.5, y: 0.2, w: 9, h: 0.5,
      fontSize: 26, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      margin: 0
    });

    // Warning cards
    const warnings = [
      {
        num: "1",
        title: "不能判断经验是否真实有效",
        desc: "不了解你的具体客户和市场环境"
      },
      {
        num: "2",
        title: "不能确保合规",
        desc: "涉及产品表述、收益描述、适当性的内容，必须经过顾问和合规部门审核"
      },
      {
        num: "3",
        title: "不能代替你的判断",
        desc: "它是工具，不是决策者"
      }
    ];

    warnings.forEach((item, i) => {
      const y = 1.15 + i * 1.35;

      // Card background with left accent
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 0.5, y: y, w: 9, h: 1.2,
        fill: { color: "ffffff" },
        line: { color: theme.secondary, width: 2 },
        rectRadius: 0.1
      });

      // Left accent bar
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 0.5, y: y, w: 0.12, h: 1.2,
        fill: { color: theme.secondary }
      });

      // Warning icon circle
      slide.addShape(pres.shapes.OVAL, {
        x: 0.85, y: y + 0.35, w: 0.5, h: 0.5,
        fill: { color: theme.secondary }
      });
      slide.addText(item.num, {
        x: 0.85, y: y + 0.35, w: 0.5, h: 0.5,
        fontSize: 18, fontFace: "Arial",
        color: "ffffff", bold: true,
        align: "center", valign: "middle",
        margin: 0
      });

      // Title
      slide.addText(item.title, {
        x: 1.55, y: y + 0.15, w: 7.7, h: 0.5,
        fontSize: 20, fontFace: "Microsoft YaHei",
        color: theme.primary, bold: true,
        margin: 0
      });

      // Description
      slide.addText(item.desc, {
        x: 1.55, y: y + 0.65, w: 7.7, h: 0.45,
        fontSize: 14, fontFace: "Microsoft YaHei",
        color: theme.accent,
        margin: 0
      });
    });
  },

  slideConfig: {
    title: "AI在这个环节做不了什么",
    layout: "LAYOUT_16x9",
    notes: ""
  }
};