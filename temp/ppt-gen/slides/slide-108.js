// slide-108.js - Change Agent Network Building
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 108,
  title: '变革代理人网络建设'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革代理人网络建设", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Central diagram
  slide.addShape(pres.shapes.OVAL, {
    x: 4, y: 2.2, w: 2, h: 2,
    fill: { color: theme.primary }
  });
  slide.addText("变革\n中心", {
    x: 4, y: 2.8, w: 2, h: 0.8,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  // Surrounding agents
  const agents = [
    { x: 1.5, y: 1.3, label: "部门大使A" },
    { x: 6.5, y: 1.3, label: "部门大使B" },
    { x: 1.5, y: 3.7, label: "技术骨干" },
    { x: 6.5, y: 3.7, label: "HR伙伴" }
  ];

  agents.forEach((a, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: a.x, y: a.y, w: 1.5, h: 1,
      fill: { color: theme.accent }
    });
    slide.addText(a.label, {
      x: a.x, y: a.y + 0.3, w: 1.5, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    // Connection lines
    slide.addShape(pres.shapes.LINE, {
      x: a.x + 0.75, y: a.y + (i < 2 ? 1 : 0), w: 0, h: 0.3,
      line: { color: theme.light, width: 2 }
    });
  });

  // Key principles at bottom
  slide.addText("网络建设关键原则：", {
    x: 0.5, y: 4.8, w: 3, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });
  slide.addText("选择有影响力的节点人物 → 赋能培训 → 定期沟通协调 → 授权自主推进", {
    x: 3.5, y: 4.8, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-108-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
