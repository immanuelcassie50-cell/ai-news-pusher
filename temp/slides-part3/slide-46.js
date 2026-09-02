// slide-46.js - 进入第四部分前确认
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 46,
  title: '进入第四部分前确认'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("进入第四部分前确认", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText("Before you move on to Part 4:", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.accent, italic: true
  });

  // Left column - 话术模板
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.5, w: 4.3, h: 3.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.5, w: 4.3, h: 0.55,
    fill: { color: theme.secondary }
  });
  slide.addText("话术模板", {
    x: 0.5, y: 1.5, w: 4.3, h: 0.55,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  const speechChecks = [
    "话术模板初稿已经生成",
    "完成了第一轮验证",
    "需要修改的地方已经标注出来"
  ];

  speechChecks.forEach((item, i) => {
    const y = 2.2 + i * 0.7;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.7, y: y, w: 0.25, h: 0.25,
      fill: { color: theme.bg },
      line: { color: theme.secondary, width: 1.5 }
    });
    slide.addText(item, {
      x: 1.1, y: y - 0.05, w: 3.5, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });

  // Right column - SOP
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.5, w: 4.3, h: 3.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.5, w: 4.3, h: 0.55,
    fill: { color: theme.primary }
  });
  slide.addText("SOP", {
    x: 5.2, y: 1.5, w: 4.3, h: 0.55,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  const sopChecks = [
    "SOP初稿已经生成",
    "完成了第一轮验证"
  ];

  sopChecks.forEach((item, i) => {
    const y = 2.2 + i * 0.7;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.4, y: y, w: 0.25, h: 0.25,
      fill: { color: theme.bg },
      line: { color: theme.primary, width: 1.5 }
    });
    slide.addText(item, {
      x: 5.8, y: y - 0.05, w: 3.5, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });

  // Note at bottom
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.85, w: 9, h: 0.6,
    fill: { color: theme.light }
  });
  slide.addText("进入第四部分后，会有交叉验证环节帮你进一步打磨这两份工具", {
    x: 0.5, y: 4.85, w: 9, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("46", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "22223b",
    secondary: "c94134",
    accent: "c9ada7",
    light: "f5f5f5",
    bg: "fafafa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides-part3/slide-46-preview.pptx" });
}

module.exports = { createSlide, slideConfig };