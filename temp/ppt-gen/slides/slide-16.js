// slide-16.js - Employee Change Archetypes
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 16,
  title: '员工变革心态类型图谱'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("员工变革心态类型图谱", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // 2x2 matrix
  // Y axis: 开放度 | X axis: 变革认知
  slide.addText("高", {
    x: 0.3, y: 1.6, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });
  slide.addText("低", {
    x: 0.3, y: 4.2, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  slide.addText("变革心态", {
    x: 0.3, y: 2.7, w: 0.4, h: 0.8,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center", valign: "middle"
  });

  slide.addText("变革认知", {
    x: 3, y: 5.0, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  slide.addText("低 →", {
    x: 2.5, y: 4.75, w: 0.6, h: 0.3,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  slide.addText("← 高", {
    x: 5.9, y: 4.75, w: 0.6, h: 0.3,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  // Quadrants
  const quadrants = [
    { x: 1, y: 1.3, label: "开拓者", desc: "主动拥抱变革\n期待变革带来的机会", color: theme.primary },
    { x: 4, y: 1.3, label: "跟随者", desc: "理解变革意义\n愿意跟随行动", color: theme.accent },
    { x: 1, y: 3.3, label: "抵触者", desc: "质疑变革必要性\n担心失去现有", color: theme.secondary },
    { x: 4, y: 3.3, label: "观望者", desc: "信息不足\n等待明确信号", color: theme.light }
  ];

  quadrants.forEach(q => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: q.x, y: q.y, w: 3, h: 2,
      fill: { color: q.color },
      line: { color: theme.secondary, width: 0.5 }
    });
    slide.addText(q.label, {
      x: q.x, y: q.y + 0.3, w: 3, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: q.color === theme.light ? theme.secondary : "FFFFFF", bold: true, align: "center"
    });
    slide.addText(q.desc, {
      x: q.x + 0.2, y: q.y + 0.9, w: 2.6, h: 1,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: q.color === theme.light ? theme.secondary : "FFFFFF", align: "center"
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
  pres.writeFile({ fileName: "slide-16-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
