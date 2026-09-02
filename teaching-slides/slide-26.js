const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("追问层次", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("从现象到本质的深入路径", {
    x: 0.5, y: 0.55, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, margin: 0
  });

  // Pyramid structure - 4 levels
  const levels = [
    { level: 1, title: "现象层", question: "发生了什么？", desc: "描述观察到的事实", w: 8.5, color: theme.secondary },
    { level: 2, title: "过程层", question: "如何发生的？", desc: "还原事件经过", w: 6.8, color: theme.primary },
    { level: 3, title: "原因层", question: "为什么发生？", desc: "分析背后因素", w: 5.1, color: theme.accent },
    { level: 4, title: "归因层", question: "根本原因是什么？", desc: "挖掘核心本质", w: 3.4, color: theme.primary }
  ];

  const pStartY = 1.1;
  const pH = 1.05;
  const pGap = 0.15;

  levels.forEach((lv, i) => {
    const y = pStartY + i * (pH + pGap);
    const x = (10 - lv.w) / 2;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: lv.w, h: pH,
      fill: { color: "ffffff" },
      line: { color: lv.color, width: 2 },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Left color block
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.15, h: pH,
      fill: { color: lv.color }
    });

    // Level number
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.3, y: y + pH / 2 - 0.3, w: 0.6, h: 0.6,
      fill: { color: lv.color }
    });
    slide.addText(String(lv.level), {
      x: x + 0.3, y: y + pH / 2 - 0.3, w: 0.6, h: 0.6,
      fontSize: 18, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Level title
    slide.addText(lv.title, {
      x: x + 1.1, y: y + 0.15, w: 2, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, margin: 0
    });

    // Question
    slide.addText(lv.question, {
      x: x + 1.1, y: y + 0.5, w: 4, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: lv.color, bold: true, margin: 0
    });

    // Description on right
    slide.addText(lv.desc, {
      x: x + lv.w - 2.5, y: y + pH / 2 - 0.2, w: 2.3, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "right", valign: "middle", margin: 0
    });
  });

  // Bottom insight
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.6, w: 9, h: 0.6,
    fill: { color: theme.light }
  });
  slide.addText("💡 追问技巧：从浅层问题开始，逐层深入，避免跳跃", {
    x: 0.5, y: 5.6, w: 9, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
