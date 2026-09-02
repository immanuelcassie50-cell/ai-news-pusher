// slide-80.js - Case Selection Test: 案例挑选检验法
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 80, title: '案例挑选检验法' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.8,
    fill: { color: theme.primary }
  });
  slide.addText("案例挑选检验法", {
    x: 0.5, y: 0.15, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Key question card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.0, w: 9, h: 1.1,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });

  // Question mark icon
  slide.addText("?", {
    x: 0.7, y: 1.1, w: 0.6, h: 0.9,
    fontSize: 48, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  // Question text
  slide.addText("讲这个案例之前先问自己：", {
    x: 1.4, y: 1.1, w: 7.9, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });
  slide.addText("如果拿掉这个案例，我刚才那个判断还站得住脚吗？", {
    x: 1.4, y: 1.5, w: 7.9, h: 0.5,
    fontSize: 17, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Two result cards
  const results = [
    {
      condition: "如果站得住",
      meaning: "案例只是个装饰，不讲也没关系",
      color: theme.light
    },
    {
      condition: "如果站不住",
      meaning: "案例是真正在支撑这个判断的，值得讲",
      color: theme.primary
    }
  ];

  results.forEach((item, idx) => {
    const x = 0.5 + idx * 4.6;

    // Card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: 2.3, w: 4.4, h: 1.4,
      fill: { color: "FFFFFF" },
      rectRadius: 0.1,
      shadow: { type: `outer`, color: `000000`, blur: 4, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Condition badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x + 0.2, y: 2.45, w: 1.8, h: 0.35,
      fill: { color: item.color },
      rectRadius: 0.05
    });
    slide.addText(item.condition, {
      x: x + 0.2, y: 2.45, w: 1.8, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: `center`, valign: `middle`
    });

    // Arrow
    slide.addText("→", {
      x: x + 0.2, y: 2.9, w: 0.4, h: 0.4,
      fontSize: 20, fontFace: "Arial",
      color: theme.accent, bold: true
    });

    // Meaning text
    slide.addText(item.meaning, {
      x: x + 0.6, y: 2.85, w: 3.6, h: 0.7,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });
  });

  // Insight box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 3.9, w: 9, h: 0.9,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: `outer`, color: `000000`, blur: 3, offset: 1, angle: 135, opacity: 0.06 }
  });

  // Insight icon
  slide.addShape(pres.shapes.OVAL, {
    x: 0.7, y: 4.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("!", {
    x: 0.7, y: 4.1, w: 0.5, h: 0.5,
    fontSize: 24, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  // Insight text
  slide.addText("用这个方法筛一遍，发现以前很多案例其实都是第一种——只是装饰", {
    x: 1.4, y: 3.9, w: 7.9, h: 0.9,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    valign: "middle"
  });

  // Key takeaway at bottom
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.95, w: 9, h: 0.55,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("真正支撑判断的案例才值得讲，装饰性案例不讲也罢", {
    x: 0.5, y: 4.95, w: 9, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("80", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-80-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
