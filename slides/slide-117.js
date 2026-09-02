// slide-117.js - Course Summary
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 117,
  title: '课程总结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("课程总结", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Main insight - large
  slide.addText("囚徒困境无处不在", {
    x: 0.5, y: 1.2, w: 9, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // But also...
  slide.addText("但合作的机会同样无处不在", {
    x: 0.5, y: 1.8, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Visual - two contrasting boxes
  // Left - problem
  slide.addShape("roundRect", {
    x: 0.8, y: 2.5, w: 4.0, h: 1.6,
    fill: { color: theme.primary, transparency: 90 },
    rectRadius: 0.1
  });
  slide.addText("挑战", {
    x: 0.8, y: 2.55, w: 4.0, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText([
    { text: "• 个体理性 vs 集体理性", options: { breakLine: true } },
    { text: "• 背叛的诱惑始终存在", options: { breakLine: true } },
    { text: "• 短期利益vs长期利益" }
  ], {
    x: 1.0, y: 2.95, w: 3.6, h: 1.1,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "top"
  });

  // Right - opportunity
  slide.addShape("roundRect", {
    x: 5.2, y: 2.5, w: 4.0, h: 1.6,
    fill: { color: theme.accent, transparency: 80 },
    rectRadius: 0.1
  });
  slide.addText("解决方案", {
    x: 5.2, y: 2.55, w: 4.0, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText([
    { text: "• 重复博弈建立信任", options: { breakLine: true } },
    { text: "• 机制设计保障合作", options: { breakLine: true } },
    { text: "• 声誉投资积累资本" }
  ], {
    x: 5.4, y: 2.95, w: 3.6, h: 1.1,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "top"
  });

  // Key takeaway
  slide.addShape("roundRect", {
    x: 0.8, y: 4.3, w: 8.4, h: 0.8,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("最优秀的谈判者和领导者，都是深刻理解博弈论的人", {
    x: 0.8, y: 4.3, w: 8.4, h: 0.8,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("117", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

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
  pres.writeFile({ fileName: "slide-117-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
