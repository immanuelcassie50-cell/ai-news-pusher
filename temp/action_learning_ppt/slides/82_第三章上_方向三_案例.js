// 页 82: 第三章上 - 方向三 案例 - 培训 vs 工作流（案例框）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 82,
  title: '方向三 案例 - 培训 vs 工作流'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 顶部小标
  slide.addText("方向三  /  案例  ·  培训 vs 工作流", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("案例  /  培训 vs 工作流设计", {
    x: 0.5, y: 0.8, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 案例大框
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 9, h: 3.4,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
  });

  // 顶部标识条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 9, h: 0.45,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("案例  ·  CASE  STUDY", {
    x: 0.7, y: 1.55, w: 4, h: 0.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("横向移动  /  改变切入点", {
    x: 5, y: 1.55, w: 4.3, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, charSpacing: 4,
    align: "right", valign: "middle", margin: 0
  });

  // 原始问题
  slide.addText("原问题", {
    x: 0.7, y: 2.15, w: 1.5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("如何提升员工技能培训的效果？", {
    x: 0.7, y: 2.5, w: 8.6, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 横向移动箭头
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 3.1, w: 8.6, h: 0.03,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RIGHT_TRIANGLE, {
    x: 4.4, y: 3.05, w: 0.4, h: 0.18,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("横向移动  /  LATERAL  SHIFT", {
    x: 0.7, y: 3.18, w: 8.6, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, charSpacing: 4,
    align: "center", valign: "middle", margin: 0
  });

  // 移动后
  slide.addText("新问题", {
    x: 0.7, y: 3.55, w: 1.5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("如果不是培训员工，而是重新设计工作流程，", {
    x: 0.7, y: 3.9, w: 8.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("让正确的操作成为最省力的操作 —— 能否达到同样甚至更好的结果？", {
    x: 0.7, y: 4.3, w: 8.6, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 启示
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 0.04, h: 0.3,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("启示  /  改变人是困难的，改变环境让人自然做出正确行为，往往更可持续", {
    x: 0.7, y: 5.0, w: 8.8, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "82", "第三章（上）换一套假设思考");
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
  pres.writeFile({ fileName: "82_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
