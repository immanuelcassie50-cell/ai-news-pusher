// 页 94: 章节扉页 - 第三章（下）换一个视角思考
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section_divider',
  index: 94,
  title: '第三章（下）换一个视角思考'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧 1/3 主色块
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 3.3, h: 5.625,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  // 左侧大数字编号
  slide.addText("04", {
    x: 0.4, y: 1.6, w: 2.5, h: 1.8,
    fontSize: 120, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧下方小标识
  slide.addText("PART", {
    x: 0.4, y: 3.5, w: 2.5, h: 0.4,
    fontSize: 14, fontFace: "Georgia",
    color: theme.light, charSpacing: 10,
    align: "left", valign: "middle", margin: 0
  });

  // 右侧章节标题
  slide.addText("换一个视角思考", {
    x: 3.8, y: 1.9, w: 5.8, h: 1.0,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 右侧章节副标题
  slide.addText("外部视角 · 逆向思维 · 组合创新 —— 三种切换框架的方法", {
    x: 3.8, y: 2.9, w: 5.8, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 右侧底部装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.8, y: 3.6, w: 0.6, h: 0.05,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 右侧三个方法标识
  slide.addText("方法三  外部视角", {
    x: 3.8, y: 3.75, w: 5.8, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("方法四  逆向思维", {
    x: 3.8, y: 4.1, w: 5.8, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("方法五  组合创新", {
    x: 3.8, y: 4.45, w: 5.8, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "left", valign: "middle", margin: 0
  });

  // 底部导语
  slide.addText("—— 当正向思维走到头，从框架之外找答案", {
    x: 3.8, y: 4.95, w: 5.8, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary:   "6B0F0F",
    secondary: "3D3D3D",
    accent:    "B8232C",
    light:     "D4C5BE",
    bg:        "F5F0EC"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "94_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
