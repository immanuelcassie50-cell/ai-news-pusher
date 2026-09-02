const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("练习一：角色扮演 — 引导话术", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Four quadrant layout for guide phrases
  const quadrants = [
    {
      title: "开场引入",
      phrases: [
        "\"今天我们聊聊AI工具引入的事\"",
        "\"每个人的看法都重要\"",
        "\"没有对错，只有共识\""
      ],
      x: 0.5, y: 1.1, color: theme.blue
    },
    {
      title: "激发表达",
      phrases: [
        "\"你第一次听说这个想法时什么感受？\"",
        "\"能举个具体的例子吗？\"",
        "\"还有呢？\""
      ],
      x: 5.2, y: 1.1, color: theme.green
    },
    {
      title: "深度追问",
      phrases: [
        "\"这对你意味着什么？\"",
        "\"如果...会怎样？\"",
        "\"背后的假设是什么？\""
      ],
      x: 0.5, y: 3.2, color: theme.warm
    },
    {
      title: "达成共识",
      phrases: [
        "\"我们找到了哪些共同点？\"",
        "\"接下来第一步是什么？\"",
        "\"谁来负责什么？\""
      ],
      x: 5.2, y: 3.2, color: theme.accent
    }
  ];

  quadrants.forEach((q) => {
    slide.addShape(pres.ShapeType.rect, {
      x: q.x, y: q.y, w: 4.3, h: 1.9,
      fill: { color: "ffffff" },
      line: { color: q.color, width: 2 }
    });

    slide.addShape(pres.ShapeType.rect, {
      x: q.x, y: q.y, w: 4.3, h: 0.45,
      fill: { color: q.color }
    });

    slide.addText(q.title, {
      x: q.x + 0.15, y: q.y + 0.08, w: 4, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true
    });

    q.phrases.forEach((phrase, i) => {
      slide.addText("\"" + phrase + "\"", {
        x: q.x + 0.2, y: q.y + 0.6 + i * 0.45, w: 3.9, h: 0.4,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.dark, italic: true
      });
    });
  });

  // Bottom tip
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.25, w: 9, h: 0.45,
    fill: { color: theme.light }
  });
  slide.addText("技巧：使用开放式问题，避免引导性提问；适时复述确认理解", {
    x: 0.7, y: 5.32, w: 8.6, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  return slide;
}

module.exports = { createSlide };
