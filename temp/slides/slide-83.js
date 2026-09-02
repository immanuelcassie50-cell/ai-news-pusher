// slide-83.js - Q&A: Client Changes Mind
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 83, title: 'Q&A：临场反悔怎么办' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.8,
    fill: { color: theme.primary }
  });
  slide.addText("Q&A：临场反悔怎么办", {
    x: 0.5, y: 0.15, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Q section
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.0, w: 9, h: 1.0,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: `outer`, color: `000000`, blur: 3, offset: 1, angle: 135, opacity: 0.06 }
  });

  // Q badge
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.7, y: 1.15, w: 0.5, h: 0.35,
    fill: { color: theme.accent },
    rectRadius: 0.05
  });
  slide.addText("Q", {
    x: 0.7, y: 1.15, w: 0.5, h: 0.35,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  // Q text
  slide.addText("客户临时反悔，已经跟着聊了很久确定了方向，最后家里亲戚随口一句话，全盘推翻重来？", {
    x: 1.35, y: 1.1, w: 7.95, h: 0.8,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle"
  });

  // A section
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 2.15, w: 9, h: 2.7,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: `outer`, color: `000000`, blur: 3, offset: 1, angle: 135, opacity: 0.06 }
  });

  // A badge
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.7, y: 2.3, w: 0.5, h: 0.35,
    fill: { color: theme.primary },
    rectRadius: 0.05
  });
  slide.addText("A", {
    x: 0.7, y: 2.3, w: 0.5, h: 0.35,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  // A content - key insight
  slide.addText("不去跟那句话较劲，而是重新回到信息本身", {
    x: 1.35, y: 2.25, w: 7.95, h: 0.5,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    valign: "middle"
  });

  // A content - steps
  const steps = [
    "把亲戚那句话背后的判断逻辑找出来",
    "跟之前梳理的信息放在一起重新给家长看一遍",
    "有时那句话确实点出了之前没考虑到的角度，那就该调整",
    "有时纯粹是信息不对称，摆清楚，家长自己会重新回到原来的判断"
  ];

  steps.forEach((step, idx) => {
    const y = 2.85 + idx * 0.5;

    // Bullet
    slide.addShape(pres.shapes.OVAL, {
      x: 1.35, y: y + 0.12, w: 0.12, h: 0.12,
      fill: { color: theme.accent }
    });

    // Text
    slide.addText(step, {
      x: 1.6, y: y, w: 7.7, h: 0.45,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });
  });

  // Key takeaway
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: theme.secondary },
    rectRadius: 0.08
  });
  slide.addText("回到信息本身，而不是跟情绪较劲", {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("83", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  return slide;
}

// Standalone preview
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-83-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
