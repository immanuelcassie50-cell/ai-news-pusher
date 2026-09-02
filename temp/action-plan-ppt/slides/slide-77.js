// slide-77.js - 张明案例：高M高A但30%执行率
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "case", index: 77, title: "张明案例" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标题
  slide.addText("一个说明 P 重要性的真实场景", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("张明 —— 一个负责任的项目经理", {
    x: 0.5, y: 0.75, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 人物卡
  slide.addShape("rect", {
    x: 0.5, y: 1.3, w: 9, h: 1.0,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("ellipse", {
    x: 0.7, y: 1.45, w: 0.7, h: 0.7,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });
  slide.addText("张", {
    x: 0.7, y: 1.45, w: 0.7, h: 0.7,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText("张明", {
    x: 1.55, y: 1.45, w: 4, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("项目负责人 · 非常认真负责", {
    x: 1.55, y: 1.85, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 任务标签
  slide.addShape("rect", {
    x: 6.0, y: 1.5, w: 3.3, h: 0.6,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("行动计划里的任务", {
    x: 6.0, y: 1.5, w: 3.3, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center"
  });
  slide.addText("每周五下午发状态更新邮件", {
    x: 6.0, y: 1.7, w: 3.3, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true, align: "center"
  });

  // 三个维度
  const dims = [
    { letter: "M", label: "动机", value: "高", desc: "完全认可这件事的价值", color: theme.accent },
    { letter: "A", label: "能力", value: "高", desc: "完全有能力写这封邮件", color: theme.accent },
    { letter: "P", label: "提示", value: "缺失", desc: "没有任何东西在周五下午提醒他", color: theme.redDeep }
  ];

  const startX = 0.5;
  const startY = 2.55;
  const cardW = 3.0;
  const cardH = 1.4;
  const gap = 0.25;

  dims.forEach((d, i) => {
    const x = startX + i * (cardW + gap);
    const isGood = d.value === "高";
    slide.addShape("rect", {
      x: x, y: startY, w: cardW, h: cardH,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });
    slide.addShape("rect", {
      x: x, y: startY, w: 0.15, h: cardH,
      fill: { color: d.color }, line: { color: d.color }
    });
    slide.addText(d.letter, {
      x: x + 0.2, y: startY + 0.1, w: 0.6, h: 0.5,
      fontSize: 30, fontFace: "Arial",
      color: d.color, bold: true
    });
    slide.addText(d.label, {
      x: x + 0.85, y: startY + 0.15, w: 1.5, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.ink
    });
    slide.addText(d.value, {
      x: x + cardW - 1.2, y: startY + 0.1, w: 1.1, h: 0.5,
      fontSize: 24, fontFace: "Microsoft YaHei",
      color: d.color, bold: true, align: "right"
    });
    slide.addText(d.desc, {
      x: x + 0.2, y: startY + 0.75, w: cardW - 0.3, h: 0.6,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  // 结果
  slide.addShape("rect", {
    x: 0.5, y: 4.15, w: 9, h: 0.85,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("结果", {
    x: 0.7, y: 4.2, w: 1.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.redLight, bold: true
  });
  slide.addText("前两个月只发出去了 30%", {
    x: 0.5, y: 4.45, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  // 解读
  slide.addText("P 的缺失，让高 M 和高 A 都没有产生稳定的行为", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
