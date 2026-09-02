const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("模块五：综合实战 — 练习模板页", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Practice template header
  slide.addText("完整人机协作项目设计模板", {
    x: 0.5, y: 1.0, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Template sections
  const sections = [
    {
      num: "01",
      title: "项目基本信息",
      fields: ["项目名称：", "负责人：", "参与人员：", "时间周期："],
      color: theme.accent
    },
    {
      num: "02",
      title: "任务定义",
      fields: ["核心任务描述：", "预期成果：", "验收标准：", "风险约束："],
      color: theme.blue
    },
    {
      num: "03",
      title: "人机分工",
      fields: ["人类负责：", "AI负责：", "协作模式：", "介入节点："],
      color: theme.green
    },
    {
      num: "04",
      title: "效果衡量",
      fields: ["效率指标：", "质量指标：", "价值指标：", "衡量周期："],
      color: theme.warm
    }
  ];

  sections.forEach((s, i) => {
    const x = 0.5 + (i % 2) * 4.7;
    const y = 1.5 + Math.floor(i / 2) * 1.95;

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.5, h: 1.8,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Number badge
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.6, h: 0.5,
      fill: { color: s.color }
    });
    slide.addText(s.num, {
      x: x, y: y, w: 0.6, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(s.title, {
      x: x + 0.7, y: y + 0.1, w: 3.6, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Fields
    s.fields.forEach((field, j) => {
      const col = j % 2;
      const row = Math.floor(j / 2);
      slide.addText(field, {
        x: x + 0.2 + col * 2.2, y: y + 0.6 + row * 0.5, w: 2.0, h: 0.4,
        fontSize: 10, fontFace: "Microsoft YaHei",
        color: theme.secondary
      });

      // Input line
      slide.addShape(pres.ShapeType.rect, {
        x: x + 0.2 + col * 2.2, y: y + 0.95 + row * 0.5, w: 2.0, h: 0.02,
        fill: { color: theme.gray }
      });
    });
  });

  // Output note
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.4, w: 9, h: 0.35,
    fill: { color: theme.light }
  });
  slide.addText("使用说明：每个项目开始前填写此模板，作为项目启动文档的一部分", {
    x: 0.7, y: 5.45, w: 8.6, h: 0.28,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  return slide;
}

module.exports = { createSlide };
