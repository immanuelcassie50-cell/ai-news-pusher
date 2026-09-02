// slide-35.js - 标准二：启动摩擦力
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "definition", index: 35, title: "标准二：启动摩擦力" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 右侧大色块
  slide.addShape("rect", {
    x: 9.65, y: 0, w: 0.35, h: 5.625,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 大数字
  slide.addText("02", {
    x: 7.4, y: 0.4, w: 2, h: 1.4,
    fontSize: 88, fontFace: "Arial",
    color: theme.redLight, bold: true
  });

  // STANDARD 02 标识
  slide.addText("STANDARD 02", {
    x: 7.0, y: 1.6, w: 3, h: 0.3,
    fontSize: 11, fontFace: "Arial",
    color: theme.accent, charSpacing: 5, bold: true, align: "right"
  });

  // 主标题
  slide.addText("启动摩擦力", {
    x: 5.0, y: 2.0, w: 5, h: 0.7,
    fontSize: 38, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true, align: "right"
  });

  // 引导问题
  slide.addText("要开始，有多难？", {
    x: 5.0, y: 2.7, w: 4.65, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "right"
  });

  // 装饰线
  slide.addShape("rect", {
    x: 9.0, y: 3.2, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 右侧定义
  slide.addText("从\"决定要做\"到\"开始第一个实际动作\"之间的阻力。", {
    x: 5.0, y: 3.35, w: 4.65, h: 0.7,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, paraSpaceAfter: 4, align: "right"
  });

  // 左侧解释卡片
  slide.addShape("rect", {
    x: 0.5, y: 0.5, w: 4.4, h: 4.5,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 0.5, w: 4.4, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("什么是摩擦力", {
    x: 0.7, y: 0.55, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("FRICTION", {
    x: 2.8, y: 0.6, w: 2, h: 0.35,
    fontSize: 9, fontFace: "Arial",
    color: "FFFFFF", charSpacing: 3, align: "right"
  });

  // 关键洞察
  slide.addText("摩擦力越低，启动越自然。", {
    x: 0.7, y: 1.2, w: 4.0, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("摩擦力越高，这件事越依赖\"状态好的那天\"来执行，", {
    x: 0.7, y: 1.8, w: 4.0, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("而不是\"普通的那天\"也能执行。", {
    x: 0.7, y: 2.05, w: 4.0, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 关键问句
  slide.addShape("rect", {
    x: 0.7, y: 2.6, w: 0.4, h: 0.03,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("检验问题", {
    x: 0.7, y: 2.7, w: 4.0, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const questions = [
    "从\"决定做\"到\"动手\"，要走几步？",
    "每一步需要什么条件？",
    "每一步的最大障碍是什么？"
  ];

  questions.forEach((q, i) => {
    slide.addText("· " + q, {
      x: 0.7, y: 3.1 + i * 0.4, w: 4.0, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.ink
    });
  });

  // 底部强调
  slide.addShape("rect", {
    x: 0.7, y: 4.4, w: 4.0, h: 0.5,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("每多一步摩擦，任务失败概率 +1", {
    x: 0.7, y: 4.5, w: 4.0, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.redDeep, bold: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
