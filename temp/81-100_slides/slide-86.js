// slide-86.js - 同伴反馈表
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 86,
  title: '同伴反馈表'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("同伴反馈表", {
    x: 0.5, y: 0.35, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.95, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // Evaluation dimensions
  slide.addText("评估维度", {
    x: 0.5, y: 1.15, w: 4.3, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  const dimensions = [
    { name: "内容专业度", desc: "知识准确、案例贴切、逻辑清晰" },
    { name: "表达呈现", desc: "语言流畅、姿态自然、眼神交流" },
    { name: "互动设计", desc: "提问有效、鼓励参与、时间控制" },
    { name: "学员收获", desc: "知识点明确、能应用于实际" }
  ];

  dimensions.forEach((dim, i) => {
    const y = 1.6 + i * 0.85;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 4.3, h: 0.75,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    slide.addText(dim.name, {
      x: 0.65, y: y + 0.1, w: 1.5, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, margin: 0
    });

    slide.addText(dim.desc, {
      x: 0.65, y: y + 0.42, w: 4, h: 0.28,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, margin: 0
    });
  });

  // Feedback prompts
  slide.addText("反馈话术", {
    x: 5.1, y: 1.15, w: 4.4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.6, w: 4.4, h: 3.45,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });

  const prompts = [
    "\"我觉得你开场很好，因为...\"",
    "\"如果是我，可能会...\"",
    "\"有一个地方让我印象最深...\"",
    "\"我有一个建议...\"",
    "\"你的案例让我想到...\""
  ];

  prompts.forEach((prompt, i) => {
    slide.addText((i + 1) + ". " + prompt, {
      x: 5.3, y: 1.75 + i * 0.6, w: 4, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "top", margin: 0
    });
  });

  // Bottom note
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 4.7, w: 4.4, h: 0.35,
    fill: { color: theme.light }
  });
  slide.addText("反馈原则：具体、真诚、建设性", {
    x: 5.1, y: 4.7, w: 4.4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle", margin: 0
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("86", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "4A4A4A",
    accent: "FF6B6B",
    light: "F5F5F5",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/81-100_slides/slide-86-preview.pptx" });
}

module.exports = { createSlide, slideConfig };