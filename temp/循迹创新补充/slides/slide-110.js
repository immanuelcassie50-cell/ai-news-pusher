// slide-110.js - 高保真原型
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 110,
  title: '高保真原型 | High-Fidelity Prototype'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("高保真原型", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("High-Fidelity Prototype", {
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
  slide.addText("接近最终产品的体验", {
    x: 0.5, y: 1.5, w: 9, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // Content items - vertical list style with large numbers
  const items = [
    { num: "01", title: "视觉设计稿", desc: "完整的视觉设计，包含品牌色、字体、图标、间距等所有视觉元素" },
    { num: "02", title: "交互原型", desc: "可实际操作的原型，模拟真实用户操作流程和反馈效果" },
    { num: "03", title: "真实数据", desc: "使用真实或接近真实的内容填充，而非占位符" }
  ];

  items.forEach((item, i) => {
    const y = 2.0 + i * 1.0;

    // Number
    slide.addText(item.num, {
      x: 0.5, y: y, w: 0.7, h: 0.8,
      fontSize: 28, fontFace: "Arial",
      color: theme.accent, bold: true
    });

    // Divider line
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 1.3, y: y + 0.15, w: 0.03, h: 0.55,
      fill: { color: theme.light }
    });

    // Title
    slide.addText(item.title, {
      x: 1.5, y: y, w: 3, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(item.desc, {
      x: 1.5, y: y + 0.4, w: 7.5, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Tools section - right side box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.5, y: 2.0, w: 4, h: 2.6,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  slide.addText("推荐工具", {
    x: 5.7, y: 2.15, w: 3.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Tool grid
  const tools = [
    { name: "Figma", desc: "在线协作设计工具" },
    { name: "Sketch", desc: "Mac专业设计工具" },
    { name: "Adobe XD", desc: "Adobe创意云组件" },
    { name: "Framer", desc: "高保真交互原型" },
    { name: "ProtoPie", desc: "复杂交互动效" },
    { name: "InVision", desc: "设计协作平台" }
  ];

  tools.forEach((tool, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 5.7 + col * 1.9;
    const y = 2.6 + row * 0.65;

    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: y, w: 1.75, h: 0.55,
      fill: { color: theme.bg },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.05
    });
    slide.addText(tool.name, {
      x: x + 0.08, y: y + 0.05, w: 1.6, h: 0.25,
      fontSize: 10, fontFace: "Arial",
      color: theme.primary, bold: true
    });
    slide.addText(tool.desc, {
      x: x + 0.08, y: y + 0.28, w: 1.6, h: 0.22,
      fontSize: 8, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("110", {
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
  pres.writeFile({ fileName: "slide-110-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
