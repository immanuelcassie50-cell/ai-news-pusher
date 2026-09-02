// slide-95.js - Reputation as Asset
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 95,
  title: '声誉是可积累的资产'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("声誉是可积累的资产", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Left side - visual representation of reputation building
  // Stacked blocks showing accumulation
  const blockColors = [theme.accent, theme.primary, theme.secondary, theme.light];
  const blockLabels = ["信任", "信誉", "声望", "品牌"];
  const blockValues = ["+10", "+8", "+6", "+4"];

  for (let i = 0; i < 4; i++) {
    const x = 0.8 + i * 0.15;
    const y = 3.8 - i * 0.7;
    const w = 1.8 - i * 0.15;
    const h = 0.6 + i * 0.1;

    slide.addShape("roundRect", {
      x: x, y: y, w: w, h: h,
      fill: { color: blockColors[i] },
      rectRadius: 0.08
    });
    slide.addText(blockLabels[i], {
      x: x, y: y, w: w, h: h * 0.6,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: i < 2 ? "FFFFFF" : theme.primary, bold: true,
      align: "center", valign: "middle"
    });
    slide.addText(blockValues[i], {
      x: x, y: y + h * 0.5, w: w, h: h * 0.4,
      fontSize: 11, fontFace: "Arial",
      color: i < 2 ? theme.light : theme.secondary, bold: false,
      align: "center", valign: "middle"
    });
  }

  // Arrow pointing up
  slide.addText("↑", {
    x: 1.5, y: 1.0, w: 1, h: 0.6,
    fontSize: 36, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("声誉积累", {
    x: 0.8, y: 1.5, w: 2.2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Right side - key points
  const points = [
    { icon: "+", text: "每次好的互动都在增加声誉资本" },
    { icon: "×", text: "每次背叛都在消耗多年积累的信任" },
    { icon: "=", text: "声誉是长期博弈中最重要的资产" }
  ];

  points.forEach((point, idx) => {
    const y = 1.3 + idx * 1.3;

    // Icon circle
    slide.addShape("ellipse", {
      x: 4.2, y: y, w: 0.5, h: 0.5,
      fill: { color: idx === 0 ? theme.accent : idx === 1 ? theme.primary : theme.secondary }
    });
    slide.addText(point.icon, {
      x: 4.2, y: y, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Text
    slide.addText(point.text, {
      x: 4.9, y: y, w: 4.5, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom insight
  slide.addShape("roundRect", {
    x: 4.2, y: 4.7, w: 5.3, h: 0.7,
    fill: { color: theme.light, transparency: 50 },
    rectRadius: 0.08
  });
  slide.addText("声誉建设是重复博弈中的核心策略", {
    x: 4.4, y: 4.7, w: 5.1, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("95", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: theme.primary, bold: true,
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
  pres.writeFile({ fileName: "slide-95-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
