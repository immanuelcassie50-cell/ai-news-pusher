// slide-95.js - 实验发现：穿鞋走出门
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "case", index: 95, title: "实验发现" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("工具一 · 最小启动动作", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 标题
  slide.addText("一个实验性的发现", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 大引用框
  slide.addShape("rect", {
    x: 0.5, y: 1.3, w: 9, h: 1.5,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  // 左侧装饰
  slide.addShape("rect", {
    x: 0.5, y: 1.3, w: 0.15, h: 1.5,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("\"在你去健身房之前，", {
    x: 0.9, y: 1.45, w: 8.5, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("只需要穿上运动鞋走出门\"", {
    x: 0.9, y: 1.85, w: 8.5, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("—— 这个设计比\"计划去健身房锻炼 30 分钟\"更能预测实际锻炼行为", {
    x: 0.9, y: 2.3, w: 8.5, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, italic: true
  });

  // 对比
  // 左：常规设计
  slide.addShape("rect", {
    x: 0.5, y: 3.1, w: 4.3, h: 1.7,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 3.1, w: 4.3, h: 0.4,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("常规计划", {
    x: 0.7, y: 3.15, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("去健身房锻炼 30 分钟", {
    x: 0.7, y: 3.65, w: 4, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("大脑评估：", {
    x: 0.7, y: 4.05, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("需要换衣服 / 出门 / 开车", {
    x: 0.7, y: 4.32, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("→ 阻力大 · 容易放弃", {
    x: 0.7, y: 4.55, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, italic: true
  });

  // 右：最小启动
  slide.addShape("rect", {
    x: 5.1, y: 3.1, w: 4.3, h: 1.7,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 3.1, w: 4.3, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("最小启动动作", {
    x: 5.3, y: 3.15, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("穿上运动鞋走出门", {
    x: 5.3, y: 3.65, w: 4, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("大脑评估：", {
    x: 5.3, y: 4.05, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("穿鞋出门 · 几乎不抗拒", {
    x: 5.3, y: 4.32, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("→ 走出去了 · 顺势继续", {
    x: 5.3, y: 4.55, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, bold: true
  });

  // 底部
  slide.addText("\"穿鞋走出门\"几乎不产生抗拒 · 而一旦你走出去了，大部分时候你会继续走到健身房", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
