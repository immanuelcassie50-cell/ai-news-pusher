// D-17 封面
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'cover',
  index: 1,
  title: '内训师优秀课程示范'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧深蓝条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.35, h: 5.625,
    fill: { color: theme.primary }, line: { type: "none" }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 0.5, w: 0.6, h: 0.08,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("PROJECT D-17 | 内训师示范课", {
    x: 0.6, y: 0.7, w: 8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addText("内训师优秀课程示范", {
    x: 0.6, y: 1.4, w: 9, h: 1.0,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("3 个示范课题 · 场景/AI方案/提示词/效果/点评", {
    x: 0.6, y: 2.4, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // 课题 chip
  const chips = [
    { tag: "课题 A", t: "测试用例自动生成" },
    { tag: "课题 B", t: "需求文档结构化" },
    { tag: "课题 C", t: "客户邮件回复助手" }
  ];
  chips.forEach((c, i) => {
    const x = 0.6 + i * 3.0;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 3.4, w: 2.8, h: 0.9,
      fill: { color: theme.light }, line: { type: "none" }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 3.4, w: 0.1, h: 0.9,
      fill: { color: theme.accent }, line: { type: "none" }
    });
    slide.addText(c.tag, {
      x: x + 0.25, y: 3.45, w: 2.5, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });
    slide.addText(c.t, {
      x: x + 0.25, y: 3.75, w: 2.5, h: 0.45,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
  });

  // 底部
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.7, w: 8.8, h: 0.04,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("评审日 · 2026 年 X 月 X 日", {
    x: 0.6, y: 4.8, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "003D7A", secondary: "333333", accent: "00A0E9",
    light: "F4F6F9", bg: "FFFFFF"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-01-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
