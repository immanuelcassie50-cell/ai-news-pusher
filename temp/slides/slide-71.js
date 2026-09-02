// slide-71.js - Don't Side With Either Party
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 71, title: '不替任何一方说话' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left decorative bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.08, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("不替任何一方说话", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Title underline
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 2.0, h: 0.04,
    fill: { color: theme.accent }
  });

  // Core message card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 1.1,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });

  // Quote mark
  slide.addText('"', {
    x: 0.6, y: 0.95, w: 0.5, h: 0.5,
    fontSize: 36, fontFace: "Georgia",
    color: theme.accent, bold: true
  });

  slide.addText("你不是替任何一方说话的人，你是那个让两边都能听见彼此在说什么的人", {
    x: 1.0, y: 1.2, w: 8.2, h: 0.9,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    valign: "middle"
  });

  // Key approach points
  const approaches = [
    '拒绝直接替家长去"劝"孩子',
    "把家长和孩子分别单独约出来聊",
    "问清楚每一方真正在担心什么、真正想要什么",
    "在双方都同意的情况下，找时间一起摆出来",
    "角色是翻译和主持，不是任何一方的代言人"
  ];

  const startY = 2.4;
  const itemHeight = 0.58;

  approaches.forEach((point, idx) => {
    const y = startY + idx * itemHeight;

    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.5,
      fill: { color: "FFFFFF" },
      rectRadius: 0.08,
      shadow: { type: `outer`, color: `000000`, blur: 2, offset: 1, angle: 135, opacity: 0.05 }
    });

    // Left accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.06, h: 0.5,
      fill: { color: theme.accent }
    });

    // Number
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.1, w: 0.3, h: 0.3,
      fill: { color: theme.primary }
    });
    slide.addText(String(idx + 1), {
      x: 0.7, y: y + 0.1, w: 0.3, h: 0.3,
      fontSize: 12, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: `center`, valign: `middle`
    });

    // Text
    slide.addText(point, {
      x: 1.15, y: y, w: 8.2, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });
  });

  // Page number badge (circle style, bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("71", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-71-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
