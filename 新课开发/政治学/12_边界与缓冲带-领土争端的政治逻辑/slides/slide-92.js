// slide-92.js - 国际法院的管辖权与局限
const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("国际法院的管辖权与局限", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText("International Court of Justice (ICJ)", {
    x: 0.5, y: 0.9, w: 5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary
  });

  // Center diagram - two overlapping circles
  // Jurisdiction circle
  slide.addShape(pres.shapes.OVAL, {
    x: 1.2, y: 1.8, w: 3.5, h: 3.0,
    fill: { color: theme.primary, transparency: 85 },
    line: { color: theme.primary, width: 2 }
  });

  // Limitations circle
  slide.addShape(pres.shapes.OVAL, {
    x: 2.5, y: 2.0, w: 3.5, h: 3.0,
    fill: { color: theme.accent, transparency: 85 },
    line: { color: theme.accent, width: 2 }
  });

  // Center label - Venn intersection
  slide.addText("自愿原则", {
    x: 3.3, y: 3.1, w: 1.2, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  // Left label
  slide.addText("管辖权", {
    x: 1.3, y: 1.6, w: 1.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Right label
  slide.addText("局限性", {
    x: 4.8, y: 1.8, w: 1.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // Right content panel
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.3, y: 1.4, w: 3.4, h: 3.8,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 0.5 }
  });

  // Panel header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.3, y: 1.4, w: 3.4, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("关键要点", {
    x: 6.5, y: 1.45, w: 3, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Content items
  const items = [
    { label: "管辖权来源", text: "条约规定 / 自愿接受" },
    { label: "诉讼资格", text: "仅限国家主体" },
    { label: "判决效力", text: "具法律约束力" },
    { label: "执行机制", text: "依赖安理会" },
    { label: "最大局限", text: "无强制管辖权" }
  ];

  items.forEach((item, i) => {
    slide.addText(item.label, {
      x: 6.5, y: 2.0 + i * 0.55, w: 1.5, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });
    slide.addText(item.text, {
      x: 7.9, y: 2.0 + i * 0.55, w: 1.6, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });

  // Bottom diagram labels
  slide.addText("同意 → 管辖 → 判决 → 执行", {
    x: 1.0, y: 4.9, w: 5, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("92", {
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
  pres.writeFile({ fileName: './slide-92-preview.pptx' });
}

module.exports = { createSlide };
