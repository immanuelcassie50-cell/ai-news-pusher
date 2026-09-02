const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("认证评分维度", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Table data
  const tableData = [
    [
      { text: "维度", options: { fill: { color: theme.primary }, color: "ffffff", bold: true, align: "center" } },
      { text: "内容", options: { fill: { color: theme.primary }, color: "ffffff", bold: true, align: "center" } },
      { text: "权重", options: { fill: { color: theme.primary }, color: "ffffff", bold: true, align: "center" } }
    ],
    [
      { text: "专业知识", options: { fill: { color: theme.light }, color: theme.primary, bold: true } },
      { text: "行动学习理论理解", options: { fill: { color: theme.light }, color: theme.primary } },
      { text: "15%", options: { fill: { color: theme.light }, color: theme.accent, bold: true, align: "center" } }
    ],
    [
      { text: "工具运用", options: { fill: { color: "ffffff" }, color: theme.primary, bold: true } },
      { text: "静默书写/ORID/六帽等", options: { fill: { color: "ffffff" }, color: theme.primary } },
      { text: "20%", options: { fill: { color: "ffffff" }, color: theme.accent, bold: true, align: "center" } }
    ],
    [
      { text: "提问技术", options: { fill: { color: theme.light }, color: theme.primary, bold: true } },
      { text: "追问层次和方式", options: { fill: { color: theme.light }, color: theme.primary } },
      { text: "15%", options: { fill: { color: theme.light }, color: theme.accent, bold: true, align: "center" } }
    ],
    [
      { text: "过程管理", options: { fill: { color: "ffffff" }, color: theme.primary, bold: true } },
      { text: "时间控制/节奏把握", options: { fill: { color: "ffffff" }, color: theme.primary } },
      { text: "10%", options: { fill: { color: "ffffff" }, color: theme.accent, bold: true, align: "center" } }
    ],
    [
      { text: "中立立场", options: { fill: { color: theme.light }, color: theme.primary, bold: true } },
      { text: "不偏不倚/赋能团队", options: { fill: { color: theme.light }, color: theme.primary } },
      { text: "20%", options: { fill: { color: theme.light }, color: theme.accent, bold: true, align: "center" } }
    ],
    [
      { text: "综合表现", options: { fill: { color: "ffffff" }, color: theme.primary, bold: true } },
      { text: "整体催化能力", options: { fill: { color: "ffffff" }, color: theme.primary } },
      { text: "20%", options: { fill: { color: "ffffff" }, color: theme.accent, bold: true, align: "center" } }
    ]
  ];

  slide.addTable(tableData, {
    x: 0.5, y: 1.0, w: 5.5,
    colW: [1.3, 2.7, 1.5],
    rowH: 0.5,
    fontFace: "Microsoft YaHei",
    fontSize: 12,
    border: { pt: 0.5, color: theme.secondary },
    valign: "middle"
  });

  // Right side - Weight visualization
  slide.addText("权重分布", {
    x: 6.3, y: 1.0, w: 3.2, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Horizontal bar chart
  const bars = [
    { label: "工具运用", value: 20, color: theme.accent },
    { label: "中立立场", value: 20, color: theme.primary },
    { label: "综合表现", value: 20, color: theme.secondary },
    { label: "专业知识", value: 15, color: theme.accent },
    { label: "提问技术", value: 15, color: theme.primary },
    { label: "过程管理", value: 10, color: theme.secondary }
  ];

  bars.forEach((b, i) => {
    const y = 1.5 + i * 0.6;

    // Label
    slide.addText(b.label, {
      x: 6.3, y: y, w: 1.3, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });

    // Bar background
    slide.addShape(pres.ShapeType.rect, {
      x: 7.6, y: y + 0.1, w: 1.8, h: 0.25,
      fill: { color: theme.light }
    });

    // Bar fill
    slide.addShape(pres.ShapeType.rect, {
      x: 7.6, y: y + 0.1, w: 1.8 * (b.value / 20), h: 0.25,
      fill: { color: b.color }
    });

    // Value
    slide.addText(b.value + "%", {
      x: 9.5, y: y, w: 0.6, h: 0.4,
      fontSize: 11, fontFace: "Arial",
      color: b.color, bold: true,
      valign: "middle"
    });
  });

  // Bottom note
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.2, w: 10, h: 0.55,
    fill: { color: theme.primary }
  });
  slide.addText("总分 = Σ(各维度得分 × 权重) ，满分100分", {
    x: 0.5, y: 5.2, w: 9, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "ffffff",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
