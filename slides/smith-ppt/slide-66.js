// slide-66.js - Content: 自由市场思想谱系图（完整版）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 66,
  title: '自由市场思想谱系图（完整版）'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Slide title
  slide.addText("自由市场思想谱系图（完整版）", {
    x: 0.5, y: 0.25, w: 9, h: 0.55,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Timeline base line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: 1.35, w: 9.4, h: 0.03,
    fill: { color: theme.light }
  });

  // Main timeline - 1776 to Today
  const eras = [
    { x: 1.0, year: "1776", name: "古典经济学" },
    { x: 3.0, year: "1870s", name: "边际革命" },
    { x: 5.0, year: "1930s", name: "凯恩斯革命" },
    { x: 7.0, year: "1970s", name: "滞涨危机" },
    { x: 9.0, year: "2000s", name: "行为经济学" }
  ];

  eras.forEach((era) => {
    // Timeline node
    slide.addShape(pres.shapes.OVAL, {
      x: era.x - 0.12, y: 1.24, w: 0.24, h: 0.24,
      fill: { color: theme.primary }
    });

    // Year label
    slide.addText(era.year, {
      x: era.x - 0.5, y: 0.95, w: 1, h: 0.25,
      fontSize: 10, fontFace: "Arial",
      color: theme.primary, bold: true,
      align: "center"
    });

    // Era name
    slide.addText(era.name, {
      x: era.x - 0.6, y: 1.52, w: 1.2, h: 0.4,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center"
    });
  });

  // Schools section
  const schoolY = 2.1;

  // School 1 - Classical
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: schoolY, w: 2.9, h: 2.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: schoolY, w: 2.9, h: 0.4,
    fill: { color: theme.primary }
  });

  slide.addText("古典/新古典", {
    x: 0.3, y: schoolY, w: 2.9, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText([
    { text: "斯密 → 李嘉图 → 穆勒", options: { breakLine: true } },
    { text: "↓", options: { breakLine: true } },
    { text: "马歇尔新古典经济学", options: { breakLine: true } },
    { text: "↓", options: { breakLine: true } },
    { text: "萨缪尔森/新古典综合派" }
  ], {
    x: 0.4, y: schoolY + 0.5, w: 2.7, h: 1.6,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center"
  });

  // School 2 - Austrian
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.55, y: schoolY, w: 2.9, h: 2.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.55, y: schoolY, w: 2.9, h: 0.4,
    fill: { color: theme.secondary }
  });

  slide.addText("奥地利学派", {
    x: 3.55, y: schoolY, w: 2.9, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText([
    { text: "门格尔 → 庞巴维克", options: { breakLine: true } },
    { text: "↓", options: { breakLine: true } },
    { text: "米塞斯 → 哈耶克", options: { breakLine: true } },
    { text: "↓", options: { breakLine: true } },
    { text: "罗斯巴德 → 德索托" }
  ], {
    x: 3.65, y: schoolY + 0.5, w: 2.7, h: 1.6,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center"
  });

  // School 3 - Chicago
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.8, y: schoolY, w: 2.9, h: 2.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.8, y: schoolY, w: 2.9, h: 0.4,
    fill: { color: theme.accent }
  });

  slide.addText("芝加哥学派", {
    x: 6.8, y: schoolY, w: 2.9, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText([
    { text: "科斯 → 斯蒂格勒", options: { breakLine: true } },
    { text: "↓", options: { breakLine: true } },
    { text: "弗里德曼 → 卢卡斯", options: { breakLine: true } },
    { text: "↓", options: { breakLine: true } },
    { text: "贝克尔 → 法马" }
  ], {
    x: 6.9, y: schoolY + 0.5, w: 2.7, h: 1.6,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center"
  });

  // Key insight at bottom
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: 4.45, w: 9.4, h: 0.7,
    fill: { color: theme.light },
    transparency: 40
  });

  slide.addText("关键争论：政府与市场的边界 | 斯密传统 vs 凯恩斯传统 | 新古典 vs 奥地利 vs 芝加哥", {
    x: 0.5, y: 4.55, w: 9, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("66", {
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
    primary: "780000",
    secondary: "003049",
    accent: "c1121f",
    light: "669bbc",
    bg: "fdf0d5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-66-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
