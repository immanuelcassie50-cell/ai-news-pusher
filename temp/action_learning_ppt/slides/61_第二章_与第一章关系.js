// 61_第二章_与第一章关系 - 引述+出处
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 61,
  title: '与第一章诊断的关系'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("CONNECTION  /  前后呼应", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("第二章与第一章诊断的关系", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧大引号
  slide.addText('"', {
    x: 0.5, y: 1.6, w: 1, h: 1.2,
    fontSize: 110, fontFace: "Georgia",
    color: theme.light, bold: true,
    align: "left", valign: "top", margin: 0
  });

  // 中央引述
  slide.addText("两次诊断，互相印证。", {
    x: 1.3, y: 2.0, w: 8, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("第一章看到的天花板，会在这次分类里表现为清晰的空白。", {
    x: 1.3, y: 2.7, w: 8, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 分隔线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.3, y: 3.4, w: 1, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 下方两个示例
  const items = [
    { t: "所有方案都没挑战过『做不到』的假设", sub: "（天花板二）" },
    { t: "没有一个方案来自行业外的借鉴", sub: "（天花板三）" }
  ];
  items.forEach((it, i) => {
    const y = 3.7 + i * 0.55;
    slide.addText("→", {
      x: 1.3, y: y, w: 0.4, h: 0.4,
      fontSize: 16, fontFace: "Georgia",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(it.t, {
      x: 1.7, y: y, w: 6, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(it.sub, {
      x: 7.7, y: y, w: 1.5, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, italic: true,
      align: "right", valign: "middle", margin: 0
    });
  });

  // 出处
  slide.addText("—— 两次诊断，互相印证", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "61", "第二章 系统盘点");
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
  pres.writeFile({ fileName: "61_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
