// slide-17.js - 应该做 vs 会做
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "compare", index: 17, title: "应该做 vs 会做" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标签
  slide.addText("INTENT vs BEHAVIOR", {
    x: 0.5, y: 0.25, w: 4.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("应该做  vs  会做", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("两种语言逻辑，背后是两种完全不同的设计思路。", {
    x: 0.5, y: 1.15, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 左侧 - 应该做
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 4.3, h: 3.2,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 0.5 }
  });
  // 头部
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 4.3, h: 0.6,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("\"应该做\"", {
    x: 0.7, y: 1.92, w: 3.9, h: 0.45,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("SHOULD DO", {
    x: 3.4, y: 2.0, w: 1.3, h: 0.3,
    fontSize: 9, fontFace: "Arial",
    color: "FFFFFF", charSpacing: 3, bold: true, align: "right"
  });

  slide.addText("表达意图", {
    x: 0.7, y: 2.6, w: 3.9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // 例句
  const shouldExamples = [
    "每月与关键利益相关方沟通一次。",
    "定期检查关键指标的进展。",
    "按时推进阶段性评审。"
  ];

  shouldExamples.forEach((ex, i) => {
    slide.addShape("rect", {
      x: 0.7, y: 3.0 + i * 0.4, w: 0.05, h: 0.3,
      fill: { color: theme.inkMute }, line: { color: theme.inkMute }
    });
    slide.addText(ex, {
      x: 0.85, y: 3.0 + i * 0.4, w: 3.8, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, italic: true
    });
  });

  // 问题标签
  slide.addShape("rect", {
    x: 0.7, y: 4.4, w: 3.9, h: 0.5,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("→ 描述了\"什么应该发生\"\n→ 但没有设计\"让它发生的条件\"", {
    x: 0.7, y: 4.45, w: 3.9, h: 0.45,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, lineSpacing: 14
  });

  // 中间 VS
  slide.addShape("ellipse", {
    x: 4.7, y: 3.15, w: 0.6, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("VS", {
    x: 4.7, y: 3.21, w: 0.6, h: 0.5,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center"
  });

  // 右侧 - 会做
  slide.addShape("rect", {
    x: 5.2, y: 1.85, w: 4.3, h: 3.2,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 1.5 }
  });
  // 头部
  slide.addShape("rect", {
    x: 5.2, y: 1.85, w: 4.3, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("\"会做\"", {
    x: 5.4, y: 1.92, w: 3.9, h: 0.45,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("WILL DO", {
    x: 8.1, y: 2.0, w: 1.3, h: 0.3,
    fontSize: 9, fontFace: "Arial",
    color: theme.goldAccent, charSpacing: 3, bold: true, align: "right"
  });

  slide.addText("需要设计", {
    x: 5.4, y: 2.6, w: 3.9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 例句
  const willExamples = [
    "每周五 16:00，发 200 字摘要给所有相关方。",
    "周一晨会用 5 分钟检查 3 个核心指标。",
    "每月最后一个周三下午开 90 分钟评审。"
  ];

  willExamples.forEach((ex, i) => {
    slide.addShape("rect", {
      x: 5.4, y: 3.0 + i * 0.4, w: 0.05, h: 0.3,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(ex, {
      x: 5.55, y: 3.0 + i * 0.4, w: 3.8, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });
  });

  // 设计要素
  slide.addShape("rect", {
    x: 5.4, y: 4.4, w: 3.9, h: 0.5,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("→ 时间明确 + 动作具体 + 触发清晰\n→ 在糟糕的一天也能可靠发生", {
    x: 5.4, y: 4.45, w: 3.9, h: 0.45,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.ink, lineSpacing: 14
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
