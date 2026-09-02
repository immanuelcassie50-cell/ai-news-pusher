// slide-117.js - Post-Implementation Review Template
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 117,
  title: '变革后评估复盘模板'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革后评估复盘模板", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const reviewAreas = [
    { area: "目标达成", questions: ["原定目标是否达成？", "未达成的原因是什么？", "有哪些超出预期的成果？"] },
    { area: "人员影响", questions: ["员工反馈如何？", "有哪些遗留问题？", "需要持续关注的群体？"] },
    { area: "流程变化", questions: ["新流程执行情况？", "有哪些执行障碍？", "需要优化的环节？"] },
    { area: "经验教训", questions: ["成功的关键因素？", "可以改进的地方？", "对未来变革的建议？"] }
  ];

  reviewAreas.forEach((r, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.5;
    const y = 1.0 + row * 2.2;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4, h: 2.0,
      fill: { color: theme.light }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(r.area, {
      x: x, y: y + 0.1, w: 4, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    r.questions.forEach((q, j) => {
      slide.addText("• " + q, {
        x: x + 0.2, y: y + 0.6 + j * 0.45, w: 3.6, h: 0.4,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary, align: "left"
      });
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
  pres.writeFile({ fileName: "slide-117-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
