// slide-56.js - 第七章小结
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 56,
  title: '本章小结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("本章小结", {
    x: 0.5, y: 0.35, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Chapter indicator
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 1.6, h: 0.4,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("第七章", {
    x: 0.5, y: 1.1, w: 1.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Key takeaways
  const takeaways = [
    {
      check: "✓",
      text: "冲稳保是风险偏好的翻译，不是排列组合规则"
    },
    {
      check: "✓",
      text: "同样的分数，不该有同样的答案"
    },
    {
      check: "✓",
      text: "三问确定风险偏好，再翻译进冲稳保比例"
    },
    {
      check: "✓",
      text: "校验真实承受力，不只看嘴上说的"
    }
  ];

  const cardH = 0.85;
  const startY = 1.7;
  const gap = 0.15;

  takeaways.forEach((item, i) => {
    const y = startY + i * (cardH + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 2, offset: 1, angle: 135, opacity: 0.06 },
      rectRadius: 0.1
    });

    // Check mark circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + (cardH - 0.5) / 2, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(item.check, {
      x: 0.7, y: y + (cardH - 0.5) / 2, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Takeaway text
    slide.addText(item.text, {
      x: 1.4, y: y, w: 7.9, h: cardH,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });
  });

  // Core message box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });
  slide.addText("理解“我愿意承担多大风险去换多大的可能性”", {
    x: 0.7, y: 5.0, w: 8.6, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge (circle style)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("56", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-56-preview.pptx" })
    .then(() => console.log("Created: slide-56-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
