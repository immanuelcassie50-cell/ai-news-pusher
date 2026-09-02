// slide-22_第一章_先行者红利 - 大数字展示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 22,
  title: '先行者红利'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 页面标题
  slide.addText("先行者红利", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 核心数据
  slide.addText("3-5年", {
    x: 0.5, y: 1.2, w: 4, h: 1.5,
    fontSize: 72, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("先行者与追赶者之间的\n窗口期（年）", {
    x: 0.5, y: 2.7, w: 4, h: 0.7,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "90e0ef",
    align: "center", valign: "top", margin: 0
  });

  // 右侧三个红利点
  const benefits = [
    { title: "数据积累", desc: "先下手为企业的AI模型积累独特、稀有的训练数据" },
    { title: "流程优化", desc: "更早将AI融入业务流程，形成效率壁垒" },
    { title: "人才吸引", desc: "品牌效应和实践机会吸引顶尖AI人才加入" }
  ];

  benefits.forEach((ben, i) => {
    const y = 1.3 + i * 1.15;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.0, y: y, w: 4.5, h: 0.95,
      fill: { color: theme.secondary }, line: { type: 'none' }
    });

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.0, y: y, w: 0.06, h: 0.95,
      fill: { color: theme.accent }, line: { type: 'none' }
    });

    slide.addText(ben.title, {
      x: 5.2, y: y + 0.1, w: 4.1, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });

    slide.addText(ben.desc, {
      x: 5.2, y: y + 0.45, w: 4.1, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      align: "left", valign: "top", margin: 0
    });
  });

  // 底部金句
  slide.addText("先行者不是在冒险，而是在建立规则", {
    x: 0.5, y: 4.7, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页码
  slide.addText("22", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary:   "000814",
    secondary: "003566",
    accent:    "ffc300",
    light:     "ffd60a",
    bg:        "001d3d"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-22-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
