// slide-18.js - Preference for Certainty
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 18,
  title: '对确定感的偏好'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.35, w: 0.08, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("对确定感的偏好", {
    x: 0.6, y: 0.35, w: 6, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle", margin: 0
  });

  // Key points with icons
  const points = [
    {
      title: "先确定分数能上什么档次",
      desc: '给家长"事情已有进展"的掌控感',
      highlight: true
    },
    {
      title: '"这个人是谁"没有确定的答案',
      desc: "没有可以打钩确认的选项",
      highlight: false
    },
    {
      title: "不确定感让人本能想绕开",
      desc: "先做能带来即时掌控感的事",
      highlight: false
    }
  ];

  points.forEach((point, i) => {
    const y = 1.1 + i * 1.0;

    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.85,
      fill: { color: point.highlight ? theme.accent : theme.light, transparency: point.highlight ? 90 : 60 },
      rectRadius: 0.08
    });

    // Title text
    slide.addText(point.title, {
      x: 0.7, y: y + 0.1, w: 8.6, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: point.highlight ? theme.accent : theme.secondary, bold: true,
      valign: "middle"
    });

    // Description text
    slide.addText(point.desc, {
      x: 0.7, y: y + 0.45, w: 8.6, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.light,
      valign: "middle"
    });
  });

  // Result box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.3, w: 9, h: 0.9,
    fill: { color: theme.primary, transparency: 90 },
    line: { color: theme.primary, width: 2 },
    rectRadius: 0.1
  });

  // Warning icon
  slide.addShape(pres.shapes.OVAL, {
    x: 0.7, y: 4.5, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("!", {
    x: 0.7, y: 4.5, w: 0.5, h: 0.5,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("结果：最先处理最不需要处理的部分，最后没处理最关键的部分", {
    x: 1.4, y: 4.3, w: 7.9, h: 0.9,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("18", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-18-preview.pptx" })
    .then(() => console.log("Preview saved: slide-18-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
