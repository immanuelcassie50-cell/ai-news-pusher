// slide-04.js - Why Change: The Inevitability
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 4,
  title: '为什么要变革'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("为什么要变革", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Three boxes layout
  const reasons = [
    { title: "外部压力", content: "市场竞争加剧\n技术迭代加速\n客户需求变化", color: theme.accent },
    { title: "内部困境", content: "效率瓶颈显现\n成本持续上升\n创新能力不足", color: theme.secondary },
    { title: "生存命题", content: "不变，则淘汰\n变革，才有机会\n主动优于被动", color: theme.primary }
  ];

  reasons.forEach((r, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.2, w: 2.9, h: 3.8,
      fill: { color: r.color }
    });
    slide.addText(r.title, {
      x: x, y: 1.5, w: 2.9, h: 0.6,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText(r.content, {
      x: x + 0.2, y: 2.3, w: 2.5, h: 2.2,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", align: "left"
    });
  });

  // Bottom insight
  slide.addText("变革不是选择题，而是生存题", {
    x: 0.5, y: 5.1, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "4A4A4A",
    accent: "C41E3A",
    light: "D4D4D4",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-04-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
