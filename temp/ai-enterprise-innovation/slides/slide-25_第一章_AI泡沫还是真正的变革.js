// slide-25_第一章_AI泡沫还是真正的变革 - 对比展示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 25,
  title: 'AI泡沫还是真正的变革'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 页面标题
  slide.addText("AI泡沫还是真正的变革？", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧 - 泡沫论据
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.3, h: 0.5,
    fill: { color: theme.secondary }, line: { type: 'none' }
  });
  slide.addText("泡沫论据", {
    x: 0.5, y: 1.2, w: 4.3, h: 0.5,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "90e0ef", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  const bubblePoints = [
    "大量AI创业公司估值虚高",
    "商业化落地不及预期",
    "技术承诺与实际效果存在落差",
    "资本过热导致资源浪费"
  ];

  bubblePoints.forEach((point, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: 1.85 + i * 0.65, w: 4.3, h: 0.55,
      fill: { color: theme.secondary }, line: { type: 'none' }
    });
    slide.addText("×  " + point, {
      x: 0.65, y: 1.85 + i * 0.65, w: 4.0, h: 0.55,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "90e0ef",
      align: "left", valign: "middle", margin: 0
    });
  });

  // 中间 VS
  slide.addText("VS", {
    x: 4.5, y: 2.8, w: 1, h: 0.5,
    fontSize: 20, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 右侧 - 真正变革论据
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.2, w: 4.3, h: 0.5,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("真正变革论据", {
    x: 5.2, y: 1.2, w: 4.3, h: 0.5,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  const realityPoints = [
    "底层技术能力确实快速提升",
    "实际 productivity 提升有据可查",
    "头部企业已在核心业务中规模化使用",
    "开源生态加速技术普及"
  ];

  realityPoints.forEach((point, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.2, y: 1.85 + i * 0.65, w: 4.3, h: 0.55,
      fill: { color: theme.secondary }, line: { type: 'none' }
    });
    slide.addText("✓  " + point, {
      x: 5.35, y: 1.85 + i * 0.65, w: 4.0, h: 0.55,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      align: "left", valign: "middle", margin: 0
    });
  });

  // 底部结论
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.5, w: 9, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.accent, width: 1 }
  });
  slide.addText("结论：技术是真实的，但需要理性预期、聚焦落地", {
    x: 0.5, y: 4.5, w: 9, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页码
  slide.addText("25", {
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
  pres.writeFile({ fileName: "slide-25-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
