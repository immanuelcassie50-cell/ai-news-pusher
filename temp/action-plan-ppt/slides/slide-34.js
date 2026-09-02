// slide-34.js - 不清晰的后果（流程图）
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "flow", index: 34, title: "不清晰的后果" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("CONSEQUENCE", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 主标题
  slide.addText("不清晰的任务，会怎么一步步断掉", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 标题装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("\"想着做\"的次数越多，做的次数越少", {
    x: 0.5, y: 1.3, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  // 流程图：4个步骤
  const steps = [
    {
      num: "1",
      title: "任务模糊",
      desc: "\"改善沟通\"",
      detail: "看到任务的瞬间，不知道从哪开始"
    },
    {
      num: "2",
      title: "想着做",
      desc: "想着\"找时间做\"",
      detail: "心里挂念，但每天都有更紧急的事"
    },
    {
      num: "3",
      title: "需要先解决",
      desc: "需要先想清楚",
      detail: "需要专注和精力——而这两样最紧缺"
    },
    {
      num: "4",
      title: "拖延放弃",
      desc: "再也没做",
      detail: "被归类为\"等状态好时再做\""
    }
  ];

  const stepW = 2.0;
  const gap = 0.27;
  const startX = 0.5;

  steps.forEach((s, i) => {
    const x = startX + i * (stepW + gap);
    const y = 1.95;

    // 卡片
    slide.addShape("rect", {
      x, y, w: stepW, h: 2.2,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });

    // 步骤数字
    slide.addShape("ellipse", {
      x: x + 0.15, y: y + 0.15, w: 0.5, h: 0.5,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(s.num, {
      x: x + 0.15, y: y + 0.15, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center"
    });

    // 步骤标题
    slide.addText(s.title, {
      x: x + 0.15, y: y + 0.75, w: stepW - 0.3, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });

    // 描述（红色字）
    slide.addText(s.desc, {
      x: x + 0.15, y: y + 1.2, w: stepW - 0.3, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });

    // 详情
    slide.addText(s.detail, {
      x: x + 0.15, y: y + 1.6, w: stepW - 0.3, h: 0.55,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  // 箭头
  for (let i = 0; i < 3; i++) {
    const ax = startX + (i + 1) * stepW + i * gap + 0.02;
    slide.addShape("right_triangle", {
      x: ax, y: 3.0, w: 0.22, h: 0.2,
      fill: { color: theme.primary }, line: { color: theme.primary }, rotate: 30
    });
  }

  // 底部洞察块
  slide.addShape("rect", {
    x: 0.5, y: 4.4, w: 9, h: 0.9,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addShape("rect", {
    x: 0.5, y: 4.4, w: 0.12, h: 0.9,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("洞察", {
    x: 0.8, y: 4.5, w: 1, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("每次想到不清晰的任务，都需要先解决\"到底怎么做\"——这消耗的专注和精力，", {
    x: 0.8, y: 4.8, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("恰好是执行时最紧缺的两样。所以\"想着做\"的次数越多，真正做的次数越少。", {
    x: 0.8, y: 5.05, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
