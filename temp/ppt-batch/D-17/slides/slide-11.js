// D-17 课题 C 提示词
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 11,
  title: '课题 C · 提示词'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 0.4, w: 1.2, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("课题 C", {
    x: 0.6, y: 0.4, w: 1.2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText("提示词模板 · 客户档案是核心", {
    x: 1.9, y: 0.4, w: 7, h: 0.4,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle"
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.1, w: 8.8, h: 3.7,
    fill: { color: theme.light }, line: { type: "none" }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.1, w: 0.08, h: 3.7,
    fill: { color: theme.primary }, line: { type: "none" }
  });

  const blocks = [
    { tag: "【角色】", text: "你是德赛西威资深销售助理，擅长中英双语邮件写作，熟悉汽车电子行业客户" },
    { tag: "【背景】", text: "我有一封客户原始邮件 + 客户档案（行业/项目阶段/历史风格），需要生成 3 版不同语气草稿" },
    { tag: "【目标】", text: "输出 3 版草稿（正式/友好/简洁），每版≤200 字，附 1 句发送建议" },
    { tag: "【约束】", text: "客户名用 X 公司替代；金额仅做引用不主动提供；输出后必标「需人工核对」" }
  ];
  blocks.forEach((b, i) => {
    const y = 1.3 + i * 0.85;
    slide.addText(b.tag, {
      x: 0.85, y: y, w: 1.2, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(b.text, {
      x: 2.1, y: y, w: 7.2, h: 0.7,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.95, w: 8.8, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("迭代 3 次 · 销售岗 6 人复用 · 入提示词库 v1.4", {
    x: 0.6, y: 4.95, w: 8.8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("11", {
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
  pres.writeFile({ fileName: "slide-11-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
