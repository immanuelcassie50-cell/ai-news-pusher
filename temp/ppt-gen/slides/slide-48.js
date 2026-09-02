// slide-48.js - Psychological Safety in Change
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 48,
  title: '变革中的心理安全感建设'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革中的心理安全感建设", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addText("心理安全感 = 员工相信可以自由表达想法、承认错误、提出问题\n                    而不用担心被惩罚或被羞辱", {
    x: 0.5, y: 1.0, w: 9, h: 0.8,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "left"
  });

  // 4 elements
  const elements = [
    { title: "表达安全", desc: "员工可以提出不同意见而不会被穿小鞋" },
    { title: "试错安全", desc: "创新失败不会被追责，而是被当作学习机会" },
    { title: "求助安全", desc: "员工可以承认自己不知道而不会丢脸" },
    { title: "质疑安全", desc: "员工可以挑战权威，只要是基于事实" }
  ];

  elements.forEach((e, i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const x = 0.5 + col * 4.6;
    const y = 1.9 + row * 1.6;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4.4, h: 1.4,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.08, h: 1.4,
      fill: { color: theme.accent }
    });
    slide.addText(e.title, {
      x: x + 0.25, y: y + 0.2, w: 3.9, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, align: "left"
    });
    slide.addText(e.desc, {
      x: x + 0.25, y: y + 0.7, w: 3.9, h: 0.55,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
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
  pres.writeFile({ fileName: "slide-48-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
