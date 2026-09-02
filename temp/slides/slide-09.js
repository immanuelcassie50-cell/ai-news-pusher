// slide-09.js - Content: 因果归因
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'content',
  index: 9,
  title: 'demo07: 因果归因分析'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("因果归因分析", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Observation box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 9, h: 0.7,
    fill: { color: theme.light }
  });
  slide.addText("【观察】门店销售额与员工满意度高度正相关（r=0.85）", {
    x: 0.6, y: 1.1, w: 8.8, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Analysis cards
  const analyses = [
    { title: "错误归因", content: "员工满意度高 -> 销售额高\n（把相关性当因果性）", color: theme.secondary },
    { title: "正确分析", content: "销售额高 -> 员工收入高 -> 满意度高\n或者：共同原因C：店长管理能力强", color: theme.accent },
    { title: "关键结论", content: "如果只提升满意度，而不提升销售能力\n销售额不会提高 —— 这是『伪因』陷阱", color: theme.primary }
  ];

  analyses.forEach((item, i) => {
    const x = 0.5 + i * 3.1;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.9, w: 2.9, h: 1.8,
      fill: { color: "FFFFFF" },
      line: { color: item.color, width: 2 }
    });

    // Color bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.9, w: 2.9, h: 0.1,
      fill: { color: item.color }
    });

    slide.addText(item.title, {
      x: x + 0.1, y: 2.1, w: 2.7, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: item.color, bold: true
    });

    slide.addText(item.content, {
      x: x + 0.1, y: 2.55, w: 2.7, h: 1.0,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });

  // Three questions
  slide.addText("因果归因三问：", {
    x: 0.5, y: 3.9, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const questions = [
    "1. 这是相关性还是因果性？",
    "2. 因果方向是什么？",
    "3. 找到可控因了吗？"
  ];

  questions.forEach((q, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5 + i * 3.1, y: 4.35, w: 2.9, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(q, {
      x: 0.5 + i * 3.1, y: 4.35, w: 2.9, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      align: "center", valign: "middle"
    });
  });

  // Page number
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("9", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "edf2f4",
    bg: "edf2f4"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-09-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
