// 页 70: 第三章上 - 问题定义的力量（解释）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 70,
  title: '问题定义的力量'
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
  slide.addText("核心洞察  /  为什么问题定义本身是障碍", {
    x: 0.7, y: 0.4, w: 7, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("为什么问题的定义本身是一个障碍", {
    x: 0.5, y: 0.8, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧大段解释
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.7, w: 5.0, h: 3.2,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
  });

  // 引号
  slide.addText("「", {
    x: 0.7, y: 1.75, w: 0.6, h: 0.6,
    fontSize: 48, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "left", valign: "top", margin: 0
  });

  slide.addText("问题被定义的方式，", {
    x: 0.7, y: 2.3, w: 4.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("本身就在决定你能看到什么解法。", {
    x: 0.7, y: 2.7, w: 4.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 分割
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 3.25, w: 0.4, h: 0.03,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  slide.addText("改变问题的表述方式，", {
    x: 0.7, y: 3.4, w: 4.6, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("解法的可能性会完全不同。", {
    x: 0.7, y: 3.8, w: 4.6, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("—— 同一个现实，多个解法空间", {
    x: 0.7, y: 4.35, w: 4.6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 右侧：实验引入
  slide.addText("下面用一个思维实验", {
    x: 5.8, y: 1.7, w: 3.7, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("感受一下", {
    x: 5.8, y: 2.05, w: 3.7, h: 0.4,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 三个步骤小卡片
  const steps = [
    { num: "01", text: "原问题定义" },
    { num: "02", text: "重构定义之一" },
    { num: "03", text: "重构定义之二" }
  ];

  steps.forEach((s, i) => {
    const yPos = 2.65 + i * 0.7;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.8, y: yPos, w: 3.7, h: 0.55,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.8, y: yPos, w: 0.6, h: 0.55,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(s.num, {
      x: 5.8, y: yPos, w: 0.6, h: 0.55,
      fontSize: 14, fontFace: "Georgia", color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
    slide.addText(s.text, {
      x: 6.5, y: yPos, w: 3, h: 0.55,
      fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
  });

  // 底部提示
  slide.addText("下一页开始  /  三个问题定义，三组完全不同的解法", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "70", "第三章（上）换一套假设思考");
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
  pres.writeFile({ fileName: "70_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
