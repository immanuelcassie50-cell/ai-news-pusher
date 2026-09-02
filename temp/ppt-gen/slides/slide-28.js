// slide-28.js - Early Success Amplification
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 28,
  title: '早期成功案例的放大策略'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("早期成功案例的放大策略", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 8.5, h: 1.8,
    fill: { color: theme.light }
  });

  slide.addText("核心原则：先让一小部分人成功，然后让所有人看见", {
    x: 0.7, y: 1.3, w: 8, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addText("早期成功案例的作用：\n· 证明变革方向是正确的\n· 给犹豫者信心\n· 建立变革的可信度", {
    x: 0.7, y: 1.9, w: 8, h: 0.9,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "left"
  });

  slide.addText("放大策略：", {
    x: 0.5, y: 3.1, w: 2, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const tactics = [
    "选择可复制的试点，而非最大的项目",
    "配备充足资源确保试点成功",
    "及时收集数据，用事实说话",
    "组织现场参观，让亲历者分享"
  ];

  tactics.forEach((t, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: 3.5 + i * 0.5, w: 0.08, h: 0.3,
      fill: { color: theme.accent }
    });
    slide.addText(t, {
      x: 0.75, y: 3.5 + i * 0.5, w: 8, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-28-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
