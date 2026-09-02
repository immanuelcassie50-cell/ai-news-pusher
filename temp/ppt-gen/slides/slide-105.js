// slide-105.js - Change Communication Calendar
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 105,
  title: '变革沟通日历规划'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革沟通日历规划", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const phases = [
    { phase: "启动前", timing: "变革前4周", activities: "高层预告、调研访谈、利益相关方识别", channel: "高管一对一、部门会" },
    { phase: "启动期", timing: "第1-2周", activities: "全员大会、愿景宣讲、FAQ发布", channel: "全员会、邮件、内网" },
    { phase: "推进期", timing: "第3-8周", activities: "周进展通报、问题反馈、案例分享", channel: "周报、部门会、内网" },
    { phase: "攻坚期", timing: "第9-12周", activities: "深度培训、一对一沟通、问题解决", channel: "培训、一对一、座谈会" },
    { phase: "收尾期", timing: "第13周+", activities: "成果展示、表彰、经验总结", channel: "表彰会、案例集" }
  ];

  // Table header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 9, h: 0.45,
    fill: { color: theme.accent }
  });
  const headers = ["阶段", "时间", "核心活动", "主要渠道"];
  const widths = [1.3, 1.5, 3.7, 2.5];
  let xPos = 0.5;
  headers.forEach((h, i) => {
    slide.addText(h, {
      x: xPos, y: 1.08, w: widths[i], h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    xPos += widths[i];
  });

  phases.forEach((p, i) => {
    const y = 1.45 + i * 0.8;
    const bgColor = i % 2 === 0 ? theme.light : theme.bg;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.8,
      fill: { color: bgColor }
    });
    const values = [p.phase, p.timing, p.activities, p.channel];
    let xPos = 0.5;
    values.forEach((v, j) => {
      slide.addText(v, {
        x: xPos + 0.1, y: y + 0.2, w: widths[j] - 0.2, h: 0.4,
        fontSize: 10, fontFace: "Microsoft YaHei",
        color: theme.secondary, align: "left"
      });
      xPos += widths[j];
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "4A4A4A",
    accent: "C41E3A",
    light: "D4D4D4",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-105-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
