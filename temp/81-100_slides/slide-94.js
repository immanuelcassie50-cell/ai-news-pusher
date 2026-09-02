// slide-94.js - 培训游戏集
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'backup',
  index: 94,
  title: '培训游戏集'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("培训游戏集", {
    x: 0.5, y: 0.35, w: 8, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Backup label
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 8.5, y: 0.35, w: 1, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("备用", {
    x: 8.5, y: 0.35, w: 1, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // Games
  const games = [
    {
      name: "知识卡片",
      desc: "将知识点写在卡片上，组内轮流抽取并讲解，讲解正确得分",
     适用: "知识点回顾"
    },
    {
      name: "角色扮演",
      desc: "两人一组，分别扮演客服和客户，模拟真实工作场景",
     适用: "沟通技巧练习"
    },
    {
      name: "小组竞赛",
      desc: "将学员分组建构，答题竞赛，获胜组获得积分奖励",
     适用: "强化学习记忆"
    },
    {
      name: "案例找茬",
      desc: "展示一个有问题的案例，让学员找出其中的错误或不足",
     适用: "问题分析能力"
    },
    {
      name: "限时头脑风暴",
      desc: "给定主题，在规定时间内尽可能多地提出解决方案",
     适用: "激发创意"
    }
  ];

  games.forEach((game, i) => {
    const row = Math.floor(i / 3);
    const col = i % 3;
    const x = 0.5 + col * 3.1;
    const y = 1.1 + row * 2.15;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.95, h: 2,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Game icon area
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.95, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(game.name, {
      x: x, y: y, w: 2.95, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // Description
    slide.addText(game.desc, {
      x: x + 0.15, y: y + 0.6, w: 2.65, h: 0.9,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, margin: 0
    });

    // Applicable scenario
    slide.addText("适用：" + game.适用, {
      x: x + 0.15, y: y + 1.55, w: 2.65, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, margin: 0
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("94", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "4A4A4A",
    accent: "FF6B6B",
    light: "F5F5F5",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/81-100_slides/slide-94-preview.pptx" });
}

module.exports = { createSlide, slideConfig };