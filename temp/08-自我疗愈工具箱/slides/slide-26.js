const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "组合使用建议",
  type: "content",
  pageNumber: 26
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg }
  });

  // Left red accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("组合使用建议", {
    x: 0.6, y: 0.35, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Timeline layout - 4 time periods
  const periods = [
    {
      time: "早晨",
      duration: "2分钟",
      technique: "腹式呼吸",
      desc: "起床后做几次腹式呼吸，帮助激活副交感神经，以平静的心态开始新的一天"
    },
    {
      time: "工作间隙",
      duration: "3分钟",
      technique: "身体扫描",
      desc: "工作间隙做快速身体扫描，释放肩颈紧张，恢复专注力"
    },
    {
      time: "情绪时刻",
      duration: "2分钟",
      technique: "4-7-8呼吸",
      desc: "情绪波动时用4-7-8法快速平复，避免情绪失控"
    },
    {
      time: "睡前",
      duration: "5-10分钟",
      technique: "PMR / 身体扫描",
      desc: "睡前做完整的PMR或身体扫描，帮助身体完全放松，进入睡眠状态"
    }
  ];

  const cardW = 2.15;
  const cardH = 3.5;
  const gap = 0.2;
  const startX = 0.6;

  periods.forEach((period, i) => {
    const x = startX + i * (cardW + gap);

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.3, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
    });

    // Time period badge
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.3, w: cardW, h: 0.55,
      fill: { color: theme.primary }
    });
    slide.addText(period.time, {
      x: x, y: 1.3, w: cardW, h: 0.55,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Duration
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + (cardW - 0.7) / 2, y: 1.95, w: 0.7, h: 0.7,
      fill: { color: theme.accent }
    });
    slide.addText(period.duration, {
      x: x + (cardW - 0.7) / 2, y: 1.95, w: 0.7, h: 0.7,
      fontSize: 9, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Technique name
    slide.addText(period.technique, {
      x: x + 0.1, y: 2.75, w: cardW - 0.2, h: 0.45,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(period.desc, {
      x: x + 0.15, y: 3.25, w: cardW - 0.3, h: 1.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "left", valign: "top"
    });
  });

  // Bottom decorative bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("26", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
