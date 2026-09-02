// slide-79.js - Change Communication Plan Template
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 79,
  title: '变革沟通计划模板'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革沟通计划模板", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const planItems = [
    { phase: "启动阶段", who: "全体员工", what: "变革愿景和原因", how: "全员大会、邮件通知" },
    { phase: "推进阶段", who: "部门负责人", what: "进展和挑战", how: "周例会、部门沟通会" },
    { phase: "攻坚阶段", who: "一线员工", what: "具体问题和反馈", how: "一对一访谈、现场座谈" },
    { phase: "收尾阶段", who: "全体员工", what: "成果展示和感谢", how: "表彰大会、通报文件" }
  ];

  // Table header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 9, h: 0.5,
    fill: { color: theme.accent }
  });
  ["阶段", "沟通对象", "沟通内容", "沟通方式"].forEach((h, i) => {
    const widths = [1.5, 2, 2.5, 3];
    let xPos = 0.5;
    for (let j = 0; j < i; j++) xPos += widths[j];
    slide.addText(h, {
      x: xPos, y: 1.1, w: widths[i], h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
  });

  planItems.forEach((p, i) => {
    const y = 1.5 + i * 0.6;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.6,
      fill: { color: i % 2 === 0 ? theme.light : theme.bg }
    });
    const values = [p.phase, p.who, p.what, p.how];
    const widths = [1.5, 2, 2.5, 3];
    let xPos = 0.5;
    values.forEach((v, j) => {
      slide.addText(v, {
        x: xPos, y: y + 0.15, w: widths[j], h: 0.3,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary, align: "center"
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
  pres.writeFile({ fileName: "slide-79-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
