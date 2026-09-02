// slide-34.js - 四维利益应用案例
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 34, title: '四维利益应用' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M2 · 四维利益：实战分解", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("同一个\"涨价 5%\"，四种利益在博弈", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("用\"供应商涨价 5%\"拆解四维利益——你能满足哪几个？", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // Header row
  const colX = [0.4, 2.3, 5.5];
  const colW = [1.85, 3.1, 4.1];
  slide.addShape("rect", {
    x: 0.4, y: 1.75, w: 9.2, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  const heads = ["维度", "供应商的诉求", "可以怎么应对"];
  heads.forEach((h, i) => {
    slide.addText(h, {
      x: colX[i] + 0.15, y: 1.75, w: colW[i] - 0.3, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, valign: "middle"
    });
  });

  const rows = [
    ["实质", "成本确实涨了，要补利润", "谈成本明细 / 谈替代方案 / 谈长期折扣换当前让利"],
    ["程序", "想要一个\"被尊重的谈判\"", "主动安排专属会议 / 给他充分陈述时间 / 不在小群里逼问"],
    ["关系", "想做我们的长期战略供应商", "签 3 年合同换当前不涨 / 谈年度返点设计"],
    ["原则", "同行都在涨，我不涨就是背叛行业", "提供行业数据 / 提议参照第三方价格指数"]
  ];

  rows.forEach((r, i) => {
    const y = 2.15 + i * 0.6;
    const bgColor = i % 2 === 0 ? "FFFFFF" : theme.bg;
    slide.addShape("rect", {
      x: 0.4, y: y, w: 9.2, h: 0.6,
      fill: { color: bgColor }, line: { color: theme.light, width: 0.5 }
    });
    r.forEach((c, j) => {
      const isFirst = j === 0;
      slide.addText(c, {
        x: colX[j] + 0.15, y: y, w: colW[j] - 0.3, h: 0.6,
        fontSize: isFirst ? 13 : 10.5,
        fontFace: "Microsoft YaHei",
        color: isFirst ? theme.accent : theme.primary,
        bold: isFirst, valign: "middle", lineSpacing: 14
      });
    });
  });

  // Bottom insight
  slide.addShape("rect", {
    x: 0.4, y: 4.75, w: 9.2, h: 0.6,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1 }
  });
  slide.addText("四维任意一个被满足，都可能撼动\"涨价 5%\"这个立场", {
    x: 0.55, y: 4.8, w: 9, h: 0.25,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("如果只盯实质，博弈空间小；把四维都打开，方案空间从 1 变成 16+", {
    x: 0.55, y: 5.05, w: 9, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("34", {
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
  pres.writeFile({ fileName: "slide-34-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
