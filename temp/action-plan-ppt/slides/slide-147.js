// slide-147.js - 三次对话：摩擦力
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "dialogue-card", index: 147, title: "对话二 摩擦力" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("DIALOGUE 02 / 03", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("对话二：摩擦力", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("与你的计划的第二次对话", {
    x: 0.5, y: 1.15, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 分割线
  slide.addShape("rect", {
    x: 0.5, y: 1.55, w: 9, h: 0.02,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });

  // 大问题卡
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 9, h: 1.5,
    fill: { color: theme.paperWarm }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 0.1, h: 1.5,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("对执行风险较高的任务，问：", {
    x: 0.85, y: 1.95, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  slide.addText("从决定要做，到实际做出第一个动作，之间有几步？每一步有没有可能卡住？", {
    x: 0.85, y: 2.3, w: 8.5, h: 0.95,
    fontSize: 17, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true, lineSpacing: 26
  });

  // 三种处理方式
  slide.addText("找到可能卡住的环节，逐一处理：", {
    x: 0.5, y: 3.55, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const strategies = [
    {
      tag: "消除",
      question: "这个环节能取消吗？",
      hint: "无价值的步骤直接砍掉"
    },
    {
      tag: "预设",
      question: "能提前完成吗？",
      hint: "把需要现场做的提前做完"
    },
    {
      tag: "默认",
      question: "能变成默认吗？",
      hint: "让它不需要决策就发生"
    }
  ];

  strategies.forEach((s, i) => {
    const x = 0.5 + i * 3.07;
    slide.addShape("rect", {
      x: x, y: 3.95, w: 2.95, h: 1.0,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 0.5 }
    });
    slide.addShape("rect", {
      x: x, y: 3.95, w: 2.95, h: 0.06,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
    slide.addText(s.tag, {
      x: x + 0.15, y: 4.05, w: 0.6, h: 0.32,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(s.question, {
      x: x + 0.85, y: 4.07, w: 2.0, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });
    slide.addText(s.hint, {
      x: x + 0.15, y: 4.45, w: 2.65, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, lineSpacing: 14
    });
  });

  // 目标
  slide.addText("目标：移除执行路径上所有不必要的阻力。", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, bold: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
