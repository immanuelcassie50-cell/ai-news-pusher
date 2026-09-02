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
  slide.addText("延伸学习路径", {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Georgia",
    color: theme.primary, bold: true
  });

  // Learning paths - vertical layout
  const paths = [
    {
      level: "入门",
      books: ["《国富论》导读版", "《道德情操论》李华机译本", "曼德维尔《蜜蜂的寓言》"],
      color: theme.light
    },
    {
      level: "进阶",
      books: ["哈耶克《自由秩序原理》", "凯恩斯《就业、利息与货币通论》", "诺斯《制度、制度变迁与经济绩效》"],
      color: theme.secondary
    },
    {
      level: "专题",
      books: ["思想史研究方法", "苏格兰启蒙运动研究", "中国市场经济改革与斯密思想"],
      color: theme.primary
    }
  ];

  paths.forEach((p, i) => {
    const y = 1.9 + i * 1.15;

    // Level badge
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 1.2, h: 1.0,
      fill: { color: p.color }
    });
    slide.addText(p.level, {
      x: 0.5, y: y, w: 1.2, h: 1.0,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", align: "center", valign: "middle", bold: true
    });

    // Books list
    p.books.forEach((book, j) => {
      slide.addText("▸ " + book, {
        x: 1.85 + j * 2.7, y: y + 0.3, w: 2.6, h: 0.5,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.secondary
      });
    });
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("86", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
