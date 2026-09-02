// slide-86.js - 工具预告：第三部分4个工具
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "preview", index: 86, title: "工具预告" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 顶部标签
  slide.addText("PREVIEW · NEXT", {
    x: 0.5, y: 0.3, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Arial",
    color: theme.inkMute, charSpacing: 6, bold: true
  });

  // 标题
  slide.addText("第三部分：四个行为设计工具", {
    x: 0.5, y: 0.7, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("每个工具对应 B=MAP 里的一项或多项弱点", {
    x: 0.5, y: 1.3, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 装饰
  slide.addShape("rect", {
    x: 0.5, y: 1.7, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 四个工具
  const tools = [
    {
      num: "01",
      title: "最小启动动作",
      eng: "Minimum Start",
      desc: "把第一步写到极小，让开始不再困难",
      targets: "A · 启动摩擦"
    },
    {
      num: "02",
      title: "锚定行为",
      eng: "Anchoring",
      desc: "借力已有行为作触发器",
      targets: "P · 触发器"
    },
    {
      num: "03",
      title: "降低摩擦",
      eng: "Friction Reduction",
      desc: "把阻力从执行路径上移除",
      targets: "A · 全流程摩擦"
    },
    {
      num: "04",
      title: "执行意图",
      eng: "If-Then",
      desc: "预先决定 if-then 减少决策",
      targets: "P · 触发器 + 决策"
    }
  ];

  const cardW = 2.2;
  const cardH = 2.9;
  const startX = 0.5;
  const startY = 1.95;
  const gap = 0.18;

  tools.forEach((t, i) => {
    const x = startX + i * (cardW + gap);

    // 卡片
    slide.addShape("rect", {
      x: x, y: startY, w: cardW, h: cardH,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });

    // 编号大色块
    slide.addShape("rect", {
      x: x, y: startY, w: cardW, h: 0.85,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(t.num, {
      x: x, y: startY + 0.05, w: cardW, h: 0.8,
      fontSize: 38, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center"
    });

    // 工具名
    slide.addText(t.title, {
      x: x, y: startY + 0.95, w: cardW, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true, align: "center"
    });
    slide.addText(t.eng, {
      x: x, y: startY + 1.4, w: cardW, h: 0.3,
      fontSize: 10, fontFace: "Arial",
      color: theme.accent, charSpacing: 3, bold: true, align: "center"
    });

    // 分隔
    slide.addShape("rect", {
      x: x + cardW/2 - 0.2, y: startY + 1.72, w: 0.4, h: 0.02,
      fill: { color: theme.paperLine }, line: { color: theme.paperLine }
    });

    // 描述
    slide.addText(t.desc, {
      x: x + 0.2, y: startY + 1.85, w: cardW - 0.4, h: 0.6,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, align: "center"
    });

    // 解决目标
    slide.addShape("rect", {
      x: x + 0.2, y: startY + 2.45, w: cardW - 0.4, h: 0.35,
      fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
    });
    slide.addText(t.targets, {
      x: x + 0.2, y: startY + 2.45, w: cardW - 0.4, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center", valign: "middle"
    });
  });

  // 底部
  slide.addText("用 B=MAP 诊断完你的任务后，挑对应的工具去重新设计", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center", italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
