// D-17 课题 B 效果对比
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 8,
  title: '课题 B · 效果对比'
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
  slide.addText("效果对比 · 评委点评", {
    x: 1.9, y: 0.4, w: 7, h: 0.4,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle"
  });

  slide.addText("前后对比", {
    x: 0.6, y: 1.1, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const cmp = [
    ["维度", "改前", "改后"],
    ["需求整理", "2 天", "30 分钟"],
    ["结构完整度", "参差不齐", "7 段齐全"],
    ["客户追问", "3-5 轮", "1 轮"],
    ["安全合规", "靠自觉", "提示词内嵌"]
  ];
  cmp.forEach((r, i) => {
    const y = 1.6 + i * 0.45;
    const bg = i === 0 ? theme.primary : (i % 2 === 0 ? theme.light : "FFFFFF");
    const fg = i === 0 ? "FFFFFF" : theme.secondary;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: y, w: 4.3, h: 0.45,
      fill: { color: bg }, line: { type: "none" }
    });
    slide.addText(r[0], { x: 0.7, y: y, w: 1.4, h: 0.45, fontSize: 12,
      color: i === 0 ? "FFFFFF" : theme.primary, bold: i === 0, valign: "middle", fontFace: "Microsoft YaHei" });
    slide.addText(r[1], { x: 2.1, y: y, w: 1.3, h: 0.45, fontSize: 12,
      color: fg, valign: "middle", fontFace: "Microsoft YaHei", align: "center" });
    slide.addText(r[2], { x: 3.4, y: y, w: 1.4, h: 0.45, fontSize: 12,
      color: i === 0 ? "FFFFFF" : theme.accent, bold: i !== 0, valign: "middle", fontFace: "Microsoft YaHei", align: "center" });
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.0, w: 4.3, h: 0.6,
    fill: { color: theme.primary }, line: { type: "none" }
  });
  slide.addText("单需求节省 1.5 天", {
    x: 0.6, y: 4.0, w: 4.3, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.1, w: 4.3, h: 3.5,
    fill: { color: theme.light }, line: { type: "none" }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.1, w: 4.3, h: 0.5,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("评委点评", {
    x: 5.3, y: 1.1, w: 4.0, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText([
    { text: "业务方（40%）：", options: { fontSize: 13, color: theme.primary, bold: true, breakLine: true } },
    { text: "  开放问题列表能反向推动客户", options: { fontSize: 13, color: theme.secondary, breakLine: true } },
    { text: "AI 方法论（30%）：", options: { fontSize: 13, color: theme.primary, bold: true, breakLine: true } },
    { text: "  脱敏规则嵌进约束条，是亮点", options: { fontSize: 13, color: theme.secondary, breakLine: true } },
    { text: "大众评审（20%）：", options: { fontSize: 13, color: theme.primary, bold: true, breakLine: true } },
    { text: "  4 个 PM 都在用，推广力强", options: { fontSize: 13, color: theme.secondary, breakLine: true } },
    { text: "综合得分：", options: { fontSize: 13, color: theme.primary, bold: true } },
    { text: "  24.0 / 25", options: { fontSize: 16, color: theme.accent, bold: true } }
  ], {
    x: 5.3, y: 1.7, w: 4.0, h: 2.8,
    fontFace: "Microsoft YaHei", paraSpaceAfter: 4
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
