const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });

  slide.addText("复杂问题识别", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Spectrum bar - gradient representation
  const spectrumY = 2.4;
  const spectrumH = 0.5;

  // Simple to complex gradient segments
  const segments = [
    { x: 0.5, w: 2.0, color: "95D5B2" },
    { x: 2.5, w: 2.0, color: "74C69D" },
    { x: 4.5, w: 2.0, color: "52B788" },
    { x: 6.5, w: 2.0, color: "40916C" }
  ];

  segments.forEach((seg) => {
    slide.addShape("rect", {
      x: seg.x, y: spectrumY, w: seg.w, h: spectrumH,
      fill: { color: seg.color }
    });
  });

  // Arrow at end
  slide.addShape("ellipse", {
    x: 8.6, y: spectrumY - 0.1, w: 0.7, h: 0.7,
    fill: { color: theme.accent }
  });
  slide.addText("→", {
    x: 8.6, y: spectrumY - 0.1, w: 0.7, h: 0.7,
    fontSize: 24, fontFace: "Arial",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  // Labels under spectrum
  slide.addText("简单", {
    x: 0.5, y: 3.0, w: 2, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });
  slide.addText("复杂", {
    x: 7.5, y: 3.0, w: 2, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  // Four characteristics in cards
  const chars = [
    { icon: "🔗", title: "多因素交织", desc: "问题之间相互关联，形成复杂网络" },
    { icon: "👥", title: "利益相关方众多", desc: "多方立场不同，需求多元" },
    { icon: "🎯", title: "影响深远", desc: "决策后果跨部门、跨时段" },
    { icon: "❓", title: "不确定性高", desc: "信息不完备，结果难以预测" }
  ];

  chars.forEach((c, i) => {
    const x = 0.5 + i * 2.4;

    // Card
    slide.addShape("rect", {
      x: x, y: 3.6, w: 2.2, h: 1.7,
      fill: { color: theme.light },
      line: { color: theme.secondary, width: 1 }
    });

    // Icon
    slide.addText(c.icon, {
      x: x, y: 3.7, w: 2.2, h: 0.5,
      fontSize: 24,
      align: "center"
    });

    // Title
    slide.addText(c.title, {
      x: x + 0.1, y: 4.2, w: 2.0, h: 0.45,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    // Description
    slide.addText(c.desc, {
      x: x + 0.1, y: 4.65, w: 2.0, h: 0.55,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center"
    });
  });

  return slide;
}

module.exports = { createSlide };
