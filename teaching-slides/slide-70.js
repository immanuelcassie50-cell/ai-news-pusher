const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("练习三：AI能力边界测试", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Introduction
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.1, w: 9, h: 0.6,
    fill: { color: theme.light }
  });
  slide.addText("目标：通过实际测试，了解AI在不同任务类型上的能力边界", {
    x: 0.7, y: 1.2, w: 8.6, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.dark
  });

  // Test categories
  const categories = [
    {
      title: "强项测试",
      tasks: ["文案写作", "代码补全", "数据汇总", "翻译"],
      color: theme.green,
      x: 0.5, y: 1.9
    },
    {
      title: "弱项测试",
      tasks: ["实时信息", "主观判断", "创意评估", "情感理解"],
      color: theme.warm,
      x: 5.2, y: 1.9
    }
  ];

  categories.forEach((cat) => {
    slide.addShape(pres.ShapeType.rect, {
      x: cat.x, y: cat.y, w: 4.3, h: 2.0,
      fill: { color: "ffffff" },
      line: { color: cat.color, width: 2 }
    });

    slide.addShape(pres.ShapeType.rect, {
      x: cat.x, y: cat.y, w: 4.3, h: 0.45,
      fill: { color: cat.color }
    });

    slide.addText(cat.title, {
      x: cat.x + 0.15, y: cat.y + 0.08, w: 4, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true
    });

    cat.tasks.forEach((task, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      slide.addText("✓ " + task, {
        x: cat.x + 0.3 + col * 2, y: cat.y + 0.6 + row * 0.45, w: 1.8, h: 0.4,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.dark
      });
    });
  });

  // Testing steps
  slide.addText("测试步骤", {
    x: 0.5, y: 4.1, w: 2, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const steps = [
    { num: "1", text: "选择任务类型" },
    { num: "2", text: "设计测试Prompt" },
    { num: "3", text: "记录AI响应" },
    { num: "4", text: "评估效果并打分" }
  ];

  steps.forEach((s, i) => {
    const x = 0.5 + i * 2.4;

    slide.addShape(pres.ShapeType.ellipse, {
      x: x, y: 4.5, w: 0.4, h: 0.4,
      fill: { color: theme.primary }
    });
    slide.addText(s.num, {
      x: x, y: 4.5, w: 0.4, h: 0.4,
      fontSize: 12, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(s.text, {
      x: x + 0.5, y: 4.52, w: 1.8, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.dark
    });
  });

  // Output section
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.1, w: 9, h: 0.5,
    fill: { color: theme.blue, transparency: 15 }
  });
  slide.addText("产出：AI能力评估表 + 个人使用建议清单", {
    x: 0.7, y: 5.18, w: 8.6, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.blue, bold: true
  });

  return slide;
}

module.exports = { createSlide };
