// slide-34.js - Part 3 Summary
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 34,
  title: '第三部分小结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("第三部分小结", {
    x: 0.5, y: 0.4, w: 8, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const summary = [
    { title: "愿景设计", content: "清晰、有感、可及的变革愿景是共识的基础" },
    { title: ""为什么"沟通", content: "回答好三个核心问题，变革就成功一半" },
    { title: "利益相关方", content: "不同群体需要不同策略，重点管理高影响者" },
    { title: "早期成功", content: "先让一小部分人成功，再放大到全员" }
  ];

  summary.forEach((s, i) => {
    const y = 1.1 + i * 1.0;
    slide.addShape("rect", {
      x: 0.5, y: y, w: 2.2, h: 0.85,
      fill: { color: theme.accent }
    });
    slide.addText(s.title, {
      x: 0.5, y: y + 0.22, w: 2.2, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText(s.content, {
      x: 2.9, y: y + 0.22, w: 6.1, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  slide.addText("进入第四部分：信任维护与沟通机制", {
    x: 0.5, y: 5.1, w: 6, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-34-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
