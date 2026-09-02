// slide-13.js - Chapter 1 Summary
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 13,
  title: '本章小结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Light gray background
  slide.background = { color: theme.bg };

  // Left decorative bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.08, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("本章小结", {
    x: 0.5, y: 0.35, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Title underline
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.5, h: 0.05,
    fill: { color: theme.accent }
  });

  // Chapter indicator
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.25, w: 1.6, h: 0.4,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("第一章", {
    x: 0.5, y: 1.25, w: 1.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // Summary card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.85, w: 9, h: 3.0,
    fill: { color: "FFFFFF" },
    rectRadius: 0.12,
    shadow: { type: 'outer', blur: 8, offset: 3, angle: 45, color: '000000', opacity: 0.1 }
  });

  // Key takeaways
  const takeaways = [
    { check: "冲稳保是语法，不是方法" },
    { check: "分数约束范围，不约束方向" },
    { check: "方向是人算出来的，不是分数" },
    { check: "排表不难，难的是排表前那道题" }
  ];

  takeaways.forEach((item, i) => {
    const y = 2.15 + i * 0.65;

    // Checkmark circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.8, y: y + 0.05, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText("✓", {
      x: 0.8, y: y + 0.05, w: 0.4, h: 0.4,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    // Takeaway text
    slide.addText(item.check, {
      x: 1.4, y: y, w: 7.8, h: 0.5,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });

    // Separator line (except last)
    if (i < takeaways.length - 1) {
      slide.addShape(pres.shapes.LINE, {
        x: 1.4, y: y + 0.55, w: 7.8, h: 0,
        line: { color: theme.bg, width: 1 }
      });
    }
  });

  // Bottom section - core message
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText(`理解"人"，比搞懂"分"更重要`, {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // Page number badge - circle style at bottom-left
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("13", {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
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
  pres.writeFile({ fileName: "slide-13-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
