// slide-63.js - Case Analysis: Problem Diagnosis
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 63,
  title: '案例分析：问题诊断'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("案例分析：问题诊断", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addText("讨论问题：这个项目出了什么问题？运用课程中的哪些理论来分析？", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  // Analysis framework
  const analyses = [
    { aspect: "信任视角", insight: "员工对管理层缺乏信任，担心变革会损害自身利益" },
    { aspect: "心理视角", insight: "员工经历多次变革，产生变革疲劳和抵触心理" },
    { aspect: "共识视角", insight: "员工不理解为什么要换系统，没有建立变革共识" },
    { aspect: "沟通视角", insight: "项目组只注重技术实现，沟通严重不足" },
    { aspect: "利益视角", insight: "员工没有看到新系统对自身的好处" }
  ];

  analyses.forEach((a, i) => {
    const y = 1.5 + i * 0.8;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 2, h: 0.65,
      fill: { color: theme.accent }
    });
    slide.addText(a.aspect, {
      x: 0.5, y: y + 0.12, w: 2, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 2.5, y: y, w: 6.5, h: 0.65,
      fill: { color: theme.light }
    });
    slide.addText(a.insight, {
      x: 2.7, y: y + 0.12, w: 6, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-63-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
