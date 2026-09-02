// D-16 评审议程
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 5,
  title: '评审议程'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("评审议程", {
    x: 0.6, y: 0.4, w: 6, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.05, w: 0.6, h: 0.08,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("D5 上午说课 · D5 下午试讲 · D6 评议颁奖", {
    x: 0.6, y: 1.25, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // 议程表
  const agenda = [
    ["D5 09:00-12:00", "内训师 5 分钟说课 × 5-6 人", "业务方 + AI 方法论"],
    ["D5 14:00-17:00", "内训师 10 分钟试讲 × 5-6 人", "全评审团 + AI 追问"],
    ["D5 17:00-18:00", "10 项课程包文档评审", "业务方 + AI 方法论"],
    ["D6 09:00-12:00", "课程包深度评审", "业务方 + AI 方法论"],
    ["D6 14:00-16:00", "综合评议 + 奖项评定", "闭门会议"],
    ["D6 16:00-17:00", "评审反馈 + 改进建议", "全体内训师"],
    ["D6 18:00-19:30", "结营仪式 + 颁奖", "项目组 + 领导"]
  ];

  // 表头
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.9, w: 8.8, h: 0.4,
    fill: { color: theme.primary }, line: { type: "none" }
  });
  slide.addText("时段", { x: 0.7, y: 1.9, w: 2.0, h: 0.4,
    fontSize: 14, color: "FFFFFF", bold: true, valign: "middle", fontFace: "Microsoft YaHei" });
  slide.addText("内容", { x: 2.7, y: 1.9, w: 4.5, h: 0.4,
    fontSize: 14, color: "FFFFFF", bold: true, valign: "middle", fontFace: "Microsoft YaHei" });
  slide.addText("评审团", { x: 7.3, y: 1.9, w: 2.0, h: 0.4,
    fontSize: 14, color: "FFFFFF", bold: true, valign: "middle", fontFace: "Microsoft YaHei" });

  agenda.forEach((row, i) => {
    const y = 2.3 + i * 0.38;
    const bg = i % 2 === 0 ? "FFFFFF" : theme.light;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: y, w: 8.8, h: 0.38,
      fill: { color: bg }, line: { type: "none" }
    });
    slide.addText(row[0], { x: 0.7, y: y, w: 2.0, h: 0.38,
      fontSize: 12, color: theme.primary, bold: true, valign: "middle", fontFace: "Arial" });
    slide.addText(row[1], { x: 2.7, y: y, w: 4.5, h: 0.38,
      fontSize: 12, color: theme.secondary, valign: "middle", fontFace: "Microsoft YaHei" });
    slide.addText(row[2], { x: 7.3, y: y, w: 2.0, h: 0.38,
      fontSize: 12, color: theme.secondary, valign: "middle", fontFace: "Microsoft YaHei" });
  });

  // 页码
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("05", {
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
  pres.writeFile({ fileName: "slide-05-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
