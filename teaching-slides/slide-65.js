const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("练习一总结：自动贩卖机 vs 工作伙伴", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Comparison table
  const headers = ["维度", "自动贩卖机", "工作伙伴"];
  const rows = [
    ["交互方式", "单向输入-输出", "双向对话-探索"],
    ["任务类型", "边界清晰、目标明确", "模糊复杂、需要判断"],
    ["价值定位", "执行效率", "共创智慧"],
    ["适用场景", "查询、转换、生成", "分析、策划、决策"],
    ["促进师角色", "明确指令、设定边界", "引导追问、共同探索"]
  ];

  // Table header
  headers.forEach((h, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.1, w: 3.0, h: 0.5,
      fill: { color: i === 0 ? theme.primary : (i === 1 ? theme.secondary : theme.accent) }
    });
    slide.addText(h, {
      x: x, y: 1.18, w: 3.0, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });
  });

  // Table rows
  rows.forEach((row, ri) => {
    row.forEach((cell, ci) => {
      const x = 0.5 + ci * 3.1;
      const y = 1.6 + ri * 0.65;
      const bgColor = ci === 0 ? theme.light : (ri % 2 === 0 ? "ffffff" : theme.bg);

      slide.addShape(pres.ShapeType.rect, {
        x: x, y: y, w: 3.0, h: 0.6,
        fill: { color: bgColor },
        line: { color: theme.gray, width: 0.5 }
      });
      slide.addText(cell, {
        x: x + 0.1, y: y + 0.1, w: 2.8, h: 0.4,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: ci === 0 ? theme.primary : theme.dark,
        valign: "middle"
      });
    });
  });

  // Key takeaway
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.55, w: 9, h: 0.7,
    fill: { color: theme.accent, transparency: 15 }
  });
  slide.addText("关键洞察", {
    x: 0.7, y: 4.65, w: 1.5, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("不是非此即彼，而是根据任务性质灵活切换组合模式", {
    x: 2.2, y: 4.65, w: 7.1, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.dark
  });

  // Next module预告
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.35, w: 9, h: 0.35,
    fill: { color: theme.secondary }
  });
  slide.addText("下一步：模块二 — AI介入价值矩阵详解", {
    x: 0.7, y: 5.4, w: 8.6, h: 0.28,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "ffffff"
  });

  return slide;
}

module.exports = { createSlide };
