const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("第三模块小结", {
    x: 0.5, y: 0.2, w: 8.5, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei", color: "FFFFFF",
    bold: true
  });

  // Page number
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("55", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri", color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Module title
  slide.addText("斯密遗产在当代", {
    x: 0.5, y: 1.1, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei", color: theme.primary,
    bold: true, align: "center"
  });

  // Three pillars summary
  slide.addText("三大现代补充", {
    x: 0.5, y: 1.7, w: 9, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei", color: theme.accent,
    bold: true
  });

  const pillars = [
    {
      title: "制度经济学",
      key: "科斯、诺斯、威廉姆森",
      insight: "制度决定交易成本，影响经济绩效",
      quote: "制度是社会博弈的规则"
    },
    {
      title: "行为经济学",
      key: "卡尼曼、塞勒、西蒙",
      insight: "有限理性、社会偏好改变市场运作",
      quote: "人们不是理性的计算器"
    },
    {
      title: "信息经济学",
      key: "阿克洛夫、斯蒂格利茨",
      insight: "信息不对称导致市场失灵与信号博弈",
      quote: "信息是市场的心脏"
    }
  ];

  pillars.forEach((pillar, i) => {
    const x = 0.5 + i * 3.1;

    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: 2.1, w: 2.9, h: 2.5,
      fill: { color: "FFFFFF" }, rectRadius: 0.1,
      line: { color: theme.primary, width: 2 }
    });

    // Number
    slide.addShape(pres.shapes.OVAL, {
      x: x + 1.15, y: 2.2, w: 0.6, h: 0.6,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: x + 1.15, y: 2.2, w: 0.6, h: 0.6,
      fontSize: 18, fontFace: "Georgia", color: "FFFFFF",
      bold: true, align: "center", valign: "middle"
    });

    // Title
    slide.addText(pillar.title, {
      x: x + 0.1, y: 2.9, w: 2.7, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei", color: theme.primary,
      bold: true, align: "center"
    });

    // Key thinkers
    slide.addText(pillar.key, {
      x: x + 0.1, y: 3.3, w: 2.7, h: 0.35,
      fontSize: 10, fontFace: "Calibri", color: theme.light,
      align: "center"
    });

    // Insight
    slide.addText(pillar.insight, {
      x: x + 0.15, y: 3.7, w: 2.6, h: 0.55,
      fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary,
      align: "center"
    });

    // Quote
    slide.addText(`"${pillar.quote}"`, {
      x: x + 0.1, y: 4.25, w: 2.7, h: 0.3,
      fontSize: 10, fontFace: "Calibri", color: theme.accent,
      italic: true, align: "center"
    });
  });

  // Bottom takeaway
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.75, w: 9, h: 0.55,
    fill: { color: theme.secondary }, rectRadius: 0.08
  });
  slide.addText("斯密的核心洞察在当代得到扩展：市场需要制度支撑、信息透明、行为理性的配合", {
    x: 0.7, y: 4.8, w: 8.6, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei", color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
