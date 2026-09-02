// slide-24.js - 差异化的三个维度
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 24,
  title: '差异化的三个维度'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("差异化的三个维度", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Three dimensions as cards
  const dimensions = [
    {
      title: "性格差异",
      subtitle: "内向 vs 外向",
      desc: "有的孩子需要更多独处时间，有的孩子需要更多社交互动"
    },
    {
      title: "发展阶段",
      subtitle: "婴儿 vs 学龄",
      desc: "不同年龄有不同的生理、心理发展任务和需求"
    },
    {
      title: "兴趣取向",
      subtitle: "运动 vs 艺术",
      desc: "每个孩子独特的兴趣方向需要被尊重和支持"
    }
  ];

  const cardWidth = 2.9;
  const cardHeight = 3.5;
  const startX = 0.5;
  const gap = 0.35;

  dimensions.forEach((dim, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.3, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Top accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.3, w: cardWidth, h: 0.1,
      fill: { color: theme.accent }
    });

    // Number
    slide.addText((idx + 1).toString(), {
      x: x + 0.2, y: 1.6, w: 0.5, h: 0.5,
      fontSize: 28, fontFace: "Arial",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Title
    slide.addText(dim.title, {
      x: x + 0.2, y: 2.1, w: cardWidth - 0.4, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Subtitle
    slide.addText(dim.subtitle, {
      x: x + 0.2, y: 2.55, w: cardWidth - 0.4, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: false,
      align: "left", valign: "middle"
    });

    // Divider
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.2, y: 3.05, w: cardWidth - 0.4, h: 0.02,
      fill: { color: theme.light }
    });

    // Description
    slide.addText(dim.desc, {
      x: x + 0.2, y: 3.2, w: cardWidth - 0.4, h: 1.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "top"
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
  pres.writeFile({ fileName: "slide-24-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
