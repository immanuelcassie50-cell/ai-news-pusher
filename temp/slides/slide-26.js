// slide-26.js - Types of Noise: 噪音类型识别
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 26,
  title: '噪音类型识别'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.35, w: 0.08, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("噪音类型识别", {
    x: 0.6, y: 0.35, w: 6, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle", margin: 0
  });

  // Three noise type cards
  const noiseTypes = [
    {
      title: "数据噪音",
      icon: "📊",
      desc: "统计意义上正确但对具体人无关",
      example: "某专业平均薪资10万，但分布严重不均"
    },
    {
      title: "情绪噪音",
      icon: "💢",
      desc: "极端个案、煽动性标题、故事性强但不代表分布",
      example: "“某专业毕业生失业送外卖”转发量很大"
    },
    {
      title: "正确废话",
      icon: "🎯",
      desc: "听起来正确但无可操作性",
      example: "“选喜欢的又有前途的专业”"
    }
  ];

  noiseTypes.forEach((n, i) => {
    const x = 0.5 + i * 3.1;

    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: 1.1, w: 2.9, h: 3.8,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 5, offset: 2, angle: 135, opacity: 0.08 },
      rectRadius: 0.1
    });

    // Top accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.1, w: 2.9, h: 0.08,
      fill: { color: theme.accent }
    });

    // Icon
    slide.addText(n.icon, {
      x: x, y: 1.3, w: 2.9, h: 0.6,
      fontSize: 32,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(n.title, {
      x: x + 0.15, y: 2.0, w: 2.6, h: 0.45,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(n.desc, {
      x: x + 0.15, y: 2.5, w: 2.6, h: 0.9,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "top",
      align: "center"
    });

    // Example box
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x + 0.15, y: 3.5, w: 2.6, h: 1.2,
      fill: { color: theme.bg },
      rectRadius: 0.06
    });
    slide.addText(n.example, {
      x: x + 0.25, y: 3.6, w: 2.4, h: 1.0,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.light, italic: true,
      valign: "middle"
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("26", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-26-preview.pptx" })
    .then(() => console.log("Created: slide-26-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
