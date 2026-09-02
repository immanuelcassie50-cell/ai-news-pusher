// 40_章节扉页_第二章 - Section Divider
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section_divider',
  index: 40,
  title: '02 系统盘点'
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
  slide.addText("02", {
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
  slide.addText("系统盘点", {
    x: 3.8, y: 1.9, w: 5.8, h: 1.0,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 右侧章节副标题
  slide.addText("看清你手里有什么", {
    x: 3.8, y: 2.9, w: 5.8, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 右侧底部装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.8, y: 3.7, w: 0.6, h: 0.05,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 右侧导语
  slide.addText("在找新方案之前，先把现有方案整理清楚。", {
    x: 3.8, y: 4.0, w: 5.8, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
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
  pres.writeFile({ fileName: "40_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
