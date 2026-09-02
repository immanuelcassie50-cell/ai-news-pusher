// slide-108.js - 三个标准 (2)：高可靠性
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "standard", index: 108, title: "三个标准 (2)" };

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
  slide.addText("选择锚点行为的三个标准", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 三个标准导航
  const standards = [
    { num: "1", title: "时间地点匹配", active: false },
    { num: "2", title: "高可靠性", active: true },
    { num: "3", title: "不与新任务冲突", active: false }
  ];

  standards.forEach((s, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape("rect", {
      x: x, y: 1.1, w: 2.9, h: 0.55,
      fill: { color: s.active ? theme.primary : theme.paper }, line: { color: s.active ? theme.primary : theme.paperLine, width: 1 }
    });
    slide.addShape("ellipse", {
      x: x + 0.15, y: 1.2, w: 0.35, h: 0.35,
      fill: { color: s.active ? "FFFFFF" : theme.inkMute }, line: { color: s.active ? "FFFFFF" : theme.inkMute }
    });
    slide.addText(s.num, {
      x: x + 0.15, y: 1.2, w: 0.35, h: 0.35,
      fontSize: 13, fontFace: "Arial",
      color: s.active ? theme.primary : "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(s.title, {
      x: x + 0.6, y: 1.2, w: 2.2, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: s.active ? "FFFFFF" : theme.ink, bold: true, valign: "middle"
    });
  });

  // 当前标准详情
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 9, h: 1.4,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 0.15, h: 1.4,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("标准 2 · 高可靠性", {
    x: 0.9, y: 1.95, w: 8, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("锚点需要几乎每次都会发生，不能是\"有时候会做\"的行为。", {
    x: 0.9, y: 2.35, w: 8, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("可靠性低的锚点 = 不可靠的触发器 = 新任务仍然不会发生", {
    x: 0.9, y: 2.7, w: 8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, bold: true
  });

  // 可靠度对比
  // 高可靠
  slide.addShape("rect", {
    x: 0.5, y: 3.4, w: 4.4, h: 1.4,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 3.4, w: 4.4, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("✓ 高可靠", {
    x: 0.7, y: 3.45, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("周例会 · 每天早晨", {
    x: 0.7, y: 3.9, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("几乎 100% 都会发生", {
    x: 0.7, y: 4.2, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("→ 好的锚点候选", {
    x: 0.7, y: 4.45, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, bold: true
  });

  // 低可靠
  slide.addShape("rect", {
    x: 5.1, y: 3.4, w: 4.4, h: 1.4,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 3.4, w: 4.4, h: 0.4,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("✗ 低可靠", {
    x: 5.3, y: 3.45, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("和某人临时聊天 · 有空时", {
    x: 5.3, y: 3.9, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("有时候会做 · 有时候不会", {
    x: 5.3, y: 4.2, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("→ 不好的锚点", {
    x: 5.3, y: 4.45, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, italic: true
  });

  // 底部
  slide.addText("问自己：这个锚点，10 次里有几次会发生？", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
