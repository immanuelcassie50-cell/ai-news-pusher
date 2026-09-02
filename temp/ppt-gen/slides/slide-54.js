// slide-54.js - Change Leadership Model
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 54,
  title: '数字化转型领导力的五个层次'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("数字化转型领导力的五个层次", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const levels = [
    { level: "1", title: "命令式", desc: "发号施令，要求服从", color: theme.secondary },
    { level: "2", title: "说服式", desc: "解释原因，争取认同", color: theme.accent },
    { level: "3", title: "参与式", desc: "邀请讨论，采纳意见", color: theme.primary },
    { level: "4", title: "授权式", desc: "明确目标，放手执行", color: theme.primary },
    { level: "5", title: "愿景式", desc: "描绘未来，感召同行", color: theme.accent }
  ];

  levels.forEach((l, i) => {
    const y = 1.1 + i * 0.85;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.8, h: 0.7,
      fill: { color: l.color }
    });
    slide.addText(l.level, {
      x: 0.5, y: y + 0.15, w: 0.8, h: 0.4,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText(l.title, {
      x: 1.5, y: y + 0.1, w: 2, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: l.color, bold: true, align: "left"
    });
    slide.addText(l.desc, {
      x: 3.5, y: y + 0.1, w: 5.5, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  slide.addText("更高层次的领导力并不否定较低层次，而是在不同场景下灵活运用", {
    x: 0.5, y: 5.2, w: 9, h: 0.3,
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
  pres.writeFile({ fileName: "slide-54-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
