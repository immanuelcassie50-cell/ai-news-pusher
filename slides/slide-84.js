// slide-84.js - 激励机制对齐
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 84,
  title: '激励机制对齐'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("激励机制对齐", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Problem statement
  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 9, h: 0.8,
    fill: { color: theme.accent, transparency: 15 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 0.08, h: 0.8,
    fill: { color: theme.accent }
  });
  slide.addText("当个人激励与集体目标发生冲突时", {
    x: 0.75, y: 1.25, w: 8.5, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "left", valign: "middle"
  });
  slide.addText("背叛成为理性选择，合作反而受损", {
    x: 0.75, y: 1.6, w: 8.5, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Solutions
  const solutions = [
    { title: "KPI 对齐", desc: "将考核指标设计为鼓励合作而非竞争" },
    { title: "共同目标", desc: "设定需要协作才能完成的集体目标" },
    { title: "共享指标", desc: "用团队整体绩效替代个人绩效衡量" }
  ];

  solutions.forEach((sol, idx) => {
    const y = 2.2 + idx * 0.95;

    // Card
    slide.addShape("rect", {
      x: 0.5, y: y, w: 9, h: 0.85,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Number badge
    slide.addShape("ellipse", {
      x: 0.75, y: y + 0.22, w: 0.4, h: 0.4,
      fill: { color: theme.primary }
    });
    slide.addText((idx + 1).toString(), {
      x: 0.75, y: y + 0.22, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(sol.title, {
      x: 1.35, y: y + 0.15, w: 7.9, h: 0.35,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: false,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(sol.desc, {
      x: 1.35, y: y + 0.48, w: 7.9, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.4,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("84", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "2c5282",
    accent: "d69e2e",
    light: "bee3f8",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-84-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
