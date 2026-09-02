// slide-19.js - 模块要做的事
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "content-four-cards", index: 19, title: "模块要做的事" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标签
  slide.addText("WHAT THIS MODULE DOES", {
    x: 0.5, y: 0.25, w: 4.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("模块要做的事", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("你将在这个模块里完成四件事，构成完整的闭环。", {
    x: 0.5, y: 1.15, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 4个核心任务
  const tasks = [
    {
      num: "1",
      title: "建立判断标准",
      body: "能够识别计划里\n哪些任务\"看起来合理\n但实际上很难被执行\"。",
      verb: "识别"
    },
    {
      num: "2",
      title: "理解行为模型",
      body: "用 B=MAP 模型，\n理解行为为什么会发生\n或不发生。",
      verb: "理解"
    },
    {
      num: "3",
      title: "掌握设计工具",
      body: "把\"高风险\"任务\n重新设计成\n\"顺人性\"的版本。",
      verb: "设计"
    },
    {
      num: "4",
      title: "优化你的计划",
      body: "把整套方法用在\n自己的行动计划上，\n产出修订版。",
      verb: "应用"
    }
  ];

  tasks.forEach((t, i) => {
    const x = 0.5 + i * 2.35;
    // 卡片
    slide.addShape("rect", {
      x: x, y: 1.85, w: 2.15, h: 2.9,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 0.5 }
    });
    // 顶部红色
    slide.addShape("rect", {
      x: x, y: 1.85, w: 2.15, h: 0.7,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    // 大数字
    slide.addText(t.num, {
      x: x + 0.1, y: 1.95, w: 1, h: 0.55,
      fontSize: 36, fontFace: "Arial",
      color: "FFFFFF", bold: true
    });
    // 动词
    slide.addText(t.verb, {
      x: x + 1.0, y: 2.1, w: 1.05, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.goldAccent, bold: true, align: "right"
    });
    // 标题
    slide.addText(t.title, {
      x: x + 0.15, y: 2.7, w: 1.9, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });
    // 分割
    slide.addShape("rect", {
      x: x + 0.15, y: 3.2, w: 0.3, h: 0.02,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
    // 正文
    slide.addText(t.body, {
      x: x + 0.15, y: 3.3, w: 1.9, h: 1.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, lineSpacing: 14
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 4.95, w: 9, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("从\"正确的计划\"走向\"可执行的计划\"——这是本模块唯一的目标。", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
