// slide-50.js - Change Champion System
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 50,
  title: '变革大使体系的建设'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革大使体系的建设", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // What is a change champion
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 8.5, h: 1.2,
    fill: { color: theme.light }
  });

  slide.addText("变革大使（Change Champion）的定义：", {
    x: 0.7, y: 1.2, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  slide.addText("在组织各部门中遴选并培养的变革推动者，他们既是变革的先行者，\n也是连接管理层与员工的桥梁，帮助传递信息、收集反馈、带动同侪。", {
    x: 0.7, y: 1.65, w: 8, h: 0.55,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "left"
  });

  // Selection criteria
  slide.addText("选拔标准：", {
    x: 0.5, y: 2.5, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const criteria = [
    "部门内有影响力，能带动同侪",
    "对变革持开放态度，有一定抗压能力",
    "沟通能力强，愿意扮演桥梁角色",
    "有一定的时间投入意愿"
  ];

  criteria.forEach((c, i) => {
    const y = 2.95 + i * 0.55;
    slide.addShape(pres.shapes.OVAL, {
      x: 0.6, y: y + 0.05, w: 0.12, h: 0.12,
      fill: { color: theme.accent }
    });
    slide.addText(c, {
      x: 0.85, y: y, w: 4, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  // Responsibilities
  slide.addText("核心职责：", {
    x: 5, y: 2.5, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const responsibilities = [
    "第一时间学习理解变革政策和方案",
    "向部门同事传递准确信息",
    "收集同侪的反馈和担忧向上传递",
    "以身作则带动部门参与变革"
  ];

  responsibilities.forEach((r, i) => {
    const y = 2.95 + i * 0.55;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5, y: y, w: 0.08, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText(r, {
      x: 5.25, y: y, w: 4.25, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "4A4A4A",
    accent: "C41E3A",
    light: "D4D4D4",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-50-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
