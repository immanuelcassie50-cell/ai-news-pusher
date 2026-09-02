// slide-84.js - 苏敏案例：P 分析
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "diagnosis", index: 84, title: "苏敏案例：P 分析" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 顶部小标签
  slide.addText("苏敏案例 · 3/3", {
    x: 0.5, y: 0.3, w: 9, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.inkMute, charSpacing: 4, bold: true
  });

  // 标题
  slide.addText("P 提示分析", {
    x: 0.5, y: 0.55, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("有什么在合适的时机触发一对一？", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 左侧大字母
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 3.2, h: 3.5,
    fill: { color: theme.redDeep }, line: { color: theme.redDeep }
  });
  slide.addText("P", {
    x: 0.5, y: 1.6, w: 3.2, h: 1.7,
    fontSize: 130, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center"
  });
  slide.addText("提示", {
    x: 0.5, y: 3.3, w: 3.2, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  // 评级
  slide.addShape("rect", {
    x: 0.7, y: 3.85, w: 2.8, h: 0.4,
    fill: { color: "FFFFFF" }, line: { color: "FFFFFF" }
  });
  for (let i = 0; i < 7; i++) {
    slide.addShape("ellipse", {
      x: 0.85 + i * 0.36, y: 3.95, w: 0.2, h: 0.2,
      fill: { color: i === 0 ? theme.redDeep : theme.paperWarm },
      line: { color: i === 0 ? theme.redDeep : theme.paperWarm }
    });
  }
  slide.addText("P = 1/10（基本缺失）", {
    x: 0.5, y: 4.3, w: 3.2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  // 右侧 - 现状
  slide.addShape("rect", {
    x: 3.9, y: 1.5, w: 5.6, h: 3.5,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });

  slide.addText("计划的描述", {
    x: 4.1, y: 1.65, w: 5.2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 引言
  slide.addShape("rect", {
    x: 4.1, y: 2.1, w: 5.2, h: 0.7,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("「每周一次」", {
    x: 4.25, y: 2.15, w: 5, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("—— 没有具体哪一天、没有固定在日历上", {
    x: 4.25, y: 2.45, w: 5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 缺失
  slide.addText("没有的东西：", {
    x: 4.1, y: 2.95, w: 5.2, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  const missing = [
    "❌ 没有具体的日期和时段",
    "❌ 没有日历自动提醒",
    "❌ 没有环境触发机制",
    "❌ 完全依赖苏敏自己记得"
  ];

  missing.forEach((m, i) => {
    slide.addText(m, {
      x: 4.1, y: 3.3 + i * 0.32, w: 5.2, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.redDeep
    });
  });

  // 底部结论
  slide.addShape("rect", {
    x: 0.5, y: 5.05, w: 9, h: 0.35,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("P = 1 分 —— 这是 B=MAP 里最薄弱的一项", {
    x: 0.5, y: 5.05, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
