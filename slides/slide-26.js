// slide-26.js - Russian strategic adjustment (俄罗斯的战略调整)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 26,
  title: '俄罗斯的战略调整'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("俄罗斯的战略调整", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Four strategic directions
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 9.0, h: 0.5,
    fill: { color: theme.secondary, transparency: 85 }
  });
  slide.addText("四大战略方向", {
    x: 0.5, y: 1.2, w: 9.0, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  const directions = [
    {
      title: "北极战略",
      focus: "北方航道开发",
      details: "油气资源、军事部署",
      color: theme.primary
    },
    {
      title: "西部稳定",
      focus: "白俄罗斯一体化",
      details: "波罗的海边界管控",
      color: theme.secondary
    },
    {
      title: "南部突破",
      focus: "叙利亚模式",
      details: "军事介入争议地区",
      color: theme.accent
    },
    {
      title: "东方合作",
      focus: "中俄战略协作",
      details: "能源贸易、军事合作",
      color: theme.primary
    }
  ];

  const cardWidth = 2.1;
  const startX = 0.5;
  const gap = 0.2;

  directions.forEach((dir, idx) => {
    const x = startX + idx * (cardWidth + gap);
    const y = 1.85;

    // Card
    slide.addShape("rect", {
      x: x, y: y, w: cardWidth, h: 2.3,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Top bar
    slide.addShape("rect", {
      x: x, y: y, w: cardWidth, h: 0.45,
      fill: { color: dir.color }
    });

    slide.addText(dir.title, {
      x: x, y: y, w: cardWidth, h: 0.45,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Focus
    slide.addText("重点", {
      x: x + 0.1, y: y + 0.55, w: cardWidth - 0.2, h: 0.25,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.light, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(dir.focus, {
      x: x + 0.1, y: y + 0.8, w: cardWidth - 0.2, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "top"
    });

    // Details
    slide.addText(dir.details, {
      x: x + 0.1, y: y + 1.35, w: cardWidth - 0.2, h: 0.8,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "top"
    });
  });

  // Bottom insight
  slide.addShape("rect", {
    x: 0.5, y: 4.35, w: 9.0, h: 0.65,
    fill: { color: theme.primary }
  });
  slide.addText("战略逻辑：从全球扩张转向区域守成，以核威慑为底盾，以有限介入为手段", {
    x: 0.7, y: 4.35, w: 8.6, h: 0.65,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("26", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "edf2f4",
    bg: "ffffff"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-26-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
