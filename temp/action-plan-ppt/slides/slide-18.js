// slide-18.js - 缺失的一环
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "compare", index: 18, title: "缺失的一环" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标签
  slide.addText("THE MISSING LINK", {
    x: 0.5, y: 0.25, w: 4.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("缺失的一环", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("一件很重要的事：在\"正确\"和\"可执行\"之间，存在着一个巨大的鸿沟。", {
    x: 0.5, y: 1.15, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 流程连线
  // 三个圆圈+连线
  const positions = [
    { x: 0.5, label: "正确的计划", desc: "目标对、任务全、\n逻辑清晰", color: theme.inkMute },
    { x: 3.85, label: "?", desc: "可执行性", color: theme.primary, big: true },
    { x: 7.2, label: "可执行的计划", desc: "在日常状态也能\n可靠发生", color: theme.inkMute }
  ];

  // 连接线
  slide.addShape("rect", {
    x: 1.9, y: 2.3, w: 1.95, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });
  slide.addShape("rect", {
    x: 5.25, y: 2.3, w: 1.95, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  positions.forEach((p, i) => {
    const isBig = p.big;
    const cy = isBig ? 2.15 : 2.05;
    const cw = isBig ? 1.0 : 0.7;
    const ch = isBig ? 1.0 : 0.7;
    // 圆圈
    slide.addShape("ellipse", {
      x: p.x + 0.4, y: cy, w: cw, h: ch,
      fill: { color: p.color }, line: { color: p.color }
    });
    // 数字/字符
    if (isBig) {
      slide.addText("?", {
        x: p.x + 0.4, y: cy + 0.05, w: 1.0, h: 1.0,
        fontSize: 48, fontFace: "Arial",
        color: "FFFFFF", bold: true, align: "center"
      });
    } else {
      slide.addText(String(i + 1), {
        x: p.x + 0.4, y: cy + 0.05, w: 0.7, h: 0.7,
        fontSize: 24, fontFace: "Arial",
        color: "FFFFFF", bold: true, align: "center"
      });
    }
    // 标签
    slide.addText(p.label, {
      x: p.x, y: 3.3, w: 1.8, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: p.color, bold: true, align: "center"
    });
    // 描述
    slide.addText(p.desc, {
      x: p.x, y: 3.7, w: 1.8, h: 0.6,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, align: "center", lineSpacing: 14
    });
  });

  // 重点说明区
  slide.addShape("rect", {
    x: 0.5, y: 4.5, w: 9, h: 0.85,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addShape("rect", {
    x: 0.5, y: 4.5, w: 0.08, h: 0.85,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("本模块不重新做计划，也不纠正错误目标——那些是之前的内容处理过的。", {
    x: 0.7, y: 4.55, w: 8.7, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("这里处理的是另一个问题：即便计划已经是\"正确\"的，它是否也是\"可执行\"的？", {
    x: 0.7, y: 4.85, w: 8.7, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("正确的计划很多，可执行的计划不多。", {
    x: 0.7, y: 5.1, w: 8.7, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
