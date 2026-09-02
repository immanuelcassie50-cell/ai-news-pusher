// slide-31.js - Case: Vision Workshop
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 31,
  title: '案例：某科技公司的愿景设计实践'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("案例：某科技公司的愿景设计实践", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.1, w: 8.5, h: 2.2,
    fill: { color: theme.light }
  });

  slide.addText("背景：", {
    x: 0.7, y: 1.2, w: 1, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  slide.addText("公司启动数字化转型，HR总监设计了"三问愿景工作坊"，\n让员工参与讨论：我们为什么要变？变完之后什么样？\n如何到达那里？", {
    x: 0.7, y: 1.6, w: 8, h: 1.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "left"
  });

  slide.addText("结果：", {
    x: 0.7, y: 3.5, w: 1, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  slide.addText("经过3轮工作坊，最终形成的愿景由员工自己书写，\n后续推行时员工认同度达到85%以上。", {
    x: 0.7, y: 3.9, w: 8, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "left"
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
  pres.writeFile({ fileName: "slide-31-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
