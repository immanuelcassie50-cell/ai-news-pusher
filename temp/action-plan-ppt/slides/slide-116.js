// slide-116.js - 物理摩擦：单页+例子
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "friction-type", index: 116, title: "物理摩擦" };

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

  // 类型导航
  const types = [
    { num: "1", title: "物理摩擦", active: true },
    { num: "2", title: "认知摩擦", active: false },
    { num: "3", title: "协调摩擦", active: false }
  ];

  types.forEach((t, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape("rect", {
      x: x, y: 0.55, w: 2.9, h: 0.55,
      fill: { color: t.active ? theme.primary : theme.paper }, line: { color: t.active ? theme.primary : theme.paperLine, width: 1 }
    });
    slide.addShape("ellipse", {
      x: x + 0.15, y: 0.65, w: 0.35, h: 0.35,
      fill: { color: t.active ? "FFFFFF" : theme.inkMute }, line: { color: t.active ? "FFFFFF" : theme.inkMute }
    });
    slide.addText(t.num, {
      x: x + 0.15, y: 0.65, w: 0.35, h: 0.35,
      fontSize: 13, fontFace: "Arial",
      color: t.active ? theme.primary : "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(t.title, {
      x: x + 0.6, y: 0.65, w: 2.2, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: t.active ? "FFFFFF" : theme.ink, bold: true, valign: "middle"
    });
  });

  // 标题
  slide.addText("物理 / 访问摩擦", {
    x: 0.5, y: 1.3, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 定义
  slide.addText("做这件事需要的工具、信息或物理条件，是否容易获取？", {
    x: 0.5, y: 1.85, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // 例子
  slide.addShape("rect", {
    x: 0.5, y: 2.4, w: 9, h: 2.4,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.4, w: 9, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("典型表现", {
    x: 0.7, y: 2.45, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  const examples = [
    "需要先找到一个特定的文件",
    "需要打开一个不常用的系统并记住密码",
    "需要提前预订会议室或设备",
    "需要先联系某人获取权限"
  ];
  examples.forEach((e, i) => {
    const y = 2.95 + Math.floor(i / 2) * 0.55;
    const x = 0.7 + (i % 2) * 4.4;
    slide.addShape("ellipse", {
      x: x, y: y + 0.1, w: 0.1, h: 0.1,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(e, {
      x: x + 0.2, y: y, w: 4.2, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  // 解决方向
  slide.addShape("rect", {
    x: 0.5, y: 3.5, w: 9, h: 0.55,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("解决方向", {
    x: 0.7, y: 3.55, w: 1.5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle"
  });
  slide.addText("把工具和信息预先放到触手可及的地方 · 建立默认模板 · 减少提前安排", {
    x: 2.0, y: 3.55, w: 7.4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, valign: "middle"
  });

  // 底部
  slide.addText("任务执行前需要\"找东西\"的每一步，都是物理摩擦点", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
