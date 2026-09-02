// slide-102.js - Final Summary and Key Takeaway
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 102,
  title: '课程总结与行动号召'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("课程总结与行动号召", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Main message - large quote style
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 2.2,
    fill: { color: theme.light }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 0.12, h: 2.2,
    fill: { color: theme.accent }
  });

  slide.addText(""数字化转型的真正挑战不在于技术，\n而在于让每一位员工都愿意跟着走。\n\n而这，正是文化基建的价值所在。"", {
    x: 0.8, y: 1.3, w: 8.5, h: 1.8,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  // Three key actions
  slide.addText("课后行动承诺：", {
    x: 0.5, y: 3.5, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const actions = [
    { action: "选择一个实际变革场景进行诊断", deadline: "本周" },
    { action: "与团队成员分享课程中的一个关键洞察", deadline: "下周" },
    { action: "制定并启动一个小规模的变革管理实践", deadline: "本月" }
  ];

  actions.forEach((a, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: 3.95 + i * 0.5, w: 0.08, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(a.action, {
      x: 0.75, y: 3.95 + i * 0.5, w: 7, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
    slide.addText(a.deadline, {
      x: 7.75, y: 3.95 + i * 0.5, w: 1.5, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, align: "right"
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
  pres.writeFile({ fileName: "slide-102-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
