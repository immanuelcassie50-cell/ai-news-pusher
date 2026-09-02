// slide-36.js - Trust Elements
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 36,
  title: '变革中的信任要素'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革中的信任要素", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addText("信任建立后，如果不去维护，信任会慢慢侵蚀。", {
    x: 0.5, y: 1.0, w: 8, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "left"
  });

  const trustElems = [
    { elem: "一致性", desc: "说的和做的一致，承诺的兑现了" },
    { elem: "透明性", desc: "信息及时通报，不隐瞒问题" },
    { elem: "可及性", desc: "员工能容易地获得信息和支持" },
    { elem: "回应性", desc: "对员工的问题和担忧及时反馈" }
  ];

  trustElems.forEach((t, i) => {
    const y = 1.5 + i * 0.95;
    slide.addShape("rect", {
      x: 0.5, y: y, w: 2, h: 0.8,
      fill: { color: theme.primary }
    });
    slide.addText(t.elem, {
      x: 0.5, y: y + 0.2, w: 2, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape("rect", {
      x: 2.5, y: y, w: 6.5, h: 0.8,
      fill: { color: theme.light }
    });
    slide.addText(t.desc, {
      x: 2.7, y: y + 0.2, w: 6, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  slide.addText("信任维护是持续的过程，不能一劳永逸", {
    x: 0.5, y: 5.1, w: 8, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
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
  pres.writeFile({ fileName: "slide-36-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
