// D-18 提示词库
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 4,
  title: '提示词库'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("提示词库", {
    x: 0.6, y: 0.4, w: 6, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.05, w: 0.6, h: 0.08,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("6500+ 个本岗提示词 · 沉淀为公司级知识资产", {
    x: 0.6, y: 1.25, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // 左侧大数字
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.9, w: 3.5, h: 2.8,
    fill: { color: theme.primary }, line: { type: "none" }
  });
  slide.addText("6500+", {
    x: 0.6, y: 2.0, w: 3.5, h: 1.2,
    fontSize: 72, fontFace: "Arial", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });
  slide.addText("入库提示词总数", {
    x: 0.6, y: 3.2, w: 3.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "center", bold: true
  });
  slide.addText("人均 3-5 个本岗提示词", {
    x: 0.6, y: 3.7, w: 3.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center"
  });
  slide.addText("覆盖 5 大方向 · 80+ 岗位", {
    x: 0.6, y: 4.1, w: 3.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center"
  });

  // 右侧分布
  slide.addText("按方向分布", {
    x: 4.4, y: 1.9, w: 5.0, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  const dist = [
    { d: "项目管理", n: 2400 },
    { d: "通用管理", n: 1200 },
    { d: "专业职能", n: 1300 },
    { d: "测试", n: 800 },
    { d: "开发", n: 800 }
  ];
  const total = 6500;
  dist.forEach((d, i) => {
    const y = 2.4 + i * 0.42;
    slide.addText(d.d, {
      x: 4.4, y: y, w: 1.2, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
    const w = (d.n / total) * 3.0;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.65, y: y + 0.05, w: w, h: 0.2,
      fill: { color: theme.accent }, line: { type: "none" }
    });
    slide.addText(`${d.n}`, {
      x: 5.65 + w + 0.05, y: y, w: 0.8, h: 0.3,
      fontSize: 11, fontFace: "Arial", color: theme.primary,
      bold: true, valign: "middle"
    });
  });

  // 质量分布
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.4, y: 4.55, w: 5.0, h: 0.55,
    fill: { color: theme.light }, line: { type: "none" }
  });
  slide.addText([
    { text: "高质量（≥21 分）：", options: { fontSize: 12, color: theme.primary, bold: true } },
    { text: "1280 个（20%）   ", options: { fontSize: 12, color: theme.secondary } },
    { text: "合规率：", options: { fontSize: 12, color: theme.primary, bold: true } },
    { text: "98%", options: { fontSize: 12, color: theme.accent, bold: true } }
  ], {
    x: 4.5, y: 4.55, w: 4.8, h: 0.55,
    fontFace: "Microsoft YaHei", valign: "middle"
  });

  slide.addText("数据来源：提示词评分卡 D-06 汇总", {
    x: 0.6, y: 5.0, w: 8.8, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("04", {
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
  pres.writeFile({ fileName: "slide-04-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
