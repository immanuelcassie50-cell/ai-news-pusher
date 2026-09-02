// slide-12_第一章_技术演进的时间线 - 时间轴展示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 12,
  title: '技术演进的时间线'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部标签
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.4, w: 0.08, h: 0.4,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("CHAPTER 01", {
    x: 0.7, y: 0.4, w: 3, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: theme.accent, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });

  // 页面标题
  slide.addText("技术演进的时间线", {
    x: 0.5, y: 0.9, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 时间轴主线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.8, w: 9, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 时间节点
  const timeline = [
    { year: "2012", event: "深度学习突破", desc: "AlexNet赢得ImageNet竞赛", x: 1.0 },
    { year: "2017", event: "Transformer架构", desc: "Attention Is All You Need论文发布", x: 3.2 },
    { year: "2020", event: "GPT-3发布", desc: "1750亿参数大模型出现", x: 5.4 },
    { year: "2023", event: "GPT-4时刻", desc: "多模态能力震惊业界", x: 7.6 }
  ];

  timeline.forEach((item, i) => {
    // 时间点圆圈
    slide.addShape(pres.shapes.OVAL, {
      x: item.x, y: 2.65, w: 0.35, h: 0.35,
      fill: { color: theme.accent }, line: { type: 'none' }
    });

    // 年份（上方）
    slide.addText(item.year, {
      x: item.x - 0.3, y: 2.0, w: 1.0, h: 0.5,
      fontSize: 20, fontFace: "Georgia",
      color: theme.accent, bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // 事件名称
    slide.addText(item.event, {
      x: item.x - 0.5, y: 3.2, w: 1.5, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // 描述
    slide.addText(item.desc, {
      x: item.x - 0.6, y: 3.6, w: 1.7, h: 0.6,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: "90e0ef",
      align: "center", valign: "top", margin: 0
    });
  });

  // 2025 未来标记
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 9.0, y: 2.65, w: 0.5, h: 0.35,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addText("→", {
    x: 9.0, y: 2.65, w: 0.5, h: 0.35,
    fontSize: 14, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页码
  slide.addText("12", {
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
  pres.writeFile({ fileName: "slide-12-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
