// slide-107.js - Chapter 15 Summary: 本章小结
const pptxgen = require("pptxgenjs");

const theme = {
  primary: "8B0000",
  secondary: "333333",
  accent: "C41E3A",
  light: "999999",
  bg: "F5F5F5"
};

const slideConfig = {
  type: "summary",
  index: 107,
  title: "本章小结"
};

function createSlide(pres, t) {
  const slide = pres.addSlide();
  slide.background = { color: t.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: t.primary }
  });
  slide.addText("本章小结", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Chapter label
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 8.3, y: 0.2, w: 1.2, h: 0.5,
    fill: { color: t.accent },
    rectRadius: 0.08
  });
  slide.addText("第十五章", {
    x: 8.3, y: 0.2, w: 1.2, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Key takeaways
  const takeaways = [
    { mark: "那道坎", text: '从"方法对不对"到"这个人是谁"' },
    { mark: "老手差别", text: "愿不愿意放下经验重新了解具体的人" },
    { mark: "经验丰富", text: "≠ 套路熟练" },
    { mark: "好奇心", text: '可以培养：多问"为什么"' }
  ];

  takeaways.forEach((item, i) => {
    const y = 1.2 + i * 1.0;

    // Card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.9,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.08 },
      rectRadius: 0.1
    });

    // Check circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.75, y: y + 0.2, w: 0.5, h: 0.5,
      fill: { color: t.accent }
    });
    slide.addText("✓", {
      x: 0.75, y: y + 0.2, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Mark tag
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 1.45, y: y + 0.25, w: 1.6, h: 0.4,
      fill: { color: t.primary },
      rectRadius: 0.06
    });
    slide.addText(item.mark, {
      x: 1.45, y: y + 0.25, w: 1.6, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Content text
    slide.addText(item.text, {
      x: 3.2, y: y + 0.2, w: 6, h: 0.5,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: t.secondary,
      valign: "middle"
    });
  });

  // Decorative bottom line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.35, w: 2, h: 0.05,
    fill: { color: t.accent }
  });

  // Page number badge (bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: t.accent }
  });
  slide.addText("107", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-107-preview.pptx" })
    .then(() => console.log("Created slide-107-preview.pptx"));
}
