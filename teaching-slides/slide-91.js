const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("模块四总结：效果衡量核心要点", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Key takeaways
  slide.addText("衡量不是目的，改进才是目的", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // Three key points
  const points = [
    {
      title: "建立基准",
      desc: "衡量前先建立现状基准，才能对比改进效果",
      example: "记录使用AI前的任务完成时间",
      color: theme.green
    },
    {
      title: "关注价值",
      desc: "不仅看效率，更要看产生的额外价值",
      example: "人力解放后员工做了什么更有价值的事",
      color: theme.blue
    },
    {
      title: "持续迭代",
      desc: "衡量是持续的过程，不是一次性的评估",
      example: "每月复盘，每季度调整目标和策略",
      color: theme.warm
    }
  ];

  points.forEach((p, i) => {
    const x = 0.5 + i * 3.1;

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.6, w: 2.9, h: 2.3,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.6, w: 2.9, h: 0.5,
      fill: { color: p.color }
    });

    slide.addText(p.title, {
      x: x, y: 1.68, w: 2.9, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center"
    });

    slide.addText(p.desc, {
      x: x + 0.15, y: 2.2, w: 2.6, h: 0.7,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.dark
    });

    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.15, y: 2.95, w: 2.6, h: 0.8,
      fill: { color: p.color, transparency: 15 }
    });
    slide.addText("示例：" + p.example, {
      x: x + 0.25, y: 3.0, w: 2.4, h: 0.7,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: p.color
    });
  });

  // Measurement tools
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.1, w: 9, h: 1.0,
    fill: { color: theme.light }
  });

  slide.addText("推荐衡量工具", {
    x: 0.7, y: 4.2, w: 2, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const tools = ["效率追踪表", "质量检查清单", "ROI计算器", "四维雷达图"];
  tools.forEach((tool, i) => {
    const x = 0.7 + i * 2.2;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 4.55, w: 2.0, h: 0.45,
      fill: { color: theme.primary, transparency: 15 }
    });
    slide.addText(tool, {
      x: x, y: 4.55, w: 2.0, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary,
      align: "center", valign: "middle"
    });
  });

  return slide;
}

module.exports = { createSlide };
