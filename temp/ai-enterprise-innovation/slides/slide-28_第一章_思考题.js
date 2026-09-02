// slide-28_第一章_思考题 - 引述展示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 28,
  title: '思考题'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 页面标题
  slide.addText("课后思考", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.5, h: 0.03,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  // 思考题内容
  const questions = [
    "你的企业目前处于AI采用的哪个阶段？有哪些证据表明这一点？",
    "在你的行业中，先行者的哪些经验最值得借鉴？哪些教训需要避免？",
    "如果给企业AI创新打分（1-10），你会打几分？依据是什么？"
  ];

  questions.forEach((q, i) => {
    const y = 1.4 + i * 1.2;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 1.0,
      fill: { color: theme.secondary }, line: { type: 'none' }
    });

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.08, h: 1.0,
      fill: { color: theme.accent }, line: { type: 'none' }
    });

    slide.addText("Q" + (i + 1), {
      x: 0.75, y: y + 0.15, w: 0.5, h: 0.35,
      fontSize: 16, fontFace: "Georgia",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });

    slide.addText(q, {
      x: 1.3, y: y + 0.2, w: 8.0, h: 0.7,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      align: "left", valign: "middle", margin: 0
    });
  });

  // 底部提示
  slide.addText("💡 建议：带着这些问题进入下一章学习，边学边诊断", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "90e0ef",
    align: "center", valign: "middle", margin: 0
  });

  // 页码
  slide.addText("28", {
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
  pres.writeFile({ fileName: "slide-28-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
