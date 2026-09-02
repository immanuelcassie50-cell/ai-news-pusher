// slide-56.js - Stakeholder Management Strategies
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 56,
  title: '不同利益相关方的管理策略'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("不同利益相关方的管理策略", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const stakeholders = [
    { group: "CEO/高管", strategy: "定期汇报进展，争取资源承诺，关注战略一致性", approach: "报喜也报忧，保持透明度" },
    { group: "中层管理者", strategy: "赋能支持，解决冲突，让他们成为推动者", approach: "充分沟通，给予决策权" },
    { group: "一线员工", strategy: "倾听担忧，及时反馈，让员工有参与感", approach: "真诚沟通，允许质疑" },
    { group: "技术团队", strategy: "尊重专业，提供资源，共商技术方案", approach: "平等合作，共同决策" }
  ];

  stakeholders.forEach((s, i) => {
    const y = 1.1 + i * 1.1;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 2.2, h: 0.95,
      fill: { color: theme.accent }
    });
    slide.addText(s.group, {
      x: 0.5, y: y + 0.27, w: 2.2, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 2.7, y: y, w: 3.8, h: 0.95,
      fill: { color: theme.light }
    });
    slide.addText(s.strategy, {
      x: 2.85, y: y + 0.27, w: 3.5, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 6.5, y: y, w: 2.5, h: 0.95,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 }
    });
    slide.addText(s.approach, {
      x: 6.6, y: y + 0.27, w: 2.3, h: 0.4,
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
  pres.writeFile({ fileName: "slide-56-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
