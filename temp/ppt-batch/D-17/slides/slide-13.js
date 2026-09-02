// D-17 三课题总览
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 13,
  title: '三课题横向对比'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("三课题横向对比", {
    x: 0.6, y: 0.4, w: 8, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.05, w: 0.6, h: 0.08,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("3 个示范课题覆盖 3 类岗位 · 3 种 AI 能力组合", {
    x: 0.6, y: 1.25, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  const rows = [
    ["", "课题 A · 测试用例", "课题 B · 需求文档", "课题 C · 客户邮件"],
    ["岗位", "测试", "项目管理", "销售"],
    ["核心工具", "GPT-4 + Excel 公式", "数智小西 + Word", "数智小西 + 知识库"],
    ["核心能力", "结构化输出", "脱敏 + 模板", "风格匹配"],
    ["节省时间", "6 小时/单需求", "1.5 天/单需求", "2 小时/天"],
    ["推广人数", "4 人复用", "5 人复用", "6 人复用"],
    ["综合得分", "23.5", "24.0", "23.0"]
  ];

  // 表头
  const colX = [0.6, 2.85, 5.10, 7.35];
  const colW = [2.2, 2.2, 2.2, 2.2];

  // 表头底
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.85, w: 8.95, h: 0.5,
    fill: { color: theme.primary }, line: { type: "none" }
  });
  rows[0].forEach((cell, i) => {
    slide.addText(cell, {
      x: colX[i] + 0.1, y: 1.85, w: colW[i] - 0.1, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, valign: "middle"
    });
  });

  for (let r = 1; r < rows.length; r++) {
    const y = 2.35 + (r - 1) * 0.38;
    const bg = r % 2 === 0 ? theme.light : "FFFFFF";
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: y, w: 8.95, h: 0.38,
      fill: { color: bg }, line: { type: "none" }
    });
    rows[r].forEach((cell, i) => {
      const isScore = r === 6;
      slide.addText(cell, {
        x: colX[i] + 0.1, y: y, w: colW[i] - 0.1, h: 0.38,
        fontSize: 12, fontFace: i === 0 ? "Microsoft YaHei" : "Microsoft YaHei",
        color: i === 0 ? theme.primary : (isScore ? theme.accent : theme.secondary),
        bold: i === 0 || isScore, valign: "middle"
      });
    });
  }

  // 底部结论
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.85, w: 8.8, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("平均节省 40% 时间 · 综合得分 23.5/25 · 可复制到 5 大方向", {
    x: 0.6, y: 4.85, w: 8.8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("13", {
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
  pres.writeFile({ fileName: "slide-13-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
