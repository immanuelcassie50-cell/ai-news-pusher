// slide-49.js - Chapter 6 Summary
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 49,
  title: '本章小结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left decorative bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 0.08, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("本章小结", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Chapter indicator
  slide.addShape("roundRect", {
    x: 0.5, y: 0.95, w: 1.2, h: 0.35,
    fill: { color: theme.accent },
    rectRadius: 0.05
  });
  slide.addText("第六章", {
    x: 0.5, y: 0.95, w: 1.2, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Key takeaways
  const takeaways = [
    {
      text: "AI能精确算冲稳保，但算不出\"这个人是谁\',
      highlight: true
    },
    {
      text: "真正有价值的：信息过滤、产业判断、倒推规划",
      highlight: false
    },
    {
      text: "会替代的是只会算冲稳保的同行",
      highlight: false
    },
    {
      text: "AI让基础计算变快，释放时间到真正需要判断力的地方",
      highlight: false
    }
  ];

  takeaways.forEach((item, i) => {
    const y = 1.5 + i * 0.9;

    // Card background
    slide.addShape("roundRect", {
      x: 0.5, y: y, w: 9, h: 0.75,
      fill: { color: item.highlight ? theme.primary : "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 2, offset: 1, angle: 135, opacity: 0.06 },
      rectRadius: 0.1
    });

    // Checkmark circle
    slide.addShape("ellipse", {
      x: 0.7, y: y + 0.125, w: 0.5, h: 0.5,
      fill: { color: item.highlight ? "FFFFFF" : theme.accent }
    });
    slide.addText("\u2713", {
      x: 0.7, y: y + 0.125, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: item.highlight ? theme.primary : "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Text
    slide.addText(item.text, {
      x: 1.4, y: y, w: 7.9, h: 0.75,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: item.highlight ? "FFFFFF" : theme.secondary,
      bold: item.highlight,
      valign: "middle"
    });
  });

  // Core message
  slide.addShape("roundRect", {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("这件事永远得靠人", {
    x: 0.7, y: 5.0, w: 8.6, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("49", {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-49-preview.pptx" })
    .then(() => console.log("Preview saved: slide-49-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
