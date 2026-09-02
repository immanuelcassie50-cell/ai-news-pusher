// slide-98.js - 时间贴现与耐心
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 98,
  title: '时间贴现与耐心'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("时间贴现与耐心", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Formula
  slide.addText("未来价值 = 现值 / (1 + 贴现率)^时间", {
    x: 0.5, y: 1.15, w: 9, h: 0.45,
    fontSize: 17, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Visual comparison - two columns
  // Left - High discount rate
  slide.addShape("roundRect", {
    x: 0.5, y: 1.75, w: 4.3, h: 2.9,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });

  slide.addText("高贴现率", {
    x: 0.5, y: 1.85, w: 4.3, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("= 短视思维", {
    x: 0.5, y: 2.35, w: 4.3, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "center", valign: "middle"
  });

  slide.addText([
    { text: "过度看重当下", options: { bullet: true, breakLine: true } },
    { text: "不愿等待合作收益", options: { bullet: true, breakLine: true } },
    { text: "容易背叛获取短期利益", options: { bullet: true, breakLine: true } },
    { text: "'一锤子买卖'心态", options: { bullet: true } }
  ], {
    x: 0.7, y: 2.85, w: 3.9, h: 1.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "left", valign: "top"
  });

  // Right - Low discount rate
  slide.addShape("roundRect", {
    x: 5.2, y: 1.75, w: 4.3, h: 2.9,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });

  slide.addText("低贴现率", {
    x: 5.2, y: 1.85, w: 4.3, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("= 长期思维", {
    x: 5.2, y: 2.35, w: 4.3, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center", valign: "middle"
  });

  slide.addText([
    { text: "愿意延迟满足", options: { bullet: true, breakLine: true } },
    { text: "理解重复博弈的价值", options: { bullet: true, breakLine: true } },
    { text: "维护长期合作关系", options: { bullet: true, breakLine: true } },
    { text: "享受复利效应", options: { bullet: true } }
  ], {
    x: 5.4, y: 2.85, w: 3.9, h: 1.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "left", valign: "top"
  });

  // Bottom insight
  slide.addShape("roundRect", {
    x: 0.5, y: 4.85, w: 9, h: 0.55,
    fill: { color: theme.light, transparency: 50 },
    rectRadius: 0.08
  });
  slide.addText("你的'耐心程度'决定了你如何看待未来的收益和损失", {
    x: 0.5, y: 4.85, w: 9, h: 0.55,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("98", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "2c5282",
    accent: "d69e2e",
    light: "bee3f8",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-98-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
