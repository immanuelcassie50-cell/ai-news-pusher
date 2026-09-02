// slide-64.js - Case Analysis: Solution Design
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 64,
  title: '案例分析：解决方案设计'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("案例分析：解决方案设计", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addText("讨论问题：如果你是这个项目的变革负责人，你会怎么做？", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  // Solution phases
  const phases = [
    { phase: "第一阶段\n（1-2周）", actions: "开展员工座谈会，了解真实担忧；启动变革沟通会，说明变革原因和计划" },
    { phase: "第二阶段\n（3-4周）", actions: "选择2-3个试点车间，树立早期成功案例；为员工提供充分培训" },
    { phase: "第三阶段\n（持续）", actions: "建立持续沟通机制，定期反馈进展；及时表彰进步，激励员工参与" }
  ];

  phases.forEach((p, i) => {
    const y = 1.5 + i * 1.3;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 1.8, h: 1.1,
      fill: { color: theme.accent }
    });
    slide.addText(p.phase, {
      x: 0.5, y: y + 0.25, w: 1.8, h: 0.6,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 2.3, y: y, w: 6.7, h: 1.1,
      fill: { color: theme.light }
    });
    slide.addText(p.actions, {
      x: 2.5, y: y + 0.25, w: 6.3, h: 0.6,
      fontSize: 12, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-64-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
