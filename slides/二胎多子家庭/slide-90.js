// slide-90.js - 资源推荐第2页 - 推荐资源
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 90,
  title: '推荐资源'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("推荐资源", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Resources
  const resources = [
    { type: "播客", title: "正面管教系列", icon: "🎧" },
    { type: "课程", title: "儿童发展心理学", icon: "🎓" },
    { type: "社群", title: "多子家庭互助群", icon: "👨‍👩‍👧‍👦" }
  ];

  const cardWidth = 2.8;
  const cardHeight = 3.2;
  const startX = 0.75;
  const startY = 1.4;
  const gapX = 0.35;

  resources.forEach((res, idx) => {
    const x = startX + idx * (cardWidth + gapX);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Top accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: 0.08,
      fill: { color: theme.accent }
    });

    // Icon circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + (cardWidth - 1.0) / 2, y: startY + 0.5, w: 1.0, h: 1.0,
      fill: { color: theme.light, transparency: 50 }
    });
    slide.addText(res.icon, {
      x: x + (cardWidth - 1.0) / 2, y: startY + 0.5, w: 1.0, h: 1.0,
      fontSize: 32,
      align: "center", valign: "middle"
    });

    // Type badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x + (cardWidth - 1.2) / 2, y: startY + 1.7, w: 1.2, h: 0.4,
      fill: { color: theme.primary },
      rectRadius: 0.08
    });
    slide.addText(res.type, {
      x: x + (cardWidth - 1.2) / 2, y: startY + 1.7, w: 1.2, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(res.title, {
      x: x + 0.2, y: startY + 2.3, w: cardWidth - 0.4, h: 0.7,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
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
  pres.writeFile({ fileName: "slide-90-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
