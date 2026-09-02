// slide-136.js - 苏敏优化 (2)：多工具组合
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "case", index: 136, title: "苏敏优化 (2)" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("苏敏的优化实践 · 多工具组合", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 标题
  slide.addText("拆解：用了哪些工具 · 各自解决什么", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("一对一辅导的多工具设计逻辑", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 三个工具的应用
  const tools = [
    {
      num: "工具四",
      target: "解决 P",
      title: "执行意图（固定时间）",
      desc: "每周二下午 4 点固定为一对一时间（固定时间作为触发器）",
      color: theme.primary
    },
    {
      num: "工具三",
      target: "解决 A（认知）",
      title: "降低摩擦（模板化）",
      desc: "周二早上 9 点日历自动提醒，同时推送当周辅导议题框架",
      color: theme.accent
    },
    {
      num: "工具四",
      target: "解决 A（认知）",
      title: "执行意图（固定开场）",
      desc: "进入一对一时，第一件事用固定格式开场，进一步降低认知摩擦",
      color: theme.redBright
    }
  ];

  tools.forEach((t, i) => {
    const y = 1.5 + i * 1.05;
    // 卡片
    slide.addShape("rect", {
      x: 0.5, y: y, w: 9, h: 0.95,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });
    // 左侧色块
    slide.addShape("rect", {
      x: 0.5, y: y, w: 1.4, h: 0.95,
      fill: { color: t.color }, line: { color: t.color }
    });
    // 工具号
    slide.addText(t.num, {
      x: 0.5, y: y + 0.1, w: 1.4, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    // 解决目标
    slide.addText(t.target, {
      x: 0.5, y: y + 0.5, w: 1.4, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    // 标题
    slide.addText(t.title, {
      x: 2.1, y: y + 0.1, w: 7, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });
    // 描述
    slide.addText(t.desc, {
      x: 2.1, y: y + 0.5, w: 7, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  // 底部
  slide.addShape("rect", {
    x: 0.5, y: 4.7, w: 9, h: 0.5,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("P 固定时间 + A 大幅下降 = 形式简单了 → M 反而因为\"真的有效\"而提升", {
    x: 0.5, y: 4.7, w: 9, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
