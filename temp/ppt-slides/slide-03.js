// slide-03.js - 章节5分隔页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section-divider',
  index: 3,
  title: '为什么要用访谈'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // 大色块装饰 - 右侧
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.5, y: 0, w: 2.5, h: 5.625,
    fill: { color: theme.secondary, transparency: 30 }
  });

  // 顶部小装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.5, w: 2, h: 0.06,
    fill: { color: theme.light }
  });

  // 章节编号
  slide.addText("05", {
    x: 0.5, y: 0.8, w: 3, h: 1.8,
    fontSize: 96, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // 章节标题
  slide.addText("为什么要用访谈，\n而不是让你自己写", {
    x: 0.5, y: 2.6, w: 7, h: 1.4,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // 引言
  slide.addText("写和说，激活的是不同的脑子", {
    x: 0.5, y: 4.2, w: 6, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false, italic: true, align: "left", valign: "middle"
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
    primary: "8B2942",
    secondary: "4A4A4A",
    accent: "C75B5B",
    light: "E8D5D5",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/ppt-slides/slide-03-preview.pptx" });
}

module.exports = { createSlide, slideConfig };