// slide-12.js - Summary Page
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'summary',
  index: 12,
  title: '总结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Title
  slide.addText("成果总结", {
    x: 0.5, y: 0.4, w: 9, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Decorative line
  slide.addShape("rect", {
    x: 0.5, y: 1.1, w: 1.5, h: 0.05,
    fill: { color: theme.accent }
  });

  // Four key takeaways
  const takeaways = [
    { num: "01", title: "问题定义", desc: "从模糊到精准，三层定义追本质" },
    { num: "02", title: "类比思维", desc: "借力打力，经典模型快速定位" },
    { num: "03", title: "归因分析", desc: "相关还是因果，竞争假说检验" },
    { num: "04", title: "标准决策", desc: "显性化标准，化解价值冲突" }
  ];

  takeaways.forEach((item, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.7;
    const y = 1.5 + row * 1.4;

    // Card
    slide.addShape("rect", {
      x: x, y: y, w: 4.4, h: 1.2,
      fill: { color: theme.secondary, transparency: 30 }
    });

    // Number
    slide.addText(item.num, {
      x: x + 0.15, y: y + 0.15, w: 0.6, h: 0.5,
      fontSize: 24, fontFace: "Arial",
      color: theme.accent, bold: true
    });

    // Title
    slide.addText(item.title, {
      x: x + 0.8, y: y + 0.2, w: 3.4, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true
    });

    // Description
    slide.addText(item.desc, {
      x: x + 0.8, y: y + 0.6, w: 3.4, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.light
    });
  });

  // Bottom message
  slide.addShape("rect", {
    x: 0, y: 4.5, w: 10, h: 0.8,
    fill: { color: theme.accent }
  });
  slide.addText("破题力 —— 行动学习者的四维问题定义训练营", {
    x: 0.5, y: 4.6, w: 9, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center"
  });

  // Page number
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: "FFFFFF", transparency: 50 }
  });
  slide.addText("12", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "edf2f4",
    bg: "edf2f4"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-12-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
