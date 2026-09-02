// slide-14.js - Daily Application of Three-Dimensional Model (三维模型的日常应用)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 14,
  title: '三维模型的日常应用'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("三维模型的日常应用", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // 3 dimension applications
  const applications = [
    {
      title: "物质层",
      examples: [
        "买玩具时考虑每个孩子的需求",
        "分配游戏空间时公平且灵活",
        "食物和零食按需分配，不强行均分"
      ]
    },
    {
      title: "情感层",
      examples: [
        "单独谈话时间每个孩子都有",
        "表扬具体行为，不做横向比较",
        "拥抱和肢体接触因人而异"
      ]
    },
    {
      title: "发展层",
      examples: [
        "根据兴趣选择培训班",
        "学习节奏因材施教",
        "未来规划尊重孩子意愿"
      ]
    }
  ];

  const cardWidth = 2.9;
  const cardHeight = 3.5;
  const startX = 0.5;
  const cardY = 1.2;
  const gap = 0.35;

  applications.forEach((app, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: cardY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Title bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: cardY, w: cardWidth, h: 0.55,
      fill: { color: theme.accent }
    });
    slide.addText(app.title, {
      x: x, y: cardY, w: cardWidth, h: 0.55,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Examples
    app.examples.forEach((example, exIdx) => {
      const exY = cardY + 0.75 + exIdx * 0.9;

      // Bullet point
      slide.addShape(pres.shapes.OVAL, {
        x: x + 0.15, y: exY + 0.15, w: 0.2, h: 0.2,
        fill: { color: theme.primary }
      });

      // Example text
      slide.addText(example, {
        x: x + 0.45, y: exY, w: 2.3, h: 0.85,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        align: "left", valign: "top"
      });
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-14-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
