// D-16 5 阶段路径
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 4,
  title: '5 阶段陪跑路径'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("5 阶段陪跑路径", {
    x: 0.6, y: 0.4, w: 6, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.05, w: 0.6, h: 0.08,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("从调研到认证的完整闭环", {
    x: 0.6, y: 1.25, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // 5 阶段时间线
  const phases = [
    { num: "P0", t: "调研诊断", d: "岗位盘点\n场景摸底" },
    { num: "P1", t: "备料开发", d: "工具地图\n提示词初稿" },
    { num: "P2", t: "内化开发", d: "10 项课程包\n6 天精打" },
    { num: "P3", t: "评审认证", d: "5+10+5\n说课+试讲+追问" },
    { num: "P4", t: "陪跑落地", d: "2-4 周\n场景化应用" }
  ];

  // 主连线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 3.0, w: 8.4, h: 0.04,
    fill: { color: theme.accent }, line: { type: "none" }
  });

  phases.forEach((p, i) => {
    const x = 0.6 + i * 1.85;
    // 圆点
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.4, y: 2.78, w: 0.5, h: 0.5,
      fill: { color: theme.primary }, line: { color: theme.bg, width: 3 }
    });
    slide.addText(p.num, {
      x: x + 0.4, y: 2.78, w: 0.5, h: 0.5,
      fontSize: 12, fontFace: "Arial", color: "FFFFFF",
      bold: true, align: "center", valign: "middle"
    });
    // 标题
    slide.addText(p.t, {
      x: x, y: 3.5, w: 1.3, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center"
    });
    // 描述
    slide.addText(p.d, {
      x: x, y: 3.9, w: 1.3, h: 0.7,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });
  });

  // 评审日定位高亮
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.85, w: 8.8, h: 0.5,
    fill: { color: theme.primary }, line: { type: "none" }
  });
  slide.addText("今天 · D5-D6 = P3 评审认证日", {
    x: 0.6, y: 4.85, w: 8.8, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // 页码
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("04", {
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
  pres.writeFile({ fileName: "slide-04-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
