// slide-38.js - Transparency Principles
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 38,
  title: '变革透明度的把握原则'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革透明度的把握原则", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.1, w: 8.5, h: 1.8,
    fill: { color: theme.light }
  });

  slide.addText("透明度的两个极端都是危险的：", {
    x: 0.7, y: 1.2, w: 6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addText("过度透明：过早透露不成熟信息，引发不必要恐慌\n信息不足：让小道消息占领市场，信任受损", {
    x: 0.7, y: 1.7, w: 8, h: 1,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "left"
  });

  slide.addText("透明度原则：", {
    x: 0.5, y: 3.1, w: 2, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const principles = [
    "知道什么就说什么，不要主动隐瞒",
    "不知道的明确说"还不知道"，并给出回复时间",
    "有变化及时更新，不要等到无法隐瞒才说",
    "问题公开化，反而比捂着更容易获得理解"
  ];

  principles.forEach((p, i) => {
    slide.addShape("ellipse", {
      x: 0.6, y: 3.6 + i * 0.45, w: 0.12, h: 0.12,
      fill: { color: theme.accent }
    });
    slide.addText(p, {
      x: 0.85, y: 3.55 + i * 0.45, w: 8, h: 0.4,
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
  pres.writeFile({ fileName: "slide-38-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
