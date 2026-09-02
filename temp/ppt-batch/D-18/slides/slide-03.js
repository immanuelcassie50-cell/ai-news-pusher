// D-18 覆盖度
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 3,
  title: '覆盖度'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("覆盖度", {
    x: 0.6, y: 0.4, w: 6, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.05, w: 0.6, h: 0.08,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("5 大方向 100% 覆盖 · 课后陪跑 92% 参与度", {
    x: 0.6, y: 1.25, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // 左侧：柱状图
  const dirData = [
    { d: "项目管理", n: 800, p: 100 },
    { d: "通用管理", n: 400, p: 100 },
    { d: "专业职能", n: 423, p: 100 },
    { d: "测试", n: 200, p: 100 },
    { d: "开发", n: 200, p: 100 }
  ];
  const maxN = 800;
  const barX = 0.6;
  const barW = 4.3;
  const chartH = 2.8;
  const barRowH = chartH / dirData.length;

  slide.addText("5 大方向覆盖人数", {
    x: 0.6, y: 1.85, w: 4.3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  dirData.forEach((d, i) => {
    const y = 2.3 + i * barRowH;
    slide.addText(d.d, {
      x: barX, y: y, w: 1.0, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
    const w = (d.n / maxN) * 2.6;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: barX + 1.05, y: y + 0.08, w: w, h: 0.25,
      fill: { color: theme.primary }, line: { type: "none" }
    });
    slide.addText(`${d.n}`, {
      x: barX + 1.05 + w + 0.05, y: y, w: 0.8, h: 0.4,
      fontSize: 12, fontFace: "Arial", color: theme.primary,
      bold: true, valign: "middle"
    });
  });

  // 右侧：覆盖度核心指标
  const metrics = [
    { v: "100%", t: "5 大方向覆盖率" },
    { v: "92%", t: "课后陪跑参与度" },
    { v: "85%", t: "提示词库应用率" },
    { v: "78%", t: "工具地图被复用率" }
  ];
  metrics.forEach((m, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 5.3 + col * 2.3;
    const y = 1.85 + row * 1.5;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.1, h: 1.3,
      fill: { color: theme.light }, line: { type: "none" }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.1, h: 0.08,
      fill: { color: theme.accent }, line: { type: "none" }
    });
    slide.addText(m.v, {
      x: x, y: y + 0.25, w: 2.1, h: 0.6,
      fontSize: 28, fontFace: "Arial", color: theme.primary,
      bold: true, align: "center", valign: "middle"
    });
    slide.addText(m.t, {
      x: x + 0.1, y: y + 0.85, w: 1.9, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });
  });

  slide.addText("数据来源：基础班签到 + 课后陪跑后台统计（截至 M6）", {
    x: 0.6, y: 5.0, w: 8.8, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("03", {
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
  pres.writeFile({ fileName: "slide-03-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
