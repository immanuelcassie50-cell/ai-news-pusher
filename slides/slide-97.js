// slide-97.js - Short vs Long Term Trade-off
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 97,
  title: '短期vs长期收益权衡'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("短期vs长期收益权衡", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Left column - Short term (bad)
  slide.addShape("roundRect", {
    x: 0.5, y: 1.2, w: 4.3, h: 3.8,
    fill: { color: theme.primary, transparency: 90 },
    rectRadius: 0.1
  });

  slide.addText("短期思维", {
    x: 0.5, y: 1.3, w: 4.3, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("背叛获利", {
    x: 0.7, y: 2.0, w: 3.9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Downward arrow
  slide.addText("↓", {
    x: 2.2, y: 2.4, w: 0.6, h: 0.5,
    fontSize: 28, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("声誉损失", {
    x: 0.7, y: 2.9, w: 3.9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("未来机会减少", {
    x: 0.7, y: 3.3, w: 3.9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  slide.addText("= 赢了战役，输了战争", {
    x: 0.7, y: 4.2, w: 3.9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Right column - Long term (good)
  slide.addShape("roundRect", {
    x: 5.2, y: 1.2, w: 4.3, h: 3.8,
    fill: { color: theme.accent, transparency: 85 },
    rectRadius: 0.1
  });

  slide.addText("长期思维", {
    x: 5.2, y: 1.3, w: 4.3, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("保持合作", {
    x: 5.4, y: 2.0, w: 3.9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Upward arrow
  slide.addText("↑", {
    x: 6.9, y: 2.4, w: 0.6, h: 0.5,
    fontSize: 28, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("声誉积累", {
    x: 5.4, y: 2.9, w: 3.9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("更多合作机会", {
    x: 5.4, y: 3.3, w: 3.9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  slide.addText("= 持续复利的回报", {
    x: 5.4, y: 4.2, w: 3.9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // VS divider
  slide.addShape("ellipse", {
    x: 4.55, y: 2.7, w: 0.9, h: 0.9,
    fill: { color: theme.bg },
    line: { color: theme.secondary, width: 2 }
  });
  slide.addText("VS", {
    x: 4.55, y: 2.7, w: 0.9, h: 0.9,
    fontSize: 16, fontFace: "Arial",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("97", {
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
  pres.writeFile({ fileName: "slide-97-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
