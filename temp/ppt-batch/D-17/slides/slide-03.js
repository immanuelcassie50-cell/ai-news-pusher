// D-17 课题 A 场景
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 3,
  title: '课题 A · 业务场景'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 课题标签
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 0.4, w: 1.2, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("课题 A", {
    x: 0.6, y: 0.4, w: 1.2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText("测试用例自动生成", {
    x: 1.9, y: 0.4, w: 7, h: 0.4,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle"
  });

  // 副标题
  slide.addText("从「想到啥写啥」到「基于需求结构自动铺用例」", {
    x: 0.6, y: 0.95, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // 左侧：业务问题
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
    { text: "1 个需求点要写 50+ 条用例", options: { breakLine: true, fontSize: 14, color: theme.secondary } },
    { text: "新人写 1 天，老师傅 3 小时", options: { breakLine: true, fontSize: 14, color: theme.secondary } },
    { text: "用例覆盖率不稳定、易漏边界", options: { breakLine: true, fontSize: 14, color: theme.secondary } },
    { text: "需求变更后用例难同步", options: { fontSize: 14, color: theme.secondary } }
  ], {
    x: 0.8, y: 2.2, w: 4.0, h: 2.3,
    fontFace: "Microsoft YaHei", paraSpaceAfter: 8
  });

  // 右侧：AI 方案
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
    { text: "步骤 1：把需求拆成「功能点+约束」", options: { breakLine: true, fontSize: 13, color: theme.secondary } },
    { text: "步骤 2：AI 按 5 维（功能/边界/异常/性能/兼容）铺用例", options: { breakLine: true, fontSize: 13, color: theme.secondary } },
    { text: "步骤 3：人工抽检 + 合并重复", options: { breakLine: true, fontSize: 13, color: theme.secondary } },
    { text: "步骤 4：变更时只改需求，AI 重铺", options: { fontSize: 13, color: theme.secondary } }
  ], {
    x: 5.3, y: 2.2, w: 4.0, h: 2.3,
    fontFace: "Microsoft YaHei", paraSpaceAfter: 6
  });

  // 底部
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.8, w: 8.8, h: 0.4,
    fill: { color: theme.primary }, line: { type: "none" }
  });
  slide.addText("目标：50 条用例，从 1 天 → 2 小时", {
    x: 0.6, y: 4.8, w: 8.8, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // 页码
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("03", {
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
  pres.writeFile({ fileName: "slide-03-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
