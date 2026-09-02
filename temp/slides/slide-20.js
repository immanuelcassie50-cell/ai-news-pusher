// slide-20.js - Case: Clinical Medicine怕血
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 20,
  title: '案例：临床医学怕血'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.35, w: 0.08, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("案例：临床医学怕血", {
    x: 0.6, y: 0.35, w: 8, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle", margin: 0
  });

  // Warning badge
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 7.5, y: 0.35, w: 1.8, h: 0.5,
    fill: { color: theme.accent, transparency: 85 },
    rectRadius: 0.08
  });
  slide.addText("警示", {
    x: 7.5, y: 0.35, w: 1.8, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Story cards
  const storyPoints = [
    { label: "分数", content: "够到一所不错学校的临床医学" },
    { label: "家长", content: '"学医稳定，家里有关系以后好安排"' },
    { label: "真相", content: "这孩子看到血会晕" },
    { label: "发现", content: "解剖小动物需要很大心理建设才能完成" }
  ];

  storyPoints.forEach((point, i) => {
    const y = 1.0 + i * 0.85;

    // Label badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y, w: 1.2, h: 0.55,
      fill: { color: i === 2 ? theme.accent : theme.primary },
      rectRadius: 0.08
    });
    slide.addText(point.label, {
      x: 0.5, y: y, w: 1.2, h: 0.55,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Content text
    slide.addText(point.content, {
      x: 1.9, y: y, w: 7.6, h: 0.55,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });
  });

  // Alert box at bottom
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.4, y: 4.5, w: 9.2, h: 0.95,
    fill: { color: theme.accent, transparency: 90 },
    line: { color: theme.accent, width: 2 },
    rectRadius: 0.1
  });

  // Alert icon
  slide.addShape(pres.shapes.OVAL, {
    x: 0.6, y: 4.7, w: 0.55, h: 0.55,
    fill: { color: theme.accent }
  });
  slide.addText("!", {
    x: 0.6, y: 4.7, w: 0.55, h: 0.55,
    fontSize: 22, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("如果按先分数后专业顺序，这条信息压根不会被问到", {
    x: 1.3, y: 4.5, w: 8.1, h: 0.95,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("20", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-20-preview.pptx" })
    .then(() => console.log("Preview saved: slide-20-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
