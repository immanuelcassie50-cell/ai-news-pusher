// slide-54.js - 练习说明
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "practice", index: 54, title: "练习说明" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("PRACTICE", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 主标题
  slide.addText("练习：三条标准审视你的计划", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 标题装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 练习目标
  slide.addShape("rect", {
    x: 0.5, y: 1.4, w: 9, h: 0.65,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.4, w: 0.1, h: 0.65,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("练习目的", {
    x: 0.75, y: 1.45, w: 1.5, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("把三条可执行性标准，直接应用到你的行动计划里风险最高的几个任务上，识别出需要重新设计的具体任务。", {
    x: 0.75, y: 1.7, w: 8.7, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 操作说明
  slide.addText("操作说明", {
    x: 0.5, y: 2.2, w: 9, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 三步操作
  const steps = [
    { num: "1", text: "从你的行动计划里选出 5 个执行风险较高的任务" },
    { num: "2", text: "对每个任务，按三条标准打分：高 / 中 / 低" },
    { num: "3", text: "根据打分，判断优先需要重新设计的任务" }
  ];

  steps.forEach((s, i) => {
    const y = 2.6 + i * 0.4;
    slide.addShape("ellipse", {
      x: 0.5, y: y, w: 0.3, h: 0.3,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(s.num, {
      x: 0.5, y: y, w: 0.3, h: 0.3,
      fontSize: 12, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(s.text, {
      x: 0.95, y: y - 0.02, w: 8.5, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.ink
    });
  });

  // 评分表说明
  slide.addText("三条标准评分表", {
    x: 0.5, y: 3.95, w: 9, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 评分表头
  const colY = 4.3;
  const colWidths = [2.0, 2.2, 2.5, 2.3];
  const colX = [0.5, 2.5, 4.7, 7.2];
  const colNames = ["行动清晰度", "启动摩擦力", "日常稳健性", "综合风险"];

  slide.addShape("rect", {
    x: 0.5, y: colY, w: 9, h: 0.4,
    fill: { color: theme.ink }, line: { color: theme.ink }
  });
  colNames.forEach((name, i) => {
    slide.addText(name, {
      x: colX[i], y: colY, w: colWidths[i], h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
  });

  // 评分说明
  const descs = [
    "高=看完即动\n中=方向清楚细节不明\n低=意图非动作",
    "低=几乎无障碍\n中=需少量准备\n高=依赖多人配合",
    "高=正常忙仍发生\n中=轻度忙会延后\n低=状态好才发生",
    "低/中/高"
  ];

  descs.forEach((d, i) => {
    const rowY = colY + 0.4 + i * 0.18;
    slide.addShape("rect", {
      x: 0.5, y: rowY, w: 9, h: 0.18,
      fill: { color: i % 2 === 0 ? theme.paper : theme.paperWarm }, line: { color: i % 2 === 0 ? theme.paper : theme.paperWarm }
    });
  });

  // 重点分析提示
  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fill: { color: theme.redLight }, line: { color: theme.redLight }
  });
  slide.addText("对\"综合风险=高\"的任务，还要进一步分析：失败原因 + 改进方向", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.redDeep, align: "center", bold: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
