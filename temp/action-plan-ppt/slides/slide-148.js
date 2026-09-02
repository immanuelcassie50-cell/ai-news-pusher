// slide-148.js - 三次对话：触发器
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "dialogue-card", index: 148, title: "对话三 触发器" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("DIALOGUE 03 / 03", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("对话三：触发器", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("与你的计划的第三次对话", {
    x: 0.5, y: 1.15, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 分割线
  slide.addShape("rect", {
    x: 0.5, y: 1.55, w: 9, h: 0.02,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });

  // 三大问题
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 9, h: 1.7,
    fill: { color: theme.paperWarm }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 0.1, h: 1.7,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("对每一条任务问三个问题：", {
    x: 0.85, y: 1.95, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  const triggerQs = [
    "这件事靠什么来触发？",
    "这个触发器会在正确的时间可靠地出现吗？",
    "如果触发器失效，这件事还会发生吗？"
  ];

  triggerQs.forEach((q, i) => {
    const y = 2.3 + i * 0.4;
    slide.addText(`0${i + 1}`, {
      x: 0.85, y: y, w: 0.5, h: 0.32,
      fontSize: 13, fontFace: "Arial",
      color: theme.primary, bold: true
    });
    slide.addText(q, {
      x: 1.4, y: y, w: 7.8, h: 0.32,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });
  });

  // 重点警告
  slide.addShape("rect", {
    x: 0.5, y: 3.75, w: 9, h: 0.5,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 1 }
  });
  slide.addText("检查所有「靠记忆」或「找时间」的任务——这是触发器最脆弱的类型。", {
    x: 0.5, y: 3.75, w: 9, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  // 解决方案
  slide.addText("对这类任务，选用工具建立可靠触发：", {
    x: 0.5, y: 4.4, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 工具二和工具四
  slide.addShape("rect", {
    x: 0.5, y: 4.75, w: 4.4, h: 0.5,
    fill: { color: theme.paper }, line: { color: theme.accent, width: 0.5 }
  });
  slide.addText("工具二：锚定行为", {
    x: 0.5, y: 4.75, w: 4.4, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  slide.addShape("rect", {
    x: 5.1, y: 4.75, w: 4.4, h: 0.5,
    fill: { color: theme.paper }, line: { color: theme.accent, width: 0.5 }
  });
  slide.addText("工具四：执行意图", {
    x: 5.1, y: 4.75, w: 4.4, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
