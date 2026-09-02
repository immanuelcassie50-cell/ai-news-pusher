// slide-78.js - 声誉机制的作用
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 78,
  title: '声誉机制的作用'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("声誉机制的作用", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("声誉如何约束背叛行为", {
    x: 0.5, y: 1.1, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Icon + text rows
  const rows = [
    { icon: "!", title: "信息共享", desc: "各方之间的信息流通，使背叛行为曝光" },
    { icon: "!", title: "黑名单制度", desc: "记录背叛者，形成行业信用档案" },
    { icon: "!", title: "公开记录", desc: "可查询的历史记录，增加违约成本" }
  ];

  rows.forEach((row, idx) => {
    const y = 1.7 + idx * 1.1;

    // Card background
    slide.addShape("rect", {
      x: 0.5, y: y, w: 9, h: 0.95,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Left accent bar
    slide.addShape("rect", {
      x: 0.5, y: y, w: 0.08, h: 0.95,
      fill: { color: theme.accent }
    });

    // Icon circle
    slide.addShape("ellipse", {
      x: 0.8, y: y + 0.22, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(row.icon, {
      x: 0.8, y: y + 0.22, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(row.title, {
      x: 1.5, y: y + 0.15, w: 7.8, h: 0.4,
      fontSize: 17, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: false,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(row.desc, {
      x: 1.5, y: y + 0.52, w: 7.8, h: 0.35,
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
  slide.addText("78", {
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
  pres.writeFile({ fileName: "slide-78-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
