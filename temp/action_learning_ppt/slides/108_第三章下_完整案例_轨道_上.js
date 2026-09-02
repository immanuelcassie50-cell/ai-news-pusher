// 页 108: 完整案例 轨道交通 - 上 (抽象化)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 108,
  title: '完整案例 轨道交通 (上)'
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
  slide.addText("完整案例  ·  轨道交通  ·  上", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("完整案例：轨道交通（上）", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("从原始问题到抽象化，再到外部场景", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 步骤卡片 - 原始问题
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.1, w: 9, h: 0.85,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.1, w: 0.08, h: 0.85,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("STEP 1  ·  原始问题", {
    x: 0.75, y: 2.15, w: 8, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("如何在高峰期提升轨道交通运载效率", {
    x: 0.75, y: 2.45, w: 8, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 箭头
  slide.addText("↓", {
    x: 4.7, y: 2.97, w: 0.6, h: 0.3,
    fontSize: 20, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 步骤卡片 - 抽象化
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.3, w: 9, h: 0.85,
    fill: { color: "FFFFFF" }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.3, w: 0.08, h: 0.85,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("STEP 2  ·  抽象化后", {
    x: 0.75, y: 3.35, w: 8, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary, charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("如何在固定基础设施容量下最大化峰值吞吐量", {
    x: 0.75, y: 3.65, w: 8, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 箭头
  slide.addText("↓", {
    x: 4.7, y: 4.17, w: 0.6, h: 0.3,
    fontSize: 20, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 步骤卡片 - 外部场景
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.5, w: 9, h: 0.7,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("STEP 3  ·  外部场景", {
    x: 0.75, y: 4.55, w: 8, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.light, charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("Revenue Management（航空和酒店业的动态需求分配体系）", {
    x: 0.75, y: 4.8, w: 8, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "108", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "108_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
