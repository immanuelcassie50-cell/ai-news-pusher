// slide-119.js - 策略一：默认化
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "strategy", index: 119, title: "策略一：默认化" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("工具三 · 降低摩擦", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 三个策略导航
  const strategies = [
    { num: "1", title: "默认化", active: true },
    { num: "2", title: "预设化", active: false },
    { num: "3", title: "简化化", active: false }
  ];

  strategies.forEach((s, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape("rect", {
      x: x, y: 0.55, w: 2.9, h: 0.55,
      fill: { color: s.active ? theme.primary : theme.paper }, line: { color: s.active ? theme.primary : theme.paperLine, width: 1 }
    });
    slide.addShape("ellipse", {
      x: x + 0.15, y: 0.65, w: 0.35, h: 0.35,
      fill: { color: s.active ? "FFFFFF" : theme.inkMute }, line: { color: s.active ? "FFFFFF" : theme.inkMute }
    });
    slide.addText(s.num, {
      x: x + 0.15, y: 0.65, w: 0.35, h: 0.35,
      fontSize: 13, fontFace: "Arial",
      color: s.active ? theme.primary : "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(s.title, {
      x: x + 0.6, y: 0.65, w: 2.2, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: s.active ? "FFFFFF" : theme.ink, bold: true, valign: "middle"
    });
  });

  // 大标题
  slide.addText("策略一 · 默认化", {
    x: 0.5, y: 1.3, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("把执行方式预先定义好，减少执行时需要做的决定", {
    x: 0.5, y: 1.85, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 核心解释
  slide.addShape("rect", {
    x: 0.5, y: 2.4, w: 9, h: 1.0,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.4, w: 0.15, h: 1.0,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("默认化 = 把\"每次都要决定的\"变成\"已经定好的\"", {
    x: 0.9, y: 2.5, w: 8.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("格式固定 · 时长固定 · 频率固定 · 参与方固定", {
    x: 0.9, y: 2.9, w: 8.5, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 具体体现
  const aspects = [
    { label: "格式", ex: "每次会议用同一份模板" },
    { label: "时长", ex: "30 分钟，到点结束" },
    { label: "频率", ex: "每周二下午 4 点" },
    { label: "参与方", ex: "固定的 5 个人" }
  ];

  aspects.forEach((a, i) => {
    const x = 0.5 + i * 2.3;
    // 卡片
    slide.addShape("rect", {
      x: x, y: 3.6, w: 2.1, h: 1.15,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });
    // 标签色条
    slide.addShape("rect", {
      x: x, y: 3.6, w: 2.1, h: 0.35,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
    slide.addText(a.label, {
      x: x, y: 3.6, w: 2.1, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    // 例子
    slide.addText(a.ex, {
      x: x + 0.1, y: 4.0, w: 1.9, h: 0.7,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, align: "center"
    });
  });

  // 底部
  slide.addText("\"默认化\"的具体体现：固定不变的部分越多，执行时越省力", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
