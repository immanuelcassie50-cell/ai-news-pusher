// slide-04.js - 写vs说对比
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 4,
  title: '写和说，激活的是不同的脑子'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 页面标题
  slide.addText("写和说，激活的是不同的脑子", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });

  // 左侧卡片 - 写作
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.3, h: 3.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });

  // 写作标题背景
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.3, h: 0.7,
    fill: { color: theme.secondary }
  });

  // 写作标题
  slide.addText("写作", {
    x: 0.5, y: 1.2, w: 4.3, h: 0.7,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // 写作内容
  slide.addText([
    { text: "激活\"整理和美化\"机制", options: { bullet: true, breakLine: true } },
    { text: "写出\"应该怎么做\"的标准答案", options: { bullet: true, breakLine: true } },
    { text: "几乎没有真正的服务逻辑", options: { bullet: true } }
  ], {
    x: 0.7, y: 2.0, w: 3.9, h: 1.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left", valign: "top",
    paraSpaceAfter: 8
  });

  // 写作示例标签
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 3.5, w: 0.6, h: 0.35,
    fill: { color: theme.light }
  });
  slide.addText("示例", {
    x: 0.7, y: 3.5, w: 0.6, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, align: "center", valign: "middle"
  });

  // 写作示例内容
  slide.addText("\"首先要安抚客户情绪，然后再进行理性分析。\"", {
    x: 0.7, y: 3.95, w: 3.9, h: 0.9,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, italic: true, align: "left", valign: "top"
  });

  // 中间对比箭头
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.85, y: 2.8, w: 0.3, h: 0.08,
    fill: { color: theme.accent }
  });
  slide.addText("VS", {
    x: 4.7, y: 2.5, w: 0.6, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.accent, bold: true, align: "center", valign: "middle"
  });

  // 右侧卡片 - 访谈
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.2, w: 4.3, h: 3.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });

  // 访谈标题背景 - 使用强调色
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.2, w: 4.3, h: 0.7,
    fill: { color: theme.accent }
  });

  // 访谈标题
  slide.addText("访谈", {
    x: 5.2, y: 1.2, w: 4.3, h: 0.7,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // 访谈内容
  slide.addText([
    { text: "激活\"经验提取\"机制", options: { bullet: true, breakLine: true } },
    { text: "说出\"实际上怎么做\"的真实过程", options: { bullet: true, breakLine: true } },
    { text: "携带大量情境化的服务逻辑", options: { bullet: true } }
  ], {
    x: 5.4, y: 2.0, w: 3.9, h: 1.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false, align: "left", valign: "top",
    paraSpaceAfter: 8
  });

  // 访谈标签
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.4, y: 3.5, w: 0.6, h: 0.35,
    fill: { color: theme.accent, transparency: 30 }
  });
  slide.addText("优势", {
    x: 5.4, y: 3.5, w: 0.6, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center", valign: "middle"
  });

  // 访谈优势说明
  slide.addText("真实的场景还原，细腻的情绪感知，具体的应对策略", {
    x: 5.4, y: 3.95, w: 3.9, h: 0.9,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false, italic: true, align: "left", valign: "top"
  });

  // 页码徽章
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("04", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B2942",
    secondary: "4A4A4A",
    accent: "C75B5B",
    light: "E8D5D5",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/ppt-slides/slide-04-preview.pptx" });
}

module.exports = { createSlide, slideConfig };