const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("延伸学习", {
    x: 0.5, y: 0.2, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Main title
  slide.addText("网络资源推荐", {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Georgia",
    color: theme.primary, bold: true
  });

  // Resources grid
  const resources = [
    {
      type: "MOOC",
      items: ["中国大学MOOC：经济学原理", "Coursera：行为经济学", "edX：苏格兰启蒙运动"]
    },
    {
      type: "学术",
      items: ["JSTOR免费论文", "Google Scholar", "CNKI中国知网"]
    },
    {
      type: "视听",
      items: ["BBC纪录片：苏格兰启蒙运动", "Yale Open Courses：哲学与道德生活", "3Blue1Brown：经济数学"]
    },
    {
      type: "工具",
      items: ["Zotero文献管理", "MindMaster思维导图", "Notion知识库"]
    }
  ];

  resources.forEach((r, i) => {
    const x = 0.5 + (i % 2) * 4.7;
    const y = 1.9 + Math.floor(i / 2) * 1.5;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.4, h: 1.35,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 45, opacity: 0.12 }
    });

    // Type badge
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 1.0, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(r.type, {
      x: x, y: y, w: 1.0, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", align: "center", valign: "middle"
    });

    // Items
    r.items.forEach((item, j) => {
      slide.addText("▸ " + item, {
        x: x + 0.15, y: y + 0.45 + j * 0.28, w: 4.1, h: 0.28,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary
      });
    });
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("87", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
