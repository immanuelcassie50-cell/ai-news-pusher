// D-17 课题 C 业务场景
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 10,
  title: '课题 C · 业务场景'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 0.4, w: 1.2, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("课题 C", {
    x: 0.6, y: 0.4, w: 1.2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText("客户邮件回复助手", {
    x: 1.9, y: 0.4, w: 7, h: 0.4,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle"
  });
  slide.addText("销售岗 80% 时间写邮件 · AI 出初稿 + 人工定稿", {
    x: 0.6, y: 0.95, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.6, w: 4.3, h: 3.0,
    fill: { color: theme.light }, line: { type: "none" }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.6, w: 4.3, h: 0.5,
    fill: { color: theme.primary }, line: { type: "none" }
  });
  slide.addText("业务问题", {
    x: 0.8, y: 1.6, w: 4.0, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText([
    { text: "销售一天 20+ 封邮件，回复耗时 2-3 小时", options: { breakLine: true, fontSize: 14, color: theme.secondary } },
    { text: "不同客户风格不同，怕语气踩雷", options: { breakLine: true, fontSize: 14, color: theme.secondary } },
    { text: "报价/合同节点反复措辞", options: { breakLine: true, fontSize: 14, color: theme.secondary } },
    { text: "新人不会写", options: { fontSize: 14, color: theme.secondary } }
  ], {
    x: 0.8, y: 2.2, w: 4.0, h: 2.3,
    fontFace: "Microsoft YaHei", paraSpaceAfter: 8
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.6, w: 4.3, h: 3.0,
    fill: { color: theme.light }, line: { type: "none" }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.6, w: 4.3, h: 0.5,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("AI 方案", {
    x: 5.3, y: 1.6, w: 4.0, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText([
    { text: "1. 客户原邮件 → AI 提取 3 个关键点", options: { breakLine: true, fontSize: 13, color: theme.secondary } },
    { text: "2. 按客户档案（风格/行业/项目阶段）生成 3 版草稿", options: { breakLine: true, fontSize: 13, color: theme.secondary } },
    { text: "3. 销售选 1 版微调，5 分钟发出", options: { breakLine: true, fontSize: 13, color: theme.secondary } },
    { text: "4. 客户历史邮件沉淀为知识库", options: { fontSize: 13, color: theme.secondary } }
  ], {
    x: 5.3, y: 2.2, w: 4.0, h: 2.3,
    fontFace: "Microsoft YaHei", paraSpaceAfter: 6
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.8, w: 8.8, h: 0.4,
    fill: { color: theme.primary }, line: { type: "none" }
  });
  slide.addText("目标：单封邮件 15 分钟 → 5 分钟", {
    x: 0.6, y: 4.8, w: 8.8, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("10", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "003D7A", secondary: "333333", accent: "00A0E9",
    light: "F4F6F9", bg: "FFFFFF"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-10-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
