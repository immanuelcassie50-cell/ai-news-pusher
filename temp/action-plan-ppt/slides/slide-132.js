// slide-132.js - 转换对比 (2)：续表
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "table", index: 132, title: "转换对比 (2)" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("工具四 · 执行意图", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 标题
  slide.addText("普通任务描述 vs 执行意图（续）", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("更多例子 · 找规律", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 表头
  const headerY = 1.5;
  slide.addShape("rect", {
    x: 0.5, y: headerY, w: 9, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("普通任务描述", {
    x: 0.6, y: headerY, w: 4.0, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("转换为执行意图后", {
    x: 4.7, y: headerY, w: 4.8, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  // 数据
  const rows = [
    { orig: "推进技能培训计划", new: "每个月的第一个工作日，我会检查本月培训计划是否已落地安排" },
    { orig: "对团队成员给予认可和反馈", new: "每次我观察到团队成员有值得表扬的行为时，我会在当天沟通中直接提到" },
    { orig: "按时完成阶段性汇报", new: "每次汇报日期的前两天，我会收到日历提醒，打开模板填写完成情况" }
  ];

  rows.forEach((r, i) => {
    const y = 2.0 + i * 0.85;
    if (i % 2 === 0) {
      slide.addShape("rect", {
        x: 0.5, y: y, w: 9, h: 0.85,
        fill: { color: theme.paper }, line: { color: theme.paper }
      });
    }
    slide.addText(r.orig, {
      x: 0.6, y: y, w: 4.0, h: 0.85,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkMute, valign: "middle"
    });
    slide.addText(r.new, {
      x: 4.7, y: y, w: 4.8, h: 0.85,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });
  });

  // 箭头分隔
  slide.addShape("rect", {
    x: 4.4, y: 2.0, w: 0.04, h: 2.55,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  // 三要素总结
  slide.addShape("rect", {
    x: 0.5, y: 4.65, w: 9, h: 0.5,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  const elements = ["触发条件", "具体动作", "时间边界"];
  elements.forEach((e, i) => {
    slide.addShape("rect", {
      x: 0.7 + i * 3.0, y: 4.75, w: 2.7, h: 0.3,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(e, {
      x: 0.7 + i * 3.0, y: 4.75, w: 2.7, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
