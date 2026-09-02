// slide-03_导言_AI正在改变创新规则 - 大字引述
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 3,
  title: 'AI正在改变创新规则'
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

  // 核心引述文字
  slide.addText("AI不会取代人类\n但会用AI的人\n会取代不会用AI的人", {
    x: 0.8, y: 1.5, w: 8, h: 2.5,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 出处
  slide.addText("—— 行业共识", {
    x: 5, y: 4.2, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "90e0ef",
    align: "right", valign: "middle", margin: 0
  });

  // 底部装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 2, h: 0.02,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  // 页码
  slide.addText("3", {
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
  pres.writeFile({ fileName: "slide-03-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
