// slide-24_第一章_技术成熟度曲线 - 图表展示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 24,
  title: '技术成熟度曲线'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 页面标题
  slide.addText("Gartner技术成熟度曲线", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 曲线图示 - 用多段矩形模拟曲线上升和下降
  // Y轴
  slide.addShape(pres.shapes.LINE, {
    x: 1.2, y: 1.3, w: 0, h: 3.5,
    line: { color: "90e0ef", width: 1.5 }
  });
  // X轴
  slide.addShape(pres.shapes.LINE, {
    x: 1.2, y: 4.8, w: 7.5, h: 0,
    line: { color: "90e0ef", width: 1.5 }
  });

  // 阶段标签
  const phases = [
    { x: 1.5, label: "技术触发" },
    { x: 3.5, label: "期望峰值" },
    { x: 5.5, label: "泡沫低谷" },
    { x: 7.5, label: "复苏爬坡" },
    { x: 8.8, label: "生产力高原" }
  ];

  phases.forEach((ph) => {
    slide.addText(ph.label, {
      x: ph.x, y: 4.85, w: 1.5, h: 0.3,
      fontSize: 8, fontFace: "Microsoft YaHei",
      color: "90e0ef",
      align: "center", valign: "top", margin: 0
    });
  });

  // AI相关技术点
  const techPoints = [
    { x: 1.8, y: 2.5, label: "生成式AI", pos: "左侧" },
    { x: 3.2, y: 1.5, label: "大语言模型", pos: "峰顶附近" },
    { x: 5.0, y: 3.8, label: "元宇宙", pos: "低谷" },
    { x: 7.0, y: 2.8, label: "AI Agent", pos: "爬坡" },
    { x: 8.5, y: 4.2, label: "计算机视觉", pos: "高原" }
  ];

  techPoints.forEach((tp) => {
    // 点
    slide.addShape(pres.shapes.OVAL, {
      x: tp.x, y: tp.y, w: 0.2, h: 0.2,
      fill: { color: tp.label.includes("大语言模型") || tp.label.includes("生成式AI") ? theme.accent : theme.light },
      line: { type: 'none' }
    });
    // 标签
    slide.addText(tp.label, {
      x: tp.x - 0.3, y: tp.y - 0.35, w: 0.9, h: 0.3,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      align: "center", valign: "middle", margin: 0
    });
  });

  // Y轴标签
  slide.addText("期望值", {
    x: 0.5, y: 1.3, w: 0.6, h: 0.3,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: "90e0ef",
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("时间 →", {
    x: 7.5, y: 4.55, w: 1, h: 0.25,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: "90e0ef",
    align: "center", valign: "middle", margin: 0
  });

  // 右侧说明
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.8, y: 1.2, w: 2.7, h: 2.0,
    fill: { color: theme.secondary }, line: { type: 'none' }
  });
  slide.addText("💡 关键洞察", {
    x: 6.95, y: 1.3, w: 2.4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("生成式AI正处于期望峰值附近，企业需要警惕过热期望，同时积极布局实际应用。", {
    x: 6.95, y: 1.7, w: 2.4, h: 1.4,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "top", margin: 0
  });

  // 页码
  slide.addText("24", {
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
  pres.writeFile({ fileName: "slide-24-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
