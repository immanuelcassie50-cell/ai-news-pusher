// slide-67.js - Key Insights Review
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 67,
  title: '核心洞见回顾'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("核心洞见回顾", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const insights = [
    { num: "1", text: "信任是数字化转型成功的第一要素——没有信任，一切变革努力都是建立在沙丘上的房子" },
    { num: "2", text: "员工不是变革的阻力，而是变革成功的贡献者——关键是让他们参与进来" },
    { num: "3", text: "变革共识不是一次性建立，而是需要持续沟通和验证的动态过程" },
    { num: "4", text: "心理安全感让员工敢于尝试、敢于犯错、敢于提出不同意见" },
    { num: "5", text: "变革领导者的六种角色需要根据情境灵活切换，没有一种角色是万能的" }
  ];

  insights.forEach((ins, i) => {
    const y = 1.1 + i * 0.88;
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: y + 0.1, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(ins.num, {
      x: 0.5, y: y + 0.18, w: 0.5, h: 0.35,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText(ins.text, {
      x: 1.2, y: y, w: 8, h: 0.7,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
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
  pres.writeFile({ fileName: "slide-67-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
