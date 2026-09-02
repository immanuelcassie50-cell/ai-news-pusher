// slide-44.js - 第五章 本章小结
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 44,
  title: '本章小结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("本章小结", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Chapter indicator
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.5, h: 0.4,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });
  slide.addText("第五章", {
    x: 0.5, y: 1.0, w: 1.5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Key takeaways
  const takeaways = [
    {
      num: "1",
      title: "正向推演",
      desc: "终点被起点（分数）决定"
    },
    {
      num: "2",
      title: "倒推规划",
      desc: "从十年后往回算，答案更贴合这个人"
    },
    {
      num: "3",
      title: "化解分歧",
      desc: "倒推可以化解家长和孩子看似很大的分歧"
    },
    {
      num: "4",
      title: "具体问题",
      desc: "答不出来时，用更具体的小问题接近"
    }
  ];

  const cardW = 4.3;
  const cardH = 0.9;
  const startY = 1.6;
  const gapY = 0.15;

  takeaways.forEach((item, i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const x = 0.5 + col * (cardW + 0.4);
    const y = startY + row * (cardH + gapY);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.08 },
      rectRadius: 0.1
    });

    // Left accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.08, h: cardH,
      fill: { color: theme.accent }
    });

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.2, y: y + (cardH - 0.5) / 2, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(item.num, {
      x: x + 0.2, y: y + (cardH - 0.5) / 2, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(item.title, {
      x: x + 0.85, y: y + 0.15, w: 3.2, h: 0.35,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      valign: "middle"
    });

    // Description
    slide.addText(item.desc, {
      x: x + 0.85, y: y + 0.5, w: 3.2, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });
  });

  // Core message box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.0, w: 9, h: 0.7,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });
  slide.addText("方向比答案更重要", {
    x: 0.7, y: 4.0, w: 8.6, h: 0.7,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Checkmark symbols
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.85, w: 9, h: 0.55,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });
  slide.addText("✓ 正向推演：终点被起点（分数）决定  |  ✓ 倒推规划：从十年后往回算  |  ✓ 倒推可以化解分歧  |  ✓ 答不出来时用小问题接近", {
    x: 0.7, y: 4.85, w: 8.6, h: 0.55,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Page number badge (circle style - bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("44", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-44-preview.pptx" })
    .then(() => console.log("Preview saved: slide-44-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
