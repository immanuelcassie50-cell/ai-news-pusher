// slide-97.js - 公投的合法性争议
const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("公投的合法性争议", {
    x: 0.5, y: 0.2, w: 8, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("单方独立公投的国际法困境", {
    x: 0.5, y: 0.55, w: 5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, margin: 0
  });

  // Two opposing views layout
  // Left column - Against
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.1, w: 4.4, h: 4.2,
    fill: { color: theme.accent, transparency: 92 },
    line: { color: theme.accent, width: 1 }
  });

  // Left header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.1, w: 4.4, h: 0.55,
    fill: { color: theme.accent }
  });

  slide.addText("反对观点", {
    x: 0.6, y: 1.15, w: 4, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Left content
  const againstItems = [
    "违反领土完整原则（联合国宪章第2条第4款）",
    "单方面改变边界，破坏国际秩序",
    "可能引发连锁反应，导致更多分裂",
    "缺乏国际监督，合法性存疑",
    "母国通常不承认公投结果"
  ];

  againstItems.forEach((item, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: 1.8 + i * 0.65, w: 0.08, h: 0.45,
      fill: { color: theme.accent }
    });
    slide.addText(item, {
      x: 0.8, y: 1.8 + i * 0.65, w: 3.8, h: 0.55,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });

  // Right column - For
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.1, w: 4.4, h: 4.2,
    fill: { color: theme.primary, transparency: 92 },
    line: { color: theme.primary, width: 1 }
  });

  // Right header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.1, w: 4.4, h: 0.55,
    fill: { color: theme.primary }
  });

  slide.addText("支持观点", {
    x: 5.4, y: 1.15, w: 4, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Right content
  const forItems = [
    "民族自决权是基本人权（公民权利公约）",
    "当自治权被严重剥夺时抵抗权合法",
    "程序民主本身就是合法性来源",
    "国际法中存在先例（厄立特里亚）",
    "历史正义可以超越法律形式主义"
  ];

  forItems.forEach((item, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.4, y: 1.8 + i * 0.65, w: 0.08, h: 0.45,
      fill: { color: theme.primary }
    });
    slide.addText(item, {
      x: 5.6, y: 1.8 + i * 0.65, w: 3.8, h: 0.55,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });

  // Bottom balance indicator
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 5.0, w: 3, h: 0.08,
    fill: { color: theme.secondary }
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 4.75, y: 4.85, w: 0.5, h: 0.5,
    fill: { color: theme.secondary }
  });

  slide.addText("?", {
    x: 4.75, y: 4.88, w: 0.5, h: 0.45,
    fontSize: 18, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("97", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "c9ada7",
    bg: "edf2f4"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: './slide-97-preview.pptx' });
}

module.exports = { createSlide };
