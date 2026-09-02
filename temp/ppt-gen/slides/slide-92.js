// slide-92.js - Change Metrics Dashboard
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 92,
  title: '变革健康度仪表盘'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革健康度仪表盘", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const metrics = [
    { metric: "变革共识度", score: 78, status: "良好" },
    { metric: "员工信任度", score: 65, status: "关注" },
    { metric: "沟通有效性", score: 82, status: "优秀" },
    { metric: "培训覆盖率", score: 90, status: "优秀" },
    { metric: "进度达成率", score: 72, status: "良好" },
    { metric: "员工满意度", score: 58, status: "预警" }
  ];

  metrics.forEach((m, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.5 + col * 3.1;
    const y = 1.1 + row * 2.1;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 1.9,
      fill: { color: theme.light }
    });

    // Score circle
    const scoreColor = m.score >= 80 ? "28A745" : m.score >= 65 ? theme.accent : "DC3545";
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.95, y: y + 0.2, w: 1, h: 1,
      fill: { color: scoreColor }
    });
    slide.addText(m.score + "%", {
      x: x + 0.95, y: y + 0.45, w: 1, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center"
    });

    slide.addText(m.metric, {
      x: x, y: y + 1.3, w: 2.9, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center"
    });
    slide.addText(m.status, {
      x: x, y: y + 1.55, w: 2.9, h: 0.25,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: scoreColor, align: "center"
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
  pres.writeFile({ fileName: "slide-92-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
