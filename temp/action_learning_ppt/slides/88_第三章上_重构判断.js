// 页 88: 第三章上 - 重构判断（解释/提醒）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 88,
  title: '重构判断 - 需要注意的地方'
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
  slide.addText("重要提醒  /  需要注意的地方", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("一个需要注意的地方", {
    x: 0.5, y: 0.8, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 警示框
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.6, w: 9, h: 0.5,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("⚠", {
    x: 0.7, y: 1.6, w: 0.4, h: 0.5,
    fontSize: 18, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("重构之后，回头检验指标设计", {
    x: 1.2, y: 1.6, w: 8, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 主体说明 - 左侧
  slide.addText("问题重构之后，有时候会发现：", {
    x: 0.5, y: 2.35, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 原因卡片
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.85, w: 4.4, h: 2.0,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.85, w: 4.4, h: 0.4,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("为什么会有这种发现？", {
    x: 0.7, y: 2.85, w: 4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("问题的切入点变了，", {
    x: 0.7, y: 3.4, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("衡量改善的维度", {
    x: 0.7, y: 3.8, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("也应该相应调整。", {
    x: 0.7, y: 4.2, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 应对卡片
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.85, w: 4.4, h: 2.0,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.85, w: 4.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("如果发现了，怎么做？", {
    x: 5.3, y: 2.85, w: 4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });

  const actions = [
    "不要强行用旧指标衡量新方向",
    "值得回头重新检验指标设计",
    "指标的更新是方案探索的一部分"
  ];

  actions.forEach((a, i) => {
    const yPos = 3.4 + i * 0.45;
    slide.addShape(pres.shapes.OVAL, {
      x: 5.3, y: yPos + 0.13, w: 0.1, h: 0.1,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(a, {
      x: 5.5, y: yPos, w: 3.9, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
  });

  // 底部金句
  slide.addText("—— 根本目标没变，变的只是入口", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "88", "第三章（上）换一套假设思考");
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
  pres.writeFile({ fileName: "88_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
