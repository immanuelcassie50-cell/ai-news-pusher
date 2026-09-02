// slide-24.js - 6个月曲线
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "chart-line", index: 24, title: "6个月曲线" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标签
  slide.addText("THE 6-MONTH CURVE", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("6 个月执行曲线", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("苏敏的计划在前 6 个月的执行率变化。", {
    x: 0.5, y: 1.15, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 折线图
  const chartData = [
    {
      name: "执行率",
      labels: ["第1个月", "第2个月", "第3个月", "第4个月", "第5个月", "第6个月"],
      values: [90, 60, 30, 15, 8, 0]
    }
  ];

  slide.addChart(pres.charts.LINE, chartData, {
    x: 0.5, y: 1.8, w: 5.5, h: 3.2,
    chartColors: [theme.primary],
    lineSize: 3,
    lineDataSymbol: "circle",
    lineDataSymbolSize: 10,
    lineDataSymbolLineColor: theme.primary,
    lineDataSymbolFillColor: theme.goldAccent,
    showLegend: false,
    showTitle: false,
    catAxisLabelFontSize: 10,
    catAxisLabelFontFace: "Microsoft YaHei",
    catAxisLabelColor: theme.inkSoft,
    valAxisLabelFontSize: 10,
    valAxisLabelFontFace: "Arial",
    valAxisLabelColor: theme.inkMute,
    valAxisMaxVal: 100,
    valAxisMinVal: 0,
    valAxisMajorUnit: 25,
    valAxisLabelFormatCode: "0\"%\"",
    showValue: true,
    dataLabelFontSize: 11,
    dataLabelFontBold: true,
    dataLabelColor: theme.primary,
    dataLabelPosition: "t",
    catGridLine: { style: "none" },
    valGridLine: { style: "solid", size: 0.5, color: theme.paperLine }
  });

  // 右侧 - 解读
  slide.addShape("rect", {
    x: 6.2, y: 1.8, w: 3.3, h: 3.2,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 0.5 }
  });

  slide.addText("THE STORY", {
    x: 6.4, y: 1.95, w: 3, h: 0.3,
    fontSize: 9, fontFace: "Arial",
    color: theme.inkMute, charSpacing: 4, bold: true
  });

  slide.addText("从 90% 到 0%", {
    x: 6.4, y: 2.25, w: 3, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape("rect", {
    x: 6.4, y: 2.7, w: 0.3, h: 0.03,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  // 时间线
  const timeline = [
    { month: "M1", val: "90%", note: "所有人都比较积极" },
    { month: "M2", val: "60%", note: "重点项目冲刺挤压" },
    { month: "M3", val: "象征", note: "开始默认\"先放一放\"" },
    { month: "M6", val: "基本停止", note: "四件事里只有月度复盘勉强维持" }
  ];

  timeline.forEach((t, i) => {
    const y = 2.85 + i * 0.5;
    // 月份
    slide.addText(t.month, {
      x: 6.4, y: y, w: 0.5, h: 0.3,
      fontSize: 11, fontFace: "Arial",
      color: theme.accent, bold: true
    });
    // 数值
    slide.addText(t.val, {
      x: 6.9, y: y, w: 1.1, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });
    // 描述
    slide.addText(t.note, {
      x: 6.4, y: y + 0.22, w: 3, h: 0.25,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("这条曲线，是 30-50% 完成率的具体形状。", {
    x: 0.5, y: 5.08, w: 9, h: 0.24,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
