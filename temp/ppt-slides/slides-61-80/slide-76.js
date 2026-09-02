// slide-76.js - 产出总结与确认
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 76,
  title: '产出总结与确认'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("产出总结与确认", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Process flow
  const steps = [
    { num: "1", title: "结构化回顾", desc: "按产出清单逐项回顾" },
    { num: "2", title: "要点复述", desc: "引导者复述关键决策" },
    { num: "3", title: "确认表态", desc: "全体参与者明确认可" },
    { num: "4", title: "记录归档", desc: "签字或电子确认" }
  ];

  // Flow arrow
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 2.05, w: 8.4, h: 0.03,
    fill: { color: theme.light }
  });

  steps.forEach((step, i) => {
    const x = 0.5 + i * 2.35;

    // Circle node
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.85, y: 1.8, w: 0.55, h: 0.55,
      fill: { color: theme.accent }
    });
    slide.addText(step.num, {
      x: x + 0.85, y: 1.8, w: 0.55, h: 0.55,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Arrow
    if (i < 3) {
      slide.addText("→", {
        x: x + 1.9, y: 1.85, w: 0.4, h: 0.45,
        fontSize: 20, fontFace: "Arial",
        color: theme.secondary
      });
    }

    // Card below
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 2.5, w: 2.2, h: 1.3,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    slide.addText(step.title, {
      x: x + 0.15, y: 2.6, w: 1.9, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center"
    });
    slide.addText(step.desc, {
      x: x + 0.15, y: 3.0, w: 1.9, h: 0.6,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });
  });

  // Confirmation checklist
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.0, w: 9, h: 1.35,
    fill: { color: theme.light }
  });

  slide.addText("确认检查清单", {
    x: 0.7, y: 4.1, w: 2.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const checklist = [
    "产出的内容是否完整？",
    "每个要点是否都清楚无歧义？",
    "参与者的共识是否真实？",
    "后续行动是否明确到人？"
  ];

  checklist.forEach((item, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.7 + col * 4.5;
    const y = 4.55 + row * 0.35;

    slide.addText("□ " + item, {
      x: x, y: y, w: 4, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("76", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };