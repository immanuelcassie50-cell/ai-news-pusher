const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "进阶练习建议",
  type: "content",
  pageNumber: 31
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
  slide.addText("进阶练习建议", {
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

  // Three levels
  const levels = [
    {
      level: "初级",
      duration: "1-2周",
      focus: "建立习惯",
      techniques: ["腹式呼吸基础", "简化版PMR", "3分钟身体扫描"],
      target: "每天练习5-10分钟"
    },
    {
      level: "中级",
      duration: "3-4周",
      focus: "深化效果",
      techniques: ["完整版PMR", "5分钟身体扫描", "4-7-8呼吸"],
      target: "每天练习15-20分钟"
    },
    {
      level: "高级",
      duration: "5周以上",
      focus: "整合应用",
      techniques: ["组合技巧使用", "场景化练习", "自我调整"],
      target: "随时随地灵活运用"
    }
  ];

  const cardW = 2.9;
  const cardH = 3.6;
  const gap = 0.25;
  const startX = 0.6;

  levels.forEach((lv, i) => {
    const x = startX + i * (cardW + gap);

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.25, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
    });

    // Level badge
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + (cardW - 0.8) / 2, y: 1.4, w: 0.8, h: 0.8,
      fill: { color: i === 0 ? theme.accent : i === 1 ? theme.light : theme.primary }
    });
    slide.addText(lv.level, {
      x: x + (cardW - 0.8) / 2, y: 1.4, w: 0.8, h: 0.8,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Duration
    slide.addText(lv.duration, {
      x: x, y: 2.3, w: cardW, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Focus
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.3, y: 2.7, w: cardW - 0.6, h: 0.35,
      fill: { color: theme.bg }
    });
    slide.addText(lv.focus, {
      x: x + 0.3, y: 2.7, w: cardW - 0.6, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "center", valign: "middle"
    });

    // Techniques label
    slide.addText("推荐技巧", {
      x: x + 0.2, y: 3.15, w: cardW - 0.4, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "left", valign: "middle"
    });

    // Techniques
    slide.addText(
      lv.techniques.map((t, idx) => ({
        text: t,
        options: { bullet: true, breakLine: idx < lv.techniques.length - 1 }
      })),
      {
        x: x + 0.2, y: 3.45, w: cardW - 0.4, h: 1.0,
        fontSize: 10, fontFace: "Microsoft YaHei",
        color: theme.secondary,
        valign: "top"
      }
    );

    // Target
    slide.addText(lv.target, {
      x: x + 0.2, y: 4.5, w: cardW - 0.4, h: 0.25,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.primary,
      align: "center", valign: "middle"
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
  slide.addText("31", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
