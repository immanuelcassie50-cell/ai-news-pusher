// slide-123.js - 练习：分析一个现实案例
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 123,
  title: '练习：分析一个现实案例'
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
  slide.addText("练习：分析一个现实案例", {
    x: 0.5, y: 0.35, w: 9, h: 0.65,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Framework intro
  slide.addText("使用以下框架分析你熟悉的现实博弈案例", {
    x: 0.5, y: 0.95, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Four-step framework
  const steps = [
    { num: "1", q: "这是什么样的博弈？", hint: "谁是玩家？策略是什么？" },
    { num: "2", q: "各方收益是什么？", hint: "用数字或等级量化" },
    { num: "3", q: "存在哪些机制？", hint: "声誉、惩罚、激励" },
    { num: "4", q: "TFT会建议什么？", hint: "先合作，后惩罚背叛" }
  ];

  steps.forEach((s, i) => {
    const y = 1.5 + i * 0.95;

    slide.addShape("rect", {
      x: 0.5, y: y, w: 9, h: 0.8,
      fill: { color: "ffffff" },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 135, opacity: 0.05 }
    });

    // Step number
    slide.addShape("ellipse", {
      x: 0.7, y: y + 0.15, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(s.num, {
      x: 0.7, y: y + 0.15, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "ffffff", bold: true, align: "center", valign: "middle"
    });

    slide.addText(s.q, {
      x: 1.4, y: y + 0.1, w: 4, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });

    slide.addText(s.hint, {
      x: 1.4, y: y + 0.45, w: 4, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.light, valign: "middle"
    });

    // Arrow
    slide.addText("→", {
      x: 8.5, y: y + 0.15, w: 0.5, h: 0.5,
      fontSize: 20, fontFace: "Arial",
      color: theme.accent, align: "center", valign: "middle"
    });
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("123", {
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
  pres.writeFile({ fileName: "slide-123-preview.pptx" });
}
