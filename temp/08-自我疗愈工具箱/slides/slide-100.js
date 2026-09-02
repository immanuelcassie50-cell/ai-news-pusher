/**
 * Slide 100 - 微习惯的力量
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left colored panel
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 4.2, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title on left panel
  slide.addText("微习惯", {
    x: 0.4, y: 1.2, w: 3.4, h: 0.9,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });
  slide.addText("的力量", {
    x: 0.4, y: 2.0, w: 3.4, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  // Quote
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 3.0, w: 0.08, h: 1.2,
    fill: { color: theme.accent }
  });
  slide.addText("\"Small enough to fail\"", {
    x: 0.6, y: 3.0, w: 3.2, h: 0.5,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", bold: false,
    italic: true
  });
  slide.addText("—— Stephen Guise", {
    x: 0.6, y: 3.5, w: 3.2, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.accent, bold: false
  });

  // Right content area
  slide.addText("核心理念", {
    x: 4.6, y: 0.4, w: 5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Key concept cards
  const concepts = [
    { title: "足够小到不会失败", desc: "1分钟冥想 vs 30分钟冥想——前者更容易坚持" },
    { title: "一致性胜过强度", desc: "每天做5分钟，比偶尔做1小时更有效" },
    { title: "从小开始，自动化后扩展", desc: "等习惯自动化了，再逐渐增加时长" }
  ];

  concepts.forEach((c, i) => {
    const y = 1.0 + i * 1.1;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: 4.6, y: y, w: 5, h: 0.95,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 45, opacity: 0.06 }
    });

    // Gold left bar
    slide.addShape(pres.ShapeType.rect, {
      x: 4.6, y: y, w: 0.1, h: 0.95,
      fill: { color: theme.accent }
    });

    // Title
    slide.addText(c.title, {
      x: 4.85, y: y + 0.1, w: 4.6, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true
    });

    // Description
    slide.addText(c.desc, {
      x: 4.85, y: y + 0.5, w: 4.6, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false
    });
  });

  // Psychology insight box
  slide.addShape(pres.ShapeType.rect, {
    x: 4.6, y: 4.35, w: 5, h: 0.9,
    fill: { color: theme.secondary }
  });
  slide.addText("心理学原理", {
    x: 4.8, y: 4.45, w: 4.6, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("习惯的形成不靠意志力，靠重复和最小阻力。当一个行为足够小、足够简单，大脑才不会抗拒它。", {
    x: 4.8, y: 4.8, w: 4.6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("100", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
}

const slideConfig = {
  type: "content",
  module: "Module 7",
  title: "微习惯的力量",
  pageNumber: 100
};

module.exports = { createSlide, slideConfig };
