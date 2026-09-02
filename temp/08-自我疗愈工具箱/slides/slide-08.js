/**
 * Slide 08 - 身体与心理的连接
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("身体与心理的连接", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("身心一元论：身体状态影响心理，心理状态影响身体", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Case study box - left side
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.55, w: 4.5, h: 3.5,
    fill: { color: theme.primary }
  });

  slide.addText("案例", {
    x: 0.7, y: 1.7, w: 1, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("张华的转变", {
    x: 0.7, y: 2.0, w: 4, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText([
    { text: "张华，35岁项目经理：", options: { bold: true, breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "长期加班导致严重失眠，白天疲惫不堪，情绪低落，对工作和生活失去兴趣。", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "通过三个月的自我疗愈练习：", options: { breakLine: true } },
    { text: "→ 每天30分钟有氧运动", options: { breakLine: true } },
    { text: "→ 正念冥想训练", options: { breakLine: true } },
    { text: "→ 睡眠卫生习惯改善", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "睡眠质量显著提升，情绪状态明显改善，工作效率提高40%。" }
  ], {
    x: 0.7, y: 2.55, w: 4.1, h: 2.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    lineSpaceMult: 1.35
  });

  // Right side - Mind-body connection diagram
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.55, w: 4.3, h: 3.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 45, opacity: 0.1 }
  });

  slide.addText("身心连接机制", {
    x: 5.4, y: 1.7, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Connection items
  const connections = [
    { body: "运动", effect: "→", mind: "释放内啡肽，改善情绪" },
    { body: "呼吸", effect: "→", mind: "激活副交感神经，降低焦虑" },
    { body: "睡眠", effect: "→", mind: "恢复情绪调节能力" },
    { body: "饮食", effect: "→", mind: "影响神经递质合成" },
    { body: "姿势", effect: "→", mind: "改善自我效能感" }
  ];

  connections.forEach((conn, i) => {
    const y = 2.2 + i * 0.55;

    // Body tag
    slide.addShape(pres.ShapeType.roundRect, {
      x: 5.5, y: y, w: 0.9, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(conn.body, {
      x: 5.5, y: y, w: 0.9, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", align: "center", valign: "middle", bold: false
    });

    // Arrow
    slide.addText(conn.effect, {
      x: 6.5, y: y, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: theme.light, align: "center", valign: "middle", bold: true
    });

    // Mind effect
    slide.addText(conn.mind, {
      x: 6.9, y: y, w: 2.4, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle", bold: false
    });
  });

  // Key insight box
  slide.addShape(pres.ShapeType.rect, {
    x: 5.4, y: 4.65, w: 3.9, h: 0.35,
    fill: { color: theme.light, transparency: 30 }
  });
  slide.addText("关键洞察：照顾好身体，是心理健康的基础", {
    x: 5.4, y: 4.65, w: 3.9, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", valign: "middle", bold: true
  });

  // Page number
  slide.addText("08", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "content",
  module: "Module 1",
  title: "身体与心理的连接",
  pageNumber: 8
};

module.exports = { createSlide, slideConfig };
