// slide-24.js - Vision Design
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 24,
  title: '变革愿景设计：让方向清晰可见'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革愿景设计：让方向清晰可见", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addText("好愿景的三个标准：", {
    x: 0.5, y: 1.1, w: 3, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const criteria = [
    { title: "清晰", desc: "员工能说清楚变革后的样子是什么" },
    { title: "有感", desc: "员工能从愿景中看到自己的位置和价值" },
    { title: "可及", desc: "员工相信这个愿景是可以实现的" }
  ];

  criteria.forEach((c, i) => {
    const y = 1.6 + i * 1.1;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 8.5, h: 0.95,
      fill: { color: i === 1 ? theme.accent : theme.light }
    });
    slide.addText(c.title, {
      x: 0.7, y: y + 0.25, w: 1.5, h: 0.45,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: i === 1 ? "FFFFFF" : theme.primary, bold: true, align: "left", valign: "middle"
    });
    slide.addText(c.desc, {
      x: 2.4, y: y + 0.25, w: 6.3, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: i === 1 ? "FFFFFF" : theme.secondary, align: "left", valign: "middle"
    });
  });

  slide.addText("坏愿景的特征：模糊、遥远、与员工无关", {
    x: 0.5, y: 5.0, w: 8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "left"
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
  pres.writeFile({ fileName: "slide-24-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
