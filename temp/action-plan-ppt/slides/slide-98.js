// slide-98.js - 测试方法：内心念出测试
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "concept", index: 98, title: "测试方法" };

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
  slide.addText("怎么测试：内心念出法", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("一个简单但有效的检验标准", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 中间大引用
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 9, h: 0.8,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("\"如果你在心里念出这个动作……\"", {
    x: 0.5, y: 1.5, w: 9, h: 0.8,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  // 两个分支
  // 左：达标
  slide.addShape("rect", {
    x: 0.5, y: 2.6, w: 4.3, h: 2.2,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.6, w: 4.3, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("✓ 内心第一反应", {
    x: 0.7, y: 2.65, w: 4, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("\"好吧这倒是容易，", {
    x: 0.7, y: 3.25, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("我可以做\"", {
    x: 0.7, y: 3.65, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addShape("rect", {
    x: 0.7, y: 4.2, w: 0.3, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("→ 它就是够小的", {
    x: 0.7, y: 4.35, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 右：不达标
  slide.addShape("rect", {
    x: 5.1, y: 2.6, w: 4.4, h: 2.2,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 2.6, w: 4.4, h: 0.5,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("✗ 内心第一反应", {
    x: 5.3, y: 2.65, w: 4, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("\"嗯……等有空再说\"", {
    x: 5.3, y: 3.25, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("\"听起来挺麻烦的\"", {
    x: 5.3, y: 3.65, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addShape("rect", {
    x: 5.3, y: 4.2, w: 0.3, h: 0.04,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("→ 它还需要再缩小", {
    x: 5.3, y: 4.35, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, bold: true
  });

  // 底部
  slide.addText("第一反应是最真实的信号 · 任何犹豫都需要缩小", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
