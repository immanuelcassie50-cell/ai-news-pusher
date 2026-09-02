// slide-90.js - 工具全景：4卡片概览
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "matrix", index: 90, title: "工具全景" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标题
  slide.addText("工具全景", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("四个工具 · 四个改善方向 · 对应 B=MAP 的不同弱点", {
    x: 0.5, y: 0.78, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 四个工具卡片
  const tools = [
    { num: "01", name: "最小启动动作", map: "A", desc: "把开始设计得小到不可拒绝", color: theme.primary },
    { num: "02", name: "锚定行为", map: "P", desc: "借力已有触发器为新任务创造提示", color: theme.accent },
    { num: "03", name: "降低摩擦", map: "A", desc: "系统性地消除执行路径上的阻力", color: theme.redBright },
    { num: "04", name: "执行意图", map: "P", desc: "预先决定 if-then 消除决策负荷", color: theme.redDeep }
  ];

  tools.forEach((t, i) => {
    const x = 0.5 + i * 2.35;
    // 卡片背景
    slide.addShape("rect", {
      x: x, y: 1.4, w: 2.1, h: 3.5,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });
    // 顶部色条
    slide.addShape("rect", {
      x: x, y: 1.4, w: 2.1, h: 0.6,
      fill: { color: t.color }, line: { color: t.color }
    });
    // 数字
    slide.addText(t.num, {
      x: x + 0.15, y: 1.45, w: 1, h: 0.5,
      fontSize: 26, fontFace: "Arial",
      color: "FFFFFF", bold: true
    });
    // B=MAP 字母
    slide.addText(t.map, {
      x: x + 1.5, y: 1.5, w: 0.5, h: 0.4,
      fontSize: 22, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "right"
    });
    // 工具名
    slide.addText(t.name, {
      x: x + 0.15, y: 2.15, w: 1.85, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });
    // 描述
    slide.addText(t.desc, {
      x: x + 0.15, y: 2.75, w: 1.85, h: 1.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
    // 底部图标小方块
    slide.addShape("rect", {
      x: x + 0.15, y: 4.45, w: 0.4, h: 0.08,
      fill: { color: t.color }, line: { color: t.color }
    });
  });

  // 底部注释
  slide.addShape("rect", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("可以单独使用，也可以组合使用 · 多数顺人性的任务设计，会同时用到 2-3 个工具", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
