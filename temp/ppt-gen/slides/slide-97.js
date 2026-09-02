// slide-97.js - Change Management Certification Path
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 97,
  title: '变革管理能力成长路径'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革管理能力成长路径", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const levels = [
    { level: "初级", skills: ["理解变革管理基础概念", "能够配合执行变革任务", "参与变革沟通和反馈"], color: "17A2B8" },
    { level: "中级", skills: ["独立承担变革项目模块", "识别和管理常见变革阻力", "有效沟通和培训员工"], color: theme.accent },
    { level: "高级", skills: ["主导完整变革项目", "处理复杂利益相关方关系", "建立变革管理流程体系"], color: theme.primary },
    { level: "专家", skills: ["设计组织变革战略", "辅导高管变革领导力", "创新变革管理方法论"], color: "6C757D" }
  ];

  levels.forEach((l, i) => {
    const x = 0.5 + i * 2.4;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.1, w: 2.2, h: 4.2,
      fill: { color: theme.light }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.1, w: 2.2, h: 0.6,
      fill: { color: l.color }
    });
    slide.addText(l.level, {
      x: x, y: 1.2, w: 2.2, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    l.skills.forEach((s, j) => {
      slide.addText("• " + s, {
        x: x + 0.15, y: 1.85 + j * 1.1, w: 1.9, h: 1,
        fontSize: 10, fontFace: "Microsoft YaHei",
        color: theme.secondary, align: "left"
      });
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
  pres.writeFile({ fileName: "slide-97-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
