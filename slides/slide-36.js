// slide-36.js - Port vs Railway: Investment priority judgment
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 36,
  title: '港口 vs 铁路：投资优先级判断'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("港口 vs 铁路：投资优先级判断", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Visual comparison - two large cards
  // Port card (left)
  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 4.4, h: 3.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  // Port icon area
  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 4.4, h: 0.8,
    fill: { color: theme.primary, transparency: 90 }
  });
  slide.addText("PORT", {
    x: 0.5, y: 1.15, w: 4.4, h: 0.8,
    fontSize: 28, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("港口投资优先级", {
    x: 0.7, y: 2.05, w: 4.0, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  const portPriority = [
    "航母基地建设",
    "商船队扩充",
    "海外补给点",
    "海上通道安保"
  ];

  portPriority.forEach((item, idx) => {
    const y = 2.55 + idx * 0.45;

    slide.addShape("ellipse", {
      x: 0.8, y: y + 0.08, w: 0.18, h: 0.18,
      fill: { color: theme.accent }
    });

    slide.addText(item, {
      x: 1.1, y: y, w: 3.6, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Railway card (right)
  slide.addShape("rect", {
    x: 5.1, y: 1.15, w: 4.4, h: 3.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  // Railway icon area
  slide.addShape("rect", {
    x: 5.1, y: 1.15, w: 4.4, h: 0.8,
    fill: { color: theme.secondary, transparency: 90 }
  });
  slide.addText("RAILWAY", {
    x: 5.1, y: 1.15, w: 4.4, h: 0.8,
    fontSize: 28, fontFace: "Arial",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("铁路投资优先级", {
    x: 5.3, y: 2.05, w: 4.0, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });

  const railPriority = [
    "战略铁路干线",
    "装甲部队机动道",
    "边境公路网",
    "后勤补给线"
  ];

  railPriority.forEach((item, idx) => {
    const y = 2.55 + idx * 0.45;

    slide.addShape("ellipse", {
      x: 5.4, y: y + 0.08, w: 0.18, h: 0.18,
      fill: { color: theme.accent }
    });

    slide.addText(item, {
      x: 5.7, y: y, w: 3.6, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom judgment framework
  slide.addShape("rect", {
    x: 0.5, y: 4.6, w: 9, h: 0.65,
    fill: { color: theme.accent, transparency: 88 }
  });
  slide.addText("判断框架：看10年基建规划中港口 vs 铁路预算比例，及重大项目工期优先级", {
    x: 0.7, y: 4.6, w: 8.6, h: 0.65,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("36", {
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
  pres.writeFile({ fileName: "slide-36-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
