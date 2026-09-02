// slide-02.js - Course Objectives
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 2,
  title: '课程目标'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.8,
    fill: { color: theme.primary }
  });

  slide.addText("课程目标", {
    x: 0.5, y: 0.15, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Page number
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("2", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Core axiom box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 9, h: 0.8,
    fill: { color: theme.light }
  });

  slide.addText("核心公理：流量能带来陌生人的关注，不能带来陌生人的托付；培训师真正的生意，从来发生在客户已经决定信任你之后，而不是之前。", {
    x: 0.7, y: 1.1, w: 8.6, h: 0.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Three columns
  const colWidth = 2.9;
  const colGap = 0.2;
  const startX = 0.5;
  const colY = 2.0;

  // Knowledge column
  slide.addShape(pres.shapes.RECTANGLE, {
    x: startX, y: colY, w: colWidth, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("知识目标", {
    x: startX, y: colY, w: colWidth, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText([
    { text: "理解信任资产与流量资产的本质区别", options: { bullet: true, breakLine: true } },
    { text: "掌握培训师信任积累的完整机制", options: { bullet: true, breakLine: true } },
    { text: "识别行业内的关键信任行为节点", options: { bullet: true, breakLine: true } },
    { text: "认知两种不同的信任逻辑", options: { bullet: true } }
  ], {
    x: startX, y: colY + 0.6, w: colWidth, h: 2.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top"
  });

  // Skills column
  const col2X = startX + colWidth + colGap;
  slide.addShape(pres.shapes.RECTANGLE, {
    x: col2X, y: colY, w: colWidth, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("技能目标", {
    x: col2X, y: colY, w: colWidth, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText([
    { text: "运用课前调研技术获取甲方真实需求", options: { bullet: true, breakLine: true } },
    { text: "掌握报价谈判中的信任浓度判断", options: { bullet: true, breakLine: true } },
    { text: "建立老客户转介绍网络的结构化方法", options: { bullet: true, breakLine: true } },
    { text: "设计课后跟进机制延伸信任链条", options: { bullet: true, breakLine: true } },
    { text: "具备拒绝不合适项目的判断框架", options: { bullet: true } }
  ], {
    x: col2X, y: colY + 0.6, w: colWidth, h: 2.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top"
  });

  // Attitude column
  const col3X = col2X + colWidth + colGap;
  slide.addShape(pres.shapes.RECTANGLE, {
    x: col3X, y: colY, w: colWidth, h: 0.5,
    fill: { color: theme.secondary }
  });
  slide.addText("态度目标", {
    x: col3X, y: colY, w: colWidth, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText([
    { text: '建立"信任优先"的职业心态', options: { bullet: true, breakLine: true } },
    { text: "培养长期主义视角", options: { bullet: true, breakLine: true } },
    { text: '塑造"说NO比说YES更能建立信任"', options: { bullet: true, breakLine: true } },
    { text: '认同"熬过看不见反馈的那几年"', options: { bullet: true } }
  ], {
    x: col3X, y: colY + 0.6, w: colWidth, h: 2.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "424242",
    accent: "C62828",
    light: "FFCDD2",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-02-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
