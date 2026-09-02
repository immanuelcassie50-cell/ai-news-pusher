// 59_第二章_分布二_第二类多 - 对比卡片型
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 59,
  title: '分布二：第二类是主体'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("DISTRIBUTION  02  /  第二类为主体", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("如果第二类是主体", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 引导
  slide.addText("你在正确的方向上，但都停留在解决表象的层面。", {
    x: 0.5, y: 1.55, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 上下两个区块：现状 vs 目标
  // 现状
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.1, w: 9, h: 1.25,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.1, w: 0.08, h: 1.25,
    fill: { color: theme.secondary }, line: { type: 'none' }
  });
  slide.addText("现状", {
    x: 0.85, y: 2.2, w: 1.5, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, charSpacing: 3, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("方向对  ·  但只到表象", {
    x: 0.85, y: 2.55, w: 8, h: 0.45,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("方案都触及了正确的方向，但都停留在浅层——处理了表象，没有触到根因。", {
    x: 0.85, y: 3.0, w: 8, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 目标
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.55, w: 9, h: 1.4,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.55, w: 0.08, h: 1.4,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("目标", {
    x: 0.85, y: 3.65, w: 1.5, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 3, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("下一步：在原方向上找到更根本、更能持续的解法。", {
    x: 0.85, y: 4.0, w: 8, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 推荐方法
  slide.addText("推荐方法：", {
    x: 0.85, y: 4.45, w: 1.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 2.3, y: 4.5, w: 2.0, h: 0.3,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("问题重构（方法一）", {
    x: 2.3, y: 4.5, w: 2.0, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.5, y: 4.5, w: 2.0, h: 0.3,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("假设挑战（方法二）", {
    x: 4.5, y: 4.5, w: 2.0, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("——对这类方案尤其有用。", {
    x: 6.7, y: 4.5, w: 3, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "59", "第二章 系统盘点");
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
  pres.writeFile({ fileName: "59_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
