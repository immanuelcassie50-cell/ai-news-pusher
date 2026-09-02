// slide-73.js - 产出文档化
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 73,
  title: '产出文档化'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("产出文档化", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Document template preview
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.5, h: 3.6,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });

  // Template header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("工作坊产出记录模板", {
    x: 0.5, y: 1.2, w: 4.5, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // Template content
  const templateItems = [
    { label: "主题", value: "工作坊名称" },
    { label: "日期", value: "YYYY-MM-DD" },
    { label: "参与者", value: "姓名列表" },
    { label: "产出目标", value: "本次要解决的问题" },
    { label: "讨论摘要", value: "关键观点汇总" },
    { label: "决策结果", value: "最终确定的方案" },
    { label: "行动计划", value: "下一步及负责人" }
  ];

  templateItems.forEach((item, i) => {
    const y = 1.8 + i * 0.4;
    slide.addText(item.label + "：", {
      x: 0.7, y: y, w: 1.1, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });
    slide.addText(item.value, {
      x: 1.8, y: y, w: 3, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Right side - Documentation principles
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.2, w: 4.3, h: 3.6,
    fill: { color: theme.light }
  });

  slide.addText("文档化原则", {
    x: 5.4, y: 1.35, w: 3.9, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const principles = [
    { title: "实时记录", desc: "现场记录，避免事后回忆失真" },
    { title: "可视化呈现", desc: "使用图表、流程图等直观形式" },
    { title: "结构化组织", desc: "按逻辑框架整理，而非流水账" },
    { title: "明确归属", desc: "每项产出标注来源和决策依据" },
    { title: "当场确认", desc: "完成前向全体参与者宣读确认" }
  ];

  principles.forEach((p, i) => {
    const y = 1.9 + i * 0.58;

    // Number badge
    slide.addShape(pres.shapes.OVAL, {
      x: 5.5, y: y + 0.05, w: 0.35, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: 5.5, y: y + 0.05, w: 0.35, h: 0.35,
      fontSize: 11, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(p.title, {
      x: 5.95, y: y, w: 1.3, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(p.desc, {
      x: 5.95, y: y + 0.3, w: 3.4, h: 0.25,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("73", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };