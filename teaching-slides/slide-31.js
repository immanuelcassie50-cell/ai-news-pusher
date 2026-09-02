const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });

  slide.addText("AAR（After Action Review）复盘技术", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Four step cards in 2x2 grid
  const steps = [
    { num: "1", en: "What was the plan?", zh: "计划当初期望什么？" },
    { num: "2", en: "What actually happened?", zh: "实际发生了什么？" },
    { num: "3", en: "Why were there differences?", zh: "为什么会有差异？" },
    { num: "4", en: "What can we learn?", zh: "下次如何改进？" }
  ];

  const cardColors = [theme.accent, theme.primary, theme.secondary, "2ECC71"];

  steps.forEach((step, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.7;
    const y = 1.2 + row * 2.1;

    // Card background
    slide.addShape("rect", {
      x: x, y: y, w: 4.3, h: 1.85,
      fill: { color: theme.light },
      line: { color: cardColors[i], width: 3 }
    });

    // Left color strip
    slide.addShape("rect", {
      x: x, y: y, w: 0.12, h: 1.85,
      fill: { color: cardColors[i] }
    });

    // Step number circle
    slide.addShape("ellipse", {
      x: x + 0.35, y: y + 0.25, w: 0.7, h: 0.7,
      fill: { color: cardColors[i] }
    });
    slide.addText(step.num, {
      x: x + 0.35, y: y + 0.25, w: 0.7, h: 0.7,
      fontSize: 24, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // English question
    slide.addText(step.en, {
      x: x + 1.2, y: y + 0.2, w: 2.9, h: 0.6,
      fontSize: 14, fontFace: "Arial",
      color: theme.primary, bold: true,
      valign: "middle"
    });

    // Chinese question
    slide.addText(step.zh, {
      x: x + 0.35, y: y + 1.0, w: 3.7, h: 0.65,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });
  });

  // Bottom decorative element
  slide.addShape("ellipse", {
    x: 8.5, y: 4.8, w: 1.5, h: 1.5,
    fill: { color: theme.accent, transparency: 85 }
  });

  return slide;
}

module.exports = { createSlide };
