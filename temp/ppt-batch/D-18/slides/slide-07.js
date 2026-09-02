// D-18 优秀个人
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 7,
  title: '优秀个人'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("优秀个人 TOP 5", {
    x: 0.6, y: 0.4, w: 6, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.05, w: 0.6, h: 0.08,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("5 大方向各 1 名 · 综合评分 Top 5", {
    x: 0.6, y: 1.25, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  const tops = [
    { r: "01", d: "项目管理", n: "员工 A", t: "需求结构化", s: "24.5" },
    { r: "02", d: "通用管理", n: "员工 B", t: "周报自动写", s: "24.0" },
    { r: "03", d: "专业职能", n: "员工 C", t: "工艺文档助手", s: "23.8" },
    { r: "04", d: "测试", n: "员工 D", t: "用例自动铺", s: "23.5" },
    { r: "05", d: "开发", n: "员工 E", t: "Code Review 助手", s: "23.2" }
  ];
  tops.forEach((t, i) => {
    const y = 1.9 + i * 0.6;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: y, w: 8.8, h: 0.55,
      fill: { color: i % 2 === 0 ? theme.light : "FFFFFF" }, line: { type: "none" }
    });
    slide.addShape(pres.shapes.OVAL, {
      x: 0.75, y: y + 0.1, w: 0.35, h: 0.35,
      fill: { color: theme.primary }, line: { type: "none" }
    });
    slide.addText(t.r, {
      x: 0.75, y: y + 0.1, w: 0.35, h: 0.35,
      fontSize: 11, fontFace: "Arial", color: "FFFFFF",
      bold: true, align: "center", valign: "middle"
    });
    slide.addText(t.d, {
      x: 1.3, y: y, w: 1.3, h: 0.55,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });
    slide.addText(t.n, {
      x: 2.7, y: y, w: 1.5, h: 0.55,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
    slide.addText(t.t, {
      x: 4.3, y: y, w: 3.5, h: 0.55,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
    slide.addText(t.s, {
      x: 8.0, y: y, w: 1.3, h: 0.55,
      fontSize: 18, fontFace: "Arial", color: theme.accent,
      bold: true, align: "center", valign: "middle"
    });
  });

  // 表头提示
  slide.addText("排名 / 方向 / 姓名 / 课题 / 综合得分（25 分制）", {
    x: 0.6, y: 5.0, w: 8.8, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

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
