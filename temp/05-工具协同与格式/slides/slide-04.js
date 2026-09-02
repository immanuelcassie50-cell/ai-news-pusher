// slide-04.js - Content: 开场案例
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 4,
  title: '开场：你见过这种情况吗？'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.08, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("你见过这种情况吗？", {
    x: 0.5, y: 0.3, w: 8, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Scenario card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 5.8, h: 2.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });

  // Card content
  slide.addText([
    { text: "客户技术交流会录音整理", options: { bold: true, breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "录了音", options: { bullet: true, breakLine: true } },
    { text: "千问不接受音频文件", options: { bullet: true, breakLine: true } },
    { text: "手动输入，两小时整理", options: { bullet: true, breakLine: true } },
    { text: "专业术语不确定对错", options: { bullet: true, breakLine: true } },
    { text: "下个月还得重复两小时", options: { bullet: true } }
  ], {
    x: 0.7, y: 1.15, w: 5.4, h: 2.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top"
  });

  // Right side - solution
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.6, y: 1.0, w: 3.0, h: 2.8,
    fill: { color: theme.primary }
  });

  slide.addText("正确流程", {
    x: 6.8, y: 1.15, w: 2.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText([
    { text: "豆包转文字", options: { breakLine: true } },
    { text: "几分钟", options: { breakLine: true, color: "FFCCCC" } },
    { text: "", options: { breakLine: true } },
    { text: "人工核查术语", options: { breakLine: true } },
    { text: "5分钟", options: { breakLine: true, color: "FFCCCC" } },
    { text: "", options: { breakLine: true } },
    { text: "存入知识库", options: { breakLine: true } },
    { text: "2分钟", options: { breakLine: true, color: "FFCCCC" } },
    { text: "", options: { breakLine: true } },
    { text: "千问分析整理", options: { breakLine: true } },
    { text: "20分钟", options: { color: "FFCCCC" } }
  ], {
    x: 6.8, y: 1.6, w: 2.6, h: 2.0,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Bottom insight
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.1, w: 9.0, h: 1.2,
    fill: { color: theme.secondary, transparency: 95 }
  });

  slide.addText("差距不在于哪个工具更强，在于你知不知道任务在工具之间该怎么流动。", {
    x: 0.7, y: 4.3, w: 8.6, h: 0.8,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };