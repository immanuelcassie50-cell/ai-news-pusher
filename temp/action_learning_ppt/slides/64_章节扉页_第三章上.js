// 页 64: 章节扉页 - 第三章（上）换一套假设思考
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section_divider',
  index: 64,
  title: '第三章（上）换一套假设思考'
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
  slide.addText("03", {
    x: 0.4, y: 1.6, w: 2.5, h: 1.8,
    fontSize: 120, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧 PART 标识
  slide.addText("PART  /  UPPER", {
    x: 0.4, y: 3.5, w: 2.5, h: 0.4,
    fontSize: 14, fontFace: "Georgia",
    color: theme.light, charSpacing: 10,
    align: "left", valign: "middle", margin: 0
  });

  // 右侧章节标题
  slide.addText("换一套假设思考", {
    x: 3.8, y: 2.0, w: 5.8, h: 1.0,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 右侧章节副标题
  slide.addText("问题重构 + 假设挑战 —— 专门对付思维框架本身的两种方法", {
    x: 3.8, y: 3.0, w: 5.8, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 右侧底部装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.8, y: 3.8, w: 0.6, h: 0.05,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 右侧导语
  slide.addText("—— 大多数突破不是想出新奇主意，而是发现「大家以为不能动但其实可以」的假设", {
    x: 3.8, y: 3.95, w: 5.8, h: 0.4,
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
  pres.writeFile({ fileName: "64_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
