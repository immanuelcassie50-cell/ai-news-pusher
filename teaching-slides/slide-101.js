const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("工具组合应用指南", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("不同目标场景下的工具组合策略", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Tool combinations - 5 cards in a grid
  const combinations = [
    { num: "01", title: "意见收集", tools: "静默书写 + 分类排序", desc: "让每个人独立思考后，再集体归类", color: theme.accent },
    { num: "02", title: "深度讨论", tools: "ORID + 六帽", desc: "从事实到情感，从分析到创造", color: theme.primary },
    { num: "03", title: "决策制定", tools: "六帽 + 利益相关方", desc: "全面考量不同立场的影响", color: "#43aa8b" },
    { num: "04", title: "项目复盘", tools: "AAR + ORID", desc: "还原过程，洞察本质", color: theme.secondary },
    { num: "05", title: "团队融合", tools: "团队诊断 + ORID", desc: "发现问题，促进信任", color: "#e07a5f" }
  ];

  // Layout: 2 columns
  combinations.forEach((item, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.4 + col * 4.8;
    const y = 1.55 + row * 1.25;

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.5, h: 1.1,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Left accent bar
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.12, h: 1.1,
      fill: { color: item.color }
    });

    // Number badge
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.25, y: y + 0.25, w: 0.55, h: 0.55,
      fill: { color: item.color }
    });
    slide.addText(item.num, {
      x: x + 0.25, y: y + 0.25, w: 0.55, h: 0.55,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(item.title, {
      x: x + 0.95, y: y + 0.15, w: 3.3, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Tools
    slide.addText(item.tools, {
      x: x + 0.95, y: y + 0.48, w: 3.3, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: item.color, bold: true
    });

    // Description
    slide.addText(item.desc, {
      x: x + 0.95, y: y + 0.75, w: 3.3, h: 0.25,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom insight
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 5.0, w: 9.2, h: 0.7,
    fill: { color: theme.light }
  });
  slide.addText("组合思维", {
    x: 0.6, y: 5.05, w: 1.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("工具组合不是简单叠加，而是根据目标选择互补的工具链，发挥1+1>2的效果", {
    x: 0.6, y: 5.32, w: 8.8, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  return slide;
}

module.exports = { createSlide };
