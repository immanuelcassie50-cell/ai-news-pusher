// slide-79.js - B=MAP 综合应用：诊断三问
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "process", index: 79, title: "B=MAP 综合应用" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标题
  slide.addText("B=MAP 的综合应用：诊断一个不执行的任务", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("当一个任务在现实中没有被执行时，按顺序问三个问题", {
    x: 0.5, y: 0.75, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 流程图
  // 开始节点
  slide.addShape("rect", {
    x: 3.5, y: 1.3, w: 3, h: 0.6,
    fill: { color: theme.ink }, line: { color: theme.ink }
  });
  slide.addText("一个不执行的任务", {
    x: 3.5, y: 1.3, w: 3, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // 三问节点
  const questions = [
    {
      letter: "M",
      question: "他理解为什么吗？",
      color: theme.accent
    },
    {
      letter: "A",
      question: "做起来容易吗？",
      color: theme.accent
    },
    {
      letter: "P",
      question: "有什么触发？可靠吗？",
      color: theme.accent
    }
  ];

  questions.forEach((q, i) => {
    const x = 0.5 + i * 3.1;
    // 箭头/连接线
    if (i === 0) {
      slide.addShape("line", {
        x: 5.0, y: 1.9, w: 0, h: 0.2,
        line: { color: theme.inkMute, width: 1 }
      });
      slide.addShape("line", {
        x: 2.05, y: 2.1, w: 0, h: 0.2,
        line: { color: theme.inkMute, width: 1 }
      });
    } else {
      slide.addShape("line", {
        x: 3.55 + (i - 1) * 3.1, y: 2.1, w: 0, h: 0.2,
        line: { color: theme.inkMute, width: 1 }
      });
    }

    // 问号节点
    slide.addShape("ellipse", {
      x: x + 0.7, y: 2.3, w: 1.4, h: 0.7,
      fill: { color: q.color }, line: { color: q.color }
    });
    slide.addText(q.letter, {
      x: x + 0.7, y: 2.3, w: 1.4, h: 0.7,
      fontSize: 30, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    // 问题
    slide.addText(q.question, {
      x: x, y: 3.1, w: 2.8, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true, align: "center"
    });
  });

  // 三种结果
  const outcomes = [
    {
      result: "M 低",
      action: "先建立意义感",
      color: theme.inkMute
    },
    {
      result: "A 低",
      action: "用设计工具降阻力",
      color: theme.accent
    },
    {
      result: "P 弱/无",
      action: "重新设计触发器",
      color: theme.primary
    }
  ];

  outcomes.forEach((o, i) => {
    const x = 0.5 + i * 3.1;

    // 连接
    slide.addShape("line", {
      x: x + 1.4, y: 3.5, w: 0, h: 0.2,
      line: { color: theme.inkMute, width: 1 }
    });

    // 结果卡片
    slide.addShape("rect", {
      x: x, y: 3.7, w: 2.8, h: 1.1,
      fill: { color: theme.paper }, line: { color: o.color, width: 1 }
    });
    slide.addText(o.result, {
      x: x, y: 3.75, w: 2.8, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: o.color, bold: true, align: "center"
    });
    slide.addText(o.action, {
      x: x, y: 4.25, w: 2.8, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, align: "center"
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("下一页：三个问题具体问什么", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center", valign: "middle", italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
