// slide-10_导言_开始前须知 - 引述收尾
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 10,
  title: '开始前须知'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧大引号装饰
  slide.addText(""", {
    x: 0.3, y: 0.8, w: 1.5, h: 1.5,
    fontSize: 120, fontFace: "Georgia",
    color: theme.accent,
    align: "left", valign: "top", margin: 0
  });

  // 核心金句
  slide.addText("最重要的不是学多少AI知识\n而是用AI思维重新审视\n你的业务、你的客户、你的价值创造方式", {
    x: 0.8, y: 1.5, w: 8.5, h: 2.0,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 分隔线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 3.7, w: 3, h: 0.02,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  // 底部三个要点
  const points = [
    "带着你企业的问题来学习",
    "每章结束后做一次自我诊断",
    "把学到的方法立即应用到工作中"
  ];

  points.forEach((point, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 2.5, y: 4.0 + i * 0.4, w: 0.15, h: 0.15,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(point, {
      x: 2.8, y: 3.9 + i * 0.4, w: 5, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "90e0ef",
      align: "left", valign: "middle", margin: 0
    });
  });

  // 页码
  slide.addText("10", {
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
  pres.writeFile({ fileName: "slide-10-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
