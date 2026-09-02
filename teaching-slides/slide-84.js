const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("模块三扩展：节奏异常处理指南", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Common issues
  const issues = [
    {
      issue: "讨论过于发散",
      symptom: "偏离主题、议程超时",
      solution: "使用Parking Lot记录，拉回主题",
      icon: "🌊"
    },
    {
      issue: "讨论停滞不前",
      symptom: "反复讨论同一问题",
      solution: "重新明确目标，换角度切入",
      icon: "⏸"
    },
    {
      issue: "节奏过快",
      symptom: "决策过于仓促",
      solution: "增加冷静期，分步决策",
      icon: "⚡"
    },
    {
      issue: "节奏过慢",
      symptom: "效率低下、拖延",
      solution: "设定明确deadline，减少迭代",
      icon: "🐢"
    }
  ];

  issues.forEach((item, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.7;
    const y = 1.1 + row * 2.1;

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.5, h: 1.9,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Icon
    slide.addText(item.icon, {
      x: x + 0.2, y: y + 0.2, w: 0.6, h: 0.6,
      fontSize: 28,
      align: "center", valign: "middle"
    });

    // Issue title
    slide.addText(item.issue, {
      x: x + 0.9, y: y + 0.25, w: 3.4, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Symptom
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.2, y: y + 0.85, w: 4.1, h: 0.4,
      fill: { color: theme.warm, transparency: 15 }
    });
    slide.addText("表现：" + item.symptom, {
      x: x + 0.3, y: y + 0.9, w: 3.9, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.warm
    });

    // Solution
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.2, y: y + 1.35, w: 4.1, h: 0.45,
      fill: { color: theme.green, transparency: 15 }
    });
    slide.addText("对策：" + item.solution, {
      x: x + 0.3, y: y + 1.4, w: 3.9, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.green, bold: true
    });
  });

  return slide;
}

module.exports = { createSlide };
