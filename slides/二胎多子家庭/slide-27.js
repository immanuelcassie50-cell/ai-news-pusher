// slide-27.js - 年龄差与同胞关系
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 27,
  title: '年龄差距的影响'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("年龄差距的影响", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Four types of age gaps
  const ageGaps = [
    { range: "1-2岁", type: "玩伴型", desc: "冲突多，但互动频繁", color: theme.accent },
    { range: "3-4岁", type: "指导型", desc: "关系好，老大能帮助老小", color: theme.primary },
    { range: "5岁以上", type: "照顾型", desc: "可能有代沟，但老大能承担部分照顾责任", color: theme.secondary },
    { range: "同年龄组", type: "竞争型", desc: "冲突激烈，同龄段资源竞争明显", color: theme.accent }
  ];

  const cardWidth = 2.15;
  const cardHeight = 3.2;
  const startX = 0.5;
  const gap = 0.3;

  ageGaps.forEach((gapItem, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.3, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Top accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.3, w: cardWidth, h: 0.08,
      fill: { color: gapItem.color }
    });

    // Age range
    slide.addText(gapItem.range, {
      x: x, y: 1.55, w: cardWidth, h: 0.5,
      fontSize: 22, fontFace: "Arial",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Type badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x + 0.4, y: 2.15, w: cardWidth - 0.8, h: 0.5,
      fill: { color: gapItem.color },
      rectRadius: 0.08
    });
    slide.addText(gapItem.type, {
      x: x + 0.4, y: 2.15, w: cardWidth - 0.8, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(gapItem.desc, {
      x: x + 0.15, y: 2.85, w: cardWidth - 0.3, h: 1.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "top"
    });
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
  pres.writeFile({ fileName: "slide-27-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
