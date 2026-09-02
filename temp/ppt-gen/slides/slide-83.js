// slide-83.js - Change Team Building Framework
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 83,
  title: '变革团队组建框架'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革团队组建框架", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const roles = [
    { role: "变革领袖", desc: "高层管理者，负责战略决策和资源调配", color: theme.primary },
    { role: "变革负责人", desc: "全职负责变革项目管理，协调各方", color: theme.accent },
    { role: "变革大使", desc: "各部门骨干，传播变革理念，反馈意见", color: "28A745" },
    { role: "培训师", desc: "负责员工培训和能力提升", color: "17A2B8" },
    { role: "沟通专员", desc: "负责信息发布和反馈收集", color: "6C757D" }
  ];

  roles.forEach((r, i) => {
    const y = 1.0 + i * 0.85;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 2.2, h: 0.7,
      fill: { color: r.color }
    });
    slide.addText(r.role, {
      x: 0.5, y: y + 0.18, w: 2.2, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 2.7, y: y, w: 6.8, h: 0.7,
      fill: { color: theme.light }
    });
    slide.addText(r.desc, {
      x: 2.9, y: y + 0.18, w: 6.4, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-83-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
