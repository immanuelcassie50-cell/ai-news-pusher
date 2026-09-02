const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("催化师话术手册：收尾", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("好的收尾让行动落地", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Closing scripts - vertical checklist style
  const closings = [
    { num: "1", title: "共识确认", script: "\"让我们确认一下今天达成的共识...\"", check: "明确记录了哪些结论" },
    { num: "2", title: "行动明确", script: "\"接下来我们需要做的是...\"", check: "每项行动可追踪可衡量" },
    { num: "3", title: "责任分工", script: "\"这些行动的负责人分别是...\"", check: "每人认领具体任务" },
    { num: "4", title: "时间节点", script: "\"请在...前完成...\"", check: "明确截止日期" },
    { num: "5", title: "感谢语", script: "\"感谢大家的积极参与\"", check: "正向结束，留下好印象" }
  ];

  // Main card
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 1.5, w: 5.8, h: 3.7,
    fill: { color: "ffffff" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });

  // Left accent
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 1.5, w: 0.1, h: 3.7,
    fill: { color: theme.accent }
  });

  closings.forEach((c, i) => {
    const y = 1.65 + i * 0.7;

    // Number
    slide.addShape(pres.ShapeType.rect, {
      x: 0.65, y: y + 0.08, w: 0.35, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText(c.num, {
      x: 0.65, y: y + 0.08, w: 0.35, h: 0.35,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(c.title, {
      x: 1.15, y: y + 0.05, w: 1.2, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Script
    slide.addText(c.script, {
      x: 1.15, y: y + 0.38, w: 4.8, h: 0.28,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Checklist panel on the right
  slide.addShape(pres.ShapeType.rect, {
    x: 6.4, y: 1.5, w: 3.2, h: 3.7,
    fill: { color: theme.light }
  });

  slide.addText("收尾清单", {
    x: 6.6, y: 1.6, w: 2.8, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const checks = [
    "共识已记录",
    "行动项明确",
    "责任人确认",
    "时间节点清晰",
    "感谢表达真诚"
  ];

  checks.forEach((check, i) => {
    const y = 2.1 + i * 0.55;

    // Checkbox
    slide.addShape(pres.ShapeType.rect, {
      x: 6.7, y: y, w: 0.28, h: 0.28,
      fill: { color: "ffffff" },
      line: { color: theme.accent, width: 1.5 }
    });

    // Checkmark
    slide.addText("✓", {
      x: 6.7, y: y - 0.02, w: 0.28, h: 0.28,
      fontSize: 12, fontFace: "Arial",
      color: theme.accent, bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(check, {
      x: 7.1, y: y, w: 2.3, h: 0.28,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });
  });

  // Bottom tip
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 5.35, w: 9.2, h: 0.55,
    fill: { color: theme.primary }
  });
  slide.addText("收尾心法：收尾时不要匆忙，给足时间让参与者消化；用积极正向的语言结束，避免虎头蛇尾", {
    x: 0.6, y: 5.35, w: 8.8, h: 0.55,
    fontFace: "Microsoft YaHei",
    color: "ffffff",
    valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
