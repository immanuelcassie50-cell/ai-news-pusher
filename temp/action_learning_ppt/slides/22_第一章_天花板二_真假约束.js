// 页 22: 对比 - 真约束 vs 假约束
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 22,
  title: '第一章 天花板二 真假约束对比'
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
  slide.addText("区分  /  CEILING 02", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("真约束 vs 假约束", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 核心问句
  slide.addText("区分真约束和假约束的方法很简单：", {
    x: 0.5, y: 1.5, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左卡 - 真约束
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.0, w: 4.4, h: 2.95,
    fill: { color: "FFFFFF" }, line: { color: theme.primary, width: 2 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.0, w: 4.4, h: 0.55,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("真约束", {
    x: 0.5, y: 2.0, w: 4.4, h: 0.55,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  slide.addText("有具体的、现实的原因", {
    x: 0.7, y: 2.7, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  const realItems = [
    "法规限制（必须遵守）",
    "安全条件（物理约束）",
    "物理规律（做不到）",
    "明确的成本上限"
  ];
  realItems.forEach((r, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: 3.2 + i * 0.4, w: 0.1, h: 0.1,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(r, {
      x: 0.9, y: 3.1 + i * 0.4, w: 3.8, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
  });

  // 右卡 - 假约束
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.0, w: 4.4, h: 2.95,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 2 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.0, w: 4.4, h: 0.55,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("假约束", {
    x: 5.1, y: 2.0, w: 4.4, h: 0.55,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  slide.addText("只有「一直以来都这样」", {
    x: 5.3, y: 2.7, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  const fakeItems = [
    "「大家都知道不行」",
    "「IT 部门不配合」",
    "「上面不会批」",
    "「从来没人这么做过」"
  ];
  fakeItems.forEach((r, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 5.3, y: 3.2 + i * 0.4, w: 0.1, h: 0.1,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(r, {
      x: 5.5, y: 3.1 + i * 0.4, w: 3.8, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, italic: true,
      align: "left", valign: "middle", margin: 0
    });
  });

  // 底部结论
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fill: { color: theme.bg }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 0.08, h: 0.3,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("假约束是「印象」和「集体记忆」，不是事实。", {
    x: 0.8, y: 5.0, w: 8.7, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "22", "第一章 看清常规方案的天花板");
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
  pres.writeFile({ fileName: "22_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
