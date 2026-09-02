// slide-26.js - Stakeholder Analysis
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 26,
  title: '利益相关方分析：谁需要被影响'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("利益相关方分析：谁需要被影响", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addText("不同群体需要不同的沟通策略：", {
    x: 0.5, y: 1.1, w: 6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "left"
  });

  const stakeholders = [
    { group: "高管层", need: "战略意义、竞争格局、投资回报" },
    { group: "中层管理", need: "执行路径、资源支持、考核变化" },
    { group: "一线员工", need: "工作影响、技能要求、发展机会" },
    { group: "技术团队", need: "技术可行性、架构选择、时间表" },
    { group: "外部伙伴", need: "合作模式、责任边界、过渡安排" }
  ];

  stakeholders.forEach((s, i) => {
    const y = 1.6 + i * 0.75;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 2, h: 0.6,
      fill: { color: theme.accent }
    });
    slide.addText(s.group, {
      x: 0.5, y: y + 0.1, w: 2, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(s.need, {
      x: 2.7, y: y + 0.1, w: 6.8, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
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
  pres.writeFile({ fileName: "slide-26-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
