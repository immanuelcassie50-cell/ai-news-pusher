// slide-04.js - 问题导入 - 两位中层管理者的不同结局
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 4,
  title: '问题导入 - 两位中层管理者的不同结局'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧装饰条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // 页面标题
  slide.addText("问题导入 - 两位中层管理者的不同结局", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });

  // 左侧卡片 - 管理者A
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 4.3, h: 4.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });

  // 管理者A头部
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 4.3, h: 0.7,
    fill: { color: theme.secondary }
  });
  slide.addText("管理者 A", {
    x: 0.5, y: 1.0, w: 4.3, h: 0.7,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // 管理者A特征标签
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 1.85, w: 1.0, h: 0.35,
    fill: { color: theme.light }
  });
  slide.addText("行政管理型", {
    x: 0.7, y: 1.85, w: 1.0, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, align: "center", valign: "middle"
  });

  // 管理者A内容
  slide.addText([
    { text: "完成上级交代的任务", options: { bullet: true, breakLine: true } },
    { text: "注重流程合规", options: { bullet: true, breakLine: true } },
    { text: "部门内工作井井有条", options: { bullet: true, breakLine: true } },
    { text: "很少主动思考降本增效", options: { bullet: true } }
  ], {
    x: 0.7, y: 2.3, w: 3.9, h: 1.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left", valign: "top",
    paraSpaceAfter: 6
  });

  // 管理者A结局
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 3.8, w: 3.9, h: 0.06,
    fill: { color: theme.light }
  });
  slide.addText("结局：部门绩效评估中游，年终奖无变化", {
    x: 0.7, y: 4.0, w: 3.9, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left", valign: "middle"
  });

  // 管理者A结果标签
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 4.5, w: 0.8, h: 0.35,
    fill: { color: theme.light }
  });
  slide.addText("结果", {
    x: 0.7, y: 4.5, w: 0.8, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, align: "center", valign: "middle"
  });
  slide.addText("平稳过渡，无晋升", {
    x: 1.6, y: 4.5, w: 3.0, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });

  // 中间VS标记
  slide.addShape(pres.shapes.OVAL, {
    x: 4.65, y: 2.7, w: 0.7, h: 0.7,
    fill: { color: theme.accent }
  });
  slide.addText("VS", {
    x: 4.65, y: 2.7, w: 0.7, h: 0.7,
    fontSize: 16, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // 右侧卡片 - 管理者B
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.0, w: 4.3, h: 4.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });

  // 管理者B头部 - 使用强调色
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.0, w: 4.3, h: 0.7,
    fill: { color: theme.accent }
  });
  slide.addText("管理者 B", {
    x: 5.2, y: 1.0, w: 4.3, h: 0.7,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // 管理者B特征标签
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.4, y: 1.85, w: 1.0, h: 0.35,
    fill: { color: theme.accent, transparency: 80 }
  });
  slide.addText("经营思维型", {
    x: 5.4, y: 1.85, w: 1.0, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center", valign: "middle"
  });

  // 管理者B内容
  slide.addText([
    { text: "主动分析成本结构", options: { bullet: true, breakLine: true } },
    { text: "思考资源利用效率", options: { bullet: true, breakLine: true } },
    { text: "推动跨部门协同", options: { bullet: true, breakLine: true } },
    { text: "用经营结果证明价值", options: { bullet: true } }
  ], {
    x: 5.4, y: 2.3, w: 3.9, h: 1.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false, align: "left", valign: "top",
    paraSpaceAfter: 6
  });

  // 管理者B结局
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.4, y: 3.8, w: 3.9, h: 0.06,
    fill: { color: theme.accent, transparency: 50 }
  });
  slide.addText("结局：部门成本下降15%，获得集团表彰", {
    x: 5.4, y: 4.0, w: 3.9, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false, align: "left", valign: "middle"
  });

  // 管理者B结果标签
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.4, y: 4.5, w: 0.8, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("结果", {
    x: 5.4, y: 4.5, w: 0.8, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText("晋升为总经理助理", {
    x: 6.3, y: 4.5, w: 3.0, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });

  // 页码徽章
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("04", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "4a5568",
    accent: "c53030",
    light: "e2e8f0",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/新课开发/电力/9-中层管理者经营力提升从行政管理到真经营/05-授课PPT/slides/slide-04-preview.pptx" })
    .then(() => console.log("Created: slide-04-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
