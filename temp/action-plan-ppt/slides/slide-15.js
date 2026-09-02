// slide-15.js - 状态落差
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "chart-pie", index: 15, title: "状态落差" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标签
  slide.addText("THE GAP", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("规划与执行的鸿沟", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("你的时间，绝大多数都花在\"执行状态\"里。", {
    x: 0.5, y: 1.15, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 左侧 - 饼图
  const pieData = [
    {
      name: "状态时间占比",
      labels: ["规划状态（写计划/思考/设计）", "执行状态（日常忙碌/被打断/能量低位）"],
      values: [15, 85]
    }
  ];

  slide.addChart(pres.charts.DOUGHNUT, pieData, {
    x: 0.3, y: 1.75, w: 4.5, h: 3.3,
    chartColors: [theme.primary, theme.light],
    showLegend: true,
    legendPos: "b",
    legendFontSize: 10,
    legendFontFace: "Microsoft YaHei",
    showPercent: true,
    dataLabelColor: "FFFFFF",
    dataLabelFontSize: 12,
    dataLabelFontBold: true,
    showTitle: false,
    holeSize: 55,
  });

  // 中央大数字
  slide.addText("85%", {
    x: 1.4, y: 2.65, w: 2.3, h: 0.7,
    fontSize: 48, fontFace: "Arial",
    color: theme.primary, bold: true, align: "center"
  });
  slide.addText("执行状态", {
    x: 1.4, y: 3.35, w: 2.3, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center"
  });

  // 右侧 - 解读
  slide.addShape("rect", {
    x: 5.0, y: 1.75, w: 4.5, h: 3.3,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 0.5 }
  });

  slide.addText("WHAT THIS MEANS", {
    x: 5.2, y: 1.9, w: 4, h: 0.3,
    fontSize: 9, fontFace: "Arial",
    color: theme.inkMute, charSpacing: 4, bold: true
  });

  slide.addText("计划设计时 VS 计划执行时", {
    x: 5.2, y: 2.2, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 分割
  slide.addShape("rect", {
    x: 5.2, y: 2.65, w: 0.3, h: 0.03,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  // 对比项
  const points = [
    { label: "设计环境", left: "安静、独立", right: "被打断、应急" },
    { label: "时间预算", left: "整块时间", right: "碎片时间" },
    { label: "能量水平", left: "高位充沛", right: "低位耗损" },
    { label: "决策成本", left: "几乎为零", right: "高昂代价" }
  ];

  points.forEach((p, i) => {
    const y = 2.85 + i * 0.4;
    slide.addText(p.label, {
      x: 5.2, y: y, w: 1.2, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.inkMute
    });
    slide.addText(p.left, {
      x: 6.5, y: y, w: 1.4, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });
    slide.addText("→", {
      x: 7.9, y: y, w: 0.3, h: 0.3,
      fontSize: 12, fontFace: "Arial",
      color: theme.accent, bold: true
    });
    slide.addText(p.right, {
      x: 8.2, y: y, w: 1.3, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
  });

  // 底部
  slide.addShape("rect", {
    x: 5.0, y: 4.55, w: 4.5, h: 0.5,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("写计划的人在 15% 的时间里，\n却默认 100% 的执行也能用同样的方式发生。", {
    x: 5.0, y: 4.6, w: 4.5, h: 0.4,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", lineSpacing: 14, italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
