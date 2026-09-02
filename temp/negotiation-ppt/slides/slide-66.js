// slide-66.js - 锚定效应
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 66, title: '锚定效应' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M4 · 锚定效应：先出价的人定规则", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("第一数字的力量", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("Tversky & Kahneman 1974：心理锚定——任何第一数字都会影响后续判断", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // Experiment
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.75, w: 9.2, h: 1.1,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1.5 }
  });
  slide.addText("经典实验", {
    x: 0.55, y: 1.8, w: 1.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("两组人转动转盘（数字随机），然后问：\"非洲国家在联合国的比例是多少？\"", {
    x: 0.55, y: 2.1, w: 9, h: 0.3,
    fontSize: 10.5, fontFace: "Microsoft YaHei",
    color: theme.primary
  });
  slide.addText("转盘转到 65 的人 → 平均估计 45%  /  转盘转到 10 的人 → 平均估计 25%", {
    x: 0.55, y: 2.4, w: 9, h: 0.4,
    fontSize: 10.5, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Implications
  slide.addText("在谈判中的意义：", {
    x: 0.4, y: 3.0, w: 9.2, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 3 implications
  const imps = [
    {
      t: "谁先报价",
      d: "谁就设定了\"区间\"——后续所有讨论都在这个区间附近发生"
    },
    {
      t: "先报的人有利",
      d: "哪怕报得离谱，最终结果也会偏向先报方的方向"
    },
    {
      t: "后报的对策",
      d: "\"这个数字超出我的考虑范围\"+ 重设锚（不直接否定，而是把锚拉到对自己有利的范围）"
    }
  ];

  imps.forEach((im, i) => {
    const y = 3.35 + i * 0.55;
    slide.addShape(pres.shapes.OVAL, {
      x: 0.55, y: y + 0.07, w: 0.4, h: 0.4,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
    });
    slide.addText(`${i + 1}`, {
      x: 0.55, y: y + 0.07, w: 0.4, h: 0.4,
      fontSize: 13, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(im.t, {
      x: 1.1, y: y, w: 2.4, h: 0.55,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });
    slide.addText(im.d, {
      x: 3.55, y: y, w: 6.0, h: 0.55,
      fontSize: 10.5, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle", lineSpacing: 13
    });
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("66", {
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
  pres.writeFile({ fileName: "slide-66-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
