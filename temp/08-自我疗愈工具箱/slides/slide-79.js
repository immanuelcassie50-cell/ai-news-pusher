const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "晨间使用技巧",
  type: "content",
  pageNumber: 79
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

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("79", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("晨间使用技巧", {
    x: 0.5, y: 0.35, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Three tip cards
  const tips = [
    {
      title: "最佳时机",
      content: "醒来后、早餐前\n不要先抓手机\n哪怕1分钟也有价值"
    },
    {
      title: "环境准备",
      content: "床边即可\n站着或坐着\n保持安静（可选轻音乐）"
    },
    {
      title: "关键心态",
      content: '不追求"做完"\n只追求"带着觉知"\n温柔对待困倦感'
    }
  ];

  tips.forEach((tip, i) => {
    const x = 0.5 + i * 3.1;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.25, w: 2.9, h: 2.8,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
    });

    // Top accent
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.25, w: 2.9, h: 0.6,
      fill: { color: theme.primary }
    });

    slide.addText(tip.title, {
      x: x, y: 1.35, w: 2.9, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(tip.content, {
      x: x + 0.2, y: 2.0, w: 2.5, h: 1.9,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top"
    });
  });

  // Reminder box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.25, w: 9, h: 0.9,
    fill: { color: theme.accent },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addText("记住：即使只做了1分钟的晨间练习，也比完全忽略好得多", {
    x: 0.5, y: 4.25, w: 9, h: 0.9,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
