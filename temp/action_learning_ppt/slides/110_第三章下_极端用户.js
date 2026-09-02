// 页 110: 形式三：极端用户 - 解释
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 110,
  title: '形式三 极端用户'
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
  slide.addText("形式三  ·  EXTREME USERS", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("极端用户视角", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("被系统设计最边缘化的人，往往暴露最根本的缺陷", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 核心问题
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.15, w: 9, h: 0.85,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("谁是这个问题中体验最极端的人 —— 体验最差的、需求最特殊的、被现有设计最边缘化的？", {
    x: 0.7, y: 2.15, w: 8.6, h: 0.85,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });

  // 解释
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.2, w: 9, h: 1.0,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.2, w: 0.08, h: 1.0,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("为什么有效", {
    x: 0.75, y: 3.3, w: 8.6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("极端用户的需求放大了所有普通用户也有但程度较低的需求。他们遇到的问题是所有人都有但大多数人能忍受的问题的集中体现。", {
    x: 0.75, y: 3.6, w: 8.6, h: 0.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });

  // 案例入口
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.4, w: 9, h: 0.85,
    fill: { color: "FFFFFF" }, line: { color: theme.primary, width: 1 }
  });
  slide.addText("典型例子", {
    x: 0.7, y: 4.45, w: 2, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary, charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("轨道交通 × 轮椅乘客", {
    x: 0.7, y: 4.7, w: 5, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("→", {
    x: 6.5, y: 4.7, w: 0.4, h: 0.5,
    fontSize: 24, fontFace: "Georgia",
    color: theme.primary, bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("下一页详解", {
    x: 7.0, y: 4.7, w: 2.4, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "110", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "110_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
