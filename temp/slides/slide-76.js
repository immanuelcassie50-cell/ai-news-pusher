// slide-76.js - Chapter 10 Summary
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'summary', index: 76, title: '本章小结' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left decorative bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.08, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("本章小结", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Title underline
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Summary cards - 2x2 grid
  const takeaways = [
    {
      icon: "1",
      text: "不替任何一方说话，是翻译和主持"
    },
    {
      icon: "2",
      text: "分辨事实分歧和价值分歧，处理方式不同"
    },
    {
      icon: "3",
      text: "表面一致比明显冲突更难识别"
    },
    {
      icon: "4",
      text: "中立是把信息判断摆出来，不是凡事各打五十大板"
    }
  ];

  const cardWidth = 4.4;
  const cardHeight = 1.4;
  const startX = 0.5;
  const startY = 1.15;
  const gapX = 0.2;
  const gapY = 0.2;

  takeaways.forEach((item, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = startX + col * (cardWidth + gapX);
    const y = startY + row * (cardHeight + gapY);

    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      rectRadius: 0.1,
      shadow: { type: `outer`, color: `000000`, blur: 4, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Left accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.08, h: cardHeight,
      fill: { color: theme.accent }
    });

    // Checkmark circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.25, y: y + 0.45, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText("\u2713", {
      x: x + 0.25, y: y + 0.45, w: 0.5, h: 0.5,
      fontSize: 20, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: `center`, valign: `middle`
    });

    // Text
    slide.addText(item.text, {
      x: x + 0.9, y: y + 0.2, w: 3.3, h: 1.0,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      valign: "middle"
    });
  });

  // Core message at bottom
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.25, w: 9, h: 0.85,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });

  // Quote mark
  slide.addText('"', {
    x: 0.6, y: 4.1, w: 0.4, h: 0.5,
    fontSize: 32, fontFace: "Georgia",
    color: theme.accent, bold: true
  });

  slide.addText("你不是替任何一方说话的人，你是那个让两边都能听见彼此在说什么的人", {
    x: 1.0, y: 4.35, w: 8.2, h: 0.65,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    valign: "middle"
  });

  // Page number badge (circle style, bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("76", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-76-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
