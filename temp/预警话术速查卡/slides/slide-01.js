// slide-01.js - Front Side: 话术模板
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 1,
  title: '话术模板'
};

function createSlide(pres, theme) {
  // A5 size portrait: 5.83" x 8.27"
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 5.83, h: 0.5,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("预警话术速查卡 - 话术模板", {
    x: 0.15, y: 0.08, w: 5.5, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Gold accent line under header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0.5, w: 5.83, h: 0.04,
    fill: { color: theme.accent }
  });

  // LEFT SECTION - 开场预警话术模板
  // Section header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.15, y: 0.65, w: 2.6, h: 0.28,
    fill: { color: theme.secondary }
  });
  slide.addText("1. 开场预警话术模板", {
    x: 0.15, y: 0.65, w: 2.6, h: 0.28,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // Template content box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.15, y: 1.0, w: 2.6, h: 2.5,
    fill: { color: theme.light },
    line: { color: theme.primary, width: 0.5 }
  });

  slide.addText([
    { text: "“XX（称呼），关于XX项目，我想跟您沟通一个重要情况。", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "根据目前观察到的一些信号，我发现了一些需要我们共同关注的问题：", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "[列举具体观察到的风险信号]", options: { color: theme.secondary, italic: true, breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "这些问题如果不及时处理，可能会导致[说明潜在后果]。", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "我想听听您的看法，也想了解一下您这边是否有什么我不太了解的情况？”", options: {} }
  ], {
    x: 0.2, y: 1.05, w: 2.5, h: 2.4,
    fontSize: 8, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "top"
  });

  // RIGHT SECTION - 六种反应的应对话术关键词
  // Section header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 2.95, y: 0.65, w: 2.73, h: 0.28,
    fill: { color: theme.secondary }
  });
  slide.addText("2. 六种反应的应对话术关键词", {
    x: 2.95, y: 0.65, w: 2.73, h: 0.28,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // Reactions grid
  const reactions = [
    { num: "1", title: "完全支持", keywords: "感谢认同、发挥影响、邀请参与决策", color: "2E7D32" },
    { num: "2", title: "策略性观望", keywords: "主动沟通、消除顾虑、提供信息", color: "1976D2" },
    { num: "3", title: "小声抱怨", keywords: "一对一倾听、记录诉求、解决合理问题、明确期望", color: "F57C00" },
    { num: "4", title: "公开反对", keywords: "高层介入、明确风险责任、寻求支持、换人对接", color: "C62828" },
    { num: "5", title: "暗中破坏", keywords: "收集证据、立即上报、做最坏打算、法律途径", color: "6A1B9A" },
    { num: "6", title: "不置可否", keywords: "持续跟进、约定反馈时间、书面确认", color: "455A64" }
  ];

  let yPos = 1.0;
  reactions.forEach((r, idx) => {
    // Reaction card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 2.95, y: yPos, w: 2.73, h: 0.4,
      fill: { color: theme.light },
      line: { color: r.color, width: 1 }
    });

    // Number badge
    slide.addShape(pres.shapes.OVAL, {
      x: 3.0, y: yPos + 0.05, w: 0.3, h: 0.3,
      fill: { color: r.color }
    });
    slide.addText(r.num, {
      x: 3.0, y: yPos + 0.05, w: 0.3, h: 0.3,
      fontSize: 10, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    // Title
    slide.addText(r.title, {
      x: 3.35, y: yPos + 0.02, w: 1.0, h: 0.2,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: r.color, bold: true, valign: "middle"
    });

    // Keywords
    slide.addText(r.keywords, {
      x: 3.35, y: yPos + 0.2, w: 2.25, h: 0.18,
      fontSize: 7, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "top"
    });

    yPos += 0.42;
  });

  // Bottom tip
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.15, y: 3.6, w: 5.53, h: 0.25,
    fill: { color: theme.accent, transparency: 30 }
  });
  slide.addText("提示：根据对方反应选择对应关键词，灵活组合使用", {
    x: 0.2, y: 3.6, w: 5.4, h: 0.25,
    fontSize: 8, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true, valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 5.35, y: 7.9, w: 0.35, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("1", {
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
  pres.writeFile({ fileName: "slide-01-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
