// slide-45.js - AI幻觉：一个真实案例
const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "c73e3e",
  secondary: "3c3c3c",
  accent: "e85050",
  light: "f5f0f0",
  bg: "faf8f8"
};

const slideConfig = {
  title: "AI幻觉：一个真实案例",
  pageNumber: 45,
  theme: theme
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧装饰条
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // 标题
  slide.addText("AI幻觉：一个真实案例", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 分隔线
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.9, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // 案例标题框
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 1.15, w: 9, h: 0.7,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });

  slide.addText("案例：某公司员工用AI查询行业数据，被提供了虚构的统计数据", {
    x: 0.5, y: 1.15, w: 9, h: 0.7,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // 问题分析区域
  const analysisY = 2.05;

  // 左侧：发生了什么
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: analysisY, w: 4.25, h: 2.0,
    fill: { color: theme.light },
    rectRadius: 0.1
  });

  slide.addText("发生了什么", {
    x: 0.7, y: analysisY + 0.15, w: 3.85, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const problems = [
    "AI生成了一份"行业报告"",
    "数据看起来很专业，引用了来源",
    "实际上来源是虚构的",
    "员工直接用于客户汇报"
  ];

  problems.forEach((prob, i) => {
    slide.addText("✗ " + prob, {
      x: 0.7, y: analysisY + 0.55 + i * 0.35, w: 3.85, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // 右侧：后果
  slide.addShape(pres.ShapeType.roundRect, {
    x: 5.0, y: analysisY, w: 4.5, h: 2.0,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 1.5 },
    rectRadius: 0.1
  });

  slide.addText("造成了什么后果", {
    x: 5.2, y: analysisY + 0.15, w: 4.1, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const consequences = [
    "客户发现数据对不上",
    "公司信誉受损",
    "员工被追责"
  ];

  consequences.forEach((cons, i) => {
    slide.addText("→ " + cons, {
      x: 5.2, y: analysisY + 0.6 + i * 0.4, w: 4.1, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // 教训总结
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 4.25, w: 9, h: 0.65,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });

  slide.addText("教训：AI输出的任何数据，必须人工核实来源才能使用", {
    x: 0.5, y: 4.25, w: 9, h: 0.65,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// standalone preview
if (require.main === module) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ path: "D:/CC/temp/ppt-slides/slide-45-output.pptx" })
    .then(() => console.log("Created: slide-45-output.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };