// slide-69.js - 渐进式惩罚
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 69,
  title: '渐进式惩罚'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("渐进式惩罚", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("Allows for forgiveness while maintaining deterrent", {
    x: 0.5, y: 1.1, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, italic: true,
    align: "left", valign: "middle"
  });

  // Timeline/stepped process
  const steps = [
    { level: "第一次", action: "警告", english: "Warning", color: theme.light },
    { level: "第二次", action: "罚款", english: "Fine", color: theme.secondary },
    { level: "第三次", action: "终止合作", english: "Termination", color: theme.primary }
  ];

  // Timeline line
  slide.addShape("rect", {
    x: 1.5, y: 2.95, w: 7, h: 0.06,
    fill: { color: theme.light }
  });

  steps.forEach((step, idx) => {
    const x = 1.5 + idx * 3.5;

    // Circle node
    slide.addShape("ellipse", {
      x: x + 0.6, y: 2.7, w: 0.55, h: 0.55,
      fill: { color: step.color },
      line: { color: theme.primary, width: 2 }
    });

    // Step number inside circle
    slide.addText(String(idx + 1), {
      x: x + 0.6, y: 2.7, w: 0.55, h: 0.55,
      fontSize: 16, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Card below
    slide.addShape("rect", {
      x: x, y: 3.5, w: 1.75, h: 1.6,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Level label
    slide.addText(step.level, {
      x: x, y: 3.6, w: 1.75, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });

    // Action (main text)
    slide.addText(step.action, {
      x: x, y: 4.0, w: 1.75, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // English
    slide.addText(step.english, {
      x: x, y: 4.5, w: 1.75, h: 0.4,
      fontSize: 11, fontFace: "Georgia",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Arrow indicators between steps
  slide.addText(">", {
    x: 2.9, y: 2.7, w: 0.5, h: 0.55,
    fontSize: 20, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText(">", {
    x: 6.4, y: 2.7, w: 0.5, h: 0.55,
    fontSize: 20, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addText("69", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 14, fontFace: "Georgia",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "2c5282",
    accent: "d69e2e",
    light: "bee3f8",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-69-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
