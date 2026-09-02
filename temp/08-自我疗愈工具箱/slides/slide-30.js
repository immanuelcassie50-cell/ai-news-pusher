const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "常见问题解答",
  type: "content",
  pageNumber: 30
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
  slide.addText("常见问题解答", {
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

  // FAQ items
  const faqs = [
    {
      q: "练习时感觉头晕怎么办？",
      a: "立即停止练习，坐下或躺下休息。这是过度换气的表现，说明呼吸太深或太快。恢复正常呼吸即可缓解。"
    },
    {
      q: "我静不下心来，总是想看手机？",
      a: "这是正常的开始障碍。可以先从1分钟开始，逐渐增加时间。把手机放在另一个房间，使用计时器帮助专注。"
    },
    {
      q: "4-7-8呼吸法中的7秒屏气让我不舒服？",
      a: "可以缩短屏气时间到5秒，逐渐适应后再增加。关键是呼气要缓慢，屏气以舒适为度，不要勉强。"
    },
    {
      q: "身体扫描时感觉不到某些部位？",
      a: "这很正常。有些人确实对某些身体部位感觉迟钝。继续扫描即可，不需要刻意追求感觉。随着练习深入，觉察力会提高。"
    },
    {
      q: "PMR和身体扫描哪个更好？",
      a: "两者各有优势。PMR更适合有明显肌肉紧张的人，身体扫描更适合需要增加身心连接的人。可以根据当前状态选择或组合使用。"
    }
  ];

  const cardH = 0.75;
  const gap = 0.08;

  faqs.forEach((faq, i) => {
    const y = 1.2 + i * (cardH + gap);

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: y, w: 8.8, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 45, opacity: 0.08 }
    });

    // Q marker
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: y, w: 0.35, h: cardH,
      fill: { color: theme.primary }
    });
    slide.addText("Q", {
      x: 0.6, y: y, w: 0.35, h: cardH,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Question
    slide.addText(faq.q, {
      x: 1.05, y: y + 0.05, w: 8.2, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Answer
    slide.addText(faq.a, {
      x: 1.05, y: y + 0.35, w: 8.2, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "left", valign: "top"
    });
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
  slide.addText("30", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
