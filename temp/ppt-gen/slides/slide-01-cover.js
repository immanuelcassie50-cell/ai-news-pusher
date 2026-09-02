// slide-01.js - 封面页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'cover',
  index: 1,
  title: '文化基建：数字化转型推进中不能松手的员工信任与变革共识'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧红色装饰条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // 顶部装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.8, w: 2.5, h: 0.02,
    fill: { color: theme.accent }
  });

  // 主标题
  slide.addText("文化基建", {
    x: 0.5, y: 1.0, w: 9, h: 0.9,
    fontSize: 54, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // 副标题
  slide.addText("数字化转型推进中不能松手的员工信任与变革共识", {
    x: 0.5, y: 1.9, w: 9, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left"
  });

  // 分隔线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.7, w: 6, h: 0.015,
    fill: { color: theme.light }
  });

  // 课程信息
  slide.addText("数字化转型系列课程 · 第11章", {
    x: 0.5, y: 3.0, w: 5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left"
  });

  // 右下角装饰块
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.5, y: 4.2, w: 2.5, h: 1.425,
    fill: { color: theme.primary }
  });

  slide.addText("CHANGE", {
    x: 7.5, y: 4.5, w: 2.5, h: 0.5,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center"
  });

  slide.addText("TRUST", {
    x: 7.5, y: 5.0, w: 2.5, h: 0.5,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "4A4A4A",
    accent: "C41E3A",
    light: "D4D4D4",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-01-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
