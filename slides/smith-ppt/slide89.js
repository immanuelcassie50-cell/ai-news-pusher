const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("课程总结", {
    x: 0.5, y: 0.2, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Main title
  slide.addText("金句摘录", {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Georgia",
    color: theme.primary, bold: true
  });

  // Quotes
  const quotes = [
    {
      text: "\"我们每天所需的食物和饮料，不是出于屠户、酿酒师或烙面师的恩惠，而是出于他们自利的打算。\"",
      source: "《国富论》"
    },
    {
      text: "\"个人的野心与公共利益的一致，并非出于人类仁慈，而是因为理性人的自利行为会产生有益的社会结果。\"",
      source: "《道德情操论》"
    },
    {
      text: "\"关于法律和制度，有意识的理性设计往往不如在历史长河中自发演化的制度来得完善。\"",
      source: "哈耶克论斯密"
    }
  ];

  quotes.forEach((q, i) => {
    const y = 1.9 + i * 1.15;

    // Quote card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 9, h: 1.0,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 45, opacity: 0.1 }
    });

    // Quote mark
    slide.addText("“", {
      x: 0.6, y: y - 0.1, w: 0.5, h: 0.5,
      fontSize: 36, fontFace: "Georgia",
      color: theme.accent
    });

    // Quote text
    slide.addText(q.text, {
      x: 1.0, y: y + 0.15, w: 7.8, h: 0.55,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, italic: true
    });

    // Source
    slide.addText("—— " + q.source, {
      x: 1.0, y: y + 0.7, w: 7.8, h: 0.25,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light
    });
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("89", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
