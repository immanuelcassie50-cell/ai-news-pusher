// 页 149: 解释+模板 - 可行性受限方案的单独记录
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 149,
  title: '可行性受限方案的单独记录'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("受限方案  /  Constrained Option", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("不要放弃，找到让它变得可行的路径", {
    x: 0.5, y: 0.85, w: 9, h: 0.55,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 模板卡片
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 9, h: 3.4,
    fill: { color: "FFFFFF" }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 0.1, h: 3.4,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  // 方案名
  slide.addText("方案：", {
    x: 0.8, y: 1.7, w: 1.5, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.9, y: 1.78, w: 7.4, h: 0.04,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  // 可行性受限原因
  slide.addText("可行性受限的原因：", {
    x: 0.8, y: 2.1, w: 4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 2.5, w: 8.5, h: 0.04,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  // 利益相关方
  slide.addText("需要哪个利益相关方改变立场：", {
    x: 0.8, y: 2.6, w: 5, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("姓名 / 角色：", {
    x: 0.95, y: 2.95, w: 2, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 2.5, y: 3.07, w: 6.7, h: 0.04,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addText("当前立场：", {
    x: 0.95, y: 3.3, w: 2, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 2.5, y: 3.42, w: 6.7, h: 0.04,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  // 策略
  slide.addText("可能的策略（回到利益相关方分析）：", {
    x: 0.8, y: 3.6, w: 5, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 4.0, w: 8.5, h: 0.04,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  // 前置条件
  slide.addText("前置条件：做什么之后，可行性会改变？", {
    x: 0.8, y: 4.15, w: 8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 4.55, w: 8.5, h: 0.04,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  // 底部提示
  slide.addText("对每个因可行性受限而暂时无法进入矩阵的 ★★★ 方案，做以上记录。", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "149", "第四五章 从候选到落地");
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
  pres.writeFile({ fileName: "149_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
