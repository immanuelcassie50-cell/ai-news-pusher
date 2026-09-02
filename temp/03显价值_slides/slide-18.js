// slide-18.js - Content: 研发团队浪费清单
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 18,
  title: '研发团队浪费清单'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("研发团队浪费清单", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Scene card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fill: { color: theme.primary }
  });

  slide.addText("场景：某互联网公司用户运营研发部，12人（PM × 2 + 工程师 × 10）", {
    x: 0.7, y: 1.2, w: 8.6, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Table header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.0, w: 9, h: 0.5,
    fill: { color: theme.secondary }
  });
  slide.addText("浪费类型", {
    x: 0.5, y: 2.0, w: 3, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("具体现象", {
    x: 3.5, y: 2.0, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("每周浪费时间", {
    x: 7.5, y: 2.0, w: 2, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Table rows
  const rows = [
    { type: "返工", phenomenon: "需求确认不清，平均改3轮", time: "24小时/周" },
    { type: "信息断点", phenomenon: "PM和开发反复对齐业务需求", time: "15小时/周" },
    { type: "低价值决策", phenomenon: "每个需求优先级都要单独讨论", time: "10小时/周" }
  ];

  rows.forEach((row, i) => {
    const y = 2.5 + i * 0.7;
    const bgColor = i % 2 === 0 ? "FFFFFF" : theme.light;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.65,
      fill: { color: bgColor }
    });

    slide.addText(row.type, {
      x: 0.5, y: y, w: 3, h: 0.65,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(row.phenomenon, {
      x: 3.5, y: y, w: 4, h: 0.65,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary,
      align: "center", valign: "middle"
    });

    slide.addText(row.time, {
      x: 7.5, y: y, w: 2, h: 0.65,
      fontSize: 13, fontFace: "Arial",
      color: theme.accent, bold: true,
      align: "center", valign: "middle"
    });
  });

  // Total
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.55, w: 9, h: 0.6,
    fill: { color: theme.primary }
  });

  slide.addText("合计每周浪费：49小时　　月损失约：135,000元", {
    x: 0.7, y: 4.6, w: 8.6, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };