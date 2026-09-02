// 57_第二章_读懂分类结果 - 图文混排（时间轴/流程）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 57,
  title: '读懂你的分类结果'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("READ  /  读懂结果", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("读懂你的分类结果", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 引导
  slide.addText("做完分类后，先看一下整体的分布。这个分布本身就是一个重要的信号。", {
    x: 0.5, y: 1.55, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 流程：4 个分布场景
  const dists = [
    { x: 0.5, num: "01", t: "第一类很少", tag: "分布一" },
    { x: 2.85, num: "02", t: "第二类多", tag: "分布二" },
    { x: 5.2, num: "03", t: "第三类空白", tag: "分布三" },
    { x: 7.55, num: "04", t: "一/二全包", tag: "特殊" }
  ];

  // 时间轴主线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.55, w: 9, h: 0.04,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  dists.forEach((d, i) => {
    // 圆点
    slide.addShape(pres.shapes.OVAL, {
      x: d.x + 0.85, y: 2.4, w: 0.35, h: 0.35,
      fill: { color: theme.accent }, line: { color: "FFFFFF", width: 2 }
    });
    // 标签
    slide.addText(d.tag, {
      x: d.x, y: 2.05, w: 2.05, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, charSpacing: 2, bold: true,
      align: "center", valign: "middle", margin: 0
    });
    // 标题
    slide.addText(d.t, {
      x: d.x, y: 2.85, w: 2.05, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle", margin: 0
    });
  });

  // 4 个详细解释卡
  const cards = [
    { x: 0.5, desc: "真正有扎实依据的不多", next: "需要把『真的成立』说清楚" },
    { x: 2.85, desc: "方向对但都停留在表象", next: "在原方向上深化" },
    { x: 5.2, desc: "关键影响因素完全没触及", next: "外部视角 / 假设挑战" },
    { x: 7.55, desc: "覆盖良好，深度欠缺", next: "提升第二类的深度" }
  ];

  cards.forEach((c) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: c.x, y: 3.45, w: 2.05, h: 1.55,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    slide.addText(c.desc, {
      x: c.x + 0.15, y: 3.55, w: 1.75, h: 0.7,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: c.x + 0.15, y: 4.3, w: 0.4, h: 0.04,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(c.next, {
      x: c.x + 0.15, y: 4.4, w: 1.75, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "top", margin: 0
    });
  });

  // 底部
  slide.addText("下一页：四种分布详细解读。", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "57", "第二章 系统盘点");
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
  pres.writeFile({ fileName: "57_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
