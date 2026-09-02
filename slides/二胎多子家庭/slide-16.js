// slide-16.js - From Iceberg to Action (从冰山到行动)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 16,
  title: '从冰山到行动'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("从冰山到行动", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // 3 steps
  const steps = [
    {
      step: "1",
      title: "看到行为",
      action: "不批评，不比较",
      detail: "先暂停，不急着评判对错"
    },
    {
      step: "2",
      title: "回应情绪",
      action: '"我能感觉到你很委屈"',
      detail: "说出孩子的感受，让他被理解"
    },
    {
      step: "3",
      title: "满足需求",
      action: '找到适合这个孩子的"被看见"方式',
      detail: "每个孩子需要的方式可能不同"
    }
  ];

  const cardWidth = 2.9;
  const cardHeight = 3.4;
  const startX = 0.5;
  const cardY = 1.2;
  const gap = 0.35;

  steps.forEach((item, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: cardY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Step number circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + (cardWidth - 0.7) / 2, y: cardY + 0.3, w: 0.7, h: 0.7,
      fill: { color: theme.accent }
    });
    slide.addText(item.step, {
      x: x + (cardWidth - 0.7) / 2, y: cardY + 0.3, w: 0.7, h: 0.7,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(item.title, {
      x: x + 0.2, y: cardY + 1.2, w: cardWidth - 0.4, h: 0.6,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Action (highlighted)
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x + 0.15, y: cardY + 1.9, w: cardWidth - 0.3, h: 0.65,
      fill: { color: theme.primary, transparency: 90 },
      rectRadius: 0.08
    });
    slide.addText(item.action, {
      x: x + 0.15, y: cardY + 1.9, w: cardWidth - 0.3, h: 0.65,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Detail
    slide.addText(item.detail, {
      x: x + 0.15, y: cardY + 2.7, w: cardWidth - 0.3, h: 0.6,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "center", valign: "top"
    });

    // Arrow between cards
    if (idx < 2) {
      slide.addText("→", {
        x: x + cardWidth + 0.05, y: cardY + 1.4, w: 0.25, h: 0.5,
        fontSize: 24, fontFace: "Arial",
        color: theme.accent, bold: true,
        align: "center", valign: "middle"
      });
    }
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
  pres.writeFile({ fileName: "slide-16-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
