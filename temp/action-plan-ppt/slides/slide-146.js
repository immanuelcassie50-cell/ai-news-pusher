// slide-146.js - 三次对话：清晰度
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "dialogue-card", index: 146, title: "对话一 清晰度" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("DIALOGUE 01 / 03", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("对话一：清晰度", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("与你的计划的第一次对话", {
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

  slide.addText("问每一条任务：", {
    x: 0.85, y: 1.95, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  slide.addText("一个完全不了解背景的人，看了这条描述，能立刻知道第一个动作是什么吗？", {
    x: 0.85, y: 2.3, w: 8.5, h: 0.95,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true, lineSpacing: 26
  });

  // 不能时怎么办
  slide.addText("如果「不能」——需要增加具体性：", {
    x: 0.5, y: 3.55, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 四项具体化要素
  const specifics = [
    { tag: "动作", text: "具体做什么" },
    { tag: "程度", text: "做到什么程度算完成" },
    { tag: "时间", text: "花多长时间" },
    { tag: "谁", text: "谁参与" }
  ];

  specifics.forEach((s, i) => {
    const x = 0.5 + i * 2.27;
    slide.addShape("rect", {
      x: x, y: 3.95, w: 2.15, h: 0.8,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 0.5 }
    });
    slide.addShape("rect", {
      x: x, y: 3.95, w: 2.15, h: 0.06,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
    slide.addText(s.tag, {
      x: x, y: 4.05, w: 2.15, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center"
    });
    slide.addText(s.text, {
      x: x, y: 4.35, w: 2.15, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, align: "center"
    });
  });

  // 目标
  slide.addText("目标：让每条任务在执行时不需要额外的解释和决策。", {
    x: 0.5, y: 4.95, w: 9, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, bold: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
