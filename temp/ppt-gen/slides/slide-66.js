// slide-66.js - Course Summary
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 66,
  title: '课程总复习'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("课程总复习：文化基建七要素", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const elements = [
    { num: "01", title: "变革认知", key: "理解变革本质，信任是成功的基础" },
    { num: "02", title: "员工心理", key: "识别四类心态，差异化管理" },
    { num: "03", title: "共识建立", key: "清晰愿景，回答为什么" },
    { num: "04", title: "信任维护", key: "透明沟通，持续反馈" },
    { num: "05", title: "韧性文化", key: "心理安全，学习导向" },
    { num: "06", title: "领导力", key: "六种角色，灵活运用" },
    { num: "07", title: "综合演练", key: "学以致用，制定计划" }
  ];

  elements.forEach((e, i) => {
    const y = 1.0 + i * 0.62;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 1.2, h: 0.52,
      fill: { color: theme.accent }
    });
    slide.addText(e.num, {
      x: 0.5, y: y + 0.08, w: 1.2, h: 0.35,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText(e.title, {
      x: 1.8, y: y + 0.06, w: 1.5, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "left"
    });
    slide.addText(e.key, {
      x: 3.3, y: y + 0.06, w: 6, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-66-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
