const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("模块四：效果衡量 — ROI计算模板", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // ROI formula
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.05, w: 9, h: 0.7,
    fill: { color: theme.accent, transparency: 15 }
  });

  slide.addText("ROI计算公式", {
    x: 0.7, y: 1.15, w: 2, h: 0.25,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("ROI = (总收益 - 总成本) / 总成本 × 100%", {
    x: 0.7, y: 1.4, w: 8.6, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.dark, bold: true
  });

  // ROI components
  const components = [
    {
      title: "收益项",
      items: ["效率提升节省的成本", "质量提升带来的价值", "时间节省的机会成本", "创新能力提升的价值"],
      color: theme.green,
      x: 0.5
    },
    {
      title: "成本项",
      items: ["AI工具订阅费用", "培训投入成本", "人力时间成本", "维护和调整成本"],
      color: theme.warm,
      x: 5.0
    }
  ];

  components.forEach((comp) => {
    slide.addShape(pres.ShapeType.rect, {
      x: comp.x, y: 1.95, w: 4.3, h: 2.2,
      fill: { color: "ffffff" },
      line: { color: comp.color, width: 2 }
    });

    slide.addShape(pres.ShapeType.rect, {
      x: comp.x, y: 1.95, w: 4.3, h: 0.45,
      fill: { color: comp.color }
    });

    slide.addText(comp.title, {
      x: comp.x + 0.2, y: 2.03, w: 3.9, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true
    });

    comp.items.forEach((item, i) => {
      slide.addText("• " + item, {
        x: comp.x + 0.3, y: 2.5 + i * 0.4, w: 3.7, h: 0.35,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.dark
      });
    });
  });

  // Example calculation
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.3, w: 9, h: 1.2,
    fill: { color: theme.light }
  });

  slide.addText("计算示例", {
    x: 0.7, y: 4.4, w: 2, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("收益项：效率提升节省¥50万 + 质量提升价值¥20万 + 机会成本¥10万 = 总收益¥80万", {
    x: 0.7, y: 4.7, w: 8.6, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.dark
  });

  slide.addText("成本项：AI工具¥15万 + 培训¥5万 + 人力¥10万 = 总成本¥30万", {
    x: 0.7, y: 4.95, w: 8.6, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.dark
  });

  slide.addText("ROI = (80 - 30) / 30 × 100% = 167%", {
    x: 0.7, y: 5.2, w: 8.6, h: 0.25,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.green, bold: true
  });

  return slide;
}

module.exports = { createSlide };
