// slide-09.js - Employee Psychology in Change
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 9,
  title: '变革中的员工典型心理'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革中的员工典型心理", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const psychologies = [
    { emoji: "😰", name: "恐惧", desc: "担心能力跟不上\n担心岗位被替代" },
    { emoji: "😕", name: "困惑", desc: "不清楚为什么变\n不清楚怎么变" },
    { emoji: "😤", name: "抵触", desc: "对变革方式不满\n对管理层有怨气" },
    { emoji: "😔", name: "失落", desc: "现有工作方式被否定\n原有经验价值下降" },
    { emoji: "🤔", name: "观望", desc: "等方向明确再说\n不想第一个冲" },
    { emoji: "😤", name: "疲惫", desc: "已经经历多次变革\n变革疲劳" }
  ];

  psychologies.forEach((p, i) => {
    const row = Math.floor(i / 3);
    const col = i % 3;
    const x = 0.5 + col * 3.1;
    const y = 1.1 + row * 2.1;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 1.9,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 }
    });

    slide.addText(p.emoji, {
      x: x, y: y + 0.15, w: 2.9, h: 0.5,
      fontSize: 28, align: "center"
    });

    slide.addText(p.name, {
      x: x, y: y + 0.65, w: 2.9, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, align: "center"
    });

    slide.addText(p.desc, {
      x: x + 0.15, y: y + 1.1, w: 2.6, h: 0.7,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
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
  pres.writeFile({ fileName: "slide-09-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
