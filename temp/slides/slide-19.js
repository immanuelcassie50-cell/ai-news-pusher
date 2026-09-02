// slide-19.js - Correct Order: 先人后分
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 19,
  title: '正确顺序：先人后分'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.35, w: 0.08, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("正确顺序：先人后分", {
    x: 0.6, y: 0.35, w: 6, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle", margin: 0
  });

  // Process steps - vertical flow
  const steps = [
    { num: "1", text: '先花时间弄清楚"这个人是谁"' },
    { num: "2", text: "他对什么东西真正投入过" },
    { num: "3", text: "他排斥什么" },
    { num: "4", text: '他对"未来"有没有模糊的画面' },
    { num: "5", text: "再拿分数去框定方向里能够到的最好选择" }
  ];

  steps.forEach((step, i) => {
    const y = 1.0 + i * 0.85;

    // Step number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.6, y: y, w: 0.5, h: 0.5,
      fill: { color: i === 4 ? theme.accent : theme.primary }
    });
    slide.addText(step.num, {
      x: 0.6, y: y, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Step text
    slide.addText(step.text, {
      x: 1.3, y: y, w: 7.5, h: 0.5,
      fontSize: 17, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });

    // Connector line (except last)
    if (i < steps.length - 1) {
      slide.addShape(pres.shapes.LINE, {
        x: 0.85, y: y + 0.5, w: 0, h: 0.35,
        line: { color: theme.light, width: 2 }
      });
    }
  });

  // Bottom emphasis
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 1.5, y: 5.05, w: 7, h: 0.5,
    fill: { color: theme.primary, transparency: 90 },
    rectRadius: 0.08
  });
  slide.addText('分数是硬约束，决定不了方向，只决定"这个方向里你能走多远"', {
    x: 1.5, y: 5.05, w: 7, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("19", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-19-preview.pptx" })
    .then(() => console.log("Preview saved: slide-19-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
