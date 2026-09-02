// slide-72.js - Resilience Culture Building
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 72,
  title: '韧性文化建设路径'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("韧性文化建设路径", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Building path with arrows
  const steps = [
    { title: "心理安全", desc: "让员工敢于说真话、敢于提出不同意见" },
    { title: "学习导向", desc: "把失败当学习机会，而非追责的理由" },
    { title: "开放对话", desc: "鼓励跨层级、跨部门的坦诚对话" },
    { title: "共同价值观", desc: "建立"试错-复盘-改进"的组织文化" }
  ];

  steps.forEach((s, i) => {
    const y = 1.2 + i * 1.0;

    // Step number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: y, w: 0.6, h: 0.6,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: 0.5, y: y + 0.12, w: 0.6, h: 0.35,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center"
    });

    // Arrow line
    if (i < steps.length - 1) {
      slide.addShape(pres.shapes.LINE, {
        x: 0.8, y: y + 0.6, w: 0, h: 0.4,
        line: { color: theme.accent, width: 2 }
      });
    }

    // Content
    slide.addText(s.title, {
      x: 1.3, y: y, w: 2, h: 0.35,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "left"
    });
    slide.addText(s.desc, {
      x: 1.3, y: y + 0.35, w: 8, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "4A4A4A",
    accent: "C41E3A",
    light: "D4D4D4",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-72-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
