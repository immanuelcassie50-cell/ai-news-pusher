// slide-23.js - 苏敏的计划
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "content-list", index: 23, title: "苏敏的计划" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标签
  slide.addText("THE PLAN", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("苏敏的计划", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("计划里有四件核心事，目标清晰、逻辑合理、分工明确。", {
    x: 0.5, y: 1.15, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 四件事 - 2x2 网格
  const items = [
    {
      num: "01",
      freq: "每周",
      title: "一对一辅导",
      body: "覆盖所有直属下属\n做深度发展对话"
    },
    {
      num: "02",
      freq: "每月",
      title: "团队复盘",
      body: "集体回顾项目过程\n提炼经验教训"
    },
    {
      num: "03",
      freq: "每双周",
      title: "跨部门经验交流",
      body: "横向连接\n打破信息孤岛"
    },
    {
      num: "04",
      freq: "每季度",
      title: "个人发展计划更新",
      body: "结合业务变化\n调整个人成长方向"
    }
  ];

  items.forEach((it, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.6;
    const y = 1.85 + row * 1.55;

    // 卡片
    slide.addShape("rect", {
      x: x, y: y, w: 4.4, h: 1.4,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 0.5 }
    });
    // 左侧大块
    slide.addShape("rect", {
      x: x, y: y, w: 1.4, h: 1.4,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    // 数字
    slide.addText(it.num, {
      x: x, y: y + 0.15, w: 1.4, h: 0.5,
      fontSize: 28, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center"
    });
    // 频率
    slide.addText(it.freq, {
      x: x, y: y + 0.7, w: 1.4, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.goldAccent, bold: true, align: "center"
    });
    // 装饰线
    slide.addShape("rect", {
      x: x + 0.5, y: y + 1.05, w: 0.4, h: 0.02,
      fill: { color: theme.goldAccent }, line: { color: theme.goldAccent }
    });

    // 标题
    slide.addText(it.title, {
      x: x + 1.55, y: y + 0.15, w: 2.7, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });
    // 分割
    slide.addShape("rect", {
      x: x + 1.55, y: y + 0.6, w: 0.3, h: 0.02,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
    // 描述
    slide.addText(it.body, {
      x: x + 1.55, y: y + 0.7, w: 2.7, h: 0.6,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, lineSpacing: 15
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.32,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("看起来很完美的计划。下面是它后来的故事。", {
    x: 0.5, y: 5.04, w: 9, h: 0.24,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
