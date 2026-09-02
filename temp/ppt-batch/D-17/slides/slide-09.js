// D-17 课题 B 试讲亮点（5步教学节拍）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 9,
  title: '课题 B · 试讲亮点'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 0.4, w: 1.2, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("课题 B", {
    x: 0.6, y: 0.4, w: 1.2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText("5 步教学节拍 · 内训师如何讲这堂 AI 课", {
    x: 1.9, y: 0.4, w: 7, h: 0.4,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle"
  });
  slide.addText("5 步节拍 = 引发兴趣 → 植入工具 → 跟练 → 模板提炼 → 成果交付", {
    x: 0.6, y: 0.95, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  const beats = [
    { t: "引发兴趣", d: "1 个真实翻车故事：客户邮件误把 A 项目代号发到 B 项目群" },
    { t: "植入工具", d: "现场展示内部「数智小西」可做什么、不能做什么" },
    { t: "跟练", d: "学员带自己真实邮件，90 分钟内出 7 段初稿" },
    { t: "模板提炼", d: "从 1 个案例提炼出「客户原文 → 7 段」通用提示词" },
    { t: "成果交付", d: "课后 48 小时内交 3 个真实需求文档结构化作业" }
  ];
  beats.forEach((b, i) => {
    const x = 0.6 + i * 1.78;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.6, w: 1.6, h: 3.0,
      fill: { color: theme.light }, line: { type: "none" }
    });
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.55, y: 1.8, w: 0.5, h: 0.5,
      fill: { color: theme.primary }, line: { type: "none" }
    });
    slide.addText(String(i + 1), {
      x: x + 0.55, y: 1.8, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial", color: "FFFFFF",
      bold: true, align: "center", valign: "middle"
    });
    slide.addText(b.t, {
      x: x, y: 2.5, w: 1.6, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center"
    });
    slide.addText(b.d, {
      x: x + 0.1, y: 2.95, w: 1.4, h: 1.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.8, w: 8.8, h: 0.4,
    fill: { color: theme.primary }, line: { type: "none" }
  });
  slide.addText("亮点：开场 1 个翻车故事 · 5 分钟抓住全场注意力", {
    x: 0.6, y: 4.8, w: 8.8, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("09", {
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
  pres.writeFile({ fileName: "slide-09-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
