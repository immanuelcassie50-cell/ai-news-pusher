// slide-34.js - 提示词模板 · 经验素材与完成标志
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 34,
  title: '提示词模板 · 经验素材与完成标志'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("提示词模板 · 经验素材与完成标志", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape("rect", {
    x: 0.5, y: 1.05, w: 1.5, h: 0.05,
    fill: { color: theme.accent }
  });

  // Left column - 经验素材
  slide.addShape("rect", {
    x: 0.5, y: 1.35, w: 4.3, h: 3.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });

  // Left header
  slide.addShape("rect", {
    x: 0.5, y: 1.35, w: 4.3, h: 0.55,
    fill: { color: theme.secondary }
  });
  slide.addText("经验素材", {
    x: 0.5, y: 1.35, w: 4.3, h: 0.55,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Left content
  slide.addText([
    { text: "以下是从访谈中提炼的操作步骤和判断逻辑类素材，请基于这些素材生成SOP：\n\n", options: { color: theme.primary } },
    { text: "[ ] 客户的典型诉求有哪些\n\n", options: { color: theme.secondary } },
    { text: "[ ] 处理这个场景的标准步骤\n\n", options: { color: theme.secondary } },
    { text: "[ ] 每一步的判断节点\n\n", options: { color: theme.secondary } },
    { text: "[ ] 容易犯什么错\n\n", options: { color: theme.secondary } },
    { text: "[ ] 遇到突发情况的处理方式" }
  ], {
    x: 0.7, y: 2.0, w: 3.9, h: 3.0,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "top"
  });

  // Right column - 服务完成的标志
  slide.addShape("rect", {
    x: 5.2, y: 1.35, w: 4.3, h: 3.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });

  // Right header
  slide.addShape("rect", {
    x: 5.2, y: 1.35, w: 4.3, h: 0.55,
    fill: { color: theme.primary }
  });
  slide.addText("服务完成的标志", {
    x: 5.2, y: 1.35, w: 4.3, h: 0.55,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Right content
  slide.addText([
    { text: "描述：如何判断这个服务场景被成功处理了，客户的反应或行为是什么\n\n", options: { color: theme.primary } },
    { text: "示例：\n", options: { color: theme.secondary, bold: true } },
    { text: "\"客户表示理解，愿意继续持有或明确选择下一步操作，电话结束时语气平稳\"" }
  ], {
    x: 5.4, y: 2.0, w: 3.9, h: 3.0,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "top"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("34", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides-part3/slide-34-preview.pptx" });
}

module.exports = { createSlide, slideConfig };