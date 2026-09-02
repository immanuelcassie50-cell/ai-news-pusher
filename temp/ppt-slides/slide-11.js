// slide-11.js - 新手易错点提问
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 11,
  title: '围绕新手易错点的提问'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("围绕新手易错点的提问", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Question 1 - Card style
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.5, w: 9, h: 1.1,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.5, w: 0.08, h: 1.1,
    fill: { color: theme.accent }
  });
  slide.addText("1", {
    x: 0.75, y: 1.65, w: 0.4, h: 0.4,
    fontSize: 20, fontFace: "Arial",
    color: theme.accent, bold: true
  });
  slide.addText("刚开始做这类场景的时候，你踩过什么坑，或者见过别人踩什么坑？", {
    x: 1.2, y: 1.65, w: 8, h: 0.8,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "middle"
  });

  // Question 2 - Card style
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.75, w: 9, h: 1.1,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.75, w: 0.08, h: 1.1,
    fill: { color: theme.accent }
  });
  slide.addText("2", {
    x: 0.75, y: 2.9, w: 0.4, h: 0.4,
    fontSize: 20, fontFace: "Arial",
    color: theme.accent, bold: true
  });
  slide.addText("如果要提醒一个第一次遇到这个情况的新同事，你会说哪一两件绝对不能做的事？", {
    x: 1.2, y: 2.9, w: 8, h: 0.8,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "middle"
  });

  // Question 3 - Card style
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.0, w: 9, h: 1.1,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.0, w: 0.08, h: 1.1,
    fill: { color: theme.accent }
  });
  slide.addText("3", {
    x: 0.75, y: 4.15, w: 0.4, h: 0.4,
    fontSize: 20, fontFace: "Arial",
    color: theme.accent, bold: true
  });
  slide.addText("有没有哪一次处理得不好，让你印象特别深刻？当时具体发生了什么？", {
    x: 1.2, y: 4.15, w: 8, h: 0.8,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("11", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
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
    primary: "8B2942",
    secondary: "4A4A4A",
    accent: "C75B5B",
    light: "E8D5D5",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-11-preview.pptx" });
}

module.exports = { createSlide, slideConfig };