/**
 * Slide 99 - 工具选择练习
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Title with badge
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.35, w: 1.3, h: 0.45,
    fill: { color: theme.accent }
  });
  slide.addText("练习", {
    x: 0.5, y: 0.35, w: 1.3, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("工具选择练习", {
    x: 1.9, y: 0.35, w: 6, h: 0.45,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    valign: "middle"
  });

  // Instructions
  slide.addText("请认真思考以下四个问题，它们将帮助你制定个人化的工具组合", {
    x: 0.5, y: 0.9, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  // 4 questions as cards
  const exercises = [
    {
      num: "1",
      q: "哪个时间段最需要关注？",
      detail: "早晨醒来后？工作期间？傍晚？还是睡前？",
      space: "这个时段的压力特点是什么？"
    },
    {
      num: "2",
      q: "你偏好多长的练习时长？",
      detail: "1-3分钟快速工具？5-10分钟标准练习？",
      space: "考虑你的耐心和可坚持性"
    },
    {
      num: "3",
      q: "选择1-2个核心工具",
      detail: "基于你的需求，从上一页选择最匹配的",
      space: "每天固定练习，形成习惯"
    },
    {
      num: "4",
      q: "为不同场景配置工具",
      detail: "压力大时用什么？睡前用什么？早晨用什么？",
      space: "场景化配置更易坚持"
    }
  ];

  const cardW = 4.4;
  const cardH = 1.55;
  const startX = 0.5;
  const startY = 1.4;
  const gapX = 0.2;
  const gapY = 0.2;

  exercises.forEach((ex, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.08 }
    });

    // Number badge
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.2, y: y + 0.2, w: 0.55, h: 0.55,
      fill: { color: theme.primary }
    });
    slide.addText(ex.num, {
      x: x + 0.2, y: y + 0.2, w: 0.55, h: 0.55,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Question
    slide.addText(ex.q, {
      x: x + 0.9, y: y + 0.2, w: cardW - 1.1, h: 0.5,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      valign: "middle"
    });

    // Detail
    slide.addText(ex.detail, {
      x: x + 0.25, y: y + 0.8, w: cardW - 0.5, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false
    });

    // Space/reflection
    slide.addText("→ " + ex.space, {
      x: x + 0.25, y: y + 1.15, w: cardW - 0.5, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: false
    });
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("99", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
}

const slideConfig = {
  type: "exercise",
  module: "Module 7",
  title: "工具选择练习",
  pageNumber: 99
};

module.exports = { createSlide, slideConfig };
