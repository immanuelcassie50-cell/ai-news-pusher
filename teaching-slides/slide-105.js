const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("催化师话术手册：过渡", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("掌控节奏，顺畅衔接", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Transition scripts - 2x2 grid layout with flow
  const transitions = [
    { num: "1", title: "话题转换", script: "\"关于这一点我们已经讨论充分了，接下来看看...\"", timing: "当一个话题已经充分讨论时", color: theme.accent },
    { num: "2", title: "时间提示", script: "\"我们还有10分钟，需要加快进度\"", timing: "当时间紧迫需要提速时", color: theme.primary },
    { num: "3", title: "总结过渡", script: "\"刚才我们讨论了...现在我们来总结一下...\"", timing: "当需要梳理已讨论内容时", color: "#43aa8b" },
    { num: "4", title: "环节切换", script: "\"接下来进入下一个环节...\"", timing: "当需要开始新环节时", color: "#e07a5f" }
  ];

  // Flow arrow
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 2.75, w: 9, h: 0.04,
    fill: { color: theme.secondary, transparency: 60 }
  });

  transitions.forEach((t, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.4 + col * 4.8;
    const y = 1.5 + row * 1.55;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.5, h: 1.35,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Left accent
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.12, h: 1.35,
      fill: { color: t.color }
    });

    // Number
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.25, y: y + 0.2, w: 0.5, h: 0.5,
      fill: { color: t.color }
    });
    slide.addText(t.num, {
      x: x + 0.25, y: y + 0.2, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(t.title, {
      x: x + 0.9, y: y + 0.2, w: 3.4, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Script
    slide.addText(t.script, {
      x: x + 0.9, y: y + 0.55, w: 3.4, h: 0.45,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: t.color, bold: true
    });

    // Timing
    slide.addShape(pres.ShapeType.roundRect, {
      x: x + 0.9, y: y + 1.0, w: 3.4, h: 0.28,
      fill: { color: theme.light },
      rectRadius: 0.04
    });
    slide.addText(t.timing, {
      x: x + 1.0, y: y + 1.0, w: 3.2, h: 0.28,
      fontSize: 8, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });
  });

  // Bottom tip
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 4.85, w: 9.2, h: 0.9,
    fill: { color: theme.light }
  });
  slide.addText("过渡心法", {
    x: 0.6, y: 4.9, w: 1.0, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("过渡时先肯定前面的讨论成果，再自然引出下一个话题；使用\"接下来\"、\"现在\"、\"刚才\"等衔接词让对话流畅", {
    x: 0.6, y: 5.2, w: 8.8, h: 0.5,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  return slide;
}

module.exports = { createSlide };
