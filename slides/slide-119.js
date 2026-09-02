// slide-119.js - 问题与讨论
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 119,
  title: '问题与讨论'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("问题与讨论", {
    x: 0.5, y: 0.35, w: 9, h: 0.65,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText("Q&A 开放讨论时间", {
    x: 0.5, y: 0.95, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Main content card
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 9, h: 3.7,
    fill: { color: "ffffff" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 135, opacity: 0.08 }
  });

  // Discussion prompts header
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 9, h: 0.55,
    fill: { color: theme.primary }
  });
  slide.addText("讨论话题", {
    x: 0.5, y: 1.5, w: 9, h: 0.55,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  const prompts = [
    { q: "你在工作中遇到过哪些囚徒困境？", icon: "?" },
    { q: "你用过哪些机制来维持合作？", icon: "!" },
    { q: "你认为哪些策略在现实中最有效？", icon: "*" }
  ];

  prompts.forEach((p, i) => {
    const y = 2.3 + i * 0.9;

    slide.addShape("ellipse", {
      x: 0.9, y: y + 0.1, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(p.icon, {
      x: 0.9, y: y + 0.1, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "ffffff", bold: true, align: "center", valign: "middle"
    });

    slide.addText(p.q, {
      x: 1.6, y: y, w: 7.6, h: 0.7,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("119", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "2c5282",
    accent: "d69e2e",
    light: "bee3f8",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-119-preview.pptx" });
}
