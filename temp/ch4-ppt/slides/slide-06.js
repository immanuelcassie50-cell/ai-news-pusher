// slide-06.js - 四个环节组成循环
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 6,
  title: '四个环节组成循环'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧红色装饰条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // 页面标题
  slide.addText("四个环节组成循环", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // 循环图示 - 中心圆
  slide.addShape(pres.shapes.OVAL, {
    x: 4, y: 2.3, w: 1.4, h: 1.4,
    fill: { color: theme.primary }
  });
  slide.addText("循环", {
    x: 4, y: 2.3, w: 1.4, h: 1.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // 四个环节
  const phases = [
    { name: "输入", x: 4.3, y: 1.2, desc: "背景+要求+素材" },
    { name: "生成", x: 6.2, y: 2.5, desc: "准备验证标准" },
    { name: "判断", x: 5.0, y: 4.0, desc: "30秒验证" },
    { name: "迭代", x: 2.8, y: 2.5, desc: "深化/纠偏/收尾" }
  ];

  phases.forEach((phase) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: phase.x, y: phase.y, w: 1.6, h: 1.2,
      fill: { color: "FFFFFF" },
      rectRadius: 0.1
    });
    slide.addText(phase.name, {
      x: phase.x, y: phase.y + 0.15, w: 1.6, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });
    slide.addText(phase.desc, {
      x: phase.x, y: phase.y + 0.6, w: 1.6, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "center", valign: "middle"
    });
  });

  // 连接箭头
  slide.addText("→", { x: 5.5, y: 1.3, w: 0.5, h: 0.5, fontSize: 20, fontFace: "Arial", color: theme.secondary, align: "center", valign: "middle" });
  slide.addText("→", { x: 6.8, y: 2.8, w: 0.5, h: 0.5, fontSize: 20, fontFace: "Arial", color: theme.secondary, align: "center", valign: "middle" });
  slide.addText("←", { x: 4.3, y: 4.1, w: 0.5, h: 0.5, fontSize: 20, fontFace: "Arial", color: theme.secondary, align: "center", valign: "middle" });
  slide.addText("←", { x: 3.0, y: 2.8, w: 0.5, h: 0.5, fontSize: 20, fontFace: "Arial", color: theme.secondary, align: "center", valign: "middle" });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C43C3C", secondary: "4A4A4A", accent: "C43C3C", light: "888888", bg: "F5F5F5" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "./output/slide-06-preview.pptx" });
}

module.exports = { createSlide, slideConfig };