// slide-09.js - 案例解析：两份年中总结的不同命运
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 9,
  title: '案例解析：两份年中总结的不同命运'
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
  slide.addText("案例解析：两份年中总结的不同命运", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });

  // 左侧卡片 - 总结A（行政管理型）
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.95, w: 4.3, h: 4.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  // 总结A头部
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.95, w: 4.3, h: 0.55,
    fill: { color: theme.secondary }
  });
  slide.addText("总结 A（行政管理型）", {
    x: 0.5, y: 0.95, w: 4.3, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // 总结A内容
  slide.addText([
    { text: "上半年完成工作计划95%", options: { bullet: true, breakLine: true } },
    { text: "组织部门培训12次", options: { bullet: true, breakLine: true } },
    { text: "完善制度流程3项", options: { bullet: true, breakLine: true } },
    { text: "召开部门会议26次", options: { bullet: true } }
  ], {
    x: 0.7, y: 1.6, w: 3.9, h: 1.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left", valign: "top",
    paraSpaceAfter: 4
  });

  // 总结A评语标签
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 3.15, w: 0.6, h: 0.3,
    fill: { color: theme.light }
  });
  slide.addText("评语", {
    x: 0.7, y: 3.15, w: 0.6, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, align: "center", valign: "middle"
  });

  slide.addText('"工作尚可，但看不出对公司的实际贡献"', {
    x: 0.7, y: 3.5, w: 3.9, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, italic: true, align: "left", valign: "top"
  });

  // 总结A结果
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 4.1, w: 3.9, h: 0.05,
    fill: { color: theme.light }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 4.25, w: 0.8, h: 0.3,
    fill: { color: theme.light }
  });
  slide.addText("结果", {
    x: 0.7, y: 4.25, w: 0.8, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, align: "center", valign: "middle"
  });
  slide.addText("无功无过，继续留任", {
    x: 1.6, y: 4.25, w: 3.0, h: 0.3,
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

  // 右侧卡片 - 总结B（经营思维型）
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 0.95, w: 4.3, h: 4.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  // 总结B头部 - 使用强调色
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 0.95, w: 4.3, h: 0.55,
    fill: { color: theme.accent }
  });
  slide.addText("总结 B（经营思维型）", {
    x: 5.2, y: 0.95, w: 4.3, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // 总结B内容
  slide.addText([
    { text: "优化采购流程，节省成本45万", options: { bullet: true, breakLine: true } },
    { text: "推动跨部门协作项目2个", options: { bullet: true, breakLine: true } },
    { text: "人均效能提升12%", options: { bullet: true, breakLine: true } },
    { text: "客户满意度从85%提升至92%", options: { bullet: true } }
  ], {
    x: 5.4, y: 1.6, w: 3.9, h: 1.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false, align: "left", valign: "top",
    paraSpaceAfter: 4
  });

  // 总结B评语标签
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.4, y: 3.15, w: 0.6, h: 0.3,
    fill: { color: theme.accent, transparency: 80 }
  });
  slide.addText("评语", {
    x: 5.4, y: 3.15, w: 0.6, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center", valign: "middle"
  });

  slide.addText('"真正体现了中层管理者的经营价值"', {
    x: 5.4, y: 3.5, w: 3.9, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false, italic: true, align: "left", valign: "top"
  });

  // 总结B结果
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.4, y: 4.1, w: 3.9, h: 0.05,
    fill: { color: theme.accent, transparency: 50 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.4, y: 4.25, w: 0.8, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("结果", {
    x: 5.4, y: 4.25, w: 0.8, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText("集团表彰，晋升优先", {
    x: 6.3, y: 4.25, w: 3.0, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });

  // 页码徽章
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("09", {
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
  pres.writeFile({ fileName: "D:/新课开发/电力/9-中层管理者经营力提升从行政管理到真经营/05-授课PPT/slides/slide-09-preview.pptx" })
    .then(() => console.log("Created: slide-09-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
