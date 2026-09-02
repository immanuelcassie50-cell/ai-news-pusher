// slide-89.js - Change Feedback Collection
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 89,
  title: '变革反馈收集方法'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革反馈收集方法", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const methods = [
    { method: "正式渠道", tools: ["全员调查问卷", "部门例会反馈", "定期汇报机制"], suitable: "收集整体趋势和量化数据" },
    { method: "非正式渠道", tools: ["走廊对话", "午餐聊天", "匿名意见箱"], suitable: "了解真实想法和潜在问题" },
    { method: "专项渠道", tools: ["一对一访谈", "焦点小组讨论", "员工座谈会"], suitable: "深入了解特定问题和建议" },
    { method: "数字化渠道", tools: ["线上反馈平台", "企业微信匿名区", "定期推送问卷"], suitable: "方便快捷，保护隐私" }
  ];

  methods.forEach((m, i) => {
    const y = 1.0 + i * 1.1;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 2, h: 0.95,
      fill: { color: theme.accent }
    });
    slide.addText(m.method, {
      x: 0.5, y: y + 0.3, w: 2, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 2.5, y: y, w: 4.5, h: 0.95,
      fill: { color: theme.light }
    });
    slide.addText(m.tools.join(" | "), {
      x: 2.7, y: y + 0.15, w: 4.1, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "left"
    });
    slide.addText(m.suitable, {
      x: 2.7, y: y + 0.5, w: 4.1, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "4A4A4A",
    accent: "C41E3A",
    light: "D4D4D4",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-89-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
