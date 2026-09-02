// D-17 课题 B 提示词
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 7,
  title: '课题 B · 提示词'
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
  slide.addText("提示词模板 · 安全合规是亮点", {
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
    { tag: "【角色】", text: "你是德赛西威资深 PM，专做客户需求结构化（车载电子方向）" },
    { tag: "【背景】", text: "我有一封客户原始邮件（已做初轮脱敏：产品代号→项目X，金额→XX万元），需要转成公司标准 7 段模板" },
    { tag: "【目标】", text: "输出 7 段结构化文档（背景/范围/角色/功能/非功能/约束/风险），并在末尾列出 5 个需向客户确认的开放问题" },
    { tag: "【约束】", text: "不输出邮件中未提及的新功能；红灯信息（员工隐私/未发布专利）必须标出；中英混合术语保留原名" }
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
  slide.addText("迭代 4 次 · 同事复用 5 人 · 入提示词库 v1.3", {
    x: 0.6, y: 4.95, w: 8.8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
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
