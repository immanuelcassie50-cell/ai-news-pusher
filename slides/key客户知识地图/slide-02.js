// slide-02.js - Table of Contents (目录)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'toc',
  index: 2,
  title: '目录'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.08, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("目录", {
    x: 0.5, y: 0.3, w: 3, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });

  // Title underline
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.95, w: 1.2, h: 0.04,
    fill: { color: theme.primary }
  });

  // TOC items - two column layout
  const tocItems = [
    { num: "01", title: "课程定位" },
    { num: "02", title: "课程背景与问题" },
    { num: "03", title: "课程核心价值" },
    { num: "04", title: "课程大纲" },
    { num: "05", title: "课程收获" },
    { num: "06", title: "目标学员画像" },
    { num: "07", title: "课程时长建议" },
    { num: "08", title: "课程特色" },
    { num: "09", title: "教学方式" },
    { num: "10", title: "讲师简介" },
    { num: "11", title: "版权声明" }
  ];

  const startY = 1.4;
  const itemHeight = 0.7;
  const col1X = 0.5;
  const col2X = 5.2;

  tocItems.forEach((item, idx) => {
    const col = idx < 6 ? 0 : 1;
    const row = idx < 6 ? idx : idx - 6;
    const x = col === 0 ? col1X : col2X;
    const y = startY + row * itemHeight;

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: x, y: y, w: 0.4, h: 0.4,
      fill: { color: theme.primary }
    });
    slide.addText(item.num, {
      x: x, y: y, w: 0.4, h: 0.4,
      fontSize: 12, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title text
    slide.addText(item.title, {
      x: x + 0.55, y: y, w: 3.5, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Right decorative block
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 9.5, y: 0, w: 0.5, h: 5.625,
    fill: { color: theme.light }
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("2", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C43C3A",
    secondary: "4A4E69",
    accent: "9A8C98",
    light: "E8E8E8",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-02-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
