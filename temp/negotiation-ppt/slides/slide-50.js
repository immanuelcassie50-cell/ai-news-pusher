// slide-50.js - 三个数字现场演练
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 50, title: '三个数字演练' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M3 · 演练：算一算你身边的谈判", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("案例：你在考虑要不要接一个私活", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("用三个数字框架快速算清楚", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // Background facts
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.75, w: 9.2, h: 0.6,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
  });
  slide.addText("事实", {
    x: 0.55, y: 1.78, w: 0.7, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("现职月薪 2 万 / 工作日晚上 + 周末有时间 / 还有一家公司也找过你，offer 1.8 万月薪 + 期权", {
    x: 0.55, y: 2.0, w: 9, h: 0.3,
    fontSize: 10.5, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // 3 numbers calculation
  const nums = [
    {
      n: "BATNA",
      v: "1.8 万 + 期权",
      calc: "如果私活谈崩，去第二家公司",
      rationale: "明确数值 + 真实可执行",
      color: theme.secondary
    },
    {
      n: "底线",
      v: "2.0 万（私活月收入）",
      calc: "必须 ≥ 现职 2 万的\"月当量\"",
      rationale: "机会成本意识——不做就亏",
      color: theme.accent
    },
    {
      n: "期望",
      v: "2.5 万",
      calc: "私活更累 + 加班 + 无福利 → 25% 加成",
      rationale: "模糊感觉 + 锚定到 BATNA 的 1.4 倍",
      color: theme.primary
    }
  ];

  nums.forEach((nm, i) => {
    const x = 0.4 + i * 3.1;
    const y = 2.55;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 2.05,
      fill: { color: "FFFFFF" }, line: { color: nm.color, width: 1 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 0.4,
      fill: { color: nm.color }, line: { color: nm.color, width: 0 }
    });
    slide.addText(nm.n, {
      x: x, y: y, w: 2.9, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, valign: "middle", align: "center"
    });
    slide.addText(nm.v, {
      x: x + 0.15, y: y + 0.5, w: 2.6, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: nm.color, bold: true, align: "center"
    });
    slide.addText("计算", {
      x: x + 0.15, y: y + 1.05, w: 2.6, h: 0.25,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true
    });
    slide.addText(nm.calc, {
      x: x + 0.15, y: y + 1.27, w: 2.6, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, lineSpacing: 13
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.15, y: y + 1.7, w: 2.6, h: 0.3,
      fill: { color: theme.bg }, line: { color: theme.accent, width: 0.5 }
    });
    slide.addText(nm.rationale, {
      x: x + 0.25, y: y + 1.7, w: 2.4, h: 0.3,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, valign: "middle"
    });
  });

  // Bottom
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.8, w: 9.2, h: 0.55,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("结论：客户开到 2.2 万 → 接受；开到 1.9 万 → 礼貌拒绝，转去 BATNA", {
    x: 0.5, y: 4.8, w: 8.5, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("50", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "1A2B4C", secondary: "8B5A3C", accent: "C9A961", light: "E8E0D0", bg: "FAF7F2" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-50-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
