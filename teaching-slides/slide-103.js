const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("催化师话术手册：开场", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("好的开场是成功的一半", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Opening scripts - 5 cards
  const scripts = [
    { num: "1", title: "欢迎语", script: "\"欢迎大家参加今天的行动学习会议\"", scene: "会议开始时使用，营造开放氛围" },
    { num: "2", title: "角色介绍", script: "\"我将作为催化师，帮助大家讨论\"", scene: "首次见面或新成员时说明职责" },
    { num: "3", title: "规则说明", script: "\"讨论中请保持开放，尊重不同观点\"", scene: "建立讨论规范，减少冲突" },
    { num: "4", title: "议题说明", script: "\"今天的议题是...\"", scene: "明确讨论焦点，避免跑题" },
    { num: "5", title: "期望说明", script: "\"希望通过讨论，我们能...\"", scene: "设定预期目标，指引方向" }
  ];

  scripts.forEach((item, i) => {
    const y = 1.5 + i * 0.78;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.4, y: y, w: 9.2, h: 0.68,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.55, y: y + 0.14, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(item.num, {
      x: 0.55, y: y + 0.14, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Title badge
    slide.addShape(pres.ShapeType.roundRect, {
      x: 1.1, y: y + 0.15, w: 0.9, h: 0.38,
      fill: { color: theme.primary },
      rectRadius: 0.05
    });
    slide.addText(item.title, {
      x: 1.1, y: y + 0.15, w: 0.9, h: 0.38,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Script text
    slide.addText(item.script, {
      x: 2.15, y: y + 0.1, w: 5.5, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Scene description
    slide.addText(item.scene, {
      x: 2.15, y: y + 0.4, w: 5.5, h: 0.22,
      fontSize: 8, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // Decorative line
    slide.addShape(pres.ShapeType.rect, {
      x: 7.8, y: y + 0.25, w: 1.6, h: 0.03,
      fill: { color: theme.accent, transparency: 50 }
    });
  });

  // Bottom tip box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 5.4, w: 9.2, h: 0.55,
    fill: { color: theme.accent, transparency: 10 }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 5.4, w: 0.08, h: 0.55,
    fill: { color: theme.accent }
  });
  slide.addText("开场心法", {
    x: 0.6, y: 5.42, w: 1.2, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("开场时语速稍慢，声音沉稳，给参与者安全感；眼神扫过全场，与每个人建立初步连接", {
    x: 0.6, y: 5.65, w: 8.8, h: 0.25,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  return slide;
}

module.exports = { createSlide };
