const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("交易成本的现实世界", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 28, color: "FFFFFF", bold: true
  });

  // Definition box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fill: { color: theme.accent, transparency: 85 }
  });
  slide.addText("交易成本：达成一项交易所需的全部时间和金钱（科斯，1937）", {
    x: 0.6, y: 1.2, w: 8.8, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 13, color: theme.secondary,
    align: "center", valign: "middle"
  });

  // Types of transaction costs
  slide.addText("交易成本的类型", {
    x: 0.5, y: 1.95, w: 4.3, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 14, color: theme.primary, bold: true
  });

  const tcTypes = [
    { name: "搜索成本", desc: "寻找交易对象" },
    { name: "谈判成本", desc: "讨价还价、签约" },
    { name: "监督成本", desc: "确保合约执行" },
    { name: "执行成本", desc: "产权保护与纠纷解决" }
  ];

  tcTypes.forEach((tc, i) => {
    const y = 2.4 + i * 0.55;
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 4.3, h: 0.5,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 }
    });
    slide.addText(tc.name, {
      x: 0.6, y: y + 0.05, w: 1.3, h: 0.4,
      fontFace: "Microsoft YaHei", fontSize: 11, color: theme.accent, bold: true
    });
    slide.addText(tc.desc, {
      x: 1.9, y: y + 0.05, w: 2.8, h: 0.4,
      fontFace: "Microsoft YaHei", fontSize: 11, color: theme.secondary
    });
  });

  // Why firms exist
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.95, w: 4.3, h: 2.7,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 1 }
  });
  slide.addText("为何存在企业？", {
    x: 5.3, y: 2.0, w: 4.1, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 14, color: theme.primary, bold: true
  });
  slide.addText([
    { text: "市场交易有成本", options: { bullet: true, breakLine: true } },
    { text: "企业内协调（权威关系）成本更低", options: { bullet: true, breakLine: true } },
    { text: "企业边界取决于市场交易成本 vs. 内部协调成本", options: { bullet: true, breakLine: true } },
    { text: "→ 解释企业的起源与规模", options: { bullet: true } }
  ], {
    x: 5.4, y: 2.45, w: 4, h: 2,
    fontFace: "Microsoft YaHei", fontSize: 11, color: theme.secondary
  });

  // Connection to Smith
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.8, w: 9, h: 0.7,
    fill: { color: theme.secondary }
  });
  slide.addText("斯密视角：劳动分工受市场范围限制。科斯补充：市场范围受交易成本制约", {
    x: 0.6, y: 4.9, w: 8.8, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 12, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("37", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontFace: "Calibri", fontSize: 11, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
