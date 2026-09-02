// slide-95.js - Best Practices Summary
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 95,
  title: '最佳实践总结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("最佳实践总结", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const practices = [
    { title: "把员工放在中心", desc: "不是把技术放在中心，而是把人放在变革的核心" },
    { title: "从为什么开始", desc: "永远先回答为什么，再讨论做什么和怎么做" },
    { title: "信任先行", desc: "没有信任基础，所有的变革努力都会打折扣" },
    { title: "沟通要过量", desc: "你以为沟通够了，其实还差得远" },
    { title: "允许试错", desc: "把失败当学习，而不是追责的理由" },
    { title: "持续投入", desc: "变革不是项目，而是一个持续的过程" }
  ];

  practices.forEach((p, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.5;
    const y = 1.0 + row * 1.45;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4, h: 1.3,
      fill: { color: theme.light }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.08, h: 1.3,
      fill: { color: theme.accent }
    });
    slide.addText(p.title, {
      x: x + 0.2, y: y + 0.15, w: 3.6, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "left"
    });
    slide.addText(p.desc, {
      x: x + 0.2, y: y + 0.6, w: 3.6, h: 0.6,
      fontSize: 12, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-95-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
