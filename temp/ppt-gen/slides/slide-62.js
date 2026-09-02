// slide-62.js - Case Study: Manufacturing Company
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 62,
  title: '综合案例：某制造企业的数字化转型'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("综合案例：某制造企业的数字化转型", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Background
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 8.5, h: 1.5,
    fill: { color: theme.light }
  });

  slide.addText("背景：", {
    x: 0.7, y: 1.1, w: 1, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  slide.addText("某中型制造企业启动ERP和MES系统替换项目，涉及3个工厂、500+员工。\n项目启动3个月后遇到员工抵触，进度延误30%，项目组士气低落。", {
    x: 0.7, y: 1.5, w: 8, h: 0.9,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "left"
  });

  // Challenges
  slide.addText("面临的挑战：", {
    x: 0.5, y: 2.7, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const challenges = [
    "一线员工担心新系统操作复杂，担心被裁员",
    "中层管理者觉得项目是"IT的事"，配合度低",
    "项目组只注重技术实现，忽略了变革管理",
    "缺乏与员工的沟通，员工不理解为什么要换系统"
  ];

  challenges.forEach((c, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: 3.15 + i * 0.5, w: 0.08, h: 0.3,
      fill: { color: theme.accent }
    });
    slide.addText(c, {
      x: 0.75, y: 3.15 + i * 0.5, w: 8.5, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
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
  pres.writeFile({ fileName: "slide-62-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
