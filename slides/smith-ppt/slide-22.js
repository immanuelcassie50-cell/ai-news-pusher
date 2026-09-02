const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("创造性破坏的机制", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true, margin: 0
  });

  // Process flow - vertical timeline
  const stepX = 1.0;
  const stepW = 8.0;
  const stepH = 0.75;
  const stepGap = 0.15;
  const startY = 1.15;

  const steps = [
    { num: "1", title: "创新浪潮", desc: "企业家引入新产品、新技术、新来源、新市场", color: theme.accent },
    { num: "2", title: "模仿与扩散", desc: "其他企业跟进，扩散创新成果", color: theme.light },
    { num: "3", title: "超额利润压缩", desc: "竞争加剧，创新带来的暂时垄断终结", color: theme.secondary },
    { num: "4", title: "新的破坏", desc: "下一轮创新浪潮开始，循环往复", color: theme.primary }
  ];

  steps.forEach((step, i) => {
    const y = startY + i * (stepH + stepGap);

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: stepX, y: y + 0.1, w: 0.55, h: 0.55,
      fill: { color: step.color }
    });
    slide.addText(step.num, {
      x: stepX, y: y + 0.1, w: 0.55, h: 0.55,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Content box
    slide.addShape(pres.shapes.RECTANGLE, {
      x: stepX + 0.7, y: y, w: stepW - 0.7, h: stepH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 4, offset: 2, angle: 135, color: "000000", opacity: 0.06 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: stepX + 0.7, y: y, w: 0.06, h: stepH,
      fill: { color: step.color }
    });
    slide.addText(step.title, {
      x: stepX + 0.9, y: y + 0.1, w: 2.5, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(step.desc, {
      x: stepX + 0.9, y: y + 0.4, w: stepW - 1.1, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom insight
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.85, w: 9, h: 0.5,
    fill: { color: theme.light, transparency: 50 }
  });
  slide.addText("与斯密\"看不见的手\"的呼应：创新者的自利行为，在破坏旧秩序的同时创造了更大的社会福利", {
    x: 0.7, y: 4.9, w: 8.6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("22", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
