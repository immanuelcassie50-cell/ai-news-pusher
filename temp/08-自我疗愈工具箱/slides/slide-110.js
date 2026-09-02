/**
 * Slide 110 - 卡片3：三分钟呼吸空间
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Card label badge
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.35, w: 1.8, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText("工具卡片 3", {
    x: 0.5, y: 0.35, w: 1.8, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // Title
  slide.addText("三分钟呼吸空间", {
    x: 2.5, y: 0.3, w: 5.5, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("随时可用的正念暂停技术", {
    x: 2.5, y: 0.85, w: 5, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Three phase cards
  const phases = [
    {
      title: "第一分钟",
      subtitle: "觉知",
      time: "1 min",
      items: ["注意当前的体验", "扫描身体感受", "承认此刻的存在"],
      color: theme.primary
    },
    {
      title: "第二分钟",
      subtitle: "聚焦",
      time: "1 min",
      items: ["将注意力转向呼吸", "感受呼吸的节奏", "身体随呼吸起伏"],
      color: theme.accent
    },
    {
      title: "第三分钟",
      subtitle: "扩展",
      time: "1 min",
      items: ["扩大觉知范围", "感受周围环境", "以开放心态面对下一刻"],
      color: theme.light
    }
  ];

  const cardWidth = 2.9;
  const cardStartX = 0.5;
  const cardY = 1.4;
  const cardHeight = 2.9;

  phases.forEach((phase, i) => {
    const x = cardStartX + i * (cardWidth + 0.2);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: cardY, w: cardWidth, h: cardHeight,
      fill: { color: phase.color }
    });

    // Phase number
    slide.addText(String(i + 1), {
      x: x + 0.15, y: cardY + 0.15, w: 0.4, h: 0.4,
      fontSize: 24, fontFace: "Arial",
      color: i === 0 ? "FFFFFF" : theme.secondary, bold: true
    });

    // Time badge
    slide.addText(phase.time, {
      x: x + cardWidth - 0.8, y: cardY + 0.15, w: 0.7, h: 0.35,
      fontSize: 11, fontFace: "Arial",
      color: i === 0 ? "FFFFFF" : theme.secondary, bold: false, align: "center"
    });

    // Phase title
    slide.addText(phase.subtitle, {
      x: x + 0.15, y: cardY + 0.6, w: cardWidth - 0.3, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: i === 0 ? "FFFFFF" : theme.secondary, bold: true
    });

    // Divider line
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.15, y: cardY + 1.1, w: cardWidth - 0.3, h: 0.03,
      fill: { color: i === 0 ? "FFFFFF" : theme.accent }
    });

    // Items
    phase.items.forEach((item, j) => {
      slide.addText("• " + item, {
        x: x + 0.15, y: cardY + 1.3 + j * 0.45, w: cardWidth - 0.3, h: 0.4,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: i === 0 ? "FFFFFF" : theme.secondary, bold: false
      });
    });
  });

  // Bottom tip
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.5, w: 9, h: 0.6,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.08 }
  });
  slide.addText("任何需要暂停的时刻：会议间隙、通勤途中、感到压力时、醒来或睡前", {
    x: 0.7, y: 4.55, w: 8.6, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "center", valign: "middle"
  });

  // Page number
  slide.addText("110", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "tool-card",
  module: "Tool Cards",
  title: "三分钟呼吸空间",
  pageNumber: 110
};

module.exports = { createSlide, slideConfig };
