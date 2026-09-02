// slide-48.js - 模式二：依赖他人
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "pattern", index: 48, title: "模式二：依赖他人" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("PATTERN 02", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 大数字
  slide.addText("02", {
    x: 8.0, y: 0.3, w: 1.5, h: 1.0,
    fontSize: 56, fontFace: "Arial",
    color: theme.redLight, bold: true, align: "right"
  });

  // 主标题
  slide.addText("模式二：依赖他人配合型", {
    x: 0.5, y: 0.6, w: 7, h: 0.55,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 标题装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("启动需要先等待别人响应", {
    x: 0.5, y: 1.3, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  // 关键词
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 9, h: 1.0,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("典型表述", {
    x: 0.7, y: 1.95, w: 2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const examples = [
    '"待某部门确认后推进"',
    '"配合 XX 完成 XX"',
    '"相关部门反馈后开始"',
    '"客户答复后跟进"'
  ];
  examples.forEach((e, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.7 + col * 4.4;
    const y = 2.3 + row * 0.32;
    slide.addText(e, {
      x, y, w: 4.2, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
  });

  // 流程图：等待→遗忘
  slide.addText("为什么它会失败？", {
    x: 0.5, y: 3.05, w: 9, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  const flow = [
    { num: "1", title: "需要等对方", desc: "对方暂时没空" },
    { num: "2", title: "任务挂着", desc: "自己先做别的" },
    { num: "3", title: "对方忘了", desc: "或反馈质量低" },
    { num: "4", title: "任务消失", desc: "在清单里躺尸" }
  ];

  const stepW = 2.0;
  const startX = 0.5;
  const gap = 0.27;
  const stepY = 3.5;

  flow.forEach((f, i) => {
    const x = startX + i * (stepW + gap);

    slide.addShape("rect", {
      x, y: stepY, w: stepW, h: 1.3,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });

    slide.addShape("ellipse", {
      x: x + 0.15, y: stepY + 0.15, w: 0.4, h: 0.4,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(f.num, {
      x: x + 0.15, y: stepY + 0.15, w: 0.4, h: 0.4,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center"
    });

    slide.addText(f.title, {
      x: x + 0.6, y: stepY + 0.2, w: stepW - 0.7, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });

    slide.addText(f.desc, {
      x: x + 0.15, y: stepY + 0.7, w: stepW - 0.3, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  // 箭头
  for (let i = 0; i < 3; i++) {
    const ax = startX + (i + 1) * stepW + i * gap + 0.02;
    slide.addShape("right_triangle", {
      x: ax, y: 4.1, w: 0.22, h: 0.2,
      fill: { color: theme.primary }, line: { color: theme.primary }, rotate: 30
    });
  }

  // 底部金句
  slide.addText("启动权不在自己 = 这件事不可控", {
    x: 0.5, y: 4.95, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.redDeep, align: "center", bold: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
