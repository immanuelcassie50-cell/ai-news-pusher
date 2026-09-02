// slide-03.js - 章节分隔页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section-divider',
  index: 3,
  title: '经营意识觉醒'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // 右侧大装饰块
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.2, y: 0, w: 2.8, h: 5.625,
    fill: { color: theme.secondary, transparency: 40 }
  });

  // 右上角装饰块
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 8.0, y: 0.5, w: 1.5, h: 1.5,
    fill: { color: "FFFFFF", transparency: 90 }
  });

  // 顶部小装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 0.6, w: 2, h: 0.06,
    fill: { color: theme.light }
  });

  // 章节编号
  slide.addText("01", {
    x: 0.6, y: 0.9, w: 3, h: 1.8,
    fontSize: 96, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // 章节标题
  slide.addText("经营意识觉醒", {
    x: 0.6, y: 2.7, w: 7, h: 1.0,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // 引言/副标题
  slide.addText('为什么传统的"完成任务"模式在今天失灵了？', {
    x: 0.6, y: 3.8, w: 6.5, h: 0.7,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false, italic: true, align: "left", valign: "middle"
  });

  // 底部装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.8, w: 3, h: 0.06,
    fill: { color: theme.accent }
  });

  // 页码徽章
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("03", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
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
  pres.writeFile({ fileName: "D:/新课开发/电力/9-中层管理者经营力提升从行政管理到真经营/05-授课PPT/slides/slide-03-preview.pptx" })
    .then(() => console.log("Created: slide-03-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
