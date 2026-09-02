// slide-40.js - 第五章 案例：从乱到整齐的男生
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 40,
  title: '案例：从乱到整齐的男生'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("案例：从乱到整齐的男生", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Case label
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 0.95, w: 1.2, h: 0.35,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("案例", {
    x: 0.5, y: 0.95, w: 1.2, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Dialog flow - left side
  const dialogs = [
    { speaker: "老师", text: "十年后想过什么日子？", isQuestion: true },
    { speaker: "男生", text: "（想了很久）从来没人问过我这个问题……", isQuestion: false },
    { speaker: "老师", text: "不考虑挣钱，你希望每天醒来去做什么？", isQuestion: true },
    { speaker: "男生", text: "喜欢能看到具体成果的事——把乱的房间收拾整齐……", isQuestion: false }
  ];

  const cardStartY = 1.45;
  const cardH = 0.55;
  const gap = 0.1;

  dialogs.forEach((d, i) => {
    const y = cardStartY + i * (cardH + gap);
    const isQ = d.isQuestion;
    const speakerColor = isQ ? theme.accent : theme.primary;

    // Speaker tag
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y, w: 0.7, h: 0.32,
      fill: { color: speakerColor },
      rectRadius: 0.08
    });
    slide.addText(d.speaker, {
      x: 0.5, y: y, w: 0.7, h: 0.32,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Dialog text
    slide.addText(d.text, {
      x: 1.3, y: y, w: 5.5, h: 0.32,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });
  });

  // Right side - insight card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.0, y: 1.45, w: 2.5, h: 2.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.1 },
    rectRadius: 0.1
  });

  slide.addText("发现", {
    x: 7.15, y: 1.55, w: 2.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    valign: "middle"
  });

  slide.addText("这种'从乱到整齐'的过程让他觉得踏实", {
    x: 7.15, y: 1.9, w: 2.2, h: 0.7,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary,
    valign: "top"
  });

  // Arrow pointing right
  slide.addText("→", {
    x: 6.6, y: 2.2, w: 0.4, h: 0.4,
    fontSize: 20, fontFace: "Arial",
    color: theme.accent,
    align: "center", valign: "middle"
  });

  // Key insight box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 7.0, y: 2.6, w: 2.5, h: 0.7,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("答案不在专业名，在生命状态", {
    x: 7.1, y: 2.6, w: 2.3, h: 0.7,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Bottom highlight
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 3.85, w: 9, h: 0.65,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });
  slide.addText("聊了四十分钟，没提一所学校一个专业名字", {
    x: 0.7, y: 3.85, w: 8.6, h: 0.65,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Bottom insight
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.65, w: 9, h: 0.55,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });
  slide.addText("但这四十分钟比后面两个小时排志愿表都重要", {
    x: 0.7, y: 4.65, w: 8.6, h: 0.55,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge (circle style - bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("40", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-40-preview.pptx" })
    .then(() => console.log("Preview saved: slide-40-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
