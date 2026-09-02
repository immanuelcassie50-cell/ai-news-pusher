// slide-137.js - 课程完成
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 137,
  title: '课程完成'
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
  slide.addText("课程完成", {
    x: 0.5, y: 0.35, w: 9, h: 0.65,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Congratulations card
  slide.addShape("rect", {
    x: 1.5, y: 1.2, w: 7, h: 2.2,
    fill: { color: "ffffff" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addText("恭喜！", {
    x: 1.5, y: 1.35, w: 7, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center", valign: "middle"
  });

  slide.addText("你已完成《合作与背叛——囚徒困境及其现实应用》的全部内容学习", {
    x: 1.7, y: 2.1, w: 6.6, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center", valign: "middle"
  });

  slide.addText("140 张幻灯片 | 5 大模块 | 核心策略：TFT", {
    x: 1.7, y: 2.7, w: 6.6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, align: "center"
  });

  // What you learned
  slide.addShape("rect", {
    x: 0.5, y: 3.6, w: 9, h: 1.4,
    fill: { color: "ffffff" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
  });

  slide.addShape("rect", {
    x: 0.5, y: 3.6, w: 9, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText("你学到了什么", {
    x: 0.5, y: 3.6, w: 9, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  const learnings = [
    "识别囚徒困境的本质",
    "理解重复博弈如何产生合作",
    "掌握TFT策略及其应用场景",
    "学会设计促进合作的机制"
  ];

  learnings.forEach((l, i) => {
    const x = i < 2 ? 0.7 : 5.1;
    const y = i < 2 ? 4.15 + (i * 0.4) : 4.15 + (i - 2) * 0.4;
    slide.addText("✓ " + l, {
      x: x, y: y, w: 4.3, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("137", {
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
  pres.writeFile({ fileName: "slide-137-preview.pptx" });
}
