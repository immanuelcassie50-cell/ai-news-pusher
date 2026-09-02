// slide-59.js - Content: Career Identity Shift
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 59, title: '职业认同的转变' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("职业认同的转变", {
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

  // "From" column header
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.4, w: 4.2, h: 0.5,
    fill: { color: theme.light },
    rectRadius: 0.08
  });
  slide.addText("从", {
    x: 0.5, y: 1.4, w: 4.2, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // "To" column header
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.3, y: 1.4, w: 4.2, h: 0.5,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("到", {
    x: 5.3, y: 1.4, w: 4.2, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Transition items
  const transitions = [
    { from: "帮孩子选到了很好的结果", to: "帮孩子想清楚自己要什么" },
    { from: "冲进好学校、选到热门专业", to: "结果普通但过程扎实" },
    { from: "表格排得对不对", to: "孩子有没有真正参与" }
  ];

  transitions.forEach((item, idx) => {
    const y = 2.05 + idx * 1.0;

    // From card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y, w: 4.2, h: 0.85,
      fill: { color: "FFFFFF" },
      rectRadius: 0.08,
      shadow: { type: 'outer', color: '000000', blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });
    slide.addText(item.from, {
      x: 0.65, y: y, w: 3.9, h: 0.85,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });

    // Arrow
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 4.75, y: y + 0.35, w: 0.5, h: 0.04,
      fill: { color: theme.accent }
    });
    slide.addText("→", {
      x: 4.75, y: y + 0.15, w: 0.5, h: 0.55,
      fontSize: 18, fontFace: "Arial",
      color: theme.accent, bold: true,
      align: "center", valign: "middle"
    });

    // To card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 5.3, y: y, w: 4.2, h: 0.85,
      fill: { color: theme.primary },
      rectRadius: 0.08,
      shadow: { type: 'outer', color: '000000', blur: 3, offset: 1, angle: 135, opacity: 0.08 }
    });
    slide.addText(item.to, {
      x: 5.45, y: y, w: 3.9, h: 0.85,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      valign: "middle"
    });
  });

  // Page number badge (circle style, bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.accent }
  });
  slide.addText("59", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-59-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
