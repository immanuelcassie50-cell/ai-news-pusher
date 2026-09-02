// slide-82.js - Trust Breaking (信任的破坏与修复)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 82,
  title: '信任的破坏与修复'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("信任的破坏与修复", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Two columns
  // Left: Breaking trust
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.3, h: 3.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  // Red accent for breaking
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.3, h: 0.1,
    fill: { color: "c53030" }
  });

  slide.addText("信任的破坏", {
    x: 0.7, y: 1.45, w: 3.9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "c53030", bold: true,
    align: "left", valign: "middle"
  });

  const breakPoints = [
    "一次背叛可毁掉数年信任",
    "信息隐瞒一旦曝光难以挽回",
    "承诺不兑现损害可信度",
    "修复比建立信任难十倍"
  ];

  breakPoints.forEach((point, idx) => {
    const y = 1.95 + idx * 0.55;

    slide.addShape(pres.shapes.OVAL, {
      x: 0.8, y: y + 0.1, w: 0.15, h: 0.15,
      fill: { color: "c53030" }
    });

    slide.addText(point, {
      x: 1.1, y: y, w: 3.5, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Right: Repairing trust
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.2, w: 4.3, h: 3.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  // Green accent for repair
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.2, w: 4.3, h: 0.1,
    fill: { color: theme.primary }
  });

  slide.addText("信任的修复", {
    x: 5.4, y: 1.45, w: 3.9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const repairPoints = [
    "承认错误，承担责任",
    "主动采取补救行动",
    "长期一致的行为证明",
    "预防胜于治疗"
  ];

  repairPoints.forEach((point, idx) => {
    const y = 1.95 + idx * 0.55;

    slide.addShape(pres.shapes.OVAL, {
      x: 5.5, y: y + 0.1, w: 0.15, h: 0.15,
      fill: { color: theme.primary }
    });

    slide.addText(point, {
      x: 5.8, y: y, w: 3.5, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom lesson
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.4, w: 9, h: 0.8,
    fill: { color: theme.accent }
  });
  slide.addText("最好的策略是预防背叛，而不是修复信任", {
    x: 0.5, y: 4.4, w: 9, h: 0.8,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addText("82", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.secondary, bold: false,
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
  pres.writeFile({ fileName: "slide-82-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
