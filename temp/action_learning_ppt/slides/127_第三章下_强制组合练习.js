// 页 127: 强制组合练习 - 解释+模板
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 127,
  title: '练习 强制组合'
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
  slide.addText("练习  ·  强制组合", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("练习：强制组合", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("选两个方向不同的方案，强制想象它们同时推进时会发生什么", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 方案A & 方案B
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.0, w: 4.4, h: 0.95,
    fill: { color: "FFFFFF" }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.0, w: 4.4, h: 0.4,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("方案 A（简述）", {
    x: 0.7, y: 2.0, w: 4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("____________________________________", {
    x: 0.7, y: 2.45, w: 4, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.0, w: 4.4, h: 0.95,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.0, w: 4.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("方案 B（简述）", {
    x: 5.3, y: 2.0, w: 4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("____________________________________", {
    x: 5.3, y: 2.45, w: 4, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 组合问题区
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.05, w: 9, h: 2.05,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("如果 A 和 B 同时实施", {
    x: 0.7, y: 3.15, w: 8.6, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  const prompts = [
    { y: 3.6, label: "A 会如何影响 B 的推进效果？", lines: "____________________________________" },
    { y: 4.15, label: "B 会如何影响 A 的效果可持续性？", lines: "____________________________________" },
    { y: 4.7, label: "组合后，有没有 1+1>2 的可能？为什么？", lines: "____________________________________" }
  ];

  prompts.forEach((p) => {
    slide.addText(p.label, {
      x: 0.7, y: p.y, w: 8.6, h: 0.25,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.light, italic: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(p.lines, {
      x: 0.7, y: p.y + 0.25, w: 8.6, h: 0.25,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      align: "left", valign: "middle", margin: 0
    });
  });

  addFooter(slide, pres, theme, "127", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "127_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
