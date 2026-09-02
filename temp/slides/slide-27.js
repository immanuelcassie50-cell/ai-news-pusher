// slide-27.js - Extreme Case Trap: 极端个案陷阱
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 27,
  title: '极端个案陷阱'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.35, w: 0.08, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("极端个案陷阱", {
    x: 0.6, y: 0.35, w: 6, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle", margin: 0
  });

  // Warning card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.0, w: 9, h: 1.3,
    fill: { color: theme.accent, transparency: 90 },
    line: { color: theme.accent, width: 2 },
    rectRadius: 0.1
  });

  // Warning icon
  slide.addText("!", {
    x: 0.7, y: 1.15, w: 0.5, h: 0.5,
    fontSize: 28, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  slide.addText([
    { text: "“某专业毕业生失业送外卖”的故事转发量很大", options: { breakLine: true } },
    { text: "问题不在真假——大概率是真的", options: { bold: true, color: theme.accent } }
  ], {
    x: 1.3, y: 1.15, w: 8.0, h: 1.0,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "middle"
  });

  // Main content card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 2.5, w: 9, h: 2.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 5, offset: 2, angle: 135, opacity: 0.08 },
    rectRadius: 0.1
  });

  // Key insight points
  const insights = [
    "问题在于：这是极端样本，不是专业毕业生的真实分布",
    "用极端个案代表整体是统计学错误",
    "极端案例因为故事性强、情绪冲击大，比统计报告更容易被相信"
  ];

  insights.forEach((insight, i) => {
    const y = 2.7 + i * 0.7;

    // Bullet point
    slide.addShape(pres.shapes.OVAL, {
      x: 0.75, y: y + 0.12, w: 0.16, h: 0.16,
      fill: { color: theme.accent }
    });

    slide.addText(insight, {
      x: 1.1, y: y, w: 8.2, h: 0.55,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });

  // Bottom emphasis box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.95, w: 9, h: 0.55,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("警惕：情绪共鸣 ≠ 事实真相", {
    x: 0.7, y: 4.95, w: 8.6, h: 0.55,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("27", {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-27-preview.pptx" })
    .then(() => console.log("Created: slide-27-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
