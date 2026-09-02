// slide-20.js - 关于练习
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "content-note", index: 20, title: "关于练习" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标签
  slide.addText("ABOUT THE EXERCISES", {
    x: 0.5, y: 0.25, w: 4.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("关于练习", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 大字核心信息
  slide.addShape("rect", {
    x: 0.5, y: 1.3, w: 9, h: 0.9,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.3, w: 0.08, h: 0.9,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("整个模块的练习，都直接应用到你手上的行动计划。", {
    x: 0.8, y: 1.4, w: 8.5, h: 0.3,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("建议把你的行动计划放在手边。每个练习都会在接下来的内容里直接用到。", {
    x: 0.8, y: 1.7, w: 8.5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, lineSpacing: 16
  });

  // 三条原则
  const rules = [
    {
      num: "01",
      title: "真实优先",
      body: "用真实的计划，不要临时虚构。\n虚构的计划会得到虚构的洞察。"
    },
    {
      num: "02",
      title: "不怕不完美",
      body: "凭直觉打分也可以，\n不需要完美分析。\n真实感受比精确更重要。"
    },
    {
      num: "03",
      title: "反复回来",
      body: "练习之间不独立，\n后面的工具会反复用回前面的练习。"
    }
  ];

  rules.forEach((r, i) => {
    const y = 2.4 + i * 0.85;
    // 数字方块
    slide.addShape("rect", {
      x: 0.5, y: y, w: 0.6, h: 0.6,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(r.num, {
      x: 0.5, y: y + 0.08, w: 0.6, h: 0.45,
      fontSize: 20, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center"
    });
    // 标题
    slide.addText(r.title, {
      x: 1.25, y: y, w: 2, h: 0.3,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });
    // 分割
    slide.addShape("rect", {
      x: 1.25, y: y + 0.3, w: 0.3, h: 0.02,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
    // 正文
    slide.addText(r.body, {
      x: 1.25, y: y + 0.35, w: 4.5, h: 0.55,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, lineSpacing: 15
    });
  });

  // 右侧大色块
  slide.addShape("rect", {
    x: 6.2, y: 2.4, w: 3.3, h: 2.55,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("REMINDER", {
    x: 6.4, y: 2.55, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.goldAccent, bold: true, charSpacing: 4
  });
  slide.addText("做完练习 ≠ 完成", {
    x: 6.4, y: 2.9, w: 3, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addShape("rect", {
    x: 6.4, y: 3.4, w: 0.3, h: 0.03,
    fill: { color: theme.goldAccent }, line: { color: theme.goldAccent }
  });
  slide.addText("练习的价值在于：\n让你看见原来没看见的脆弱点，\n然后用工具重新设计。", {
    x: 6.4, y: 3.55, w: 3, h: 1.0,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.redLight, lineSpacing: 16
  });
  slide.addText("只练不改 = 没练", {
    x: 6.4, y: 4.6, w: 3, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
