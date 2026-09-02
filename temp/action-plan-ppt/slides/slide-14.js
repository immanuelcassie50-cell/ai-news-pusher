// slide-14.js - 执行计划的你
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "state-card", index: 14, title: "执行计划的你" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 右侧大色块
  slide.addShape("rect", {
    x: 6.0, y: 0, w: 4.0, h: 5.625,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 左侧 - 详细描述
  slide.addText("EXECUTING MODE", {
    x: 0.5, y: 0.6, w: 5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });
  slide.addText("执行状态的特征", {
    x: 0.5, y: 0.95, w: 5, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 分割线
  slide.addShape("rect", {
    x: 0.5, y: 1.4, w: 0.4, h: 0.03,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 详细列表
  const traits = [
    { num: "01", title: "日程已满", body: "另有两件紧急的事在争夺注意力。" },
    { num: "02", title: "会议密集", body: "今天的会议已经排满整块时间。" },
    { num: "03", title: "邮件未回", body: "有一封没回的邮件还在后台持续消耗精力。" },
    { num: "04", title: "临时问题", body: "团队成员找过来解决一个棘手问题。" },
    { num: "05", title: "能量低位", body: "今天不再有规划时的那种清醒和能量。" }
  ];

  traits.forEach((t, i) => {
    const y = 1.6 + i * 0.65;
    slide.addText(t.num, {
      x: 0.5, y: y, w: 0.5, h: 0.4,
      fontSize: 16, fontFace: "Arial",
      color: theme.accent, bold: true
    });
    slide.addText(t.title, {
      x: 1.05, y: y, w: 2, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });
    slide.addText(t.body, {
      x: 1.05, y: y + 0.3, w: 4.7, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  // 右侧标题
  slide.addText("STATE 02", {
    x: 6.3, y: 0.6, w: 3, h: 0.3,
    fontSize: 11, fontFace: "Arial",
    color: theme.redLight, bold: true, charSpacing: 6
  });

  slide.addText("执行计划的你", {
    x: 6.3, y: 1.0, w: 3.5, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("执行状态", {
    x: 6.3, y: 1.7, w: 3, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.redLight
  });

  // 装饰
  slide.addShape("rect", {
    x: 6.3, y: 2.2, w: 0.5, h: 0.04,
    fill: { color: theme.goldAccent }, line: { color: theme.goldAccent }
  });

  // 关键描述
  slide.addText("大多数时候你只是在试图完成当天最紧要的事。", {
    x: 6.3, y: 2.4, w: 3.5, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.redLight, lineSpacing: 18
  });

  // 状态关键词
  ["被打断", "能量低位", "决策疲劳", "邮件未回", "应急优先"].forEach((k, i) => {
    slide.addShape("rect", {
      x: 6.3, y: 3.2 + i * 0.35, w: 1.8, h: 0.28,
      fill: { color: theme.redDeep }, line: { color: theme.redDeep }
    });
    slide.addText(k, {
      x: 6.3, y: 3.22 + i * 0.35, w: 1.8, h: 0.24,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", align: "center", bold: true
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 4.95, w: 5.2, h: 0.35,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("规划时设计的任务，默认了这种状态的你也能完成。", {
    x: 0.5, y: 4.99, w: 5.2, h: 0.28,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
