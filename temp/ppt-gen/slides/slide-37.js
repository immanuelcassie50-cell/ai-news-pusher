// slide-37.js - Communication Mechanism Design
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 37,
  title: '持续沟通机制设计'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("持续沟通机制设计", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addText("沟通的四个维度：", {
    x: 0.5, y: 1.0, w: 3, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const commDims = [
    { dim: "频率", good: "定期（周/月）", bad: "想起来再说" },
    { dim: "渠道", good: "多渠道覆盖", bad: "只发邮件" },
    { dim: "内容", good: "有数据有故事", bad: "只说好的" },
    { dim: "反馈", good: "有回应有追踪", bad: "发完就算" }
  ];

  commDims.forEach((c, i) => {
    const y = 1.5 + i * 0.95;
    slide.addShape("rect", {
      x: 0.5, y: y, w: 1.5, h: 0.8,
      fill: { color: theme.accent }
    });
    slide.addText(c.dim, {
      x: 0.5, y: y + 0.2, w: 1.5, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText("✓ " + c.good, {
      x: 2.2, y: y + 0.15, w: 3.2, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, align: "left", valign: "middle"
    });
    slide.addText("✗ " + c.bad, {
      x: 5.4, y: y + 0.15, w: 3.5, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  slide.addText("好机制让员工感到被持续关注", {
    x: 0.5, y: 5.1, w: 6, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-37-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
