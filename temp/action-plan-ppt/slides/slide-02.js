// slide-02.js - 课程导览
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "content-three-col", index: 2, title: "课程导览" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("COURSE OVERVIEW", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("为什么这门课", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("三个你可能也问过自己的问题", {
    x: 0.5, y: 1.15, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 分割线
  slide.addShape("rect", {
    x: 0.5, y: 1.6, w: 9, h: 0.02,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });

  // 三栏卡片
  const cards = [
    {
      num: "01",
      title: "什么是执行？",
      body: "执行 ≠ 努力。\n执行是行为在日常状态下\n能可靠发生的设计。",
      tag: "WHAT"
    },
    {
      num: "02",
      title: "为何失败？",
      body: "失败不是态度问题，\n不是能力问题，\n是计划在设计时只考虑了\n\"理想状态的自己\"。",
      tag: "WHY"
    },
    {
      num: "03",
      title: "怎么设计？",
      body: "从\"应该做\"转向\"会做\"。\n用行为科学框架 + 设计工具\n让任务在糟糕的一天也能发生。",
      tag: "HOW"
    }
  ];

  cards.forEach((c, i) => {
    const x = 0.5 + i * 3.1;
    // 卡片底
    slide.addShape("rect", {
      x: x, y: 1.95, w: 2.9, h: 3.0,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 0.5 }
    });
    // 顶部色条
    slide.addShape("rect", {
      x: x, y: 1.95, w: 2.9, h: 0.06,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    // 数字
    slide.addText(c.num, {
      x: x + 0.2, y: 2.1, w: 1, h: 0.5,
      fontSize: 32, fontFace: "Arial",
      color: theme.primary, bold: true
    });
    // 标签
    slide.addText(c.tag, {
      x: x + 1.6, y: 2.25, w: 1.2, h: 0.25,
      fontSize: 9, fontFace: "Arial",
      color: theme.inkMute, bold: true, charSpacing: 4, align: "right"
    });
    // 标题
    slide.addText(c.title, {
      x: x + 0.2, y: 2.7, w: 2.6, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });
    // 分隔线
    slide.addShape("rect", {
      x: x + 0.2, y: 3.15, w: 0.3, h: 0.02,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
    // 正文
    slide.addText(c.body, {
      x: x + 0.2, y: 3.3, w: 2.6, h: 1.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, lineSpacing: 18
    });
  });

  // 底部一句话
  slide.addText("三个问题，对应这门课的三层结构。", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
