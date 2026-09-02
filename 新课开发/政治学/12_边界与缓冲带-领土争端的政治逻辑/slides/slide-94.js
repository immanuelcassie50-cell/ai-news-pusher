// slide-94.js - 条约修订的条件与程序
const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("条约修订的条件与程序", {
    x: 0.5, y: 0.3, w: 8, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText("Treaty Amendment Process", {
    x: 0.5, y: 0.85, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary
  });

  // Process flow - horizontal steps
  const steps = [
    { num: "1", title: "提出修订", desc: "缔约方提出建议" },
    { num: "2", title: "协商谈判", desc: "各方表达立场" },
    { num: "3", title: "达成共识", desc: "形成修订草案" },
    { num: "4", title: "正式批准", desc: "国内法律程序" }
  ];

  const stepWidth = 2.2;
  const startX = 0.6;

  steps.forEach((step, i) => {
    const x = startX + i * stepWidth;

    // Step box
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.5, w: 2.0, h: 1.4,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 1 }
    });

    // Step number circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.7, y: 1.25, w: 0.6, h: 0.6,
      fill: { color: theme.accent }
    });
    slide.addText(step.num, {
      x: x + 0.7, y: 1.28, w: 0.6, h: 0.55,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Step title
    slide.addText(step.title, {
      x: x + 0.1, y: 1.9, w: 1.8, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center"
    });

    // Step description
    slide.addText(step.desc, {
      x: x + 0.1, y: 2.3, w: 1.8, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });

    // Arrow between steps
    if (i < 3) {
      slide.addText("→", {
        x: x + 1.85, y: 1.9, w: 0.5, h: 0.5,
        fontSize: 20, fontFace: "Arial",
        color: theme.accent, bold: true, align: "center"
      });
    }
  });

  // Conditions section
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.2, w: 4.3, h: 2.1,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 0.5 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.2, w: 4.3, h: 0.45,
    fill: { color: theme.primary }
  });

  slide.addText("修订条件", {
    x: 0.7, y: 3.25, w: 3.9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  const conditions = [
    "条约中包含修订条款",
    "全体缔约方一致同意",
    "符合国际法基本原则",
    "不损害第三方权益"
  ];

  conditions.forEach((cond, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: 3.8 + i * 0.4, w: 0.12, h: 0.12,
      fill: { color: theme.accent }
    });
    slide.addText(cond, {
      x: 0.95, y: 3.72 + i * 0.4, w: 3.7, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });

  // Key consideration box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 3.2, w: 4.3, h: 2.1,
    fill: { color: theme.light, transparency: 50 },
    line: { color: theme.accent, width: 1 }
  });

  slide.addText("关键考量", {
    x: 5.4, y: 3.35, w: 3.9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("条约修订并非易事，实际案例中极为罕见。更常见的做法是通过附加议定书、谅解备忘录或"习惯法"演变来实现实质修订。", {
    x: 5.4, y: 3.8, w: 3.9, h: 1.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("94", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "c9ada7",
    bg: "edf2f4"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: './slide-94-preview.pptx' });
}

module.exports = { createSlide };
