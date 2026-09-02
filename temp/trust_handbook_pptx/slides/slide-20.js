// slide-20.js - Summary Page
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 20,
  title: '课程总结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.8,
    fill: { color: theme.primary }
  });

  slide.addText("课程总结", {
    x: 0.5, y: 0.15, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Quote box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 9, h: 1.2,
    fill: { color: theme.light }
  });

  slide.addText("信任的护城河，不只是一条业务上的护城河，是一条人生态度的护城河。\n它最终留给你的，不是客户名单，不是收入数字，而是你在这个过程里，被磨出来的判断力，\n和在家人眼中的那个'说话算话的人'的形象。这两样东西，才是你在这个行业里，真正属于自己的资产。", {
    x: 0.7, y: 1.1, w: 8.6, h: 1.0,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "center", valign: "middle"
  });

  // Key takeaways
  slide.addText("核心收获", {
    x: 0.5, y: 2.4, w: 4.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText([
    { text: "流量带来关注，信任带来托付", options: { bullet: true, breakLine: true } },
    { text: "每一次培训现场都是信任的存取款", options: { bullet: true, breakLine: true } },
    { text: "拒绝是建立护城河的高价值行为", options: { bullet: true, breakLine: true } },
    { text: "差异化建立在亲历而非转述之上", options: { bullet: true } }
  ], {
    x: 0.5, y: 2.8, w: 4.5, h: 1.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Gold quotes
  slide.addText("金句收藏", {
    x: 5.2, y: 2.4, w: 4.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText([
    { text: '"说NO比说YES更能建立信任"', options: { bullet: true, breakLine: true } },
    { text: '"大浪淘沙淘掉的是熬不住的人"', options: { bullet: true, breakLine: true } },
    { text: '"客户请你回来是因为你说话算话"', options: { bullet: true, breakLine: true } },
    { text: '"放弃的那一单是护城河的一块砖"', options: { bullet: true } }
  ], {
    x: 5.2, y: 2.8, w: 4.5, h: 1.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Action plan section
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.5, w: 9, h: 0.03,
    fill: { color: theme.primary }
  });

  slide.addText("90天行动计划承诺", {
    x: 0.5, y: 4.6, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("我承诺在未来90天内，专注于信任资产的积累，具体行动：_______________________", {
    x: 0.5, y: 4.95, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Page number
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("20", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "8B0000", secondary: "424242", accent: "C62828", light: "FFCDD2", bg: "FAFAFA" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-20-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
