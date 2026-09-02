/**
 * Slide 97 - 压力评估问题详解
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
  slide.addText("压力评估问题详解", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Form layout - 2 columns
  const questions = [
    {
      q: "Q1: 整体压力水平",
      detail: "请在1-10之间评估你目前的压力水平。1=几乎没有压力，10=压力爆表",
      example: "参考：6-7分意味着压力明显但可管理"
    },
    {
      q: "Q2: 大块可用时间",
      detail: "每天有多少段时间超过15分钟可以用于心理保养？",
      example: "如：早起后、午休时、晚上睡前"
    },
    {
      q: "Q3: 碎片化时间",
      detail: "工作中的短暂休息、通勤路上等碎片时间有多少？",
      example: "这些时间适合做快速工具"
    },
    {
      q: "Q4: 压力高峰时段",
      detail: "一天中什么时候你感到压力最大？",
      example: "上午/下午/晚上？工作/家庭？"
    },
    {
      q: "Q5: 核心目标",
      detail: "你最希望通过心理保养达成什么？",
      example: "减少焦虑/改善睡眠/提升专注/情绪稳定"
    },
    {
      q: "Q6: 过往经验",
      detail: "你曾经尝试过哪些方法？（冥想、运动、写日记等）效果如何？",
      example: "这帮助你避开无效方案"
    }
  ];

  const colW = 4.4;
  const rowH = 1.25;
  const startX = 0.5;
  const startY = 1.0;
  const gapX = 0.2;
  const gapY = 0.15;

  questions.forEach((item, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (colW + gapX);
    const y = startY + row * (rowH + gapY);

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: colW, h: rowH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 45, opacity: 0.06 }
    });

    // Left accent
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.08, h: rowH,
      fill: { color: theme.primary }
    });

    // Question title
    slide.addText(item.q, {
      x: x + 0.2, y: y + 0.1, w: colW - 0.3, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Detail
    slide.addText(item.detail, {
      x: x + 0.2, y: y + 0.45, w: colW - 0.3, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false
    });

    // Example/tip
    slide.addText("💡 " + item.example, {
      x: x + 0.2, y: y + 0.9, w: colW - 0.3, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: false
    });
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("97", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
}

const slideConfig = {
  type: "content",
  module: "Module 7",
  title: "压力评估问题详解",
  pageNumber: 97
};

module.exports = { createSlide, slideConfig };
