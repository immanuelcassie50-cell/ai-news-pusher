// D-18 节省时间
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 5,
  title: '节省时间统计'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("节省时间统计", {
    x: 0.6, y: 0.4, w: 6, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.05, w: 0.6, h: 0.08,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("6 个月累计节省 6500+ 小时 · 单人月均 5.4 小时", {
    x: 0.6, y: 1.25, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // 三大场景节省时间
  const savings = [
    { t: "测试用例自动铺", from: "8 小时", to: "2 小时", per: "省 6 小时/次", count: "120 次/月" },
    { t: "需求文档结构化", from: "2 天", to: "30 分钟", per: "省 7.5 小时/次", count: "80 次/月" },
    { t: "客户邮件回复", from: "15 分钟", to: "5 分钟", per: "省 10 分钟/封", count: "300 封/月" }
  ];
  savings.forEach((s, i) => {
    const x = 0.6 + i * 3.0;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.9, w: 2.8, h: 2.3,
      fill: { color: theme.light }, line: { type: "none" }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.9, w: 2.8, h: 0.4,
      fill: { color: theme.primary }, line: { type: "none" }
    });
    slide.addText(s.t, {
      x: x, y: 1.9, w: 2.8, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText("改前", {
      x: x + 0.15, y: 2.45, w: 1.2, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    slide.addText(s.from, {
      x: x + 0.15, y: 2.7, w: 1.2, h: 0.4,
      fontSize: 16, fontFace: "Arial", color: theme.secondary,
      bold: true
    });
    slide.addText("改后", {
      x: x + 1.5, y: 2.45, w: 1.2, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });
    slide.addText(s.to, {
      x: x + 1.5, y: 2.7, w: 1.2, h: 0.4,
      fontSize: 16, fontFace: "Arial", color: theme.accent,
      bold: true
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.15, y: 3.2, w: 2.5, h: 0.04,
      fill: { color: theme.accent }, line: { type: "none" }
    });
    slide.addText(s.per, {
      x: x + 0.15, y: 3.3, w: 2.5, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(s.count, {
      x: x + 0.15, y: 3.6, w: 2.5, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // 折算
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.4, w: 8.8, h: 0.7,
    fill: { color: theme.primary }, line: { type: "none" }
  });
  slide.addText([
    { text: "折算：", options: { fontSize: 16, color: "FFFFFF", bold: true } },
    { text: "6500+ 小时 ÷ 22 工作日 ÷ 8 小时 = ", options: { fontSize: 16, color: "FFFFFF" } },
    { text: "≈ 37 人月产能", options: { fontSize: 18, color: theme.accent, bold: true } },
    { text: "  |  净 ROI ", options: { fontSize: 16, color: "FFFFFF" } },
    { text: "3.2x", options: { fontSize: 18, color: theme.accent, bold: true } }
  ], {
    x: 0.6, y: 4.4, w: 8.8, h: 0.7,
    fontFace: "Microsoft YaHei", align: "center", valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("05", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
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
  pres.writeFile({ fileName: "slide-05-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
