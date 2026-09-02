const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });

  slide.addText("利益相关方矩阵", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Matrix dimensions
  const matrixX = 1.2;
  const matrixY = 1.3;
  const matrixW = 4.5;
  const matrixH = 3.2;
  const cellW = matrixW / 2;
  const cellH = matrixH / 2;

  // Quadrant colors
  const quadrants = [
    { x: matrixX, y: matrixY, color: "FFF3CD", label: "观察", action: "保持信息畅通" },
    { x: matrixX + cellW, y: matrixY, color: "FFE5E5", label: "重点管理", action: "主动争取支持" },
    { x: matrixX, y: matrixY + cellH, color: "E8F5E9", label: "保持满意", action: "满足基本需求" },
    { x: matrixX + cellW, y: matrixY + cellH, color: "E3F2FD", label: "主动沟通", action: "定期深度沟通" }
  ];

  // Draw quadrants
  quadrants.forEach((q, i) => {
    slide.addShape("rect", {
      x: q.x, y: q.y, w: cellW, h: cellH,
      fill: { color: q.color },
      line: { color: "ffffff", width: 3 }
    });

    // Quadrant label
    slide.addText(q.label, {
      x: q.x, y: q.y + cellH * 0.25, w: cellW, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    // Action text
    slide.addText(q.action, {
      x: q.x, y: q.y + cellH * 0.55, w: cellW, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center"
    });
  });

  // Axis labels
  // Y-axis (Attention)
  slide.addText("关注度", {
    x: 0.2, y: matrixY + cellH - 0.2, w: 0.9, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", rotate: 270
  });
  slide.addText("高", {
    x: 0.3, y: matrixY + 0.1, w: 0.5, h: 0.4,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });
  slide.addText("低", {
    x: 0.3, y: matrixY + matrixH - 0.4, w: 0.5, h: 0.4,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  // X-axis (Influence)
  slide.addText("影响力", {
    x: matrixX + cellW - 0.4, y: matrixY + matrixH + 0.3, w: 0.9, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center"
  });
  slide.addText("低", {
    x: matrixX + 0.1, y: matrixY + matrixH + 0.3, w: 0.5, h: 0.4,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });
  slide.addText("高", {
    x: matrixX + matrixW - 0.4, y: matrixY + matrixH + 0.3, w: 0.5, h: 0.4,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  // Example cards on the right
  slide.addShape("rect", {
    x: 6.0, y: 1.3, w: 3.6, h: 3.5,
    fill: { color: theme.light }
  });

  slide.addText("示例说明", {
    x: 6.2, y: 1.45, w: 3.2, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const examples = [
    { quad: "重点管理", example: "项目发起人、高层决策者", color: "FFE5E5" },
    { quad: "主动沟通", example: "核心团队成员、关键用户", color: "E3F2FD" },
    { quad: "保持满意", example: "普通员工、一般用户", color: "E8F5E9" },
    { quad: "观察", example: "外部审计、监管部门", color: "FFF3CD" }
  ];

  examples.forEach((ex, i) => {
    const y = 2.0 + i * 0.75;

    // Color indicator
    slide.addShape("rect", {
      x: 6.2, y: y, w: 0.25, h: 0.55,
      fill: { color: ex.color },
      line: { color: theme.secondary, width: 1 }
    });

    slide.addText(ex.quad, {
      x: 6.55, y: y, w: 1.2, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    slide.addText(ex.example, {
      x: 6.55, y: y + 0.28, w: 2.9, h: 0.28,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  return slide;
}

module.exports = { createSlide };
