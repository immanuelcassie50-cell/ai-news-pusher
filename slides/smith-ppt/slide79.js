const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.accent }
  });
  slide.addText("练习四", {
    x: 0.5, y: 0.2, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Main title
  slide.addText("案例分析", {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Georgia",
    color: theme.primary, bold: true
  });

  // Case study box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.85, w: 9, h: 1.6,
    fill: { color: "FFFFFF" },
    line: { color: theme.primary, width: 2 }
  });
  slide.addText("案例：某城市突然宣布取消全部路边停车收费", {
    x: 0.7, y: 1.95, w: 8.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText([
    { text: "背景：政府为解决停车难问题，取消路边停车收费，改为免费停车", options: { breakLine: true } },
    { text: "结果：短时间内出现大量僵尸车，普通市民反而更难找到停车位", options: { breakLine: true } },
    { text: "问题：为什么会这样？请用斯密的思想分析" }
  ], {
    x: 0.7, y: 2.4, w: 8.6, h: 0.95,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Analysis framework
  slide.addText("分析框架", {
    x: 0.5, y: 3.6, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const frameworks = [
    { title: "价格信号", content: "收费提供了停车位供需的价格信号" },
    { title: "自我利益", content: "免费导致部分人长期占用停车位" },
    { title: "道德风险", content: "缺乏成本约束，理性人选择最大化便利" },
    { title: "政府边界", content: "此案例说明政府干预可能适得其反" }
  ];

  frameworks.forEach((f, i) => {
    const x = 0.5 + (i % 2) * 4.7;
    const y = 4.0 + Math.floor(i / 2) * 0.6;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.5, h: 0.5,
      fill: { color: i < 2 ? theme.secondary : theme.light }
    });
    slide.addText(f.title + "：" + f.content, {
      x: x + 0.1, y: y, w: 4.3, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: i < 2 ? "FFFFFF" : theme.primary, valign: "middle"
    });
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("79", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
