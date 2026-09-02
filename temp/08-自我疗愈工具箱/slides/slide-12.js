/**
 * Slide 12 - 模块一小结
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Section label
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 0.35, w: 1.2, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("模块一", {
    x: 0.5, y: 0.35, w: 1.2, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle", bold: true
  });

  // Title
  slide.addText("模块一小结", {
    x: 1.85, y: 0.3, w: 7, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("认知基础 - 核心要点回顾", {
    x: 0.5, y: 0.95, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Key takeaways in cards
  const takeaways = [
    {
      num: "01",
      title: "预防优于治疗",
      desc: '日常心理保养是心理健康的"疫苗"，比出现问题后的治疗更高效、更重要'
    },
    {
      num: "02",
      title: "身心一体",
      desc: "身体和心理紧密相连，照顾好身体是心理健康的基础，运动是最天然的抗抑郁药"
    },
    {
      num: "03",
      title: "三大机制",
      desc: "压力中断、情绪加工、韧性建设是日常心理保养的科学基础，三者协同作用"
    },
    {
      num: "04",
      title: "边界意识",
      desc: "自我疗愈有局限性，严重心理问题需要专业治疗，日常保养与专业干预相辅相成"
    }
  ];

  const cardW = 4.35;
  const cardH = 1.55;
  const startX = 0.5;
  const startY = 1.5;
  const gapX = 0.3;
  const gapY = 0.25;

  takeaways.forEach((tk, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 6, offset: 2, angle: 45, opacity: 0.1 }
    });

    // Left accent bar
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.08, h: cardH,
      fill: { color: theme.accent }
    });

    // Number badge
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.2, y: y + 0.2, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(tk.num, {
      x: x + 0.2, y: y + 0.2, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", align: "center", valign: "middle", bold: true
    });

    // Title
    slide.addText(tk.title, {
      x: x + 0.85, y: y + 0.22, w: cardW - 1.05, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle", bold: true
    });

    // Description
    slide.addText(tk.desc, {
      x: x + 0.2, y: y + 0.8, w: cardW - 0.4, h: 0.65,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      lineSpaceMult: 1.4
    });
  });

  // Bottom motivational line
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.95, w: 9, h: 0.55,
    fill: { color: theme.primary }
  });
  slide.addText("下一模块预告：情绪调节 - 学会与情绪共处", {
    x: 0.5, y: 4.95, w: 9, h: 0.55,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle", bold: false
  });

  // Page number
  slide.addText("12", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "summary",
  module: "Module 1",
  title: "模块一小结",
  pageNumber: 12
};

module.exports = { createSlide, slideConfig };
