// slide-32.js - Communication Plan Design
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 32,
  title: '变革沟通计划设计要点'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革沟通计划设计要点", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const commPlan = [
    { item: "频率", desc: "重要节点每周一次，稳定期每月一次" },
    { item: "渠道", desc: "全员大会+部门小会+个人一对一结合" },
    { item: "内容", desc: "进展+问题+下一步+需要支持的地方" },
    { item: "反馈", desc: "设立匿名反馈渠道，认真回应每条意见" }
  ];

  commPlan.forEach((c, i) => {
    const y = 1.1 + i * 1.05;
    slide.addShape("rect", {
      x: 0.5, y: y, w: 1.8, h: 0.9,
      fill: { color: theme.accent }
    });
    slide.addText(c.item, {
      x: 0.5, y: y + 0.25, w: 1.8, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape("rect", {
      x: 2.3, y: y, w: 6.7, h: 0.9,
      fill: { color: theme.light }
    });
    slide.addText(c.desc, {
      x: 2.5, y: y + 0.25, w: 6.2, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  slide.addText("原则：说清楚、不隐瞒、有回应", {
    x: 0.5, y: 5.1, w: 6, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
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
  pres.writeFile({ fileName: "slide-32-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
