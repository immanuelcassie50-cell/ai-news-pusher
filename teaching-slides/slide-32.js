const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });

  slide.addText("AAR操作步骤详解", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Timeline base line
  slide.addShape("rect", {
    x: 0.8, y: 2.85, w: 8.4, h: 0.06,
    fill: { color: theme.secondary }
  });

  // Five steps on timeline
  const steps = [
    { num: "1", title: "准备", desc: "确定参与者和时间" },
    { num: "2", title: "回顾目标", desc: "最初计划是什么？" },
    { num: "3", title: "叙述事实", desc: "实际发生了什么？" },
    { num: "4", title: "分析原因", desc: "为什么会有差异？" },
    { num: "5", title: "总结经验", desc: "下次如何改进？" }
  ];

  const stepWidth = 8.4 / (steps.length - 1);

  steps.forEach((step, i) => {
    const x = 0.8 + i * stepWidth;

    // Timeline node
    slide.addShape("ellipse", {
      x: x - 0.2, y: 2.65, w: 0.5, h: 0.5,
      fill: { color: i === 4 ? theme.accent : theme.primary }
    });
    slide.addText(step.num, {
      x: x - 0.2, y: 2.65, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Vertical connector line
    if (i < 4) {
      slide.addShape("rect", {
        x: x + 0.25, y: 2.85, w: stepWidth - 0.5, h: 0.04,
        fill: { color: theme.light }
      });
    }

    // Title above
    slide.addText(step.title, {
      x: x - 0.6, y: 1.9, w: 1.3, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    // Description below
    slide.addText(step.desc, {
      x: x - 0.8, y: 3.3, w: 1.7, h: 0.7,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center"
    });
  });

  // Time recommendation box
  slide.addShape("rect", {
    x: 0.5, y: 4.3, w: 9, h: 1.0,
    fill: { color: theme.light },
    line: { color: theme.accent, width: 2 }
  });

  // Clock icon circle
  slide.addShape("ellipse", {
    x: 0.8, y: 4.5, w: 0.6, h: 0.6,
    fill: { color: theme.accent }
  });
  slide.addText("⏱", {
    x: 0.8, y: 4.5, w: 0.6, h: 0.6,
    fontSize: 20,
    align: "center", valign: "middle"
  });

  slide.addText("时间建议", {
    x: 1.6, y: 4.4, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("每个问题 5 分钟，共约 20-30 分钟完成完整复盘", {
    x: 1.6, y: 4.8, w: 7, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  return slide;
}

module.exports = { createSlide };
