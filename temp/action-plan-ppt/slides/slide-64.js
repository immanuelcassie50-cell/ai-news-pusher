// slide-64.js - 动机的波动性：折线图
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "chart", index: 64, title: "动机的波动性" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标题
  slide.addText("动机的波动性", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("正常人的动机水平，在一周之内就会这样变化", {
    x: 0.5, y: 0.75, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 左侧文字
  slide.addText("一周内典型的", {
    x: 0.5, y: 1.35, w: 3.8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("动机曲线", {
    x: 0.5, y: 1.7, w: 3.8, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 关键数字
  slide.addShape("rect", {
    x: 0.5, y: 2.45, w: 3.8, h: 1.0,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("9", {
    x: 0.7, y: 2.5, w: 0.8, h: 0.85,
    fontSize: 44, fontFace: "Arial",
    color: theme.primary, bold: true, align: "center"
  });
  slide.addText("7", {
    x: 1.7, y: 2.5, w: 0.8, h: 0.85,
    fontSize: 44, fontFace: "Arial",
    color: theme.accent, bold: true, align: "center"
  });
  slide.addText("4", {
    x: 2.7, y: 2.5, w: 0.8, h: 0.85,
    fontSize: 44, fontFace: "Arial",
    color: theme.redBright, bold: true, align: "center"
  });
  slide.addText("高峰 · 中位 · 低谷", {
    x: 0.5, y: 3.5, w: 3.8, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center"
  });

  // 解释
  slide.addText("好消息时冲上 9 分", {
    x: 0.5, y: 3.95, w: 3.8, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("忙碌时回落到 7 分", {
    x: 0.5, y: 4.25, w: 3.8, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("沮丧时跌到 4 分", {
    x: 0.5, y: 4.55, w: 3.8, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("→ 单纯依赖 M，是不稳定的", {
    x: 0.5, y: 4.9, w: 3.8, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 右侧折线图
  slide.addShape("rect", {
    x: 4.6, y: 1.3, w: 5.0, h: 3.6,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });

  slide.addChart(pres.charts.LINE,
    [{
      name: "动机水平",
      labels: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      values: [9, 8, 7, 6, 5, 6, 7]
    }],
    {
      x: 4.7, y: 1.45, w: 4.8, h: 3.3,
      showLegend: true, legendPos: "b",
      legendFontSize: 9, legendFontFace: "Microsoft YaHei",
      chartColors: [theme.primary],
      lineSize: 3,
      lineDataSymbol: "circle",
      lineDataSymbolSize: 8,
      catAxisLabelFontSize: 9, catAxisLabelFontFace: "Microsoft YaHei",
      valAxisLabelFontSize: 9, valAxisLabelFontFace: "Arial",
      valAxisMinVal: 0, valAxisMaxVal: 10,
      valGridLine: { style: "solid", size: 0.5, color: theme.paperLine },
      catGridLine: { style: "none" },
      showTitle: true,
      title: "一周动机水平变化",
      titleFontSize: 11, titleFontFace: "Microsoft YaHei",
      titleColor: theme.ink
    }
  );

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.05, w: 9, h: 0.35,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("把执行完全建立在高动机上 = 把房子建在沙滩上", {
    x: 0.5, y: 5.05, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
