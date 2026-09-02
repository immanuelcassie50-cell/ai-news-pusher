// slide-101.js - 应用方法：把第一步写进任务
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "howto", index: 101, title: "应用方法" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("工具一 · 最小启动动作", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 标题
  slide.addText("怎么应用到行动计划里", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("直接把最小启动动作写进任务描述", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 流程：3步
  const steps = [
    { num: "1", title: "识别", desc: "在每条任务描述中，识别\"开始\"这一刻" },
    { num: "2", title: "缩小", desc: "把开始那一步缩小到 30 秒内能完成" },
    { num: "3", title: "写入", desc: "把这个最小启动动作直接写进任务" }
  ];

  steps.forEach((s, i) => {
    const x = 0.5 + i * 3.1;
    // 卡片
    slide.addShape("rect", {
      x: x, y: 1.5, w: 2.9, h: 1.6,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });
    // 步骤圆
    slide.addShape("ellipse", {
      x: x + 0.2, y: 1.7, w: 0.5, h: 0.5,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(s.num, {
      x: x + 0.2, y: 1.7, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    // 标题
    slide.addText(s.title, {
      x: x + 0.85, y: 1.7, w: 1.8, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true, valign: "middle"
    });
    // 描述
    slide.addText(s.desc, {
      x: x + 0.2, y: 2.3, w: 2.5, h: 0.7,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  // 箭头
  for (let i = 0; i < 2; i++) {
    slide.addShape("rightArrow", {
      x: 3.4 + i * 3.1, y: 2.2, w: 0.3, h: 0.2,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
  }

  // 范例
  slide.addShape("rect", {
    x: 0.5, y: 3.3, w: 9, h: 1.5,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("写法对比", {
    x: 0.7, y: 3.4, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("原本", {
    x: 0.7, y: 3.75, w: 1, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });
  slide.addText("\"每月完成团队技能评估报告\"", {
    x: 1.7, y: 3.75, w: 7.5, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  slide.addText("优化后", {
    x: 0.7, y: 4.1, w: 1, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("\"每月技能评估报告 → 打开评估模板，填入日期和名单\"", {
    x: 1.7, y: 4.1, w: 7.5, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("两个好处：降低启动阻力 · 减少认知摩擦（不需要现场想\"怎么开始\"）", {
    x: 0.7, y: 4.45, w: 8.6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, italic: true
  });

  // 底部
  slide.addText("写进任务描述 · 写进日历备注 · 让\"开始\"变得明确", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
