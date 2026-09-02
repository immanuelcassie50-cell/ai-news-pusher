// slide-02.js - 课程目录
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'toc',
  index: 2,
  title: '课程目录'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧装饰条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // 页面标题
  slide.addText("课程目录", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });

  // 6个章节
  const sections = [
    { num: "01", title: "经营意识觉醒" },
    { num: "02", title: "读懂经营仪表盘" },
    { num: "03", title: "资源优化的决策力" },
    { num: "04", title: "协同创值" },
    { num: "05", title: "降本增效实战" },
    { num: "06", title: "综合实战与行动计划" }
  ];

  // 左侧3个
  const startY = 1.2;
  const cardWidth = 2.8;
  const cardHeight = 1.3;
  const gapX = 0.3;
  const startX = 0.5;

  sections.forEach((section, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = startX + col * (cardWidth + gapX);
    const y = startY + row * (cardHeight + 0.3);

    // 卡片背景
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // 编号圆形
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.2, y: y + 0.35, w: 0.6, h: 0.6,
      fill: { color: theme.primary }
    });
    slide.addText(section.num, {
      x: x + 0.2, y: y + 0.35, w: 0.6, h: 0.6,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    // 标题
    slide.addText(section.title, {
      x: x + 0.9, y: y + 0.35, w: 1.7, h: 0.6,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "left", valign: "middle"
    });
  });

  // 当前模块高亮提示
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.0, w: 9, h: 0.5,
    fill: { color: theme.light }
  });
  slide.addText("当前模块: 01 经营意识觉醒", {
    x: 0.7, y: 4.0, w: 8.6, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });

  // 页码徽章
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("02", {
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
  pres.writeFile({ fileName: "D:/新课开发/电力/9-中层管理者经营力提升从行政管理到真经营/05-授课PPT/slides/slide-02-preview.pptx" })
    .then(() => console.log("Created: slide-02-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
