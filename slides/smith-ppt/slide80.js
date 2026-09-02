const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.accent }
  });
  slide.addText("练习五", {
    x: 0.5, y: 0.2, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Main title
  slide.addText("核心概念解释", {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Georgia",
    color: theme.primary, bold: true
  });

  // Instructions
  slide.addText("请用自己的话解释以下概念（每题不少于50字）", {
    x: 0.5, y: 1.75, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Concepts
  const concepts = [
    {
      term: "看不见的手",
      hint: "提示：斯密用这个比喻说明什么经济现象？"
    },
    {
      term: "劳动分工",
      hint: "提示：分工如何促进财富增长？"
    },
    {
      term: "交换倾向",
      hint: "提示：人类为什么愿意交换而非自给自足？"
    }
  ];

  concepts.forEach((c, i) => {
    const y = 2.2 + i * 1.1;
    // Term box
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 2.5, h: 0.9,
      fill: { color: theme.primary }
    });
    slide.addText(c.term, {
      x: 0.5, y: y, w: 2.5, h: 0.9,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", align: "center", valign: "middle"
    });
    // Answer area
    slide.addShape(pres.ShapeType.rect, {
      x: 3.1, y: y, w: 6.4, h: 0.9,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 }
    });
    // Hint text
    slide.addText(c.hint, {
      x: 3.3, y: y + 0.3, w: 6, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.light
    });
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("80", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
