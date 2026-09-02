// slide-92.js - 工具一引入：最小启动动作
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "tool-intro", index: 92, title: "工具一：最小启动动作" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧深红色大色块
  slide.addShape("rect", {
    x: 0, y: 0, w: 4.5, h: 5.625,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具编号
  slide.addText("TOOL 01", {
    x: 0.5, y: 0.6, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", charSpacing: 8, bold: true
  });

  // 装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.05, w: 0.5, h: 0.04,
    fill: { color: "FFFFFF" }, line: { color: "FFFFFF" }
  });

  // 大字工具名
  slide.addText("最小", {
    x: 0.5, y: 1.4, w: 4, h: 0.9,
    fontSize: 80, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("启动动作", {
    x: 0.5, y: 2.3, w: 4, h: 0.9,
    fontSize: 64, fontFace: "Microsoft YaHei",
    color: theme.redLight, bold: true
  });

  // 英文小字
  slide.addText("Smallest Startable Action", {
    x: 0.5, y: 3.3, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Arial",
    color: theme.redLight, italic: true
  });

  // B=MAP 徽章
  slide.addShape("ellipse", {
    x: 0.5, y: 4.2, w: 0.5, h: 0.5,
    fill: { color: "FFFFFF" }, line: { color: "FFFFFF" }
  });
  slide.addText("A", {
    x: 0.5, y: 4.2, w: 0.5, h: 0.5,
    fontSize: 24, fontFace: "Arial",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });
  slide.addText("改善 Ability（容易度）", {
    x: 1.2, y: 4.25, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle"
  });

  // 右侧副标题区
  slide.addText("把\"开始做这件事\"的第一个动作，", {
    x: 5.0, y: 1.4, w: 4.7, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("设计得小到不可拒绝。", {
    x: 5.0, y: 1.85, w: 4.7, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 三条要点
  const points = [
    "针对启动阻力高的任务",
    "一旦开始，惯性会带人继续",
    "状态不好的时候也能做"
  ];
  points.forEach((p, i) => {
    const y = 2.7 + i * 0.5;
    slide.addShape("rect", {
      x: 5.0, y: y + 0.1, w: 0.15, h: 0.15,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(p, {
      x: 5.3, y: y, w: 4.4, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, valign: "middle"
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 5.0, y: 4.5, w: 4.7, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("\"开始\"是阻力最大的一步", {
    x: 5.0, y: 4.65, w: 4.7, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, bold: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
