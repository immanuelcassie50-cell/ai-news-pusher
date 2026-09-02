const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "课程导览",
  type: "toc",
  pageNumber: 2
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

  // Page number badge - top right
  slide.addShape(pres.ShapeType.rect, {
    x: 8.8, y: 0.3, w: 0.9, h: 0.45,
    fill: { color: theme.accent }
  });
  slide.addText("2", {
    x: 8.8, y: 0.3, w: 0.9, h: 0.45,
    fontSize: 16, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("课程导览", {
    x: 0.6, y: 0.35, w: 4, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline for title
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.0, w: 1.2, h: 0.04,
    fill: { color: theme.accent }
  });

  // Module cards - two column layout
  const modules = [
    { num: "01", title: "认知基础" },
    { num: "02", title: "身体放松技巧" },
    { num: "03", title: "正念微练习" },
    { num: "04", title: "自我关怀对话" },
    { num: "05", title: "情绪释放书写" },
    { num: "06", title: "场景化工具箱" },
    { num: "07", title: "每日保养计划" }
  ];

  const cardWidth = 4.2;
  const cardHeight = 0.85;
  const startX = 0.6;
  const startY = 1.35;
  const gapX = 0.3;
  const gapY = 0.2;

  modules.forEach((mod, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (cardWidth + gapX);
    const y = startY + row * (cardHeight + gapY);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
    });

    // Number badge
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.7, h: cardHeight,
      fill: { color: theme.primary }
    });
    slide.addText(mod.num, {
      x: x, y: y, w: 0.7, h: cardHeight,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Module title
    slide.addText(mod.title, {
      x: x + 0.85, y: y, w: cardWidth - 0.95, h: cardHeight,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle"
    });
  });

  // Bottom decorative bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
