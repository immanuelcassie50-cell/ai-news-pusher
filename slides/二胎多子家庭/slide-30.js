// slide-30.js - 多子家庭的需求满足
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 30,
  title: '多子家庭的需求满足'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("多子家庭的需求满足", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Age-appropriate strategies
  const strategies = [
    {
      age: "0-3岁",
      focus: "安全感",
      tips: [
        "及时回应哭泣",
        "肌肤接触",
        "稳定的日常作息"
      ]
    },
    {
      age: "3-6岁",
      focus: "自主性",
      tips: [
        "允许选择",
        "鼓励独立尝试",
        "肯定努力而非结果"
      ]
    },
    {
      age: "6-12岁",
      focus: "勤奋感",
      tips: [
        "发现特长并培养",
        "设置可达成的目标",
        "避免过度比较"
      ]
    },
    {
      age: "12-18岁",
      focus: "身份认同",
      tips: [
        "尊重隐私",
        "对话而非训话",
        "支持探索自我"
      ]
    }
  ];

  const colWidth = 2.25;
  const startX = 0.5;
  const gap = 0.25;

  strategies.forEach((strat, idx) => {
    const x = startX + idx * (colWidth + gap);

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.15, w: colWidth, h: 4.1,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Age badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x + 0.35, y: 1.35, w: colWidth - 0.7, h: 0.5,
      fill: { color: theme.primary },
      rectRadius: 0.08
    });
    slide.addText(strat.age, {
      x: x + 0.35, y: 1.35, w: colWidth - 0.7, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Focus area
    slide.addText("核心需求: " + strat.focus, {
      x: x + 0.15, y: 2.0, w: colWidth - 0.3, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "center", valign: "middle"
    });

    // Tips
    strat.tips.forEach((tip, tIdx) => {
      const y = 2.65 + tIdx * 0.8;

      // Bullet
      slide.addShape(pres.shapes.OVAL, {
        x: x + 0.2, y: y + 0.15, w: 0.2, h: 0.2,
        fill: { color: theme.secondary }
      });

      // Tip text
      slide.addText(tip, {
        x: x + 0.5, y: y, w: colWidth - 0.65, h: 0.7,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        align: "left", valign: "top"
      });
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-30-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
