// slide-57.js - Conflict Management
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 57,
  title: '变革中的冲突管理'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革中的冲突管理", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Conflict types
  slide.addText("冲突的常见来源：", {
    x: 0.5, y: 1.0, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const conflicts = [
    "资源争夺：变革需要投入，影响既有业务",
    "权力调整：谁主导、谁配合的利益博弈",
    "理念差异：对变革方向的不同理解",
    "节奏分歧：有人觉得太快，有人觉得太慢"
  ];

  conflicts.forEach((c, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: 1.5 + i * 0.55, w: 0.08, h: 0.3,
      fill: { color: theme.accent }
    });
    slide.addText(c, {
      x: 0.75, y: 1.5 + i * 0.55, w: 4, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  // Management strategies
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5, y: 1.0, w: 4.5, h: 4.2,
    fill: { color: theme.light }
  });

  slide.addText("冲突管理策略：", {
    x: 5.2, y: 1.2, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const strategies = [
    { step: "1", action: "识别冲突根源，不只看表面" },
    { step: "2", action: "让各方充分表达，不急于评判" },
    { step: "3", action: "寻找共同利益点作为突破口" },
    { step: "4", action: "对分歧点寻求妥协方案" },
    { step: "5", action: "建立持续对话机制，防止反复" }
  ];

  strategies.forEach((s, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 5.3, y: 1.75 + i * 0.65, w: 0.35, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText(s.step, {
      x: 5.3, y: 1.82 + i * 0.65, w: 0.35, h: 0.22,
      fontSize: 12, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText(s.action, {
      x: 5.8, y: 1.75 + i * 0.65, w: 3.5, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
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
  pres.writeFile({ fileName: "slide-57-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
