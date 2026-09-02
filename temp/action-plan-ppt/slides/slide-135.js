// slide-135.js - 苏敏优化 (1)：一对一重新设计
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "case", index: 135, title: "苏敏优化 (1)" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("苏敏的优化实践 · 案例分析", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 标题
  slide.addText("苏敏把\"每周一对一辅导\"重新设计", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("一对一任务的整体重新设计 · 从难执行到高执行率", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 左侧：原始设计
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 4.3, h: 3.3,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 4.3, h: 0.4,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("原始设计", {
    x: 0.7, y: 1.55, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("\"每周一对一辅导\"", {
    x: 0.7, y: 2.0, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  const origPoints = [
    "\"每周\" = 频次，不是触发器",
    "没有固定时间，靠协调",
    "没有议程，每次想谈什么",
    "靠记忆启动"
  ];
  origPoints.forEach((p, i) => {
    slide.addShape("ellipse", {
      x: 0.85, y: 2.6 + i * 0.4, w: 0.1, h: 0.1,
      fill: { color: theme.inkMute }, line: { color: theme.inkMute }
    });
    slide.addText(p, {
      x: 1.05, y: 2.55 + i * 0.4, w: 3.7, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  slide.addText("→ 启动阻力大 · 经常被推迟", {
    x: 0.7, y: 4.45, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, italic: true
  });

  // 右侧：重新设计
  slide.addShape("rect", {
    x: 5.1, y: 1.5, w: 4.4, h: 3.3,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 1.5, w: 4.4, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("重新设计后", {
    x: 5.3, y: 1.55, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("多工具组合方案", {
    x: 5.3, y: 2.0, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const newPoints = [
    "固定时间（每周二下午 4 点）",
    "周二早上 9 点日历自动提醒",
    "同时推送本周辅导议题框架",
    "第一件事：对方分享当周挑战",
    "苏敏先问三个问题（不直接给答案）"
  ];
  newPoints.forEach((p, i) => {
    slide.addShape("ellipse", {
      x: 5.45, y: 2.55 + i * 0.32, w: 0.1, h: 0.1,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(p, {
      x: 5.65, y: 2.5 + i * 0.32, w: 3.8, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.ink
    });
  });

  slide.addText("→ P 固定 + A 大幅降低", {
    x: 5.3, y: 4.45, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, bold: true
  });

  // 底部
  slide.addText("一对一的重新设计：固定时间（解决 P）+ 模板化（解决 A）", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
