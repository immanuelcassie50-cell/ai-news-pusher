// D-17 课题 B 业务场景
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 6,
  title: '课题 B · 业务场景'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 0.4, w: 1.2, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("课题 B", {
    x: 0.6, y: 0.4, w: 1.2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText("需求文档结构化", {
    x: 1.9, y: 0.4, w: 7, h: 0.4,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle"
  });
  slide.addText("让客户原话 → 标准化需求模板 · PM 提效 + 测试接手快", {
    x: 0.6, y: 0.95, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // 左侧
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
    { text: "客户邮件 2 页，PM 整理需求 2 天", options: { breakLine: true, fontSize: 14, color: theme.secondary } },
    { text: "需求表述五花八门，遗漏严重", options: { breakLine: true, fontSize: 14, color: theme.secondary } },
    { text: "开发/测试反复回头确认", options: { breakLine: true, fontSize: 14, color: theme.secondary } },
    { text: "客户隐私信息（产品代号/金额）易泄漏", options: { fontSize: 14, color: theme.secondary } }
  ], {
    x: 0.8, y: 2.2, w: 4.0, h: 2.3,
    fontFace: "Microsoft YaHei", paraSpaceAfter: 8
  });

  // 右侧
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
    { text: "1. 邮件原文 → 脱敏（产品代号→项目X）", options: { breakLine: true, fontSize: 13, color: theme.secondary } },
    { text: "2. AI 按标准模板 7 段结构化", options: { breakLine: true, fontSize: 13, color: theme.secondary } },
    { text: "3. 输出 5 个开放问题，反向问客户", options: { breakLine: true, fontSize: 13, color: theme.secondary } },
    { text: "4. PM 10 分钟定稿，开发测试同步", options: { fontSize: 13, color: theme.secondary } }
  ], {
    x: 5.3, y: 2.2, w: 4.0, h: 2.3,
    fontFace: "Microsoft YaHei", paraSpaceAfter: 6
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.8, w: 8.8, h: 0.4,
    fill: { color: theme.primary }, line: { type: "none" }
  });
  slide.addText("目标：2 天整理 → 30 分钟出初稿", {
    x: 0.6, y: 4.8, w: 8.8, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("06", {
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
  pres.writeFile({ fileName: "slide-06-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
