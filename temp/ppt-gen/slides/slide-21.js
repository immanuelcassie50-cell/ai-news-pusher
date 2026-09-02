// slide-21.js - Exercise 2: Persona Mapping
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'exercise',
  index: 21,
  title: '练习：员工变革心态画像'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("练习：员工变革心态画像", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Exercise box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 3.8,
    fill: { color: theme.light }
  });

  slide.addText("任务：根据你所在组织的数字化转型项目，识别四类员工", {
    x: 0.7, y: 1.3, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const tasks = [
    "1. 描述你观察到的开拓者特征（至少3个）",
    "2. 描述你观察到的跟随者特征（至少3个）",
    "3. 识别最容易产生抵触的群体，说明原因",
    "4. 列出3个激活观望者的具体策略"
  ];

  tasks.forEach((t, i) => {
    slide.addText(t, {
      x: 0.7, y: 1.9 + i * 0.7, w: 8.5, h: 0.6,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  slide.addText("时间：15分钟  |  形式：小组讨论（4人一组）", {
    x: 0.7, y: 4.65, w: 8.5, h: 0.3,
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
  pres.writeFile({ fileName: "slide-21-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
