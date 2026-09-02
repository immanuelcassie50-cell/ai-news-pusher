// slide-58.js - Change Team Building
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 58,
  title: '高效变革团队的建设'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("高效变革团队的建设", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Team composition
  slide.addText("变革团队的最佳构成：", {
    x: 0.5, y: 1.0, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const members = [
    { role: "发起人", desc: "高管，支持背书", color: theme.accent },
    { role: "负责人", desc: "有决策权的领导", color: theme.primary },
    { role: "核心成员", desc: "业务、技术骨干", color: theme.accent },
    { role: "支持角色", desc: "HR、PMO等", color: theme.secondary }
  ];

  members.forEach((m, i) => {
    const y = 1.5 + i * 0.75;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 1.8, h: 0.6,
      fill: { color: m.color }
    });
    slide.addText(m.role, {
      x: 0.5, y: y + 0.1, w: 1.8, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText(m.desc, {
      x: 2.5, y: y + 0.1, w: 2.5, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  // Team operating principles
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5, y: 1.0, w: 4.5, h: 4.2,
    fill: { color: theme.light }
  });

  slide.addText("团队运作原则：", {
    x: 5.2, y: 1.2, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const principles = [
    "每周例会同步进展和问题",
    "明确决策机制和升级路径",
    "核心成员全职或高比例投入",
    "定期复盘，及时调整策略",
    "高层定期参与，提供指导"
  ];

  principles.forEach((p, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.2, y: 1.75 + i * 0.6, w: 0.08, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText(p, {
      x: 5.45, y: 1.75 + i * 0.6, w: 3.8, h: 0.4,
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
  pres.writeFile({ fileName: "slide-58-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
