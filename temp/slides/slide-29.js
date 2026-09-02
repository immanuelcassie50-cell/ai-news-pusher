// slide-29.js - Chapter 3 Summary: 本章小结
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 29,
  title: '本章小结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.35, w: 0.08, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("本章小结", {
    x: 0.6, y: 0.35, w: 6, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle", margin: 0
  });

  // Chapter indicator
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 8.0, y: 0.35, w: 1.5, h: 0.5,
    fill: { color: theme.primary, transparency: 85 },
    rectRadius: 0.06
  });
  slide.addText("第三章", {
    x: 8.0, y: 0.35, w: 1.5, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "center", valign: "middle"
  });

  // Key takeaways
  const takeaways = [
    { check: "✓", text: "信息稀缺性已改变——判断力比数据更稀缺" },
    { check: "OK", text: "真正的工作量不在“找到”，在“过滤”" },
    { check: "✓", text: "过滤三问：整体vs具体、时间戳、利益相关" },
    { check: "✓", text: "呈现信息要保留复杂度，不过度简化" }
  ];

  takeaways.forEach((t, i) => {
    const y = 1.2 + i * 0.95;

    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.8,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.06 },
      rectRadius: 0.08
    });

    // Check icon circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.15, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(t.check, {
      x: 0.7, y: y + 0.15, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Takeaway text
    slide.addText(t.text, {
      x: 1.4, y: y, w: 7.9, h: 0.8,
      fontSize: 17, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });

  // Core message box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("过滤噪音是替人省时间，不是剥夺信息", {
    x: 0.7, y: 5.0, w: 8.6, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("29", {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-29-preview.pptx" })
    .then(() => console.log("Created: slide-29-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
