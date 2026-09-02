// slide-99.js - 互动环节
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 99,
  title: '问题与讨论'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("问题与讨论", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Main content area
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.3, w: 9, h: 3.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  // Q&A icon
  slide.addShape(pres.shapes.OVAL, {
    x: 4.25, y: 1.7, w: 1.5, h: 1.5,
    fill: { color: theme.accent, transparency: 20 }
  });
  slide.addText("?", {
    x: 4.25, y: 1.7, w: 1.5, h: 1.5,
    fontSize: 60, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Invitation text
  slide.addText("欢迎提问与分享", {
    x: 0.5, y: 3.4, w: 9, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Discussion topics
  slide.addText("讨论话题", {
    x: 0.5, y: 4.0, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "center", valign: "middle"
  });

  const topics = ["实践中的困惑", "成功经验分享", "个性化问题"];
  const topicWidth = 2.5;
  const topicStartX = 1.25;
  const topicGap = 0.3;

  topics.forEach((topic, idx) => {
    const x = topicStartX + idx * (topicWidth + topicGap);

    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: 4.4, w: topicWidth, h: 0.35,
      fill: { color: theme.light, transparency: 60 },
      rectRadius: 0.05
    });
    slide.addText(topic, {
      x: x, y: 4.4, w: topicWidth, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-99-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
