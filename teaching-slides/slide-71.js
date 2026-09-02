const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("练习四：人机协作角色分工", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Introduction
  slide.addText("根据任务特性，确定人与AI的最佳分工", {
    x: 0.5, y: 1.0, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Role cards
  const roles = [
    {
      title: "人负责",
      items: ["设定目标与标准", "做出最终决策", "处理情感与关系", "应对模糊情境"],
      color: theme.blue,
      x: 0.5
    },
    {
      title: "AI负责",
      items: ["信息收集与整理", "重复性执行工作", "方案初稿生成", "数据汇总分析"],
      color: theme.green,
      x: 3.5
    },
    {
      title: "共同完成",
      items: ["方案优化迭代", "创意脑暴激发", "风险评估讨论", "效果复盘分析"],
      color: theme.warm,
      x: 6.5
    }
  ];

  roles.forEach((role) => {
    slide.addShape(pres.ShapeType.rect, {
      x: role.x, y: 1.5, w: 2.8, h: 2.8,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    slide.addShape(pres.ShapeType.rect, {
      x: role.x, y: 1.5, w: 2.8, h: 0.5,
      fill: { color: role.color }
    });

    slide.addText(role.title, {
      x: role.x, y: 1.58, w: 2.8, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center"
    });

    role.items.forEach((item, i) => {
      slide.addText("• " + item, {
        x: role.x + 0.2, y: 2.15 + i * 0.5, w: 2.4, h: 0.45,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.dark
      });
    });
  });

  // Key principle box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.5, w: 9, h: 0.8,
    fill: { color: theme.accent, transparency: 15 }
  });

  slide.addText("核心原则", {
    x: 0.7, y: 4.6, w: 1.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("人做有温度的判断，AI做有效率的执行", {
    x: 2.2, y: 4.6, w: 7.1, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.dark, bold: true
  });

  slide.addText("不是让人替代AI，也不是让AI替代人，而是让人与AI各自发挥所长", {
    x: 0.7, y: 4.95, w: 8.6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  return slide;
}

module.exports = { createSlide };
