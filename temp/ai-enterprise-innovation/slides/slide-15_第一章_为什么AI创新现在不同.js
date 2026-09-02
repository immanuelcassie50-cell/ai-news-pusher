// slide-15_第一章_为什么AI创新现在不同 - 大数字展示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 15,
  title: '为什么AI创新现在不同'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 页面标题
  slide.addText("为什么AI创新现在不同", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 核心大数字
  slide.addText("1000x", {
    x: 0.5, y: 1.3, w: 4.5, h: 1.8,
    fontSize: 96, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 说明文字
  slide.addText("算力成本下降倍数\n（2010-2024）", {
    x: 0.5, y: 3.1, w: 4.5, h: 0.8,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "90e0ef",
    align: "center", valign: "top", margin: 0
  });

  // 右侧三个关键点
  const points = [
    { value: "零边际成本", desc: "AI模型复制和使用的边际成本接近于零" },
    { value: "即插即用", desc: "云API让企业无需自建基础设施即可使用AI" },
    { value: "涌现能力", desc: "大模型展现出在小模型上不存在的智能行为" }
  ];

  points.forEach((point, i) => {
    const y = 1.3 + i * 1.2;

    // 左侧强调条
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.3, y: y, w: 0.06, h: 0.9,
      fill: { color: theme.accent }, line: { type: 'none' }
    });

    // 值
    slide.addText(point.value, {
      x: 5.5, y: y, w: 4, h: 0.45,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });

    // 描述
    slide.addText(point.desc, {
      x: 5.5, y: y + 0.45, w: 4, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      align: "left", valign: "top", margin: 0
    });
  });

  // 底部金句
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.6, w: 9, h: 0.5,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("AI创新的成本结构与以往任何技术创新都完全不同", {
    x: 0.5, y: 4.6, w: 9, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.light, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页码
  slide.addText("15", {
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
  pres.writeFile({ fileName: "slide-15-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
