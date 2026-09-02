// 页 81: 第三章上 - 方向三 横向移动（解释引入）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 81,
  title: '方向三 横向移动 - 引入'
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
  slide.addText("方向 三  /  横向移动", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("方向三  /  横向移动", {
    x: 0.5, y: 0.8, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标题
  slide.addText("改变问题的对象或切入点", {
    x: 0.5, y: 1.42, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧：当前假设
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.0, w: 4.4, h: 2.9,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  slide.addText("当前的假设", {
    x: 0.7, y: 2.15, w: 4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("「谁在做什么」", {
    x: 0.7, y: 2.55, w: 4, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("是唯一可能的方式吗？", {
    x: 0.7, y: 3.1, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 分割
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 3.65, w: 0.4, h: 0.03,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  slide.addText("三个可改变的方向", {
    x: 0.7, y: 3.78, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });

  // 三个方向列表
  const items = ["改变服务对象", "改变执行主体", "改变改善发生的环节"];
  items.forEach((it, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: 4.13 + i * 0.27, w: 0.08, h: 0.08,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(it, {
      x: 0.85, y: 4.05 + i * 0.27, w: 3.5, h: 0.25,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
  });

  // 右侧：核心动作
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 2.0, w: 4.3, h: 2.9,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  slide.addText("横向移动", {
    x: 5.4, y: 2.15, w: 4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("目标能不能", {
    x: 5.4, y: 2.55, w: 4, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("同样达成？", {
    x: 5.4, y: 3.05, w: 4, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.4, y: 3.7, w: 0.4, h: 0.03,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  slide.addText("改变人很难", {
    x: 5.4, y: 3.85, w: 4, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("改变环境让人自然做对，往往更可持续", {
    x: 5.4, y: 4.25, w: 4, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, italic: true,
    align: "left", valign: "top", margin: 0
  });

  // 底部
  slide.addText("横向移动 = 把「改变人」的问题，转变为「改变环境」的问题", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "81", "第三章（上）换一套假设思考");
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
  pres.writeFile({ fileName: "81_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
