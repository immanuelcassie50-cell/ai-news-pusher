// slide-13_第一章_从互联网到AI的范式转移 - 对比展示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 13,
  title: '从互联网到AI的范式转移'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 页面标题
  slide.addText("从互联网到AI的范式转移", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧卡片 - 互联网时代
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.3, h: 3.8,
    fill: { color: theme.secondary }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.3, h: 0.5,
    fill: { color: "90e0ef" }, line: { type: 'none' }
  });
  slide.addText("互联网时代", {
    x: 0.5, y: 1.2, w: 4.3, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  const internetFeatures = [
    "连接人与信息",
    "提升交易效率",
    "复制边际成本趋零",
    "平台赢家通吃",
    "颠覆传统渠道"
  ];

  internetFeatures.forEach((feature, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: 1.95 + i * 0.55, w: 0.12, h: 0.12,
      fill: { color: "90e0ef" }, line: { type: 'none' }
    });
    slide.addText(feature, {
      x: 0.95, y: 1.85 + i * 0.55, w: 3.6, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      align: "left", valign: "middle", margin: 0
    });
  });

  // 中间箭头
  slide.addText("→", {
    x: 4.6, y: 2.8, w: 0.8, h: 0.6,
    fontSize: 36, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 右侧卡片 - AI时代
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.2, w: 4.3, h: 3.8,
    fill: { color: theme.secondary }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.2, w: 4.3, h: 0.5,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("AI时代", {
    x: 5.2, y: 1.2, w: 4.3, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  const aiFeatures = [
    "模拟人类智能",
    "创造新价值",
    "边际成本接近零（知识）",
    "赋能每个行业",
    "重构工作流程"
  ];

  aiFeatures.forEach((feature, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 5.4, y: 1.95 + i * 0.55, w: 0.12, h: 0.12,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(feature, {
      x: 5.65, y: 1.85 + i * 0.55, w: 3.6, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      align: "left", valign: "middle", margin: 0
    });
  });

  // 页码
  slide.addText("13", {
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
  pres.writeFile({ fileName: "slide-13-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
