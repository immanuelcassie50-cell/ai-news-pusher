// slide-81.js - Psychological Safety Assessment
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 81,
  title: '心理安全感评估量表'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("心理安全感评估量表", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const questions = [
    "我可以在团队中表达不同意见而不用担心被嘲笑",
    "如果我犯了错误，会被追究责任而不是被帮助学习",
    "团队成员之间可以相互支持和帮助",
    "我可以自由表达真实的担忧和想法",
    "团队鼓励尝试和创新，即使可能失败"
  ];

  questions.forEach((q, i) => {
    const y = 1.0 + i * 0.85;
    slide.addText("Q" + (i + 1) + ". " + q, {
      x: 0.5, y: y, w: 7, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
    // 5-point scale
    for (let j = 1; j <= 5; j++) {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 7.5 + j * 0.35, y: y + 0.05, w: 0.28, h: 0.3,
        fill: { color: j <= 2 ? theme.light : theme.accent }
      });
      slide.addText(String(j), {
        x: 7.5 + j * 0.35, y: y + 0.08, w: 0.28, h: 0.25,
        fontSize: 10, fontFace: "Arial",
        color: j <= 2 ? theme.secondary : "FFFFFF", align: "center"
      });
    }
  });

  slide.addText("评分标准：1=完全不同意，5=完全同意 | 总分<15需要重点关注", {
    x: 0.5, y: 5.1, w: 8, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, align: "left"
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
  pres.writeFile({ fileName: "slide-81-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
