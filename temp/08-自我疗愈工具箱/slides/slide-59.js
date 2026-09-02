const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "每日三件好事记录",
  type: "content",
  pageNumber: 59
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg }
  });

  // Left red accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("每日三件好事记录", {
    x: 0.6, y: 0.35, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Subtitle
  slide.addText("晚间感恩练习", {
    x: 5.5, y: 0.5, w: 2.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: true,
    align: "center", valign: "middle"
  });

  // Instruction text
  slide.addText("格式：记录3件好事 + 它们发生的原因", {
    x: 0.6, y: 1.2, w: 5, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle"
  });

  // Three good things cards
  const goods = [
    {
      num: "1",
      event: "同事帮我带了咖啡",
      reason: "因为我们互相支持"
    },
    {
      num: "2",
      event: "完成了一份报告",
      reason: "因为我努力付出了"
    },
    {
      num: "3",
      event: "午休时散步了20分钟",
      reason: "因为我照顾了自己的身心"
    }
  ];

  const cardWidth = 2.9;
  const cardHeight = 2.8;
  const startX = 0.6;
  const gap = 0.25;

  goods.forEach((item, i) => {
    const x = startX + i * (cardWidth + gap);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.65, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
    });

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + (cardWidth - 0.7) / 2, y: 1.85, w: 0.7, h: 0.7,
      fill: { color: theme.primary }
    });
    slide.addText(item.num, {
      x: x + (cardWidth - 0.7) / 2, y: 1.85, w: 0.7, h: 0.7,
      fontSize: 20, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // "好事" label
    slide.addText("好事", {
      x: x + 0.15, y: 2.65, w: cardWidth - 0.3, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "center", valign: "middle"
    });

    // Event text
    slide.addText(item.event, {
      x: x + 0.15, y: 2.95, w: cardWidth - 0.3, h: 0.6,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Divider line
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.4, y: 3.6, w: cardWidth - 0.8, h: 0.02,
      fill: { color: theme.accent }
    });

    // "原因" label
    slide.addText("原因", {
      x: x + 0.15, y: 3.7, w: cardWidth - 0.3, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent,
      align: "center", valign: "middle"
    });

    // Reason text
    slide.addText(item.reason, {
      x: x + 0.15, y: 4.0, w: cardWidth - 0.3, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "middle"
    });
  });

  // Bottom tip box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 4.65, w: 8.8, h: 0.55,
    fill: { color: theme.accent, transparency: 15 }
  });

  slide.addText("💡 小贴士：坚持每晚记录，你会发现生活中值得感恩的事情远比想象的多", {
    x: 0.8, y: 4.65, w: 8.4, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle"
  });

  // Bottom decorative bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("59", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
