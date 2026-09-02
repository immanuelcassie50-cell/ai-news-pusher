// 页 163: 大字 - 核心心法
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 163,
  title: '核心心法'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("核心心法  /  Heart", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 大字 - 上半
  slide.addText("三句话，", {
    x: 0.5, y: 1.4, w: 9, h: 0.7,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  slide.addText("带走这套课的全部心法。", {
    x: 0.5, y: 2.1, w: 9, h: 0.7,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 三句话
  const hearts = [
    "不是因为人不够努力，而是所有人都在同一套假设里思考。",
    "评估不是筛掉创意，而是把感觉换成依据。",
    "方案组合的价值，在于它们放在一起形成了一个系统。"
  ];

  hearts.forEach((h, i) => {
    const y = 3.1 + i * 0.6;
    // 数字
    slide.addText(String(i + 1), {
      x: 0.5, y: y, w: 0.6, h: 0.5,
      fontSize: 36, fontFace: "Georgia",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 引述
    slide.addText(h, {
      x: 1.2, y: y, w: 8.3, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: i === 0,
      align: "left", valign: "middle", margin: 0
    });
  });

  // 底部
  slide.addText("——  把它们记在心里，比记在笔记里更重要。", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "163", "写在最后");
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
  pres.writeFile({ fileName: "163_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
