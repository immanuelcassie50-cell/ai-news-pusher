// slide-59.js - Exercise 6: Leadership Assessment
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'exercise',
  index: 59,
  title: '练习：变革领导力自我评估'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("练习：变革领导力自我评估", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 8.5, h: 3.8,
    fill: { color: theme.light }
  });

  slide.addText("任务：对照六个关键角色，给自己打分（1-5分）", {
    x: 0.7, y: 1.3, w: 8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const roles = [
    "1. 设计师：你设计的变革愿景有多清晰？",
    "2. 沟通者：你传递信息的频率和效果如何？",
    "3. 支持者：你给团队提供的支持够不够？",
    "4. 协调者：你化解冲突的能力如何？",
    "5. 监督者：你跟踪进展的机制有没有？",
    "6. 激励者：你调动积极性的方法有哪些？"
  ];

  roles.forEach((r, i) => {
    slide.addText(r, {
      x: 0.7, y: 1.85 + i * 0.55, w: 8, h: 0.45,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  slide.addText("时间：10分钟  |  形式：个人反思", {
    x: 0.7, y: 4.65, w: 8, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "left"
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
  pres.writeFile({ fileName: "slide-59-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
