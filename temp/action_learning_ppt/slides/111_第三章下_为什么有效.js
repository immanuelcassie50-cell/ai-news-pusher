// 页 111: 为什么有效 - 大字
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 111,
  title: '为什么有效'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 顶部标识
  slide.addText("极端用户  ·  关键洞察", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 案例标题
  slide.addText("轨道交通 × 轮椅乘客", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 中央大字
  slide.addText("修复极端用户的断点，", {
    x: 0.5, y: 1.7, w: 9, h: 0.8,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("往往改善所有用户的体验。", {
    x: 0.5, y: 2.5, w: 9, h: 0.8,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 解释
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.5, w: 9, h: 1.5,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.5, w: 0.08, h: 1.5,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("轮椅使用者的乘车体验会暴露大量断点：电梯是否永远可用？站台和列车间隙？上车时的协助安排？换乘路径的无障碍替代？", {
    x: 0.75, y: 3.6, w: 8.6, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });
  slide.addText("这些断点在设计之初被忽略，是因为设计是按\"普通乘客\"模式优化的。修复它们之后，往往会发现对所有乘客的体验都有改善 —— 因为这些缺陷是系统设计的根本性问题。", {
    x: 0.75, y: 4.25, w: 8.6, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "top", margin: 0
  });

  addFooter(slide, pres, theme, "111", "第三章（下）换一个视角思考");
  return slide;
}

function addFooter(slide, pres, theme, pageNum, sectionName) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.42, w: 3, h: 0.02,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.5, y: 5.42, w: 3, h: 0.02,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addText(`行动学习 · 创新解决方案  /  ${pageNum}`, {
    x: 0.5, y: 5.46, w: 5, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'left', valign: 'middle', margin: 0
  });
  slide.addText(sectionName, {
    x: 6, y: 5.46, w: 3.5, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'right', valign: 'middle', margin: 0
  });
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
  pres.writeFile({ fileName: "111_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
