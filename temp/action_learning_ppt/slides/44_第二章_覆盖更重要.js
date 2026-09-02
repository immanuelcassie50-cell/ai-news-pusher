// 44_第二章_覆盖更重要 - 对比卡片型
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 44,
  title: '覆盖比数量更重要'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("核心视角转换", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("从『数量游戏』跳到『覆盖质量』", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧：X 思路
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.8, w: 4.3, h: 3.2,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.8, w: 0.08, h: 3.2,
    fill: { color: theme.secondary }, line: { type: 'none' }
  });
  slide.addText("X", {
    x: 0.8, y: 1.9, w: 0.6, h: 0.6,
    fontSize: 28, fontFace: "Georgia",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("数量思维", {
    x: 1.5, y: 1.95, w: 2.5, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("20 条全部针对同一类问题", {
    x: 0.85, y: 2.7, w: 3.8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("广度：窄", {
    x: 0.85, y: 3.15, w: 3.8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  // 简单的可视化：5 个相同颜色块
  for (let i = 0; i < 4; i++) {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.85 + i * 0.35, y: 3.65, w: 0.3, h: 0.9,
      fill: { color: theme.light }, line: { type: 'none' }
    });
  }
  slide.addText("20 条  ·  全部同向", {
    x: 0.85, y: 4.6, w: 3.8, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 右侧：√ 思路
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.8, w: 4.3, h: 3.2,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.8, w: 0.08, h: 3.2,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("√", {
    x: 5.5, y: 1.9, w: 0.6, h: 0.6,
    fontSize: 28, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("覆盖思维", {
    x: 6.2, y: 1.95, w: 2.5, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("5 条针对不同类问题", {
    x: 5.55, y: 2.7, w: 3.8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("广度：宽", {
    x: 5.55, y: 3.15, w: 3.8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  // 5 个不同颜色块
  const colors = [theme.primary, theme.accent, theme.secondary, theme.primary, theme.accent];
  for (let i = 0; i < 5; i++) {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.55 + i * 0.6, y: 3.65, w: 0.5, h: 0.9,
      fill: { color: colors[i] }, line: { type: 'none' }
    });
  }
  slide.addText("5 条  ·  覆盖 5 个不同方向", {
    x: 5.55, y: 4.6, w: 3.8, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 底部金句
  slide.addText("在正确的地方有足够的深度，比数字重要。", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "44", "第二章 系统盘点");
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
  pres.writeFile({ fileName: "44_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
