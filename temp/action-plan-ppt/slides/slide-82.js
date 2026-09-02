// slide-82.js - 苏敏案例：M 分析
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "diagnosis", index: 82, title: "苏敏案例：M 分析" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 顶部小标签
  slide.addText("苏敏案例 · 1/3", {
    x: 0.5, y: 0.3, w: 9, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.inkMute, charSpacing: 4, bold: true
  });

  // 标题
  slide.addText("回到苏敏的「每周一对一辅导」", {
    x: 0.5, y: 0.55, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("诊断三要素之一：M 动机分析", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 左侧大字母 + 评级
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 3.2, h: 3.5,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });
  slide.addText("M", {
    x: 0.5, y: 1.6, w: 3.2, h: 1.7,
    fontSize: 130, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center"
  });
  slide.addText("动机", {
    x: 0.5, y: 3.3, w: 3.2, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  // 评级条
  slide.addShape("rect", {
    x: 0.7, y: 3.85, w: 2.8, h: 0.4,
    fill: { color: "FFFFFF" }, line: { color: "FFFFFF" }
  });
  // 7个圆点表示7分
  for (let i = 0; i < 7; i++) {
    slide.addShape("ellipse", {
      x: 0.85 + i * 0.36, y: 3.95, w: 0.2, h: 0.2,
      fill: { color: i < 7 ? theme.accent : theme.paperWarm },
      line: { color: i < 7 ? theme.accent : theme.paperWarm }
    });
  }
  slide.addText("M = 7/10（大致够）", {
    x: 0.5, y: 4.3, w: 3.2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  // 右侧分析
  slide.addShape("rect", {
    x: 3.9, y: 1.5, w: 5.6, h: 3.5,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });

  slide.addText("分析依据", {
    x: 4.1, y: 1.65, w: 5.2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // 优点
  slide.addShape("rect", {
    x: 4.1, y: 2.1, w: 5.2, h: 1.3,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("✓ 做得好的", {
    x: 4.25, y: 2.2, w: 5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("· 苏敏和团队成员大多认可一对一辅导的价值", {
    x: 4.25, y: 2.5, w: 5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("· 大致有内在动力去执行这件事", {
    x: 4.25, y: 2.8, w: 5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("· 没有明显的抵触或顾虑", {
    x: 4.25, y: 3.1, w: 5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  // 注意点
  slide.addText("⚠ 但要注意", {
    x: 4.1, y: 3.55, w: 5.2, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.redDeep, bold: true
  });
  slide.addText("· 忙碌时 M 会波动", {
    x: 4.1, y: 3.85, w: 5.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("· 偶尔觉得「最近事太多，能缓一缓就好了」", {
    x: 4.1, y: 4.15, w: 5.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 结论
  slide.addText("→ M 不是主要问题", {
    x: 4.1, y: 4.55, w: 5.2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 底部
  slide.addText("下一页：A（容易度）分析", {
    x: 0.5, y: 5.15, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center", italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
