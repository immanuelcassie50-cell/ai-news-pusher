// slide-12.js - Content: 三种公式概览
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 12,
  title: '三种公式概览'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("三种公式概览", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Three formula cards
  const formulas = [
    {
      num: "公式一",
      title: "时间延误 → 客户流失损失",
      desc: "服务流程里的等待和延迟，直接影响客户体验",
      useCase: "适用：处理超时导致客户流失的场景"
    },
    {
      num: "公式二",
      title: "重复/返工 → 人力成本损失",
      desc: "大量重复操作、无效沟通、返工重做",
      useCase: "适用：消耗人工时间的重复性工作"
    },
    {
      num: "公式三",
      title: "流程断点 → 机会成本损失",
      desc: "流程卡顿让你错失了本来可以做成的机会",
      useCase: "适用：业务发展慢了、市场窗口错过"
    }
  ];

  formulas.forEach((f, i) => {
    const y = 1.1 + i * 1.4;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 1.25,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Left accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.1, h: 1.25,
      fill: { color: theme.accent }
    });

    // Number badge
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.8, y: y + 0.15, w: 1.2, h: 0.4,
      fill: { color: theme.primary }
    });
    slide.addText(f.num, {
      x: 0.8, y: y + 0.15, w: 1.2, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(f.title, {
      x: 2.2, y: y + 0.15, w: 6.5, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      valign: "middle"
    });

    // Description
    slide.addText(f.desc, {
      x: 2.2, y: y + 0.55, w: 6.5, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });

    // Use case
    slide.addText(f.useCase, {
      x: 2.2, y: y + 0.85, w: 6.5, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent,
      valign: "middle"
    });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };