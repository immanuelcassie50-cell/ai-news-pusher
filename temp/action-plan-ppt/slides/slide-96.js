// slide-96.js - 启动-完成分离
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "contrast", index: 96, title: "启动-完成分离" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("工具一 · 最小启动动作", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 标题
  slide.addText("新的计划逻辑：把\"开始\"从\"完成\"里分离", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("不是把任务变小，而是把\"开始\"设计得极小", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 左侧：传统逻辑
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 4.3, h: 3.3,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 4.3, h: 0.5,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("通常的计划逻辑", {
    x: 0.7, y: 1.55, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  slide.addText("动作 = 完成", {
    x: 0.7, y: 2.1, w: 4, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("把\"动作\"定义为\"完成它\"。", {
    x: 0.7, y: 2.55, w: 4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  slide.addText("比如：", {
    x: 0.7, y: 3.0, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  const examples1 = [
    "完成团队技能评估报告",
    "更新风险跟踪清单",
    "完成月度项目经验总结"
  ];
  examples1.forEach((e, i) => {
    slide.addShape("ellipse", {
      x: 0.85, y: 3.4 + i * 0.35, w: 0.08, h: 0.08,
      fill: { color: theme.inkMute }, line: { color: theme.inkMute }
    });
    slide.addText(e, {
      x: 1.0, y: 3.35 + i * 0.35, w: 3.7, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  slide.addText("→ 看到任务 = 看到全部工作量", {
    x: 0.7, y: 4.45, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, italic: true
  });

  // 右侧：新逻辑
  slide.addShape("rect", {
    x: 5.1, y: 1.5, w: 4.4, h: 3.3,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 1.5, w: 4.4, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("最小启动动作逻辑", {
    x: 5.3, y: 1.55, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  slide.addText("动作 = 极小的开始", {
    x: 5.3, y: 2.1, w: 4, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("把\"开始\"从\"完成\"里分离。", {
    x: 5.3, y: 2.55, w: 4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  slide.addText("比如：", {
    x: 5.3, y: 3.0, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  const examples2 = [
    "打开评估模板，填日期和名单",
    "打开清单，在\"上次更新\"栏填日期",
    "新建一个文档，写下本月印象最深的事"
  ];
  examples2.forEach((e, i) => {
    slide.addShape("ellipse", {
      x: 5.45, y: 3.4 + i * 0.35, w: 0.08, h: 0.08,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(e, {
      x: 5.6, y: 3.35 + i * 0.35, w: 3.8, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  slide.addText("→ 启动本身几乎没有阻力", {
    x: 5.3, y: 4.45, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, bold: true
  });

  // 底部
  slide.addText("意图：做完这一步之后，继续下去的概率大幅上升", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
