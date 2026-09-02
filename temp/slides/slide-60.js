// slide-60.js - Content: Let Child Participate Really
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 60, title: '让孩子真正参与' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("让孩子真正参与", {
    x: 0.5, y: 0.35, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Subtitle
  slide.addText("第八章：志愿表的真正意义", {
    x: 0.5, y: 0.9, w: 4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Key methods - vertical cards layout
  const methods = [
    { num: "1", text: "单独跟孩子聊一段时间，家长不在场" },
    { num: "2", text: "孩子更容易说真话" },
    { num: "3", text: "这个环节比任何一次冲稳保的计算都重要" },
    { num: "4", text: "虽然它不出现在交付的表格里，但它是唯一没办法被工具替代的部分" }
  ];

  methods.forEach((item, idx) => {
    const y = 1.35 + idx * 0.85;

    // Card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.75,
      fill: { color: "FFFFFF" },
      rectRadius: 0.08,
      shadow: { type: 'outer', color: '000000', blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Number badge
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.12, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(item.num, {
      x: 0.7, y: y + 0.12, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Text
    slide.addText(item.text, {
      x: 1.4, y: y, w: 7.9, h: 0.75,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });
  });

  // Bottom highlight
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.75, w: 9, h: 0.65,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("真正有价值的时刻：孩子真正被问过“你是谁”“你想要什么”", {
    x: 0.5, y: 4.75, w: 9, h: 0.65,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge (circle style, bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.accent }
  });
  slide.addText("60", {
    x: 0.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-60-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
