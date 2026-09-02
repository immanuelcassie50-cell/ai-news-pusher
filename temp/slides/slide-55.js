// slide-55.js - 案例：两个分数一样的学生
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 55,
  title: '案例：两个分数一样的学生'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("案例：两个分数一样的学生", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Scenario card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.95, w: 9, h: 0.65,
    fill: { color: theme.accent, transparency: 85 },
    rectRadius: 0.08
  });
  slide.addText("两个分数几乎一模一样的学生，冲档比例差了将近一倍", {
    x: 0.7, y: 0.95, w: 8.6, h: 0.65,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Two-column comparison
  const studentA = {
    label: "学生A",
    type: "求稳型",
    desc: "家里明确说愿意赌一把复读",
    ratio: "冲的比例：小"
  };

  const studentB = {
    label: "学生B",
    type: "敢闯型",
    desc: "愿意赌复读，风险承受力强",
    ratio: "冲的比例：大"
  };

  const colW = 4.25;
  const colH = 2.2;
  const colY = 1.8;

  // Student A card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: colY, w: colW, h: colH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.08 },
    rectRadius: 0.1
  });

  // Student A header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: colY, w: colW, h: 0.5,
    fill: { color: theme.light },
    rectRadius: 0.1
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: colY + 0.35, w: colW, h: 0.15,
    fill: { color: theme.light }
  });
  slide.addText("学生A — 求稳型", {
    x: 0.5, y: colY, w: colW, h: 0.5,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Student A content
  slide.addText("家里明确说愿意赌一把复读", {
    x: 0.7, y: colY + 0.65, w: colW - 0.4, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    valign: "middle"
  });
  slide.addText("冲的比例：小", {
    x: 0.7, y: colY + 1.2, w: colW - 0.4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle"
  });
  slide.addText("但实际上愿意接受复读作为保底", {
    x: 0.7, y: colY + 1.6, w: colW - 0.4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light,
    valign: "middle"
  });

  // Student B card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.25, y: colY, w: colW, h: colH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.08 },
    rectRadius: 0.1
  });

  // Student B header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.25, y: colY, w: colW, h: 0.5,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.25, y: colY + 0.35, w: colW, h: 0.15,
    fill: { color: theme.accent }
  });
  slide.addText("学生B — 敢闯型", {
    x: 5.25, y: colY, w: colW, h: 0.5,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Student B content
  slide.addText("愿意赌复读，风险承受力强", {
    x: 5.45, y: colY + 0.65, w: colW - 0.4, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    valign: "middle"
  });
  slide.addText("冲的比例：大", {
    x: 5.45, y: colY + 1.2, w: colW - 0.4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle"
  });
  slide.addText("同样的分数，不该有同样的答案", {
    x: 5.45, y: colY + 1.6, w: colW - 0.4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    valign: "middle"
  });

  // Parent question box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.2, w: 9, h: 0.7,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 2, offset: 1, angle: 135, opacity: 0.06 },
    rectRadius: 0.08
  });
  slide.addText("家长疑问：为什么隔壁那个分数跟我们差不多的，冲的学校比我们多这么多？", {
    x: 0.7, y: 4.2, w: 8.6, h: 0.7,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle"
  });

  // Key insight
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 9, h: 0.45,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("两个孩子风险承受能力不同，同样的分数不该有同样的答案", {
    x: 0.7, y: 5.0, w: 8.6, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge (circle style)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("55", {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-55-preview.pptx" })
    .then(() => console.log("Created: slide-55-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
