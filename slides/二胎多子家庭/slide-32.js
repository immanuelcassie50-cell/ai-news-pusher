// slide-32.js - 互动练习2参考答案
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'exercise-answer',
  index: 32,
  title: '参考答案'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("参考答案", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Two columns
  // 5-year-old girl
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.25, h: 4.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.25, h: 0.6,
    fill: { color: theme.accent }
  });
  slide.addText("5岁姐姐的专属时间", {
    x: 0.5, y: 1.2, w: 4.25, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const girlTime = [
    { label: "频率", value: "每周2-3次" },
    { label: "时长", value: "20-30分钟" },
    { label: "活动建议", value: "角色扮演、绘本共读" },
    { label: "要点", value: "让她主导，给予选择权" }
  ];

  girlTime.forEach((item, idx) => {
    const y = 2.0 + idx * 0.75;

    slide.addText(item.label + ":", {
      x: 0.7, y: y, w: 1.3, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(item.value, {
      x: 2.0, y: y, w: 2.5, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // 10-year-old boy
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.25, y: 1.2, w: 4.25, h: 4.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.25, y: 1.2, w: 4.25, h: 0.6,
    fill: { color: theme.primary }
  });
  slide.addText("10岁哥哥的专属时间", {
    x: 5.25, y: 1.2, w: 4.25, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const boyTime = [
    { label: "频率", value: "每周1-2次" },
    { label: "时长", value: "40-60分钟" },
    { label: "活动建议", value: "运动陪伴、兴趣探索" },
    { label: "要点", value: "肯定努力，关注过程" }
  ];

  boyTime.forEach((item, idx) => {
    const y = 2.0 + idx * 0.75;

    slide.addText(item.label + ":", {
      x: 5.45, y: y, w: 1.3, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(item.value, {
      x: 6.75, y: y, w: 2.5, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-32-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
