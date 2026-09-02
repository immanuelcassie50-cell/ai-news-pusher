// slide-127.js - 进阶：猎鹿博弈
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 127,
  title: '进阶：猎鹿博弈'
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
  slide.addText("进阶：猎鹿博弈", {
    x: 0.5, y: 0.35, w: 9, h: 0.65,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Story box
  slide.addShape("rect", {
    x: 0.5, y: 1.05, w: 9, h: 0.8,
    fill: { color: theme.light }
  });
  slide.addText("两个猎人可以合作猎鹿（高价值，需两人同时努力）或各自猎兔（低价值，可独自完成）", {
    x: 0.7, y: 1.05, w: 8.6, h: 0.8,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "middle"
  });

  // Left: Payoff structure
  slide.addShape("rect", {
    x: 0.5, y: 2.0, w: 4.4, h: 2.3,
    fill: { color: "ffffff" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
  });

  slide.addShape("rect", {
    x: 0.5, y: 2.0, w: 4.4, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText("收益对比", {
    x: 0.5, y: 2.0, w: 4.4, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  // Payoff comparison
  slide.addText("猎鹿（合作）", {
    x: 0.7, y: 2.6, w: 2, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("每人 +4", {
    x: 2.8, y: 2.6, w: 1.8, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: "2f855a", bold: true, align: "right"
  });

  slide.addText("猎兔（单干）", {
    x: 0.7, y: 3.1, w: 2, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });
  slide.addText("每人 +2", {
    x: 2.8, y: 3.1, w: 1.8, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.secondary, align: "right"
  });

  slide.addShape(pres.shapes.LINE, {
    x: 0.7, y: 3.6, w: 3.8, h: 0,
    line: { color: theme.light, width: 1 }
  });

  slide.addText("但如果一人猎兔、另一人等合作：", {
    x: 0.7, y: 3.7, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });
  slide.addText("等的人 0，猎兔的人 +2", {
    x: 0.7, y: 3.95, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "c53030"
  });

  // Right: Trust problem
  slide.addShape("rect", {
    x: 5.1, y: 2.0, w: 4.4, h: 2.3,
    fill: { color: "ffffff" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
  });

  slide.addShape("rect", {
    x: 5.1, y: 2.0, w: 4.4, h: 0.45,
    fill: { color: theme.accent }
  });
  slide.addText("信任困境", {
    x: 5.1, y: 2.0, w: 4.4, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  const trust = [
    "对方会不会突然去猎兔？",
    "我该不该冒这个险等待？",
    "如何建立合作承诺？",
    "单干更安全，但收益减半"
  ];

  trust.forEach((t, i) => {
    const y = 2.6 + i * 0.42;
    slide.addText("? " + t, {
      x: 5.3, y: y, w: 4, h: 0.38,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });

  // Bottom insight
  slide.addShape("rect", {
    x: 0.5, y: 4.5, w: 9, h: 0.55,
    fill: { color: theme.primary }
  });
  slide.addText("猎鹿博弈揭示：合作带来更高收益，但需要信任和承诺机制", {
    x: 0.5, y: 4.5, w: 9, h: 0.55,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("127", {
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
  pres.writeFile({ fileName: "slide-127-preview.pptx" });
}
