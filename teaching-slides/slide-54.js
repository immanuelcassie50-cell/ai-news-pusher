const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("认证评估观摩", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Observation points
  slide.addText("观摩要点", {
    x: 0.5, y: 1.0, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const observations = [
    { num: "1", title: "观察催化师的表现", icon: "👁" },
    { num: "2", title: "记录观察到的优点", icon: "✓" },
    { num: "3", title: "记录可以改进的地方", icon: "✎" },
    { num: "4", title: "给出建设性反馈", icon: "💬" }
  ];

  observations.forEach((o, i) => {
    const x = 0.5 + (i % 2) * 4.6;
    const y = 1.5 + Math.floor(i / 2) * 1.1;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.4, h: 0.95,
      fill: { color: theme.light }
    });

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.15, y: y + 0.22, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(o.num, {
      x: x + 0.15, y: y + 0.22, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(o.title, {
      x: x + 0.8, y: y + 0.22, w: 3.4, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });
  });

  // Observation record template
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.75, w: 9, h: 1.9,
    fill: { color: "ffffff" },
    line: { color: theme.secondary, width: 1 }
  });

  slide.addText("观摩记录表", {
    x: 0.7, y: 3.85, w: 2, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // Table header
  const tableY = 4.25;
  slide.addShape(pres.ShapeType.rect, {
    x: 0.7, y: tableY, w: 8.6, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("维度", { x: 0.7, y: tableY, w: 1.5, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: "ffffff", align: "center", valign: "middle" });
  slide.addText("观察要点", { x: 2.2, y: tableY, w: 3.5, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: "ffffff", align: "center", valign: "middle" });
  slide.addText("评分(1-5)", { x: 5.7, y: tableY, w: 1.5, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: "ffffff", align: "center", valign: "middle" });
  slide.addText("备注", { x: 7.2, y: tableY, w: 2.1, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: "ffffff", align: "center", valign: "middle" });

  // Table rows
  const rows = ["专业知识", "工具运用", "提问技术", "过程管理", "中立立场", "综合表现"];
  rows.forEach((row, i) => {
    const rowY = tableY + 0.4 + i * 0.18;
    const bgColor = i % 2 === 0 ? theme.light : "ffffff";
    slide.addShape(pres.ShapeType.rect, {
      x: 0.7, y: rowY, w: 8.6, h: 0.18,
      fill: { color: bgColor }
    });
    slide.addText(row, { x: 0.7, y: rowY, w: 1.5, h: 0.18, fontSize: 9, fontFace: "Microsoft YaHei", color: theme.primary, align: "center", valign: "middle" });
    slide.addText("", { x: 2.2, y: rowY, w: 3.5, h: 0.18, fontSize: 9, fontFace: "Microsoft YaHei", color: theme.primary, align: "center", valign: "middle" });
    slide.addText("", { x: 5.7, y: rowY, w: 1.5, h: 0.18, fontSize: 9, fontFace: "Microsoft YaHei", color: theme.primary, align: "center", valign: "middle" });
    slide.addText("", { x: 7.2, y: rowY, w: 2.1, h: 0.18, fontSize: 9, fontFace: "Microsoft YaHei", color: theme.primary, align: "center", valign: "middle" });
  });

  return slide;
}

module.exports = { createSlide };
