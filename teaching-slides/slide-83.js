const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("模块三扩展：节奏转换时机判断", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Introduction
  slide.addText("何时需要调整节奏？以下信号提示需要改变节奏", {
    x: 0.5, y: 1.0, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Signals for speed change
  const slowToFast = [
    { signal: "任务边界已经清晰", action: "从深度讨论转向快速执行" },
    { signal: "已经达成共识", action: "从探索转向行动" },
    { signal: "时间压力出现", action: "压缩迭代周期" }
  ];

  const fastToSlow = [
    { signal: "出现意外复杂问题", action: "暂停，深入分析" },
    { signal: "团队出现分歧", action: "增加讨论时间" },
    { signal: "方向需要调整", action: "重新回到规划阶段" }
  ];

  // Left column - Speed up
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.5, w: 4.3, h: 2.6,
    fill: { color: "ffffff" },
    line: { color: theme.green, width: 2 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.5, w: 4.3, h: 0.5,
    fill: { color: theme.green }
  });
  slide.addText("↑ 加快节奏信号", {
    x: 0.7, y: 1.58, w: 3.9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });

  slowToFast.forEach((item, i) => {
    const y = 2.15 + i * 0.65;

    slide.addShape(pres.ShapeType.rect, {
      x: 0.7, y: y, w: 0.25, h: 0.25,
      fill: { color: theme.green }
    });
    slide.addText("✓", {
      x: 0.7, y: y, w: 0.25, h: 0.25,
      fontSize: 12, fontFace: "Arial",
      color: "ffffff",
      align: "center", valign: "middle"
    });

    slide.addText(item.signal, {
      x: 1.05, y: y - 0.02, w: 3.5, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.dark, bold: true
    });

    slide.addText("→ " + item.action, {
      x: 1.05, y: y + 0.25, w: 3.5, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Right column - Slow down
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.5, w: 4.3, h: 2.6,
    fill: { color: "ffffff" },
    line: { color: theme.warm, width: 2 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.5, w: 4.3, h: 0.5,
    fill: { color: theme.warm }
  });
  slide.addText("↓ 放慢节奏信号", {
    x: 5.4, y: 1.58, w: 3.9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });

  fastToSlow.forEach((item, i) => {
    const y = 2.15 + i * 0.65;

    slide.addShape(pres.ShapeType.rect, {
      x: 5.4, y: y, w: 0.25, h: 0.25,
      fill: { color: theme.warm }
    });
    slide.addText("!", {
      x: 5.4, y: y, w: 0.25, h: 0.25,
      fontSize: 12, fontFace: "Arial",
      color: "ffffff",
      align: "center", valign: "middle"
    });

    slide.addText(item.signal, {
      x: 5.75, y: y - 0.02, w: 3.5, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.dark, bold: true
    });

    slide.addText("→ " + item.action, {
      x: 5.75, y: y + 0.25, w: 3.5, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Key principle
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.3, w: 9, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("核心原则", {
    x: 0.7, y: 4.4, w: 1.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("节奏调整不是失败，而是灵活应对。好的催化师懂得在合适时机踩油门或踩刹车。", {
    x: 0.7, y: 4.7, w: 8.6, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "ffffff"
  });

  return slide;
}

module.exports = { createSlide };
