/**
 * Slide 116 - 常见问题解答
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
  slide.addText("常见问题解答", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Q&A pairs - 2 columns, 3 rows
  const qas = [
    {
      q: "Q1: 冥想时脑子停不下来怎么办？",
      a: "这是正常的。发现走神时，轻轻把注意力拉回呼吸即可，不必批评自己。每天练习5分钟，逐渐延长。"
    },
    {
      q: "Q2: 没有时间做所有练习怎么办？",
      a: "不需要全部做。选择1-2个适合你的工具，每天练习。哪怕5分钟的正念，也比不做要好。"
    },
    {
      q: "Q3: 这些方法真的有用吗？",
      a: "有大量科学研究支持。正念、PMR、呼吸练习等都有随机对照试验证明其有效性。"
    },
    {
      q: "Q4: 练习时反而更焦虑了？",
      a: "初期可能会这样，这是正常的适应过程。如果不适感很强，可以先从短时间开始，慢慢增加。"
    },
    {
      q: "Q5: 太清醒无法做睡前练习？",
      a: "可以尝试更被动的形式，如身体扫描冥想引导语，而不是主动集中注意力的练习。"
    },
    {
      q: "Q6: 可以听音乐练习吗？",
      a: "可以选择轻柔、没有歌词的背景音乐。但最好选择专门设计的放松音频，避免分心。"
    }
  ];

  const cardW = 4.4;
  const cardH = 1.25;
  const startX = 0.5;
  const startY = 1.05;
  const gapX = 0.2;
  const gapY = 0.12;

  qas.forEach((qa, i) => {
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

    // Q badge
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.35, h: cardH,
      fill: { color: theme.primary }
    });

    // Question
    slide.addText(qa.q, {
      x: x + 0.45, y: y + 0.08, w: cardW - 0.55, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true
    });

    // Answer
    slide.addText(qa.a, {
      x: x + 0.45, y: y + 0.38, w: cardW - 0.55, h: 0.8,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false
    });
  });

  // Page number
  slide.addText("116", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "content",
  module: "Appendix",
  title: "常见问题解答",
  pageNumber: 116
};

module.exports = { createSlide, slideConfig };
