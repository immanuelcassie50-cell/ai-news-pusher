/**
 * Slide 66 - 书写的常见误解
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
  slide.addText("书写的常见误解", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("澄清误区，正确开始书写之旅", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // 3 misconception cards
  const cardY = 1.5;
  const cardH = 3.2;
  const cardW = 2.95;
  const gap = 0.2;

  const misconceptions = [
    {
      wrong: "必须写得好",
      wrongIcon: "X",
      correct: "表达真实感受即可",
      correctDesc: "书写疗愈不要求文采，重要的是真情实感。任何人，只要有基本的读写能力，都可以从中受益。",
      color: theme.primary
    },
    {
      wrong: "写一次就能解决",
      wrongIcon: "X",
      correct: "持续练习才有效",
      correctDesc: "书写是一个持续的过程。研究表明，4-5次以上的书写练习效果最为显著。把它当作日常习惯。",
      color: theme.accent
    },
    {
      wrong: "必须写创伤经历",
      wrongIcon: "X",
      correct: "任何生活事件都可以",
      correctDesc: "书写不一定非要直面创伤。感恩日记、正面经历、日常琐事同样有效，甚至更适合初学者。",
      color: theme.light
    }
  ];

  misconceptions.forEach((item, i) => {
    const cardX = 0.5 + i * (cardW + gap);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: cardX, y: cardY, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 6, offset: 2, angle: 45, opacity: 0.1 }
    });

    // Wrong section header
    slide.addShape(pres.ShapeType.rect, {
      x: cardX, y: cardY, w: cardW, h: 0.7,
      fill: { color: theme.secondary, transparency: 90 }
    });

    slide.addText(item.wrongIcon, {
      x: cardX + 0.1, y: cardY + 0.1, w: 0.4, h: 0.5,
      fontSize: 20, fontFace: "Arial",
      color: theme.primary, bold: true
    });

    slide.addText(item.wrong, {
      x: cardX + 0.5, y: cardY + 0.15, w: cardW - 0.6, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false
    });

    // Correct section
    slide.addShape(pres.ShapeType.rect, {
      x: cardX, y: cardY + 0.7, w: cardW, h: 0.08,
      fill: { color: item.color }
    });

    slide.addText("正确理解", {
      x: cardX + 0.15, y: cardY + 0.95, w: cardW - 0.3, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: item.color, bold: true
    });

    slide.addText(item.correct, {
      x: cardX + 0.15, y: cardY + 1.35, w: cardW - 0.3, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true
    });

    slide.addText(item.correctDesc, {
      x: cardX + 0.15, y: cardY + 1.8, w: cardW - 0.3, h: 1.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      lineSpaceMult: 1.4
    });
  });

  // Bottom message
  slide.addText("核心原则：书写是为了自己，不是为了展示给别人看", {
    x: 0.5, y: 4.9, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", bold: false
  });

  // Page number
  slide.addText("66", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "content",
  module: "Module 5",
  title: "书写的常见误解",
  pageNumber: 66
};

module.exports = { createSlide, slideConfig };
