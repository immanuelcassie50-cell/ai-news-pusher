// slide-81.js - Chapter 11 Summary: 本章小结
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 81, title: '本章小结' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.8,
    fill: { color: theme.primary }
  });
  slide.addText("本章小结", {
    x: 0.5, y: 0.15, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("第十一章 案例证伪", {
    x: 0.5, y: 0.9, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // Key takeaways
  const takeaways = [
    "案例是用来证伪的，不是用来炫耀的",
    "主动留被追问空间，反而建立扎实信任",
    "坦诚讲述带瑕疵的案例，比完美故事更可信",
    "案例要真正支撑判断，不是装饰"
  ];

  takeaways.forEach((item, idx) => {
    const y = 1.45 + idx * 0.9;

    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.75,
      fill: { color: "FFFFFF" },
      rectRadius: 0.1,
      shadow: { type: `outer`, color: `000000`, blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Checkmark circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.17, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText("✓", {
      x: 0.7, y: y + 0.17, w: 0.4, h: 0.4,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: `center`, valign: `middle`
    });

    // Takeaway text
    slide.addText(item, {
      x: 1.3, y: y, w: 8.0, h: 0.75,
      fontSize: 17, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });
  });

  // Core message at bottom
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("讲案例不是为了证明我很厉害，是为了让对面的人有机会推翻我", {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("81", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-81-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
