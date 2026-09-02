// slide-109.js - 中保真原型
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 109,
  title: '中保真原型 | Mid-Fidelity Prototype'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("中保真原型", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("Mid-Fidelity Prototype", {
    x: 0.5, y: 0.95, w: 9, h: 0.35,
    fontSize: 16, fontFace: "Arial",
    color: theme.secondary
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.35, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Subtitle
  slide.addText("平衡效率与精度", {
    x: 0.5, y: 1.5, w: 9, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // Three types in horizontal cards
  const types = [
    { title: "数字线框图", desc: "使用专业工具绘制标准化线框图，呈现界面布局和元素关系" },
    { title: "交互流程图", desc: "用流程图工具绘制用户操作路径，清晰展示交互逻辑" },
    { title: "灰度原型", desc: "不做颜色装饰，专注布局和交互，突出功能性设计" }
  ];

  types.forEach((item, i) => {
    const x = 0.5 + i * 3.1;

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 2.0, w: 2.9, h: 2.2,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Top accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 2.0, w: 2.9, h: 0.06,
      fill: { color: theme.accent }
    });

    // Number
    slide.addText(String(i + 1), {
      x: x + 0.15, y: 2.2, w: 0.4, h: 0.4,
      fontSize: 24, fontFace: "Arial",
      color: theme.accent, bold: true
    });

    // Title
    slide.addText(item.title, {
      x: x + 0.15, y: 2.65, w: 2.6, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(item.desc, {
      x: x + 0.15, y: 3.1, w: 2.6, h: 1.0,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Tools section at bottom
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.4, w: 9, h: 0.9,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  slide.addText("工具推荐", {
    x: 0.7, y: 4.5, w: 1.2, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const tools = ["Sketch", "Figma", "Axure", "Balsamiq", "Mockplus", "Adobe XD"];
  tools.forEach((tool, i) => {
    const x = 0.7 + i * 1.5;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: 4.9, w: 1.3, h: 0.3,
      fill: { color: theme.light },
      rectRadius: 0.05
    });
    slide.addText(tool, {
      x: x, y: 4.9, w: 1.3, h: 0.3,
      fontSize: 10, fontFace: "Arial",
      color: theme.primary, align: "center", valign: "middle"
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("109", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
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
    primary: "333333",
    secondary: "666666",
    accent: "C41A1A",
    light: "D9D9D9",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-109-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
