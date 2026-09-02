// slide-34.js - Summary: 核心要点回顾
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 34,
  title: '核心要点回顾'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("核心要点回顾", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Three key points
  const points = [
    { num: "01", title: "两种语言", desc: "感受语言 vs 业务语言——管理层做决策靠数字" },
    { num: "02", title: "支持部门价值", desc: "不在于产出什么，而在于整个链条损失了什么" },
    { num: "03", title: "三种公式", desc: "时间延误→流失 / 重复→人力 / 断点→机会" }
  ];

  points.forEach((point, i) => {
    const y = 1.1 + i * 1.2;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 1.0,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Number
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.2, w: 0.6, h: 0.6,
      fill: { color: theme.accent }
    });
    slide.addText(point.num, {
      x: 0.7, y: y + 0.2, w: 0.6, h: 0.6,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title and desc
    slide.addText(point.title, {
      x: 1.5, y: y + 0.15, w: 7.8, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(point.desc, {
      x: 1.5, y: y + 0.55, w: 7.8, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };