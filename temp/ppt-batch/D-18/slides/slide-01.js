// D-18 封面
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'cover',
  index: 1,
  title: '项目成果汇报'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.35, h: 5.625,
    fill: { color: theme.primary }, line: { type: "none" }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 0.5, w: 0.6, h: 0.08,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("PROJECT D-18 | 项目成果汇报", {
    x: 0.6, y: 0.7, w: 8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addText("德赛西威 AI 赋能项目", {
    x: 0.6, y: 1.4, w: 9, h: 0.9,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("阶段成果汇报", {
    x: 0.6, y: 2.3, w: 9, h: 0.9,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("数据说话 · 价值导向 · 可复制可推广", {
    x: 0.6, y: 3.4, w: 9, h: 0.4,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // 三大数字
  const stats = [
    { num: "2000+", t: "覆盖学员" },
    { num: "6500+", t: "累计节省小时" },
    { num: "32 人", t: "AI 内训师认证" }
  ];
  stats.forEach((s, i) => {
    const x = 0.6 + i * 3.0;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 4.0, w: 2.8, h: 0.9,
      fill: { color: theme.light }, line: { type: "none" }
    });
    slide.addText(s.num, {
      x: x + 0.15, y: 4.05, w: 1.3, h: 0.8,
      fontSize: 24, fontFace: "Arial", color: theme.primary,
      bold: true, valign: "middle"
    });
    slide.addText(s.t, {
      x: x + 1.5, y: 4.05, w: 1.2, h: 0.8,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });

  slide.addText("汇报人：项目组   |   2026 年 X 月 X 日", {
    x: 0.6, y: 5.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
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
