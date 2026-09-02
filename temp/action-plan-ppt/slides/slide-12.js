// slide-12.js - 悖论的根源
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "three-mechanisms", index: 12, title: "悖论的根源" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标签
  slide.addText("THE ROOT CAUSE", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("悖论的根源", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("为什么\"完整的计划\"会反噬自己？三个相互叠加的机制。", {
    x: 0.5, y: 1.15, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 三个机制
  const mechanisms = [
    {
      num: "01",
      title: "完成想象的执行",
      body: "写完计划的那一刻，\n大脑产生了\"已经完成\"的错觉。\n执行本身尚未发生。",
      tag: "PSYCHOLOGICAL"
    },
    {
      num: "02",
      title: "越多的承诺",
      body: "计划越完整，\n任务的\"承诺数量\"越多。\n每一项都在争夺注意力和意志力。",
      tag: "COMMITMENT"
    },
    {
      num: "03",
      title: "意志力的耗尽",
      body: "意志力是会被耗尽的资源。\n依赖意志力维持的计划，\n在糟糕的一天就崩了。",
      tag: "RESOURCE"
    }
  ];

  mechanisms.forEach((m, i) => {
    const x = 0.5 + i * 3.1;
    // 卡片
    slide.addShape("rect", {
      x: x, y: 1.85, w: 2.9, h: 3.0,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 0.5 }
    });
    // 数字
    slide.addText(m.num, {
      x: x + 0.2, y: 1.95, w: 2.5, h: 0.7,
      fontSize: 42, fontFace: "Arial",
      color: theme.primary, bold: true
    });
    // 顶部横条
    slide.addShape("rect", {
      x: x + 0.2, y: 2.7, w: 0.5, h: 0.04,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    // 标题
    slide.addText(m.title, {
      x: x + 0.2, y: 2.85, w: 2.5, h: 0.4,
      fontSize: 17, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });
    // 正文
    slide.addText(m.body, {
      x: x + 0.2, y: 3.3, w: 2.5, h: 1.2,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, lineSpacing: 16
    });
    // 标签
    slide.addText(m.tag, {
      x: x + 0.2, y: 4.55, w: 2.5, h: 0.25,
      fontSize: 8, fontFace: "Arial",
      color: theme.inkMute, charSpacing: 4, bold: true
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 4.95, w: 9, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("这三个机制叠加在一起：好计划反而成了执行最大的敌人。", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
