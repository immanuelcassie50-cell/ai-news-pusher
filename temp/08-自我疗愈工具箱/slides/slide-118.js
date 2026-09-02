/**
 * Slide 118 - 工具卡片汇总展示
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
  slide.addText("工具卡片汇总", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("打印出来，随身携带，随时使用", {
    x: 0.5, y: 0.8, w: 9, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // 7 tool cards in grid
  const tools = [
    { num: "1", title: "4-7-8呼吸法", desc: "快速镇静" },
    { num: "2", title: "腹式呼吸", desc: "基础放松" },
    { num: "3", title: "三分钟呼吸空间", desc: "正念暂停" },
    { num: "4", title: "STOP五感正念", desc: "危机停顿" },
    { num: "5", title: "自我关怀话术", desc: "温柔待己" },
    { num: "6", title: "情绪释放四步法", desc: "情绪处理" },
    { num: "7", title: "感恩日记", desc: "积极培养" }
  ];

  const cardW = 2.0;
  const cardH = 1.45;
  const startX = 0.5;
  const startY = 1.2;
  const gapX = 0.15;
  const gapY = 0.12;

  // Row 1: 4 cards
  for (let i = 0; i < 4; i++) {
    const x = startX + i * (cardW + gapX);
    const y = startY;
    const tool = tools[i];

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: theme.primary }
    });

    // Number
    slide.addText(tool.num, {
      x: x + 0.1, y: y + 0.1, w: 0.4, h: 0.4,
      fontSize: 20, fontFace: "Arial",
      color: theme.accent, bold: true
    });

    // Title
    slide.addText(tool.title, {
      x: x + 0.1, y: y + 0.55, w: cardW - 0.2, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true
    });

    // Description
    slide.addText(tool.desc, {
      x: x + 0.1, y: y + 1.05, w: cardW - 0.2, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: false
    });
  }

  // Row 2: 3 cards (centered)
  const row2StartX = startX + (cardW + gapX) * 0.5;
  for (let i = 0; i < 3; i++) {
    const x = row2StartX + i * (cardW + gapX);
    const y = startY + cardH + gapY;
    const tool = tools[i + 4];

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: theme.accent }
    });

    // Number
    slide.addText(tool.num, {
      x: x + 0.1, y: y + 0.1, w: 0.4, h: 0.4,
      fontSize: 20, fontFace: "Arial",
      color: theme.secondary, bold: true
    });

    // Title
    slide.addText(tool.title, {
      x: x + 0.1, y: y + 0.55, w: cardW - 0.2, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true
    });

    // Description
    slide.addText(tool.desc, {
      x: x + 0.1, y: y + 1.05, w: cardW - 0.2, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: false
    });
  }

  // Bottom message
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.15, w: 9, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText("每天5分钟，守护心理健康", {
    x: 0.7, y: 4.3, w: 8.6, h: 0.4,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  slide.addText("将这些工具变成日常习惯，让心理自我疗愈成为生活的一部分", {
    x: 0.7, y: 4.7, w: 8.6, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false, align: "center"
  });

  // Page number
  slide.addText("118", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "summary",
  module: "Appendix",
  title: "工具卡片汇总展示",
  pageNumber: 118
};

module.exports = { createSlide, slideConfig };
