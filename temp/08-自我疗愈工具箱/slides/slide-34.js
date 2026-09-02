const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "正念的科学基础",
  type: "content",
  pageNumber: 34
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
  slide.addText("34", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("正念的科学基础", {
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

  // Quote card - Kabat-Zinn definition
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.25, w: 9, h: 1.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
  });

  // Quote mark accent
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.25, w: 0.12, h: 1.3,
    fill: { color: theme.accent }
  });

  slide.addText([
    { text: "“", options: { fontSize: 36, color: theme.accent, bold: true } },
    { text: "正念是在当下有意地、不评判地关注事物时所涌现的觉知", options: { fontSize: 16, color: theme.secondary } },
    { text: "”", options: { fontSize: 36, color: theme.accent, bold: true } }
  ], {
    x: 0.8, y: 1.35, w: 8.5, h: 0.8,
    fontFace: "Microsoft YaHei",
    align: "left", valign: "middle"
  });

  slide.addText("— Jon Kabat-Zinn（正念减压疗法创始人）", {
    x: 0.8, y: 2.1, w: 8.5, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, italic: true,
    align: "right", valign: "middle"
  });

  // Three key elements section
  slide.addText("正念的三要素", {
    x: 0.5, y: 2.75, w: 4, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const elements = [
    { title: "有意地", desc: "Intentional", sub: "主动选择的注意力" },
    { title: "不评判", desc: "Non-judgmental", sub: "开放接纳的态度" },
    { title: "当下", desc: "Present moment", sub: "此刻的直接体验" }
  ];

  elements.forEach((el, i) => {
    const x = 0.5 + i * 3.1;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 3.3, w: 2.9, h: 1.6,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
    });

    // Top accent
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 3.3, w: 2.9, h: 0.08,
      fill: { color: theme.primary }
    });

    slide.addText(el.title, {
      x: x, y: 3.45, w: 2.9, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(el.desc, {
      x: x, y: 3.9, w: 2.9, h: 0.35,
      fontSize: 12, fontFace: "Arial",
      color: theme.accent,
      align: "center", valign: "middle"
    });

    slide.addText(el.sub, {
      x: x, y: 4.25, w: 2.9, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "center", valign: "middle"
    });
  });

  // Bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
