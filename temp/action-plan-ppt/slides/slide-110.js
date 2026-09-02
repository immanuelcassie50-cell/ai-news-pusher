// slide-110.js - 例子对比：锚定前后
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "table", index: 110, title: "例子对比" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("工具二 · 锚定行为", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 标题
  slide.addText("原始任务 vs 锚定后的任务", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("找到合适的已有行为，把新任务接在后面", {
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
  slide.addText("原始任务", {
    x: 0.6, y: headerY, w: 2.6, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("锚定的行为", {
    x: 3.3, y: headerY, w: 2.5, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("锚定后", {
    x: 5.9, y: headerY, w: 3.5, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  // 数据
  const rows = [
    { orig: "每周更新进展看板", anchor: "周一全体站会", after: "每次站会结束后 5 分钟，当面完成更新" },
    { orig: "关注关键数据指标", anchor: "每天早晨打开电脑", after: "每天打开电脑后，先看三个关键指标再做其他事" },
    { orig: "感知关键干系人情绪", anchor: "正式会议结束", after: "会议结束离开前问：还有什么是你担心但没说的？" },
    { orig: "每周对下属发展性反馈", anchor: "每周一对一", after: "最后 5 分钟主动问一个预先准备好的发展性问题" }
  ];

  rows.forEach((r, i) => {
    const y = 2.0 + i * 0.6;
    if (i % 2 === 0) {
      slide.addShape("rect", {
        x: 0.5, y: y, w: 9, h: 0.6,
        fill: { color: theme.paper }, line: { color: theme.paper }
      });
    }
    slide.addText(r.orig, {
      x: 0.6, y: y, w: 2.6, h: 0.6,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, valign: "middle"
    });
    slide.addText(r.anchor, {
      x: 3.3, y: y, w: 2.5, h: 0.6,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, valign: "middle"
    });
    slide.addText(r.after, {
      x: 5.9, y: y, w: 3.5, h: 0.6,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });
  });

  // 关键观察
  slide.addShape("rect", {
    x: 0.5, y: 4.55, w: 9, h: 0.55,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("\"锚定后\"列里，时间点变得非常明确：不是\"定期\"，而是\"在 X 事件后，立刻做 Y\"", {
    x: 0.5, y: 4.55, w: 9, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
