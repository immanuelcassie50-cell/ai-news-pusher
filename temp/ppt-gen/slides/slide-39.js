// slide-39.js - Employee Participation
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 39,
  title: '员工参与机制设计'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("员工参与机制设计", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addText("让员工成为变革的参与者，而非被动接受者", {
    x: 0.5, y: 1.0, w: 8, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "left"
  });

  const participations = [
    { level: "知情", participation: "员工代表参与讨论，听取意见" },
    { level: "参与", participation: "员工参与方案设计和问题解决" },
    { level: "授权", participation: "员工主导部分变革模块的推进" },
    { level: "共创", participation: "员工与管理层共同决策关键事项" }
  ];

  participations.forEach((p, i) => {
    const y = 1.5 + i * 0.95;
    slide.addShape("rect", {
      x: 0.5, y: y, w: 1.5, h: 0.8,
      fill: { color: i === 3 ? theme.primary : theme.accent }
    });
    slide.addText(p.level, {
      x: 0.5, y: y + 0.2, w: 1.5, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText(p.participation, {
      x: 2.2, y: y + 0.2, w: 7.3, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  slide.addText("参与度越高，承诺度越高", {
    x: 0.5, y: 5.1, w: 6, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
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
  pres.writeFile({ fileName: "slide-39-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
