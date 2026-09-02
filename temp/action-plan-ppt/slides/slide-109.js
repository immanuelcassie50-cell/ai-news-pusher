// slide-109.js - 三个标准 (3)：不与新任务冲突
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "standard", index: 109, title: "三个标准 (3)" };

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
    { num: "2", title: "高可靠性", active: false },
    { num: "3", title: "不与新任务冲突", active: true }
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
  slide.addText("标准 3 · 不与新任务冲突", {
    x: 0.9, y: 1.95, w: 8, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("锚点结束之后，你的认知状态能够承接新任务。", {
    x: 0.9, y: 2.35, w: 8, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("刚结束高压任务 → 不适合再接深度思考任务", {
    x: 0.9, y: 2.7, w: 8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, bold: true
  });

  // 正反例
  // 合理搭配
  slide.addShape("rect", {
    x: 0.5, y: 3.4, w: 4.4, h: 1.4,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 3.4, w: 4.4, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("✓ 合理搭配", {
    x: 0.7, y: 3.45, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("周会结束 → 5 分钟进展更新", {
    x: 0.7, y: 3.9, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("周会本身是常规节奏", {
    x: 0.7, y: 4.2, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("5 分钟更新是轻量任务 → 匹配", {
    x: 0.7, y: 4.45, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // 冲突
  slide.addShape("rect", {
    x: 5.1, y: 3.4, w: 4.4, h: 1.4,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 3.4, w: 4.4, h: 0.4,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("✗ 状态冲突", {
    x: 5.3, y: 3.45, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("高压谈判结束 → 深度思考", {
    x: 5.3, y: 3.9, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("高压后认知资源耗尽", {
    x: 5.3, y: 4.2, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("深度思考需要认知余量 → 不匹配", {
    x: 5.3, y: 4.45, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, italic: true
  });

  // 底部
  slide.addText("问自己：那个时刻我的状态，适合做新任务吗？", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
