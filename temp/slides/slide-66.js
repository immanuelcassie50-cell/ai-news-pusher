const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 66,
  title: '摆信息差的操作方法'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("摆信息差的操作方法", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.7,
    fontSize: 32,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true,
    margin: 0
  });

  // Title underline
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5,
    y: 0.95,
    w: 1.5,
    h: 0.04,
    fill: { color: theme.accent }
  });

  // Steps configuration
  const steps = [
    { num: "1", text: "不说「我觉得应该怎样」" },
    { num: "2", text: "把看到的信息一条一条摆在桌面上" },
    { num: "3", text: "让家长自己拼出结论" },
    { num: "4", text: "关键转折点：他自己看到了信息差，自己得出了跟我判断方向一致的结论" }
  ];

  const startX = 0.6;
  const startY = 1.5;
  const stepWidth = 2.2;
  const circleSize = 0.55;

  steps.forEach((step, index) => {
    const x = startX + index * stepWidth;

    // Step circle with rounded rect background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x,
      y: startY,
      w: circleSize,
      h: circleSize,
      fill: { color: theme.primary },
      rectRadius: 0.1
    });

    // Step number
    slide.addText(step.num, {
      x: x,
      y: startY,
      w: circleSize,
      h: circleSize,
      fontSize: 22,
      fontFace: "Arial",
      color: "FFFFFF",
      bold: true,
      align: "center",
      valign: "middle"
    });

    // Arrow between steps (except last)
    if (index < steps.length - 1) {
      const arrowX = x + circleSize + 0.15;
      const arrowY = startY + circleSize / 2;

      // Arrow line
      slide.addShape(pres.shapes.LINE, {
        x: arrowX,
        y: arrowY,
        w: stepWidth - circleSize - 0.5,
        h: 0,
        line: { color: theme.accent, width: 2 }
      });

      // Arrow head (triangle)
      slide.addText("▶", {
        x: arrowX + stepWidth - circleSize - 0.65,
        y: arrowY - 0.15,
        w: 0.3,
        h: 0.3,
        fontSize: 12,
        color: theme.accent,
        align: "center",
        valign: "middle"
      });
    }

    // Step text box with soft rounded corners
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x - 0.2,
      y: startY + 0.75,
      w: 2.1,
      h: 1.4,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.08
    });

    // Step text
    slide.addText(step.text, {
      x: x - 0.1,
      y: startY + 0.85,
      w: 1.9,
      h: 1.2,
      fontSize: 13,
      fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left",
      valign: "top"
    });
  });

  // Key insight box at bottom
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.6,
    y: 3.8,
    w: 8.8,
    h: 1.0,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });

  slide.addText("核心要点", {
    x: 0.8,
    y: 3.9,
    w: 1.2,
    h: 0.35,
    fontSize: 12,
    fontFace: "Microsoft YaHei",
    color: theme.accent,
    bold: true
  });

  slide.addText("让对方自己得出结论 = 更高接受度 + 减少阻力 + 对方有成就感", {
    x: 0.8,
    y: 4.25,
    w: 8.4,
    h: 0.45,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Page number badge (circle style at x: 0.3, y: 5.1)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3,
    y: 5.1,
    w: 0.4,
    h: 0.4,
    fill: { color: theme.accent }
  });

  slide.addText("66", {
    x: 0.3,
    y: 5.1,
    w: 0.4,
    h: 0.4,
    fontSize: 12,
    fontFace: "Arial",
    color: "FFFFFF",
    bold: true,
    align: "center",
    valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-66-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
