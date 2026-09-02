// slide-91.js - Change Risk Management
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 91,
  title: '变革风险管理'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革风险管理", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Risk matrix style
  const risks = [
    { risk: "员工抵触加剧", likelihood: "高", impact: "高", priority: "关键" },
    { risk: "关键人员流失", likelihood: "中", impact: "高", priority: "高" },
    { risk: "进度延误", likelihood: "高", impact: "中", priority: "中" },
    { risk: "预算超支", likelihood: "中", impact: "中", priority: "中" },
    { risk: "外部政策变化", likelihood: "低", impact: "高", priority: "高" }
  ];

  // Table header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 9, h: 0.5,
    fill: { color: theme.accent }
  });
  ["风险项", "发生可能性", "影响程度", "优先级"].forEach((h, i) => {
    const widths = [4, 1.8, 1.6, 1.6];
    let xPos = 0.5;
    for (let j = 0; j < i; j++) xPos += widths[j];
    slide.addText(h, {
      x: xPos, y: 1.1, w: widths[i], h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
  });

  risks.forEach((r, i) => {
    const y = 1.5 + i * 0.6;
    const bgColor = r.priority === "关键" ? "FFEBEE" : r.priority === "高" ? "FFF3E0" : theme.light;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.6,
      fill: { color: bgColor }
    });
    const values = [r.risk, r.likelihood, r.impact, r.priority];
    const widths = [4, 1.8, 1.6, 1.6];
    let xPos = 0.5;
    values.forEach((v, j) => {
      const textColor = j === 3 ? (v === "关键" ? "DC3545" : v === "高" ? theme.accent : theme.secondary) : theme.secondary;
      slide.addText(v, {
        x: xPos, y: y + 0.15, w: widths[j], h: 0.3,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: textColor, bold: j === 3, align: "center"
      });
      xPos += widths[j];
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
  pres.writeFile({ fileName: "slide-91-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
