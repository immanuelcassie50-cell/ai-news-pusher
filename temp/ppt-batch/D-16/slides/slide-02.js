// D-16 背景
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 2,
  title: '项目背景'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 标题
  slide.addText("项目背景", {
    x: 0.6, y: 0.4, w: 6, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 标题装饰条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.05, w: 0.6, h: 0.08,
    fill: { color: theme.accent }, line: { type: "none" }
  });

  // 副标题
  slide.addText("AI 普及到 AI 落地 · 评审是落地最后一公里", {
    x: 0.6, y: 1.25, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // 三大数字卡
  const cards = [
    { num: "2000+", label: "覆盖学员", sub: "5 大方向" },
    { num: "40+", label: "基础班次", sub: "1 天全员课" },
    { num: "6 天", label: "内训师班", sub: "10 项课程包" }
  ];
  cards.forEach((c, i) => {
    const x = 0.6 + i * 3.0;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 2.0, w: 2.8, h: 1.8,
      fill: { color: theme.light }, line: { type: "none" }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 2.0, w: 0.08, h: 1.8,
      fill: { color: theme.primary }, line: { type: "none" }
    });
    slide.addText(c.num, {
      x: x + 0.2, y: 2.2, w: 2.5, h: 0.8,
      fontSize: 36, fontFace: "Arial",
      color: theme.primary, bold: true
    });
    slide.addText(c.label, {
      x: x + 0.2, y: 3.0, w: 2.5, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true
    });
    slide.addText(c.sub, {
      x: x + 0.2, y: 3.4, w: 2.5, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // 底部结论
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.2, w: 8.8, h: 0.7,
    fill: { color: theme.primary }, line: { type: "none" }
  });
  slide.addText("评价对象已变：评业务问题被解得怎么样，不再评课讲得好不好", {
    x: 0.8, y: 4.2, w: 8.6, h: 0.7,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  // 页码
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("02", {
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
  pres.writeFile({ fileName: "slide-02-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
