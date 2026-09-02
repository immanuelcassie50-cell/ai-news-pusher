const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 63,
  title: '来源五：展会与线下活动'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title with source number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.4, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });

  slide.addText("5", {
    x: 0.5, y: 0.4, w: 0.5, h: 0.5,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  slide.addText("来源五：展会与线下活动", {
    x: 1.1, y: 0.4, w: 8, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Timeline/Process layout - 4 steps
  const stepW = 2.1;
  const stepH = 2.8;
  const startX = 0.5;
  const gap = 0.2;

  const steps = [
    { title: "活动类型", items: ["行业展会", "发布会", "峰会", "沙龙"] },
    { title: "观察重点", items: ["展台设计", "产品演示", "宣讲内容", "人气对比"] },
    { title: "交流技巧", items: ["假装客户咨询", "套取信息"] },
    { title: "AI应用", items: ["AI记录和整理", "展会观察"] }
  ];

  const lineColors = [theme.primary, theme.accent, theme.secondary, theme.light];

  steps.forEach((step, i) => {
    const x = startX + i * (stepW + gap);

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.1, w: stepW, h: stepH,
      fill: { color: "FFFFFF" },
      line: { color: lineColors[i], width: 2 }
    });

    // Step number
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + stepW / 2 - 0.2, y: 1.2, w: 0.4, h: 0.4,
      fill: { color: lineColors[i] }
    });

    slide.addText(String(i + 1), {
      x: x + stepW / 2 - 0.2, y: 1.2, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    // Title
    slide.addText(step.title, {
      x: x + 0.1, y: 1.7, w: stepW - 0.2, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: lineColors[i], bold: true, align: "center"
    });

    // Items
    const itemText = step.items.map((item, idx) => ({
      text: item,
      options: { bullet: true, breakLine: idx < step.items.length - 1 }
    }));

    slide.addText(itemText, {
      x: x + 0.15, y: 2.2, w: stepW - 0.3, h: stepH - 1.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, paraSpaceAfter: 6
    });

    // Arrow between steps (except last)
    if (i < 3) {
      slide.addText("→", {
        x: x + stepW, y: 2.2, w: gap, h: 0.5,
        fontSize: 20, fontFace: "Arial",
        color: theme.accent, align: "center", valign: "middle"
      });
    }
  });

  // Bottom insight
  slide.addText("现场观察：最直观、最真实的竞品情报来源", {
    x: 0.5, y: 4.2, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2B2D42",
    accent: "8D99AE",
    light: "ED233C",
    bg: "F8F9FA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-63-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
