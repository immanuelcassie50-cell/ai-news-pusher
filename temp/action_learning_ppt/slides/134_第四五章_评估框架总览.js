// 页 134: 三栏 - 评估框架总览
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 134,
  title: '评估框架总览：三个维度'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("评估框架  /  Framework", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("每个候选方案，用三个维度来评估", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 三栏卡片
  const dims = [
    { num: "01", title: "有效性", q: "做了这件事，目标会动吗？动多少？", color: theme.primary },
    { num: "02", title: "可行性", q: "在当前约束下，能真正推进吗？", color: theme.accent },
    { num: "03", title: "突破性", q: "相比常规方案，真正的不同是什么？", color: theme.secondary }
  ];

  dims.forEach((d, i) => {
    const x = 0.5 + i * 3.1;
    // 卡片
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.7, w: 2.9, h: 3.3,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // 顶部色条
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.7, w: 2.9, h: 0.5,
      fill: { color: d.color }, line: { type: 'none' }
    });
    slide.addText(d.num, {
      x: x, y: 1.7, w: 2.9, h: 0.5,
      fontSize: 18, fontFace: "Georgia",
      color: "FFFFFF", bold: true, charSpacing: 4,
      align: "center", valign: "middle", margin: 0
    });
    // 维度名
    slide.addText(d.title, {
      x: x, y: 2.4, w: 2.9, h: 0.6,
      fontSize: 26, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle", margin: 0
    });
    // 分割线
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 1.25, y: 3.05, w: 0.4, h: 0.04,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    // 核心问题
    slide.addText("核心问题", {
      x: x + 0.2, y: 3.2, w: 2.5, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, charSpacing: 4,
      align: "center", valign: "middle", margin: 0
    });
    slide.addText(d.q, {
      x: x + 0.2, y: 3.5, w: 2.5, h: 1.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "top", margin: 0
    });
  });

  // 底部说明
  slide.addText("三维评估 + 可行性筛选 → 决定每个方案的位置", {
    x: 0.5, y: 5.1, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "134", "第四五章 从候选到落地");
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
  pres.writeFile({ fileName: "134_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
