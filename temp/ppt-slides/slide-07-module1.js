// slide-07.js - 失效信号二：过程控制 vs 结果衡量
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 7,
  title: '失效信号二：过程控制 vs 结果衡量'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧装饰条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // 页面标题
  slide.addText("失效信号二：过程控制 vs 结果衡量", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });

  // 左侧卡片 - 过程控制
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 4.3, h: 3.9,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });

  // 过程控制头部
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 4.3, h: 0.65,
    fill: { color: theme.secondary }
  });
  slide.addText("过程控制", {
    x: 0.5, y: 1.0, w: 4.3, h: 0.65,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // 过程控制特征
  slide.addText("典型表现", {
    x: 0.7, y: 1.8, w: 1.2, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, align: "left", valign: "middle"
  });

  slide.addText([
    { text: "审批流程是否合规", options: { bullet: true, breakLine: true } },
    { text: "会议纪要是否完整", options: { bullet: true, breakLine: true } },
    { text: "报表是否按时提交", options: { bullet: true } }
  ], {
    x: 0.7, y: 2.15, w: 3.9, h: 1.0,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left", valign: "top",
    paraSpaceAfter: 4
  });

  // 过程控制结果
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 3.2, w: 3.9, h: 0.04,
    fill: { color: theme.light }
  });

  slide.addText("结果", {
    x: 0.7, y: 3.35, w: 0.8, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });

  slide.addText("形式上合规，但效果无法保证", {
    x: 0.7, y: 3.7, w: 3.9, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left", valign: "middle"
  });

  // 过程控制标签
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 4.3, w: 0.6, h: 0.35,
    fill: { color: theme.light }
  });
  slide.addText("问题", {
    x: 0.7, y: 4.3, w: 0.6, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, align: "center", valign: "middle"
  });
  slide.addText("本末倒置，形式大于内容", {
    x: 1.4, y: 4.3, w: 3.2, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });

  // 中间箭头
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.85, y: 2.7, w: 0.3, h: 0.06,
    fill: { color: theme.accent }
  });
  slide.addText("VS", {
    x: 4.7, y: 2.4, w: 0.6, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.accent, bold: true, align: "center", valign: "middle"
  });

  // 右侧卡片 - 结果衡量
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.0, w: 4.3, h: 3.9,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });

  // 结果衡量头部 - 使用强调色
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.0, w: 4.3, h: 0.65,
    fill: { color: theme.accent }
  });
  slide.addText("结果衡量", {
    x: 5.2, y: 1.0, w: 4.3, h: 0.65,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // 结果衡量特征
  slide.addText("典型表现", {
    x: 5.4, y: 1.8, w: 1.2, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });

  slide.addText([
    { text: "成本降低多少", options: { bullet: true, breakLine: true } },
    { text: "效率提升多少", options: { bullet: true, breakLine: true } },
    { text: "客户满意度变化", options: { bullet: true } }
  ], {
    x: 5.4, y: 2.15, w: 3.9, h: 1.0,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false, align: "left", valign: "top",
    paraSpaceAfter: 4
  });

  // 结果衡量结果
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.4, y: 3.2, w: 3.9, h: 0.04,
    fill: { color: theme.accent, transparency: 50 }
  });

  slide.addText("结果", {
    x: 5.4, y: 3.35, w: 0.8, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });

  slide.addText("用数据说话，让效果可见", {
    x: 5.4, y: 3.7, w: 3.9, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false, align: "left", valign: "middle"
  });

  // 结果衡量标签
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.4, y: 4.3, w: 0.6, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("优势", {
    x: 5.4, y: 4.3, w: 0.6, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText("目标清晰，可衡量", {
    x: 6.1, y: 4.3, w: 3.2, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });

  // 页码徽章
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("07", {
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
    primary: "1a365d",
    secondary: "4a5568",
    accent: "c53030",
    light: "e2e8f0",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/新课开发/电力/9-中层管理者经营力提升从行政管理到真经营/05-授课PPT/slides/slide-07-preview.pptx" })
    .then(() => console.log("Created: slide-07-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
