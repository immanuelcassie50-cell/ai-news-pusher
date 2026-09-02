// slide-75.js - 方向三：建立识别机制
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 75,
  title: '方向三：建立识别机制'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("方向三：建立识别机制", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Main content box
  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 9, h: 1.0,
    fill: { color: theme.light, transparency: 50 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 0.08, h: 1.0,
    fill: { color: theme.accent }
  });
  slide.addText("监视是惩罚背叛的前提", {
    x: 0.75, y: 1.25, w: 8.5, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "left", valign: "middle"
  });
  slide.addText("你无法惩罚背叛，如果你根本发现不了背叛。", {
    x: 0.75, y: 1.7, w: 8.5, h: 0.35,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Key points
  const points = [
    { title: "信息不对称", desc: "背叛往往发生在信息盲区" },
    { title: "监测成本", desc: "建立识别机制需要投入资源" },
    { title: "证据链", desc: "要形成可追溯的记录" }
  ];

  points.forEach((point, idx) => {
    const y = 2.4 + idx * 0.8;

    // Icon circle
    slide.addShape("ellipse", {
      x: 0.7, y: y + 0.1, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText((idx + 1).toString(), {
      x: 0.7, y: y + 0.1, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(point.title, {
      x: 1.3, y: y, w: 3, h: 0.35,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: false,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(point.desc, {
      x: 1.3, y: y + 0.35, w: 7.5, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.4,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("75", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.4,
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
    primary: "1a365d",
    secondary: "2c5282",
    accent: "d69e2e",
    light: "bee3f8",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-75-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
