// D-18 推广案例
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 6,
  title: '推广案例'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("3 个标杆推广案例", {
    x: 0.6, y: 0.4, w: 6, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.05, w: 0.6, h: 0.08,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("从 1 个内训师 → 跨部门 50+ 人复用", {
    x: 0.6, y: 1.25, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  const cases = [
    { d: "案例 1", t: "测试部·用例自动铺", from: "1 人", to: "12 人", effect: "用例覆盖率 ↑ 40%，新人上手 2 周 → 3 天" },
    { d: "案例 2", t: "项目管理部·需求结构化", from: "1 个 PM", to: "8 个 PM", effect: "需求评审周期 2 天 → 30 分钟" },
    { d: "案例 3", t: "销售部·客户邮件助手", from: "1 个销售", to: "6 个销售", effect: "日省 2 小时，客户投诉率 ↓ 50%" }
  ];
  cases.forEach((c, i) => {
    const y = 1.9 + i * 1.0;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: y, w: 8.8, h: 0.9,
      fill: { color: theme.light }, line: { type: "none" }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: y, w: 0.9, h: 0.9,
      fill: { color: theme.primary }, line: { type: "none" }
    });
    slide.addText(c.d, {
      x: 0.6, y: y, w: 0.9, h: 0.9,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(c.t, {
      x: 1.7, y: y + 0.1, w: 3.5, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(c.effect, {
      x: 1.7, y: y + 0.5, w: 4.5, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    // 扩展数
    slide.addText("扩展", {
      x: 6.4, y: y + 0.1, w: 1.0, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    slide.addText(c.from, {
      x: 6.4, y: y + 0.4, w: 1.0, h: 0.3,
      fontSize: 12, fontFace: "Arial", color: theme.secondary,
      align: "center"
    });
    slide.addText("→", {
      x: 7.4, y: y + 0.3, w: 0.4, h: 0.3,
      fontSize: 16, fontFace: "Arial", color: theme.accent,
      bold: true, align: "center"
    });
    slide.addText(c.to, {
      x: 7.8, y: y + 0.4, w: 1.5, h: 0.3,
      fontSize: 14, fontFace: "Arial", color: theme.accent,
      bold: true, align: "center"
    });
  });

  slide.addText("标杆经验已写入知识库 · 供全公司复制", {
    x: 0.6, y: 5.0, w: 8.8, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("06", {
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
  pres.writeFile({ fileName: "slide-06-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
