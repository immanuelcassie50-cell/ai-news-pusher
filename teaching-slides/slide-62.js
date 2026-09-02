const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("练习一：角色扮演 — 场景设计", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Scenario description box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.1, w: 9, h: 1.4,
    fill: { color: theme.light }
  });
  slide.addText("场景设定", {
    x: 0.7, y: 1.2, w: 2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("你是某互联网公司的项目经理，公司决定引入AI工具来提升团队效率。你的团队对此态度不一：有人兴奋、有人担忧、有人质疑。", {
    x: 0.7, y: 1.55, w: 8.6, h: 0.8,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.dark
  });

  // Three roles section
  slide.addText("三种角色演练", {
    x: 0.5, y: 2.7, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const roles = [
    { title: "促进师", desc: "引导团队讨论\n识别担忧与期待\n寻找共识", color: theme.blue },
    { title: "AI用户", desc: "分享实际使用经验\n演示AI辅助案例\n解答技术疑问", color: theme.green },
    { title: "质疑者", desc: "提出合理担忧\n挑战过度乐观\n推动深度思考", color: theme.warm }
  ];

  roles.forEach((role, i) => {
    const x = 0.5 + i * 3.1;

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 3.2, w: 2.9, h: 2.0,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 3.2, w: 2.9, h: 0.45,
      fill: { color: role.color }
    });

    slide.addText(role.title, {
      x: x, y: 3.28, w: 2.9, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center"
    });

    slide.addText(role.desc, {
      x: x + 0.15, y: 3.75, w: 2.6, h: 1.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.dark,
      align: "center"
    });
  });

  // Bottom note
  slide.addText("练习时长：20分钟 | 目标：理解不同立场，建立共识基础", {
    x: 0.5, y: 5.35, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center"
  });

  return slide;
}

module.exports = { createSlide };
