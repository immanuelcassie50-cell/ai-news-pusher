// slide-123.js - 识别方法：走查执行路径
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "howto", index: 123, title: "识别方法" };

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

  // 标题
  slide.addText("识别摩擦的方法：走一遍执行路径", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("对于一个高风险任务，做一次\"执行路径走查\"", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 路径图
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 9, h: 1.4,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addText("执行路径示例", {
    x: 0.7, y: 1.6, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 步骤
  const steps = [
    "决定要做",
    "找文件/工具",
    "思考怎么做",
    "找人/协调",
    "开始执行",
    "完成"
  ];
  steps.forEach((s, i) => {
    const x = 0.7 + i * 1.5;
    slide.addShape("rect", {
      x: x, y: 2.1, w: 1.3, h: 0.5,
      fill: { color: theme.paperWarm }, line: { color: theme.accent, width: 1 }
    });
    slide.addText(s, {
      x: x, y: 2.1, w: 1.3, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.ink, align: "center", valign: "middle"
    });
    if (i < steps.length - 1) {
      slide.addShape("rightArrow", {
        x: x + 1.32, y: 2.27, w: 0.16, h: 0.15,
        fill: { color: theme.accent }, line: { color: theme.accent }
      });
    }
  });
  slide.addText("↑ 每一格问自己：这一步有没有可能卡住？卡住后会怎样？", {
    x: 0.7, y: 2.65, w: 8.6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // 关键问题
  slide.addShape("rect", {
    x: 0.5, y: 3.1, w: 9, h: 1.7,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("两个关键问题", {
    x: 0.7, y: 3.2, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const questions = [
    { q: "Q1", desc: "这一步有没有可能卡住？（缺信息？缺工具？缺别人响应？）" },
    { q: "Q2", desc: "如果卡住，接下来会发生什么？是继续推进，还是放弃？" }
  ];

  questions.forEach((q, i) => {
    const y = 3.6 + i * 0.55;
    slide.addShape("rect", {
      x: 0.7, y: y, w: 0.5, h: 0.4,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(q.q, {
      x: 0.7, y: y, w: 0.5, h: 0.4,
      fontSize: 13, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(q.desc, {
      x: 1.3, y: y, w: 8, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.ink, valign: "middle"
    });
  });

  // 底部
  slide.addText("所有可能导致卡住的步骤 = 摩擦点 = 可以设计改进的地方", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
