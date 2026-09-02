// D-18 优秀团队
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 8,
  title: '优秀团队'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("AI 推广卓越团队", {
    x: 0.6, y: 0.4, w: 6, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.05, w: 0.6, h: 0.08,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("部门参与度 + 应用率 Top 1 团队", {
    x: 0.6, y: 1.25, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // 团队奖项卡
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.9, w: 4.3, h: 3.0,
    fill: { color: theme.primary }, line: { type: "none" }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.9, w: 4.3, h: 0.6,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("AI 推广卓越团队奖", {
    x: 0.6, y: 1.9, w: 4.3, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText("智能驾驶开发部", {
    x: 0.6, y: 2.7, w: 4.3, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });
  slide.addText("120 人 / 5 个小组", {
    x: 0.6, y: 3.4, w: 4.3, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "center"
  });
  // 数据条
  const datas = [
    { l: "覆盖率", v: "100%" },
    { l: "应用率", v: "94%" },
    { l: "复用率", v: "88%" }
  ];
  datas.forEach((d, i) => {
    const y = 3.9 + i * 0.32;
    slide.addText(d.l, {
      x: 1.0, y: y, w: 1.5, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", valign: "middle"
    });
    slide.addText(d.v, {
      x: 2.8, y: y, w: 1.5, h: 0.3,
      fontSize: 16, fontFace: "Arial", color: theme.accent,
      bold: true, align: "right", valign: "middle"
    });
  });

  // 右侧：亮点
  slide.addText("推广亮点", {
    x: 5.1, y: 1.9, w: 4.3, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  const pts = [
    { t: "组长带头", d: "组长每周 1 次 AI 案例分享" },
    { t: "内部互评", d: "5 小组互评提示词质量" },
    { t: "共享知识库", d: "部门级提示词库 800+ 条" },
    { t: "零违规", d: "连续 6 周安全合规零事故" }
  ];
  pts.forEach((p, i) => {
    const y = 2.4 + i * 0.6;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.1, y: y, w: 4.3, h: 0.5,
      fill: { color: theme.light }, line: { type: "none" }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.1, y: y, w: 0.08, h: 0.5,
      fill: { color: theme.accent }, line: { type: "none" }
    });
    slide.addText(p.t, {
      x: 5.3, y: y, w: 1.4, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });
    slide.addText(p.d, {
      x: 6.7, y: y, w: 2.6, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.95, w: 8.8, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("推荐：授予「AI 推广卓越团队」称号 + 部门绩效加分", {
    x: 0.6, y: 4.95, w: 8.8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("08", {
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
  pres.writeFile({ fileName: "slide-08-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
