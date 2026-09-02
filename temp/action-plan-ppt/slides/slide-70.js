// slide-70.js - 状态影响图：精力-能力曲线
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "chart", index: 70, title: "状态影响图" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标题
  slide.addText("状态影响图：精力-能力曲线", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("一个任务的「能力成本」随精力状态变化", {
    x: 0.5, y: 0.75, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 左侧文字
  slide.addText("在状态好的时候，", {
    x: 0.5, y: 1.3, w: 3.7, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("再难的任务也显得简单", {
    x: 0.5, y: 1.65, w: 3.7, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addShape("rect", {
    x: 0.5, y: 2.15, w: 0.3, h: 0.03,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  slide.addText("在状态差的时候，", {
    x: 0.5, y: 2.3, w: 3.7, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("简单的事也变成障碍", {
    x: 0.5, y: 2.65, w: 3.7, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.redDeep, bold: true
  });

  // 启示
  slide.addShape("rect", {
    x: 0.5, y: 3.3, w: 3.7, h: 1.6,
    fill: { color: theme.paperWarm }, line: { color: theme.paperLine }
  });
  slide.addText("设计的启示", {
    x: 0.7, y: 3.4, w: 3.5, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });
  slide.addText("1. 任务设计要假设低状态", {
    x: 0.7, y: 3.7, w: 3.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("2. 把能力成本压到最低", {
    x: 0.7, y: 4.0, w: 3.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("3. 状态好时拓展、高难度", {
    x: 0.7, y: 4.3, w: 3.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("4. 状态差时仅维护、低成本", {
    x: 0.7, y: 4.6, w: 3.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  // 右侧图表
  slide.addShape("rect", {
    x: 4.4, y: 1.3, w: 5.2, h: 3.6,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });

  slide.addChart(pres.charts.LINE,
    [
      {
        name: "能力成本",
        labels: ["满精力", "高精力", "正常", "较低", "疲惫", "耗竭"],
        values: [2, 3, 5, 8, 12, 18]
      }
    ],
    {
      x: 4.5, y: 1.4, w: 5.0, h: 3.4,
      showLegend: false,
      chartColors: [theme.accent],
      lineSize: 3,
      lineDataSymbol: "circle",
      lineDataSymbolSize: 9,
      catAxisLabelFontSize: 9, catAxisLabelFontFace: "Microsoft YaHei",
      valAxisLabelFontSize: 9, valAxisLabelFontFace: "Arial",
      valAxisMinVal: 0, valAxisMaxVal: 20,
      valGridLine: { style: "solid", size: 0.5, color: theme.paperLine },
      catGridLine: { style: "none" },
      showTitle: true,
      title: "状态越差，做同一件事的「成本」越高",
      titleFontSize: 11, titleFontFace: "Microsoft YaHei",
      titleColor: theme.ink
    }
  );

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.05, w: 9, h: 0.35,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("让事情变容易，比让人更努力更有效", {
    x: 0.5, y: 5.05, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
