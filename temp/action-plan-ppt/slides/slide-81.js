// slide-81.js - 乘法逻辑：任一接近零=整体接近零
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "key-insight", index: 81, title: "乘法逻辑" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 顶部标签
  slide.addText("CRITICAL LOGIC", {
    x: 0.5, y: 0.3, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Arial",
    color: theme.inkMute, charSpacing: 6, bold: true
  });

  // 大标题
  slide.addText("B = M × A × P 是乘法", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true, align: "center"
  });
  slide.addText("不是加法", {
    x: 0.5, y: 1.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  // 数字演示
  const scenarios = [
    { m: 8, a: 8, p: 8, result: "512" },
    { m: 8, a: 8, p: 1, result: "64" },
    { m: 8, a: 1, p: 8, result: "64" },
    { m: 1, a: 8, p: 8, result: "64" }
  ];

  const startX = 0.5;
  const startY = 2.2;
  const rowH = 0.5;
  const rowGap = 0.08;

  scenarios.forEach((s, i) => {
    const y = startY + i * (rowH + rowGap);
    const isHigh = i === 0;
    const isLow = i > 0;

    // 背景
    slide.addShape("rect", {
      x: startX, y: y, w: 9, h: rowH,
      fill: { color: isHigh ? theme.paperWarm : theme.paper },
      line: { color: isHigh ? theme.accent : theme.paperLine, width: 1 }
    });

    // M
    slide.addText("M=" + s.m, {
      x: startX + 0.3, y: y, w: 1.2, h: rowH,
      fontSize: 14, fontFace: "Arial",
      color: isHigh ? theme.ink : (s.m < 5 ? theme.redDeep : theme.ink),
      bold: s.m < 5, valign: "middle", align: "center"
    });
    // ×
    slide.addText("×", {
      x: startX + 1.5, y: y, w: 0.4, h: rowH,
      fontSize: 14, fontFace: "Arial",
      color: theme.inkMute, valign: "middle", align: "center"
    });
    // A
    slide.addText("A=" + s.a, {
      x: startX + 1.9, y: y, w: 1.2, h: rowH,
      fontSize: 14, fontFace: "Arial",
      color: isHigh ? theme.ink : (s.a < 5 ? theme.redDeep : theme.ink),
      bold: s.a < 5, valign: "middle", align: "center"
    });
    // ×
    slide.addText("×", {
      x: startX + 3.1, y: y, w: 0.4, h: rowH,
      fontSize: 14, fontFace: "Arial",
      color: theme.inkMute, valign: "middle", align: "center"
    });
    // P
    slide.addText("P=" + s.p, {
      x: startX + 3.5, y: y, w: 1.2, h: rowH,
      fontSize: 14, fontFace: "Arial",
      color: isHigh ? theme.ink : (s.p < 5 ? theme.redDeep : theme.ink),
      bold: s.p < 5, valign: "middle", align: "center"
    });
    // =
    slide.addText("=", {
      x: startX + 4.7, y: y, w: 0.4, h: rowH,
      fontSize: 14, fontFace: "Arial",
      color: theme.inkMute, valign: "middle", align: "center"
    });
    // B
    slide.addText("B=" + s.result, {
      x: startX + 5.1, y: y, w: 1.5, h: rowH,
      fontSize: 18, fontFace: "Arial",
      color: isHigh ? theme.primary : theme.inkMute,
      bold: true, valign: "middle", align: "center"
    });
    // 标签
    slide.addText(isHigh ? "完整三要素" : "任一接近零，整体骤降", {
      x: startX + 6.7, y: y, w: 2.2, h: rowH,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: isHigh ? theme.primary : theme.inkSoft,
      italic: !isHigh, valign: "middle"
    });
  });

  // 结论
  slide.addShape("rect", {
    x: 0.5, y: 4.7, w: 9, h: 0.7,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("先问「哪一个最低」，再集中处理那一个", {
    x: 0.5, y: 4.7, w: 9, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText("均匀提升所有要素，不如集中处理最薄弱的那一项", {
    x: 0.5, y: 5.05, w: 9, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.redLight, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
