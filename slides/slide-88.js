// slide-88.js - 中国学者对斯密的研究
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 88,
  title: '中国学者对斯密的研究'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("中国学者对斯密的研究", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Left column - Historical context
  slide.addText("历史脉络", {
    x: 0.5, y: 1.15, w: 4.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const history = [
    { name: "严复", desc: "翻译与引介" },
    { name: "马君吾", desc: "早期研究者" },
    { name: "当代", desc: "多元视角" }
  ];

  history.forEach((item, idx) => {
    const y = 1.65 + idx * 0.7;

    // Card
    slide.addShape("rect", {
      x: 0.5, y: y, w: 4.5, h: 0.6,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 135, opacity: 0.04 }
    });

    // Name
    slide.addText(item.name, {
      x: 0.7, y: y + 0.1, w: 1.2, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(item.desc, {
      x: 2.0, y: y + 0.1, w: 2.8, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Right column - Important topics
  slide.addText("重要议题", {
    x: 5.25, y: 1.15, w: 4.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  const topics = [
    "斯密与儒家传统",
    "斯密与计划经济",
    "斯密与市场经济转型"
  ];

  topics.forEach((topic, idx) => {
    const y = 1.65 + idx * 0.6;

    // Card
    slide.addShape("rect", {
      x: 5.25, y: y, w: 4.5, h: 0.5,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 135, opacity: 0.04 }
    });

    // Bullet
    slide.addShape("ellipse", {
      x: 5.4, y: y + 0.17, w: 0.16, h: 0.16,
      fill: { color: theme.accent }
    });

    // Topic text
    slide.addText(topic, {
      x: 5.7, y: y + 0.08, w: 3.9, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom reflection section
  slide.addShape("rect", {
    x: 0.5, y: 4.0, w: 9, h: 0.95,
    fill: { color: theme.primary, transparency: 92 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 4.0, w: 0.06, h: 0.95,
    fill: { color: theme.primary }
  });
  slide.addText("反思", {
    x: 0.7, y: 4.1, w: 1, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });
  slide.addText([
    { text: "如何避免简单套用西方理论？", options: { breakLine: true } },
    { text: "如何在中国语境下理解斯密？" }
  ], {
    x: 0.7, y: 4.45, w: 8.6, h: 0.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "top"
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.2, y: 5.1, w: 0.6, h: 0.4,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("88", {
    x: 9.2, y: 5.1, w: 0.6, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "780000",
    secondary: "003049",
    accent: "c1121f",
    light: "669bbc",
    bg: "fdf0d5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-88-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
