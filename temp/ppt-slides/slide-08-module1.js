// slide-08.js - 失效信号三：部门割裂 vs 整体最优
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 8,
  title: '失效信号三：部门割裂 vs 整体最优'
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
  slide.addText("失效信号三：部门割裂 vs 整体最优", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });

  // 左侧卡片 - 部门割裂
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 4.3, h: 3.9,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });

  // 部门割裂头部
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 4.3, h: 0.65,
    fill: { color: theme.secondary }
  });
  slide.addText("部门割裂", {
    x: 0.5, y: 1.0, w: 4.3, h: 0.65,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // 部门割裂特征
  slide.addText("典型表现", {
    x: 0.7, y: 1.8, w: 1.2, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, align: "left", valign: "middle"
  });

  slide.addText([
    { text: "只关注本部门KPI", options: { bullet: true, breakLine: true } },
    { text: "与其他部门沟通成本高", options: { bullet: true, breakLine: true } },
    { text: "资源争夺而非资源共享", options: { bullet: true } }
  ], {
    x: 0.7, y: 2.15, w: 3.9, h: 1.0,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left", valign: "top",
    paraSpaceAfter: 4
  });

  // 部门割裂结果
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 3.2, w: 3.9, h: 0.04,
    fill: { color: theme.light }
  });

  slide.addText("结果", {
    x: 0.7, y: 3.35, w: 0.8, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });

  slide.addText("局部最优，整体内耗", {
    x: 0.7, y: 3.7, w: 3.9, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left", valign: "middle"
  });

  // 部门割裂标签
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 4.3, w: 0.6, h: 0.35,
    fill: { color: theme.light }
  });
  slide.addText("问题", {
    x: 0.7, y: 4.3, w: 0.6, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, align: "center", valign: "middle"
  });
  slide.addText("组织壁垒，效率损失", {
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

  // 右侧卡片 - 整体最优
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.0, w: 4.3, h: 3.9,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });

  // 整体最优头部 - 使用强调色
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.0, w: 4.3, h: 0.65,
    fill: { color: theme.accent }
  });
  slide.addText("整体最优", {
    x: 5.2, y: 1.0, w: 4.3, h: 0.65,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // 整体最优特征
  slide.addText("典型表现", {
    x: 5.4, y: 1.8, w: 1.2, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });

  slide.addText([
    { text: "思考跨部门协同价值", options: { bullet: true, breakLine: true } },
    { text: "主动打破信息孤岛", options: { bullet: true, breakLine: true } },
    { text: "用整体效益评价决策", options: { bullet: true } }
  ], {
    x: 5.4, y: 2.15, w: 3.9, h: 1.0,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false, align: "left", valign: "top",
    paraSpaceAfter: 4
  });

  // 整体最优结果
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.4, y: 3.2, w: 3.9, h: 0.04,
    fill: { color: theme.accent, transparency: 50 }
  });

  slide.addText("结果", {
    x: 5.4, y: 3.35, w: 0.8, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });

  slide.addText("协同创值，资源共享", {
    x: 5.4, y: 3.7, w: 3.9, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false, align: "left", valign: "middle"
  });

  // 整体最优标签
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.4, y: 4.3, w: 0.6, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("优势", {
    x: 5.4, y: 4.3, w: 0.6, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText("全局思维，系统优化", {
    x: 6.1, y: 4.3, w: 3.2, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });

  // 页码徽章
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("08", {
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
  pres.writeFile({ fileName: "D:/新课开发/电力/9-中层管理者经营力提升从行政管理到真经营/05-授课PPT/slides/slide-08-preview.pptx" })
    .then(() => console.log("Created: slide-08-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
