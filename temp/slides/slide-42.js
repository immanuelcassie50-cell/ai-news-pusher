// slide-42.js - 第五章 案例：母女分歧化解
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 42,
  title: '案例：母女分歧化解'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("案例：母女分歧化解", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Case label
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 0.95, w: 1.2, h: 0.35,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("案例", {
    x: 0.5, y: 0.95, w: 1.2, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Two columns - Original conflict vs Resolved
  // Left column - Original conflict
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.5, w: 4.3, h: 2.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.1 },
    rectRadius: 0.1
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.5, w: 4.3, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("表面分歧", {
    x: 0.5, y: 1.5, w: 4.3, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Mom's position
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.7, y: 2.15, w: 1.0, h: 0.35,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("妈妈", {
    x: 0.7, y: 2.15, w: 1.0, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("金融专业", {
    x: 1.8, y: 2.15, w: 2.8, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle"
  });

  // Daughter's position
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.7, y: 2.65, w: 1.0, h: 0.35,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("女儿", {
    x: 0.7, y: 2.65, w: 1.0, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("设计专业", {
    x: 1.8, y: 2.65, w: 2.8, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    valign: "middle"
  });

  // VS
  slide.addText("VS", {
    x: 1.8, y: 3.1, w: 2.5, h: 0.4,
    fontSize: 16, fontFace: "Arial",
    color: theme.light, bold: true,
    align: "center", valign: "middle"
  });

  // Divider label
  slide.addText("僵持很久", {
    x: 0.7, y: 3.45, w: 3.9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "center", valign: "middle"
  });

  // Arrow in the middle
  slide.addText("→", {
    x: 4.3, y: 2.4, w: 0.6, h: 0.5,
    fontSize: 24, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Right column - Resolved
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.5, w: 4.3, h: 2.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.1 },
    rectRadius: 0.1
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.5, w: 4.3, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("用倒推重新聊", {
    x: 5.2, y: 1.5, w: 4.3, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Discovery section
  slide.addText("妈妈真正在乎的是", {
    x: 5.4, y: 2.15, w: 3.9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    valign: "middle"
  });
  slide.addText("'稳定'而非'必须是金融'", {
    x: 5.4, y: 2.4, w: 3.9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle"
  });

  slide.addText("女儿真正在乎的是", {
    x: 5.4, y: 2.8, w: 3.9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    valign: "middle"
  });
  slide.addText("'创造性'而非'必须是设计'", {
    x: 5.4, y: 3.05, w: 3.9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle"
  });

  // Insight
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.4, y: 3.45, w: 3.9, h: 0.3,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("两件事并不冲突！", {
    x: 5.4, y: 3.45, w: 3.9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Bottom insight
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.0, w: 9, h: 0.65,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });
  slide.addText("拆解到'稳定'和'创造性'两层更底层的诉求", {
    x: 0.7, y: 4.0, w: 8.6, h: 0.65,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Result box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.8, w: 9, h: 0.55,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });
  slide.addText("找到了介于两者之间的方向，母女第一次达成真正的共识", {
    x: 0.7, y: 4.8, w: 8.6, h: 0.55,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge (circle style - bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("42", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-42-preview.pptx" })
    .then(() => console.log("Preview saved: slide-42-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
