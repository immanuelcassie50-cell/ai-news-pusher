// slide-73.js - A 的改善方向：2分钟启动/预设/减少决定
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "improvement", index: 73, title: "A 的改善方向" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标题
  slide.addText("A 的改善方向", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("把「容易做」这个事实在设计阶段就建立起来", {
    x: 0.5, y: 0.75, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 三个改善方向
  const items = [
    {
      num: "01",
      title: "把启动动作缩短到 2 分钟以内",
      eng: "Two-minute start",
      detail: "任务从「做完整件事」改为「迈出第一步」",
      example: "「写完周报」→「打开周报模板写下标题」",
      key: "启动摩擦下降 → 真的开始"
    },
    {
      num: "02",
      title: "预先做好所有需要在开始前做的准备",
      eng: "Pre-set",
      detail: "把所有决策和准备工作提前到任务开始之前",
      example: "「想好谈什么」→ 提前准备议程模板",
      key: "执行时不再需要思考"
    },
    {
      num: "03",
      title: "减少需要在执行前做的决定",
      eng: "Fewer decisions",
      detail: "把选择移到流程里，不留给当时的自己",
      example: "「找时间做」→ 固定每周三下午 2 点",
      key: "决定不在状态差时做"
    }
  ];

  const startY = 1.3;
  const rowH = 1.2;
  const rowGap = 0.05;

  items.forEach((it, i) => {
    const y = startY + i * (rowH + rowGap);

    // 行背景
    slide.addShape("rect", {
      x: 0.5, y: y, w: 9, h: rowH,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });

    // 左侧编号色块
    slide.addShape("rect", {
      x: 0.5, y: y, w: 0.9, h: rowH,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
    slide.addText(it.num, {
      x: 0.5, y: y, w: 0.9, h: rowH,
      fontSize: 32, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    // 主标题
    slide.addText(it.title, {
      x: 1.55, y: y + 0.1, w: 5.5, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });

    // 英文
    slide.addText(it.eng, {
      x: 1.55, y: y + 0.5, w: 5.5, h: 0.3,
      fontSize: 10, fontFace: "Arial",
      color: theme.accent, charSpacing: 4, bold: true
    });

    // 描述
    slide.addText(it.detail, {
      x: 1.55, y: y + 0.8, w: 5.5, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });

    // 右侧 - 例子
    slide.addShape("rect", {
      x: 7.2, y: y + 0.1, w: 2.2, h: rowH - 0.2,
      fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
    });
    slide.addText("例子", {
      x: 7.3, y: y + 0.15, w: 2, h: 0.25,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.inkMute, bold: true
    });
    slide.addText(it.example, {
      x: 7.3, y: y + 0.4, w: 2, h: 0.45,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.ink
    });
    slide.addText(it.key, {
      x: 7.3, y: y + 0.85, w: 2, h: 0.2,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.05, w: 9, h: 0.35,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("改善 A 比提升 M 更可靠，因为容易度不会随情绪波动", {
    x: 0.5, y: 5.05, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
