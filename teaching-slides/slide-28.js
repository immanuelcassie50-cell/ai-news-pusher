const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("提问链设计", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Question chain flow diagram
  // Step boxes
  const steps = [
    { num: "1", text: "开放式问题开启", sub: "什么/如何/为什么" },
    { num: "2", text: "层层递进深入", sub: "从现象到本质" },
    { num: "3", text: "避免诱导性提问", sub: "保持中立态度" },
    { num: "4", text: "留出思考空间", sub: "等待回应不催促" }
  ];

  const sStartX = 0.5;
  const sY = 1.2;
  const sW = 2.1;
  const sH = 1.8;
  const sGap = 0.3;

  steps.forEach((step, i) => {
    const x = sStartX + i * (sW + sGap);

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: sY, w: sW, h: sH,
      fill: { color: "ffffff" },
      line: { color: theme.light, width: 1 },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + sW / 2 - 0.35, y: sY + 0.2, w: 0.7, h: 0.7,
      fill: { color: theme.accent }
    });
    slide.addText(step.num, {
      x: x + sW / 2 - 0.35, y: sY + 0.2, w: 0.7, h: 0.7,
      fontSize: 24, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Main text
    slide.addText(step.text, {
      x: x + 0.15, y: sY + 1.0, w: sW - 0.3, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", margin: 0
    });

    // Sub text
    slide.addText(step.sub, {
      x: x + 0.15, y: sY + 1.4, w: sW - 0.3, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", margin: 0
    });

    // Arrow between cards (except last)
    if (i < 3) {
      slide.addText("→", {
        x: x + sW, y: sY + 0.6, w: sGap, h: 0.5,
        fontSize: 24, fontFace: "Arial",
        color: theme.accent, bold: true,
        align: "center", valign: "middle"
      });
    }
  });

  // Example section
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.3, w: 0.08, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("设计示例", {
    x: 0.7, y: 3.3, w: 2, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Example chain
  const examples = [
    "这个问题我们想要达成什么目标？",
    "目前的现状是什么样的？",
    "有哪些因素影响了目前的状况？",
    "还有其他的障碍吗？",
    "如果要解决这个问题，关键是什么？"
  ];

  examples.forEach((ex, i) => {
    const exY = 3.95 + i * 0.45;

    // Step indicator
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.5, y: exY, w: 0.35, h: 0.35,
      fill: { color: i === 0 ? theme.accent : theme.secondary }
    });
    slide.addText(String(i + 1), {
      x: 0.5, y: exY, w: 0.35, h: 0.35,
      fontSize: 11, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Example text
    slide.addText(ex, {
      x: 1.0, y: exY, w: 8.5, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary,
      align: "left", valign: "middle", margin: 0
    });
  });

  return slide;
}

module.exports = { createSlide };
