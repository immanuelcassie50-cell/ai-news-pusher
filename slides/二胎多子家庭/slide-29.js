// slide-29.js - 发展需求图谱
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 29,
  title: '各年龄段的核心需求'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("各年龄段的核心需求", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Four age groups as timeline
  const ageGroups = [
    { age: "0-3岁", need: "安全感建立", desc: "基础依附", color: theme.primary },
    { age: "3-6岁", need: "自主性发展", desc: "主动探索", color: theme.secondary },
    { age: "6-12岁", need: "勤奋感培养", desc: "能力确认", color: theme.accent },
    { age: "12-18岁", need: "身份认同", desc: "独立性追求", color: theme.primary }
  ];

  const cardWidth = 2.15;
  const cardHeight = 3.3;
  const startX = 0.5;
  const gap = 0.35;

  ageGroups.forEach((group, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.2, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Top colored section
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.2, w: cardWidth, h: 1.3,
      fill: { color: group.color }
    });

    // Age range
    slide.addText(group.age, {
      x: x, y: 1.35, w: cardWidth, h: 0.6,
      fontSize: 22, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Need (main)
    slide.addText(group.need, {
      x: x, y: 2.7, w: cardWidth, h: 0.6,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Divider
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.4, y: 3.35, w: cardWidth - 0.8, h: 0.02,
      fill: { color: theme.light }
    });

    // Description
    slide.addText(group.desc, {
      x: x, y: 3.5, w: cardWidth, h: 0.8,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Connecting line at bottom
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.2, y: 4.7, w: 7.6, h: 0.03,
    fill: { color: theme.light }
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
  pres.writeFile({ fileName: "slide-29-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
