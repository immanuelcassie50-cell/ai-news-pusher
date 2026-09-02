// slide-02.js - Back Side: 检核要点
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 2,
  title: '检核要点'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 5.83, h: 0.5,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("预警话术速查卡 - 检核要点", {
    x: 0.15, y: 0.08, w: 5.5, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Gold accent line under header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0.5, w: 5.83, h: 0.04,
    fill: { color: theme.accent }
  });

  // LEFT SECTION - 四大原则检核要点
  // Section header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.15, y: 0.65, w: 3.3, h: 0.28,
    fill: { color: theme.secondary }
  });
  slide.addText("3. 四大原则检核要点", {
    x: 0.15, y: 0.65, w: 3.3, h: 0.28,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  const principles = [
    {
      title: "提前预警原则",
      checks: [
        "风险信号出现24小时内启动沟通？",
        "是主动沟通而非被动回应？"
      ]
    },
    {
      title: "证据支撑原则",
      checks: [
        "准备了具体的数据和事实？",
        "引用了可验证的信息来源？"
      ]
    },
    {
      title: "双向沟通原则",
      checks: [
        "传递了压力和信息？",
        "预留了充分倾听时间？",
        "让对方表达了观点？"
      ]
    },
    {
      title: "利益明确原则",
      checks: [
        "明确了对方的核心利益点？",
        "说明了项目对对方的好处？",
        "提出了互惠的合作方案？"
      ]
    }
  ];

  let yPos = 1.0;
  principles.forEach((p, idx) => {
    // Principle card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.15, y: yPos, w: 3.3, h: 0.75 + (p.checks.length - 2) * 0.18,
      fill: { color: theme.light },
      line: { color: theme.primary, width: 0.5 }
    });

    // Left accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.15, y: yPos, w: 0.06, h: 0.75 + (p.checks.length - 2) * 0.18,
      fill: { color: theme.accent }
    });

    // Title
    slide.addText((idx + 1) + ". " + p.title, {
      x: 0.28, y: yPos + 0.03, w: 3.1, h: 0.22,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });

    // Checkboxes
    p.checks.forEach((check, cIdx) => {
      slide.addText("□  " + check, {
        x: 0.3, y: yPos + 0.28 + cIdx * 0.18, w: 3.1, h: 0.18,
        fontSize: 8, fontFace: "Microsoft YaHei",
        color: theme.secondary, valign: "middle"
      });
    });

    yPos += 0.78 + (p.checks.length - 2) * 0.18;
  });

  // RIGHT SECTION - 关键提示语
  // Section header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.6, y: 0.65, w: 2.08, h: 0.28,
    fill: { color: theme.secondary }
  });
  slide.addText("4. 关键提示语", {
    x: 3.6, y: 0.65, w: 2.08, h: 0.28,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  const phrases = [
    "“我想听听您的真实想法”",
    "“这个项目对您意味着什么”",
    "“我们怎么一起解决这个问题”",
    "“如果这个项目失败了，谁会受影响”",
    "“我需要您的支持”"
  ];

  // Phrase cards
  let phraseY = 1.0;
  phrases.forEach((phrase, idx) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 3.6, y: phraseY, w: 2.08, h: 0.45,
      fill: { color: theme.light },
      line: { color: theme.accent, width: 1 }
    });

    // Quote mark
    slide.addText("“", {
      x: 3.65, y: phraseY - 0.05, w: 0.2, h: 0.25,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });

    // Phrase text
    slide.addText(phrase, {
      x: 3.75, y: phraseY + 0.05, w: 1.85, h: 0.35,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });

    phraseY += 0.5;
  });

  // Usage tip box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.6, y: 3.55, w: 2.08, h: 0.9,
    fill: { color: theme.primary, transparency: 10 },
    line: { color: theme.primary, width: 0.5 }
  });

  slide.addText("使用时机", {
    x: 3.65, y: 3.6, w: 2.0, h: 0.2,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText([
    { text: "开场时 → 建立信任氛围", options: { breakLine: true } },
    { text: "僵局时 → 打破沟通壁垒", options: { breakLine: true } },
    { text: "收尾时 → 确认行动共识", options: {} }
  ], {
    x: 3.65, y: 3.82, w: 2.0, h: 0.6,
    fontSize: 8, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Bottom summary bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.15, y: 5.0, w: 5.53, h: 0.35,
    fill: { color: theme.secondary }
  });
  slide.addText("核心心法：主动预警 + 证据说话 + 双向倾听 + 利益捆绑 = 有效沟通", {
    x: 0.2, y: 5.0, w: 5.4, h: 0.35,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 5.35, y: 7.9, w: 0.35, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("2", {
    x: 5.35, y: 7.9, w: 0.35, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "8B0000",
    accent: "FFD700",
    light: "F5F5F5",
    bg: "FFFFFF"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-02-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
