// slide-01.js - 封面页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'cover',
  index: 1,
  title: '从行政管理到真经营'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧深蓝色块装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.4, h: 5.625,
    fill: { color: theme.primary }
  });

  // 顶部红色强调条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0, w: 9.6, h: 0.1,
    fill: { color: theme.accent }
  });

  // 右侧大装饰块 - 几何图形组合
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.8, y: 0.8, w: 2.2, h: 2.2,
    fill: { color: theme.primary, transparency: 15 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 8.3, y: 1.3, w: 1.7, h: 1.7,
    fill: { color: theme.accent, transparency: 25 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.3, y: 2.5, w: 1.2, h: 1.2,
    fill: { color: theme.light }
  });

  // 右下角装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 8.5, y: 4.2, w: 1.5, h: 1.425,
    fill: { color: theme.secondary, transparency: 85 }
  });

  // 主标题
  slide.addText("从行政管理到真经营", {
    x: 0.8, y: 1.5, w: 7, h: 1.3,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });

  // 副标题
  slide.addText("国企中层的降本增效实战思维", {
    x: 0.8, y: 2.9, w: 7, h: 0.7,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left", valign: "middle"
  });

  // 分隔线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 3.7, w: 2.5, h: 0.06,
    fill: { color: theme.accent }
  });

  // 底部信息
  slide.addText("电力行业企业管理培训系列 · 课程9", {
    x: 0.8, y: 4.0, w: 7, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left", valign: "middle"
  });

  // 模块编号标签
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 4.6, w: 1.2, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText("Module 1", {
    x: 0.8, y: 4.6, w: 1.2, h: 0.45,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "4a5568",
    accent: "c53030",
    light: "e2e8f0",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/新课开发/电力/9-中层管理者经营力提升从行政管理到真经营/05-授课PPT/slides/slide-01-preview.pptx" })
    .then(() => console.log("Created: slide-01-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
