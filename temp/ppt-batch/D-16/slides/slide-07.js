// D-16 奖项设置
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 7,
  title: '6 大奖项'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("6 大奖项", {
    x: 0.6, y: 0.4, w: 6, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.05, w: 0.6, h: 0.08,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("评业务价值 · 评可复制 · 评安全合规", {
    x: 0.6, y: 1.25, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // 6 大奖项
  const awards = [
    { n: "01", t: "最具业务价值提示词奖", q: "1-2", c: "提示词评分 Top 1-2" },
    { n: "02", t: "最佳场景化应用奖", q: "1-2", c: "做法+效果+对比综合 Top" },
    { n: "03", t: "最具推广价值工具地图奖", q: "1", c: "工具地图 + 同事复用次数" },
    { n: "04", t: "最佳 AI 内训师奖", q: "若干", c: "内训师班综合评分 Top" },
    { n: "05", t: "AI 推广卓越团队奖", q: "1 组", c: "部门参与度+应用率" },
    { n: "06", t: "AI 安全合规标兵奖", q: "1-2", c: "零违规 + 主动发现风险" }
  ];

  awards.forEach((a, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.6 + col * 3.0;
    const y = 1.9 + row * 1.6;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.8, h: 1.4,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.8, h: 0.4,
      fill: { color: theme.primary }, line: { type: "none" }
    });
    slide.addText(`奖项 ${a.n}`, {
      x: x + 0.15, y: y, w: 2.0, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, valign: "middle"
    });
    slide.addText(`×${a.q}`, {
      x: x + 1.8, y: y, w: 0.9, h: 0.4,
      fontSize: 13, fontFace: "Arial",
      color: theme.accent, bold: true, align: "right", valign: "middle"
    });
    slide.addText(a.t, {
      x: x + 0.15, y: y + 0.5, w: 2.6, h: 0.45,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(a.c, {
      x: x + 0.15, y: y + 0.95, w: 2.6, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // 页码
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("07", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "003D7A", secondary: "333333", accent: "00A0E9",
    light: "F4F6F9", bg: "FFFFFF"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-07-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
