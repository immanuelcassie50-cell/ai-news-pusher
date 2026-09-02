// slide-21_第一章_创新竞赛已开启 - 引述展示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 21,
  title: '创新竞赛已开启'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧大引号
  slide.addText(""", {
    x: 0.3, y: 0.8, w: 1.5, h: 1.5,
    fontSize: 120, fontFace: "Georgia",
    color: theme.accent,
    align: "left", valign: "top", margin: 0
  });

  // 引述内容
  slide.addText("AI不是一场技术竞赛\n而是一场关于商业韧性的竞赛\n晚一步，可能就再也没有机会了", {
    x: 0.8, y: 1.5, w: 8.5, h: 2.2,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 出处
  slide.addText("—— Gartner 2024 CEO Survey", {
    x: 5, y: 3.9, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "90e0ef",
    align: "right", valign: "middle", margin: 0
  });

  // 底部装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 4.5, w: 3, h: 0.02,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  // 页码
  slide.addText("21", {
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
  pres.writeFile({ fileName: "slide-21-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
