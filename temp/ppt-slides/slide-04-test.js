// slide-04.js - 课程目标
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 4,
  title: '课程目标'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("课程目标", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 6 goal cards in 2x3 grid
  const goals = [
    "掌握10类高频公文任务的特征识别",
    "建立任务来源到任务类型的映射能力",
    "学会任务判断四问法",
    "熟练运用6类公文的AI协同写作路径",
    "理解AI在公文写作中的边界",
    "完成从学习者到实践者的迁移"
  ];

  const cardW = 2.9;
  const cardH = 1.6;
  const startX = 0.55;
  const startY = 1.2;
  const gapX = 0.15;
  const gapY = 0.15;

  goals.forEach((goal, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 }
    });

    // Top accent line
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardW, h: 0.06,
      fill: { color: i < 3 ? theme.primary : theme.accent }
    });

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.15, y: y + 0.2, w: 0.45, h: 0.45,
      fill: { color: i < 3 ? theme.primary : theme.accent }
    });

    slide.addText(String(i + 1), {
      x: x + 0.15, y: y + 0.2, w: 0.45, h: 0.45,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", align: "center", valign: "middle", bold: true
    });

    // Goal text
    slide.addText(goal, {
      x: x + 0.1, y: y + 0.75, w: cardW - 0.2, h: 0.75,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "top"
    });
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "4a4a4a",
    accent: "E8364F",
    light: "c0c0c0",
    bg: "fafafa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/新课开发/公文写作/5、综合实战——高频场景的协同写作与组织迁移/ppt/slides/slide-04-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
