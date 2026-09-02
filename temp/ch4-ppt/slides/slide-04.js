// slide-04.js - 为什么第一轮总是差点意思
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 4,
  title: '为什么第一轮总是"差点意思"？'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧红色装饰条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // 页面标题
  slide.addText("为什么第一轮总是\"差点意思\"？", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // 问题说明卡片
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 1.2,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1
  });

  slide.addText("这不是AI的问题，是所有多轮对话的正常状态。", {
    x: 0.7, y: 1.3, w: 8.6, h: 1,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle"
  });

  // 原因分析
  const reasons = [
    "第一轮信息有限：背景 + 要求 + 素材",
    "AI给出方向但不完整，细节不够",
    "格式可能不对，需要调整"
  ];

  reasons.forEach((text, idx) => {
    const yPos = 2.6 + idx * 0.6;
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: yPos + 0.12, w: 0.15, h: 0.15,
      fill: { color: theme.primary }
    });
    slide.addText(text, {
      x: 1.0, y: yPos, w: 8, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle"
    });
  });

  // 错误做法
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.3, w: 4.3, h: 1.1,
    fill: { color: "FFE8E8" },
    rectRadius: 0.08
  });

  slide.addText("错误做法", {
    x: 0.7, y: 4.4, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("换工具 / 从头重述 / 直接放弃", {
    x: 0.7, y: 4.8, w: 4, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle"
  });

  // 正确做法
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.0, y: 4.3, w: 4.5, h: 1.1,
    fill: { color: "E8F5E8" },
    rectRadius: 0.08
  });

  slide.addText("正确做法", {
    x: 5.2, y: 4.4, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "2E7D32", bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("把输出当草稿，告诉AI哪里需要调整", {
    x: 5.2, y: 4.8, w: 4, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C43C3C",
    secondary: "4A4A4A",
    accent: "C43C3C",
    light: "888888",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "./output/slide-04-preview.pptx" });
}

module.exports = { createSlide, slideConfig };