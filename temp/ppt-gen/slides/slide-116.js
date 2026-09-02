// slide-116.js - Change Management ROI Calculation
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 116,
  title: '变革管理投资回报分析'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革管理投资回报分析", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // ROI formula
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 9, h: 1.2,
    fill: { color: theme.light }
  });
  slide.addText("变革管理ROI公式", {
    x: 0.7, y: 1.1, w: 4, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });
  slide.addText("ROI = （变革收益 - 变革成本 - 变革失败损失）÷ 变革管理投入 × 100%", {
    x: 0.7, y: 1.5, w: 8.6, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "left"
  });

  // Benefits vs Costs
  const benefits = [
    { item: "员工效率提升", value: "+25%", color: "28A745" },
    { item: "项目进度达成率", value: "+40%", color: "28A745" },
    { item: "员工满意度", value: "+30%", color: "28A745" }
  ];

  const costs = [
    { item: "培训投入", value: "-15万", color: "DC3545" },
    { item: "沟通时间成本", value: "-8万", color: "DC3545" },
    { item: "变革管理资源", value: "-10万", color: "DC3545" }
  ];

  slide.addText("预期收益", {
    x: 0.5, y: 2.4, w: 2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "28A745", bold: true, align: "left"
  });

  benefits.forEach((b, i) => {
    slide.addText(b.item, {
      x: 0.5, y: 2.8 + i * 0.4, w: 3, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
    slide.addText(b.value, {
      x: 3.5, y: 2.8 + i * 0.4, w: 1, h: 0.35,
      fontSize: 11, fontFace: "Arial",
      color: b.color, bold: true, align: "right"
    });
  });

  slide.addText("预期成本", {
    x: 5, y: 2.4, w: 2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "DC3545", bold: true, align: "left"
  });

  costs.forEach((c, i) => {
    slide.addText(c.item, {
      x: 5, y: 2.8 + i * 0.4, w: 3, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
    slide.addText(c.value, {
      x: 8, y: 2.8 + i * 0.4, w: 1.3, h: 0.35,
      fontSize: 11, fontFace: "Arial",
      color: c.color, bold: true, align: "right"
    });
  });

  // Key insight
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.2, w: 9, h: 1.1,
    fill: { color: theme.accent }
  });
  slide.addText("💡 关键洞察：研究显示，有效的变革管理可以将变革成功率从30%提升到70%以上", {
    x: 0.7, y: 4.4, w: 8.6, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "left"
  });
  slide.addText("每投入1元的变革管理费用，可以避免约5-10元的变革失败损失", {
    x: 0.7, y: 4.8, w: 8.6, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "left"
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
  pres.writeFile({ fileName: "slide-116-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
