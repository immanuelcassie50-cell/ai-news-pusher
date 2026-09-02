const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("模块三深度扩展：三种节奏模式详解", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Three rhythm modes
  const modes = [
    {
      title: "快对话模式",
      subtitle: "即时响应",
      desc: "适用于：简单查询、明确任务、快速执行",
      features: ["响应时间：<30秒", "交互层级：单轮或两轮", "典型场景：查数据、改格式"],
      color: theme.green,
      x: 0.5
    },
    {
      title: "深对话模式",
      subtitle: "持续探索",
      desc: "适用于：复杂问题、方案共创、深度分析",
      features: ["响应时间：5-30分钟", "交互层级：多轮迭代", "典型场景：战略规划、创意讨论"],
      color: theme.blue,
      x: 3.5
    },
    {
      title: "异步模式",
      subtitle: "分步推进",
      desc: "适用于：大型项目、长期任务、团队协作",
      features: ["响应时间：不限定", "交互层级：分阶段", "典型场景：项目推进、持续改进"],
      color: theme.warm,
      x: 6.5
    }
  ];

  modes.forEach((mode) => {
    slide.addShape(pres.ShapeType.rect, {
      x: mode.x, y: 1.1, w: 2.8, h: 3.4,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.1 }
    });

    // Header
    slide.addShape(pres.ShapeType.rect, {
      x: mode.x, y: 1.1, w: 2.8, h: 0.65,
      fill: { color: mode.color }
    });

    slide.addText(mode.title, {
      x: mode.x, y: 1.15, w: 2.8, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center"
    });

    slide.addText(mode.subtitle, {
      x: mode.x, y: 1.5, w: 2.8, h: 0.25,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "ffffff",
      align: "center"
    });

    // Description
    slide.addText(mode.desc, {
      x: mode.x + 0.15, y: 1.85, w: 2.5, h: 0.55,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // Divider
    slide.addShape(pres.ShapeType.rect, {
      x: mode.x + 0.3, y: 2.45, w: 2.2, h: 0.02,
      fill: { color: theme.light }
    });

    // Features
    slide.addText("特点：", {
      x: mode.x + 0.15, y: 2.55, w: 2.5, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    mode.features.forEach((f, i) => {
      slide.addText("• " + f, {
        x: mode.x + 0.15, y: 2.85 + i * 0.4, w: 2.5, h: 0.35,
        fontSize: 10, fontFace: "Microsoft YaHei",
        color: theme.dark
      });
    });
  });

  // Bottom insight
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.7, w: 9, h: 0.6,
    fill: { color: theme.light }
  });
  slide.addText("节奏选择取决于：任务复杂度 × 时间紧迫度 × 协作深度需求", {
    x: 0.7, y: 4.85, w: 8.6, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  return slide;
}

module.exports = { createSlide };
