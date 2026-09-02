// slide-62.js - Summary: Chapter 8
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'summary', index: 62, title: '本章小结' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("本章小结", {
    x: 0.5, y: 0.35, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Subtitle
  slide.addText("第八章：志愿表的真正意义", {
    x: 0.5, y: 0.9, w: 4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Key takeaways
  const takeaways = [
    "志愿表是孩子第一次为自己做正式决定",
    "过程本身的价值比最后填了哪个专业更重要",
    "真正参与过的孩子，会把选择当成自己的来认领",
    "单独跟孩子聊，是唯一没法被工具替代的环节"
  ];

  takeaways.forEach((item, idx) => {
    const y = 1.45 + idx * 0.85;

    // Card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.75,
      fill: { color: "FFFFFF" },
      rectRadius: 0.08,
      shadow: { type: 'outer', color: '000000', blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Checkmark circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.12, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText("✓", {
      x: 0.7, y: y + 0.12, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Text
    slide.addText(item, {
      x: 1.4, y: y, w: 7.9, h: 0.75,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });
  });

  // Page number badge (circle style, bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.accent }
  });
  slide.addText("62", {
    x: 0.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-62-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
