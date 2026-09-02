/**
 * Slide 51 - 内在批判的负面影响
 * 4-card grid layout showing negative impacts of inner critic
 */
function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.addShape(pres.ShapeType.rect, 0, 0, 960, 540, {
    fill: { color: theme.bg }
  });

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, 0, 0, 960, 8, {
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("内在批判的负面影响", {
    x: 40, y: 30, w: 880, h: 60,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, align: "left"
  });

  // Subtitle line
  slide.addShape(pres.ShapeType.rect, 40, 95, 120, 4, {
    fill: { color: theme.accent }
  });

  // 4 cards layout - 2x2 grid
  const cardWidth = 400;
  const cardHeight = 170;
  const startX = 40;
  const startY = 120;
  const gapX = 40;
  const gapY = 30;

  const cards = [
    {
      icon: "1",
      title: "情绪耗竭",
      desc: "消耗心理能量，让人精疲力竭",
      iconColor: theme.primary
    },
    {
      icon: "2",
      title: "动力下降",
      desc: '"反正做不好"导致放弃尝试',
      iconColor: theme.light
    },
    {
      icon: "3",
      title: "完美主义陷阱",
      desc: "永远觉得自己不够好",
      iconColor: theme.accent
    },
    {
      icon: "4",
      title: "人际关系受损",
      desc: "把批判投射到他人身上",
      iconColor: theme.secondary
    }
  ];

  cards.forEach((card, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (cardWidth + gapX);
    const y = startY + row * (cardHeight + gapY);

    // Card background
    slide.addShape(pres.ShapeType.rect, x, y, cardWidth, cardHeight, {
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 1, transparency: 80 }
    });

    // Left accent bar on card
    slide.addShape(pres.ShapeType.rect, x, y, 6, cardHeight, {
      fill: { color: card.iconColor }
    });

    // Icon circle
    slide.addShape(pres.ShapeType.ellipse, x + 30, y + 35, 60, 60, {
      fill: { color: card.iconColor, transparency: 15 }
    });

    // Icon number
    slide.addText(card.icon, {
      x: x + 30, y: y + 35, w: 60, h: 60,
      fontSize: 24, fontFace: "Arial",
      color: card.iconColor, bold: true,
      align: "center", valign: "middle"
    });

    // Card title
    slide.addText(card.title, {
      x: x + 110, y: y + 30, w: 270, h: 40,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true, align: "left", valign: "middle"
    });

    // Card description
    slide.addText(card.desc, {
      x: x + 110, y: y + 75, w: 270, h: 70,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false, align: "left", valign: "top"
    });
  });

  // Page number badge at x:9.3, y:5.1 (converted to pixels for 960x540)
  slide.addText("51", {
    x: 893, y: 490, w: 40, h: 30,
    fontSize: 14, fontFace: "Arial",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  return slide;
}

const slideConfig = {
  title: "内在批判的负面影响",
  pageNumber: 51,
  layout: "4-card grid"
};

module.exports = { createSlide, slideConfig };
