// slide-34.js - Military spending detail: Navy vs Army ratio
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 34,
  title: '海军vs陆军：军费比例详解'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("海军 vs 陆军：军费比例详解", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Navy vs Army comparison - two columns
  // Navy column
  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 4.4, h: 2.9,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 4.4, h: 0.55,
    fill: { color: theme.primary }
  });
  slide.addText("海军主导型", {
    x: 0.5, y: 1.15, w: 4.4, h: 0.55,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Navy indicator bar
  slide.addShape("rect", {
    x: 0.7, y: 1.85, w: 3.2, h: 0.35,
    fill: { color: theme.primary, transparency: 70 }
  });
  slide.addShape("rect", {
    x: 0.7, y: 1.85, w: 2.2, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("海军 45%", {
    x: 0.7, y: 1.85, w: 2.2, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const navyFeatures = [
    "航母、驱逐舰、潜艇为核心",
    "投射力量到远海",
    "控制海上咽喉要道",
    "维护海外利益"
  ];

  navyFeatures.forEach((feat, idx) => {
    const y = 2.35 + idx * 0.4;

    slide.addShape("ellipse", {
      x: 0.7, y: y + 0.08, w: 0.15, h: 0.15,
      fill: { color: theme.primary }
    });

    slide.addText(feat, {
      x: 0.95, y: y, w: 3.7, h: 0.38,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Army column
  slide.addShape("rect", {
    x: 5.1, y: 1.15, w: 4.4, h: 2.9,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 5.1, y: 1.15, w: 4.4, h: 0.55,
    fill: { color: theme.secondary }
  });
  slide.addText("陆军主导型", {
    x: 5.1, y: 1.15, w: 4.4, h: 0.55,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Army indicator bar
  slide.addShape("rect", {
    x: 5.3, y: 1.85, w: 3.2, h: 0.35,
    fill: { color: theme.secondary, transparency: 70 }
  });
  slide.addShape("rect", {
    x: 5.3, y: 1.85, w: 2.6, h: 0.35,
    fill: { color: theme.secondary }
  });
  slide.addText("陆军 65%", {
    x: 5.3, y: 1.85, w: 2.6, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const armyFeatures = [
    "坦克、装甲车、火炮为核心",
    "保卫领土边界",
    "应对地面冲突",
    "维护内陆安全"
  ];

  armyFeatures.forEach((feat, idx) => {
    const y = 2.35 + idx * 0.4;

    slide.addShape("ellipse", {
      x: 5.3, y: y + 0.08, w: 0.15, h: 0.15,
      fill: { color: theme.secondary }
    });

    slide.addText(feat, {
      x: 5.55, y: y, w: 3.7, h: 0.38,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom: Country examples table
  slide.addShape("rect", {
    x: 0.5, y: 4.2, w: 9, h: 0.9,
    fill: { color: theme.light }
  });

  slide.addText("典型国家", {
    x: 0.7, y: 4.25, w: 1.5, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("美国（海权型）：海军+海军陆战队占比约45%", {
    x: 2.2, y: 4.25, w: 7, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  slide.addText("中俄（混合型）：陆军仍占主导，但海军现代化加速", {
    x: 2.2, y: 4.65, w: 7, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("34", {
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
  pres.writeFile({ fileName: "slide-34-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
