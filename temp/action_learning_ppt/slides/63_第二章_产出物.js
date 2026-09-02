// 63_第二章_产出物 - 列表+装饰
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 63,
  title: '第二章结束时，你应该有'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("DELIVERABLES  /  产出物", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("第二章结束时，你应该有", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("带着这两份东西，进入第三章。", {
    x: 0.5, y: 1.55, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧产出物 1
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.1, w: 4.4, h: 2.9,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.1, w: 4.4, h: 0.5,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("产出物  01", {
    x: 0.7, y: 2.1, w: 2, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("📋", {
    x: 4.0, y: 2.1, w: 0.8, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    align: "right", valign: "middle", margin: 0
  });

  slide.addText("完整的方案分类表", {
    x: 0.7, y: 2.75, w: 4, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 3.3, w: 0.5, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("每条方案都有：", {
    x: 0.7, y: 3.4, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  const itemList1 = [
    "明确的类型（一/二/三）",
    "判断理由（方向/深度/持续性）",
    "下一步的处理动作"
  ];
  itemList1.forEach((it, i) => {
    slide.addText("·", {
      x: 0.85, y: 3.75 + i * 0.32, w: 0.2, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(it, {
      x: 1.05, y: 3.75 + i * 0.32, w: 3.7, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
  });

  // 右侧产出物 2
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.1, w: 4.4, h: 2.9,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.1, w: 4.4, h: 0.5,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("产出物  02", {
    x: 5.3, y: 2.1, w: 2, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("📑", {
    x: 8.6, y: 2.1, w: 0.8, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    align: "right", valign: "middle", margin: 0
  });

  slide.addText("覆盖空白清单", {
    x: 5.3, y: 2.75, w: 4, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 3.3, w: 0.5, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("对应你的关键突破口，标明：", {
    x: 5.3, y: 3.4, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  const itemList2 = [
    "哪些方向在现有方案里完全空白",
    "空白背后的原因（不知道 / 做不到）",
    "需要用哪种方法去探索"
  ];
  itemList2.forEach((it, i) => {
    slide.addText("·", {
      x: 5.45, y: 3.75 + i * 0.32, w: 0.2, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(it, {
      x: 5.65, y: 3.75 + i * 0.32, w: 3.7, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
  });

  // 底部金句
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.05, w: 0.06, h: 0.3,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("带着这两份东西，进入第三章。", {
    x: 0.7, y: 5.05, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "63", "第二章 系统盘点");
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
  pres.writeFile({ fileName: "63_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
