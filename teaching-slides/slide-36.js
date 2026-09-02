const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });

  slide.addText("利益相关方分析", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Four-step flow
  const steps = [
    { num: "1", title: "识别", desc: "谁是利益相关方？", detail: "列出所有可能受影响或能影响项目的人/组织" },
    { num: "2", title: "评估", desc: "他们的立场是什么？", detail: "了解各方的利益、需求和期望" },
    { num: "3", title: "分析", desc: "如何影响/被影响？", detail: "评估影响力大小和态度倾向" },
    { num: "4", title: "策略", desc: "如何与他们沟通？", detail: "制定差异化的沟通和干预策略" }
  ];

  const stepColors = [theme.accent, theme.primary, theme.secondary, "2ECC71"];

  steps.forEach((step, i) => {
    const x = 0.5 + i * 2.4;

    // Step card background
    slide.addShape("rect", {
      x: x, y: 1.2, w: 2.2, h: 3.8,
      fill: { color: theme.light }
    });

    // Top colored section
    slide.addShape("rect", {
      x: x, y: 1.2, w: 2.2, h: 1.0,
      fill: { color: stepColors[i] }
    });

    // Step number
    slide.addText(step.num, {
      x: x, y: 1.25, w: 2.2, h: 0.5,
      fontSize: 28, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center"
    });

    // Step title
    slide.addText(step.title, {
      x: x, y: 1.75, w: 2.2, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center"
    });

    // Question
    slide.addText(step.desc, {
      x: x + 0.15, y: 2.4, w: 1.9, h: 0.7,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    // Detail description
    slide.addText(step.detail, {
      x: x + 0.15, y: 3.2, w: 1.9, h: 1.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "top"
    });

    // Arrow connector (except last)
    if (i < 3) {
      slide.addShape("ellipse", {
        x: x + 2.15, y: 2.8, w: 0.35, h: 0.35,
        fill: { color: theme.secondary }
      });
      slide.addText("→", {
        x: x + 2.15, y: 2.8, w: 0.35, h: 0.35,
        fontSize: 14, fontFace: "Arial",
        color: "ffffff", bold: true,
        align: "center", valign: "middle"
      });
    }
  });

  // Bottom note
  slide.addText("💡 提示：利益相关方分析应贯穿项目全程，定期更新评估", {
    x: 0.5, y: 5.15, w: 9, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  return slide;
}

module.exports = { createSlide };
