// slide-51.js - 模式五：高能量依赖
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "pattern", index: 51, title: "模式五：高能量依赖" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("PATTERN 05", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 大数字
  slide.addText("05", {
    x: 8.0, y: 0.3, w: 1.5, h: 1.0,
    fontSize: 56, fontFace: "Arial",
    color: theme.redLight, bold: true, align: "right"
  });

  // 主标题
  slide.addText("模式五：高能量依赖型", {
    x: 0.5, y: 0.6, w: 7, h: 0.55,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 标题装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("需要专注、有创意、精力充沛才能完成", {
    x: 0.5, y: 1.3, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  // 典型场景
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 9, h: 0.9,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("典型任务", {
    x: 0.7, y: 1.93, w: 2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("创意工作 · 深度思考 · 战略规划 · 复杂问题解决 · 文章写作 · 设计思考", {
    x: 0.7, y: 2.2, w: 8.5, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 精力曲线对比
  slide.addText("为什么它会失败？", {
    x: 0.5, y: 2.95, w: 9, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 左侧：能量曲线
  slide.addShape("rect", {
    x: 0.5, y: 3.4, w: 4.4, h: 1.85,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addText("一周精力波动", {
    x: 0.5, y: 3.45, w: 4.4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true, align: "center"
  });

  // 简化的能量柱状图
  const energies = [0.7, 0.85, 0.6, 0.9, 0.4];
  const days = ["一", "二", "三", "四", "五"];
  const barX = 0.85;
  const barY = 3.85;
  const barW = 0.5;
  const barMaxH = 1.1;
  const barGap = 0.25;

  energies.forEach((e, i) => {
    const h = e * barMaxH;
    const y = barY + (barMaxH - h);
    const x = barX + i * (barW + barGap);
    const color = e < 0.5 ? theme.inkMute : (e < 0.7 ? theme.goldAccent : theme.primary);
    slide.addShape("rect", {
      x, y, w: barW, h,
      fill: { color }, line: { color }
    });
    slide.addText(days[i], {
      x, y: barY + barMaxH + 0.05, w: barW, h: 0.25,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.inkMute, align: "center"
    });
  });

  // 横线
  slide.addShape("rect", {
    x: barX - 0.05, y: barY + barMaxH * 0.4, w: 4.0, h: 0.02,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("需高能量", {
    x: 4.4, y: barY + barMaxH * 0.4 - 0.13, w: 0.55, h: 0.3,
    fontSize: 8, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  // 右侧：洞察
  slide.addShape("rect", {
    x: 5.1, y: 3.4, w: 4.4, h: 1.85,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 2 }
  });
  slide.addText("问题本质", {
    x: 5.3, y: 3.5, w: 4.0, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("没有设计保障", {
    x: 5.3, y: 3.85, w: 4.0, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("让他在\"高能量状态\"下做它", {
    x: 5.3, y: 4.25, w: 4.0, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary
  });
  slide.addShape("rect", {
    x: 5.3, y: 4.75, w: 0.4, h: 0.02,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("你可能每次都计划\"有空且状态好时做\"，", {
    x: 5.3, y: 4.8, w: 4.0, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("但那个时候很少到来。", {
    x: 5.3, y: 5.05, w: 4.0, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
