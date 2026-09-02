// slide-61.js - 常见场景方案第4页：比较成绩
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 61,
  title: '场景四：比较成绩'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("场景四：比较成绩", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Scenario description card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 1.1,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 0.08, h: 1.1,
    fill: { color: theme.accent }
  });
  slide.addText("场景描述", {
    x: 0.8, y: 1.2, w: 2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });
  slide.addText('姐姐考了95分，父母问弟弟："你看看姐姐考了多少分，你呢？"', {
    x: 0.8, y: 1.55, w: 8.5, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left", valign: "middle"
  });

  // STEA solution section
  slide.addText("STEA解决方案", {
    x: 0.5, y: 2.4, w: 3, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });

  // STEA steps
  const steaSteps = [
    { letter: "S", title: "停止", desc: "暂停比较性语言，不要急于评判" },
    { letter: "T", title: "同理", desc: "理解弟弟听到这话的感受" },
    { letter: "E", title: "探索", desc: "询问弟弟对这次成绩的想法" },
    { letter: "A", title: "行动", desc: "一起制定下次复习计划" }
  ];

  const stepWidth = 2.1;
  const stepStartX = 0.5;
  const stepY = 2.9;
  const stepGap = 0.3;

  steaSteps.forEach((step, idx) => {
    const x = stepStartX + idx * (stepWidth + stepGap);

    // Step card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: stepY, w: stepWidth, h: 2.3,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Step letter circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.7, y: stepY + 0.2, w: 0.7, h: 0.7,
      fill: { color: theme.primary }
    });
    slide.addText(step.letter, {
      x: x + 0.7, y: stepY + 0.2, w: 0.7, h: 0.7,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Step title
    slide.addText(step.title, {
      x: x + 0.15, y: stepY + 1.0, w: stepWidth - 0.3, h: 0.45,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Step description
    slide.addText(step.desc, {
      x: x + 0.15, y: stepY + 1.45, w: stepWidth - 0.3, h: 0.7,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
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
  pres.writeFile({ fileName: "slide-61-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
