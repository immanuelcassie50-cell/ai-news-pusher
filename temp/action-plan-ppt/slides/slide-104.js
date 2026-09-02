// slide-104.js - 核心原则：借力已有触发器
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "concept", index: 104, title: "核心原则" };

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
  slide.addText("核心原则：借力已有触发器", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("不为新任务从零建立触发，而是接在已有行为后面", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 关键洞察
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 9, h: 1.1,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("新任务没有触发器。你不能为一件从未发生过的事情建立自动触发——至少在短期内不行。", {
    x: 0.7, y: 1.6, w: 8.6, h: 0.9,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle"
  });

  // 三个逻辑步骤
  const steps = [
    { num: "1", title: "已有行为", desc: "找一个已经稳定发生、有可靠触发器的行为", color: theme.inkMute },
    { num: "2", title: "接在后面", desc: "把新任务\"接\"在这个已有行为之后", color: theme.accent },
    { num: "3", title: "形成自动", desc: "新任务被已有行为的触发器自动激活", color: theme.primary }
  ];

  steps.forEach((s, i) => {
    const x = 0.5 + i * 3.1;
    // 卡片
    slide.addShape("rect", {
      x: x, y: 2.85, w: 2.9, h: 1.6,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });
    // 数字
    slide.addShape("ellipse", {
      x: x + 1.15, y: 3.0, w: 0.5, h: 0.5,
      fill: { color: s.color }, line: { color: s.color }
    });
    slide.addText(s.num, {
      x: x + 1.15, y: 3.0, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    // 标题
    slide.addText(s.title, {
      x: x + 0.2, y: 3.6, w: 2.5, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true, align: "center"
    });
    // 描述
    slide.addText(s.desc, {
      x: x + 0.2, y: 3.9, w: 2.5, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, align: "center"
    });
  });

  // 箭头
  for (let i = 0; i < 2; i++) {
    slide.addShape("rightArrow", {
      x: 3.4 + i * 3.1, y: 3.6, w: 0.3, h: 0.2,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
  }

  // 底部
  slide.addText("逻辑：从\"创造触发器\"变为\"借用触发器\"", {
    x: 0.5, y: 4.6, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  // 例子
  slide.addText("\"每次开周会后\" → \"更新进展看板\"", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
