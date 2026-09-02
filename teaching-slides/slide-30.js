const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("影像学习（AAR）", {
    x: 0.5, y: 0.2, w: 7, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });
  slide.addText("After Action Review", {
    x: 7.5, y: 0.25, w: 2.3, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.light,
    align: "right", valign: "middle"
  });

  // Subtitle
  slide.addText("复盘反思，快速迭代", {
    x: 0.5, y: 0.55, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, margin: 0
  });

  // Four key questions - horizontal flow
  const questions = [
    {
      num: "1",
      title: "应该发生什么？",
      desc: "预期与目标",
      en: "Plan"
    },
    {
      num: "2",
      title: "实际发生了什么？",
      desc: "事实与观察",
      en: "Actual"
    },
    {
      num: "3",
      title: "两者差异的原因？",
      desc: "分析与原因",
      en: "Causes"
    },
    {
      num: "4",
      title: "下次如何改进？",
      desc: "经验与行动",
      en: "Learn"
    }
  ];

  const qStartX = 0.5;
  const qY = 1.2;
  const qW = 2.2;
  const qH = 2.8;
  const qGap = 0.2;

  questions.forEach((q, i) => {
    const x = qStartX + i * (qW + qGap);

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: qY, w: qW, h: qH,
      fill: { color: "ffffff" },
      line: { color: theme.light, width: 1 },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.12 }
    });

    // Top colored section
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: qY, w: qW, h: 0.9,
      fill: { color: i % 2 === 0 ? theme.primary : theme.accent }
    });

    // Number
    slide.addText(q.num, {
      x: x, y: qY + 0.1, w: qW, h: 0.5,
      fontSize: 28, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // English label
    slide.addText(q.en, {
      x: x, y: qY + 0.55, w: qW, h: 0.3,
      fontSize: 12, fontFace: "Arial",
      color: "ffffff", transparency: 30,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(q.title, {
      x: x + 0.15, y: qY + 1.1, w: qW - 0.3, h: 0.9,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // Description
    slide.addText(q.desc, {
      x: x + 0.15, y: qY + 2.0, w: qW - 0.3, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "middle", margin: 0
    });

    // Arrow between cards (except last)
    if (i < 3) {
      slide.addText("→", {
        x: x + qW, y: qY + 1.2, w: qGap, h: 0.5,
        fontSize: 22, fontFace: "Arial",
        color: theme.accent, bold: true,
        align: "center", valign: "middle"
      });
    }
  });

  // Bottom section - application note
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.2, w: 9, h: 1.5,
    fill: { color: theme.light }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.2, w: 0.1, h: 1.5,
    fill: { color: theme.accent }
  });

  slide.addText("AAR应用场景", {
    x: 0.8, y: 4.35, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Application tags
  const apps = [
    "项目复盘", "会议总结", "培训反思",
    "个人成长", "团队协作", "问题解决"
  ];

  let tagX = 0.8;
  apps.forEach((app, i) => {
    const tagW = app.length * 0.2 + 0.5;
    slide.addShape(pres.ShapeType.rect, {
      x: tagX, y: 4.85, w: tagW, h: 0.4,
      fill: { color: "ffffff" },
      line: { color: theme.secondary, width: 0.5 }
    });
    slide.addText(app, {
      x: tagX, y: 4.85, w: tagW, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary,
      align: "center", valign: "middle"
    });
    tagX += tagW + 0.15;
  });

  // Key principle
  slide.addText("核心：从经验中学习，把教训转化为行动", {
    x: 0.8, y: 5.35, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, margin: 0
  });

  return slide;
}

module.exports = { createSlide };
