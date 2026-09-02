// slide-113.js - Change Project Timeline and Milestones
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 113,
  title: '变革项目时间线与里程碑'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革项目时间线与里程碑", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Timeline
  const milestones = [
    { phase: "准备期", week: "W1-2", deliverable: "项目启动、团队组建、基线调研", status: "已完成" },
    { phase: "规划期", week: "W3-4", deliverable: "详细计划、沟通方案、培训设计", status: "进行中" },
    { phase: "试点期", week: "W5-8", deliverable: "试点推行、早期成功案例", status: "待启动" },
    { phase: "推广期", week: "W9-16", deliverable: "全面推广、持续培训", status: "待启动" },
    { phase: "收尾期", week: "W17-20", deliverable: "成果固化、经验总结", status: "待启动" }
  ];

  // Timeline line
  slide.addShape(pres.shapes.LINE, {
    x: 1, y: 2.5, w: 8, h: 0,
    line: { color: theme.accent, width: 3 }
  });

  milestones.forEach((m, i) => {
    const x = 1 + i * 2;
    // Circle marker
    slide.addShape(pres.shapes.OVAL, {
      x: x - 0.2, y: 2.3, w: 0.4, h: 0.4,
      fill: { color: m.status === "已完成" ? "28A745" : m.status === "进行中" ? theme.accent : theme.light },
      line: { color: theme.accent, width: 2 }
    });
    // Phase name
    slide.addText(m.phase, {
      x: x - 0.5, y: 1.8, w: 1, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center"
    });
    // Week
    slide.addText(m.week, {
      x: x - 0.5, y: 2.8, w: 1, h: 0.3,
      fontSize: 10, fontFace: "Arial",
      color: theme.secondary, align: "center"
    });
    // Deliverable
    slide.addText(m.deliverable, {
      x: x - 0.7, y: 3.15, w: 1.4, h: 0.8,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });
    // Status badge
    const statusColor = m.status === "已完成" ? "28A745" : m.status === "进行中" ? theme.accent : "6C757D";
    slide.addText(m.status, {
      x: x - 0.4, y: 4.0, w: 0.8, h: 0.3,
      fontSize: 8, fontFace: "Microsoft YaHei",
      color: statusColor, bold: true, align: "center"
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
  pres.writeFile({ fileName: "slide-113-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
