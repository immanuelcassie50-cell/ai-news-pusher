/**
 * Slide 111 - 卡片4：STOP五感正念
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
  slide.addText("工具卡片 4", {
    x: 0.5, y: 0.35, w: 1.8, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // Title
  slide.addText("STOP五感正念", {
    x: 2.5, y: 0.3, w: 5, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("用五感锚定当下的危机停顿法", {
    x: 2.5, y: 0.85, w: 5, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // STOP acronym cards - 2x2 grid
  const stopItems = [
    {
      letter: "S",
      word: "Stop",
      desc: "停止手头一切活动",
      detail: "给自己一个暂停信号",
      color: theme.primary
    },
    {
      letter: "T",
      word: "Take in",
      desc: "用五感观察周围",
      detail: "5-4-3-2-1法：5样看到的、4样听到的、3样触摸到的、2样闻到的、1样尝到的",
      color: theme.accent
    },
    {
      letter: "O",
      word: "Observe",
      desc: "觉察内心状态",
      detail: "注意到自己的情绪、想法、身体感受，不评判",
      color: theme.light
    },
    {
      letter: "P",
      word: "Proceed",
      desc: "带着觉知继续",
      detail: "缓缓回到活动中，带着平静的心态",
      color: theme.secondary
    }
  ];

  const cardW = 4.4;
  const cardH = 1.55;
  const startX = 0.5;
  const startY = 1.4;
  const gapX = 0.2;
  const gapY = 0.15;

  stopItems.forEach((item, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: item.color }
    });

    // Letter badge
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.15, y: y + 0.15, w: 0.6, h: 0.6,
      fill: { color: row === 3 ? "FFFFFF" : (item.color === theme.primary ? theme.accent : "FFFFFF") }
    });
    slide.addText(item.letter, {
      x: x + 0.15, y: y + 0.15, w: 0.6, h: 0.6,
      fontSize: 24, fontFace: "Arial",
      color: row === 3 ? theme.secondary : item.color,
      bold: true, align: "center", valign: "middle"
    });

    // Word
    slide.addText(item.word, {
      x: x + 0.9, y: y + 0.15, w: 2, h: 0.4,
      fontSize: 18, fontFace: "Arial",
      color: row === 3 ? "FFFFFF" : (item.color === theme.accent ? theme.secondary : "FFFFFF"),
      bold: true
    });

    // Description
    slide.addText(item.desc, {
      x: x + 0.9, y: y + 0.55, w: 3.3, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: row === 3 ? "FFFFFF" : (item.color === theme.accent ? theme.secondary : "FFFFFF"),
      bold: false
    });

    // Detail
    slide.addText(item.detail, {
      x: x + 0.15, y: y + 0.95, w: cardW - 0.3, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: row === 3 ? theme.accent : (item.color === theme.accent ? theme.light : "FFFFFF"),
      bold: false
    });
  });

  // Applicable scenarios
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.7, w: 9, h: 0.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.08 }
  });
  slide.addText("适用场景：焦虑发作时、情绪失控边缘、创伤闪回、急性压力反应", {
    x: 0.7, y: 4.75, w: 8.6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "center", valign: "middle"
  });

  // Page number
  slide.addText("111", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "tool-card",
  module: "Tool Cards",
  title: "STOP五感正念",
  pageNumber: 111
};

module.exports = { createSlide, slideConfig };
