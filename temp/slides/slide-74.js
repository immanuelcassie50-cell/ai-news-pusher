// slide-74.js - Surface Consensus Trap
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 74, title: '表面一致的陷阱' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left decorative bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.08, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("表面一致的陷阱", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Title underline
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 2.0, h: 0.04,
    fill: { color: theme.accent }
  });

  // Warning card - left side
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.1, w: 4.4, h: 2.8,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: `outer`, color: `000000`, blur: 4, offset: 2, angle: 135, opacity: 0.08 }
  });

  // Warning header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 4.4, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("警告信号", {
    x: 0.5, y: 1.1, w: 4.4, h: 0.5,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  const warnings = [
    "孩子没有明确反对，全程配合",
    "配合背后是早就放弃争取的疲惫感",
    "比当场哭闹反对更难处理",
    "线索：说话时略显疲惫的语气，眼神飘一下"
  ];

  warnings.forEach((text, idx) => {
    const y = 1.75 + idx * 0.5;

    // Bullet
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.1, w: 0.2, h: 0.2,
      fill: { color: theme.accent }
    });

    // Text
    slide.addText(text, {
      x: 1.0, y: y, w: 3.7, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });
  });

  // Solution card - right side
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.1, y: 1.1, w: 4.4, h: 2.8,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: `outer`, color: `000000`, blur: 4, offset: 2, angle: 135, opacity: 0.08 }
  });

  // Solution header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.1, w: 4.4, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("如何识别", {
    x: 5.1, y: 1.1, w: 4.4, h: 0.5,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  const solutions = [
    '在"过分顺畅"的谈话里主动放慢节奏',
    "单独问孩子：如果完全没有任何限制，你自己会怎么选",
    "沉默不代表同意，分歧可能被家庭内部长期消化掉了"
  ];

  solutions.forEach((text, idx) => {
    const y = 1.75 + idx * 0.65;

    // Number
    slide.addShape(pres.shapes.OVAL, {
      x: 5.3, y: y + 0.05, w: 0.3, h: 0.3,
      fill: { color: theme.primary }
    });
    slide.addText(String(idx + 1), {
      x: 5.3, y: y + 0.05, w: 0.3, h: 0.3,
      fontSize: 12, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: `center`, valign: `middle`
    });

    // Text
    slide.addText(text, {
      x: 5.75, y: y, w: 3.55, h: 0.6,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });
  });

  // Bottom insight
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.15, w: 9, h: 0.8,
    fill: { color: theme.secondary },
    rectRadius: 0.08
  });
  slide.addText([
    { text: "表面一致", options: { bold: true } },
    { text: "比" },
    { text: "明显冲突", options: { bold: true } },
    { text: "更难识别，也更难处理" }
  ], {
    x: 0.7, y: 4.15, w: 8.6, h: 0.8,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    valign: "middle"
  });

  // Page number badge (circle style, bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("74", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-74-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
