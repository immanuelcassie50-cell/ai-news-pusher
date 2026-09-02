// slide-19_第一章_AI采用冰山模型 - 图解展示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 19,
  title: 'AI采用冰山模型'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 页面标题
  slide.addText("AI采用的冰山模型", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 冰山图示 - 左侧水面以上
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 1.5, w: 3.5, h: 0.8,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("表层采用（可见）", {
    x: 0.8, y: 1.5, w: 3.5, h: 0.8,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 水面线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.3, w: 4.1, h: 0.03,
    fill: { color: "90e0ef" }, line: { type: 'none' }
  });

  // 水下冰山
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.0, y: 2.35, w: 3.0, h: 2.5,
    fill: { color: theme.secondary }, line: { type: 'none' }
  });

  // 水下说明
  const underwaterItems = [
    "数据基础设施",
    "AI治理框架",
    "人才储备",
    "组织文化适配",
    "业务流程重构"
  ];

  underwaterItems.forEach((item, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 1.2, y: 2.55 + i * 0.45, w: 0.1, h: 0.1,
      fill: { color: theme.light }, line: { type: 'none' }
    });
    slide.addText(item, {
      x: 1.45, y: 2.45 + i * 0.45, w: 2.4, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      align: "left", valign: "middle", margin: 0
    });
  });

  // 右侧说明文字
  slide.addText("大多数企业只看到冰山一角", {
    x: 5.0, y: 1.3, w: 4.5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  const insights = [
    { title: "表层：工具与应用", desc: "使用现成AI工具，如ChatGPT、Midjourney等" },
    { title: "中层：流程整合", desc: "将AI嵌入现有业务流程，提升效率" },
    { title: "深层：能力建设", desc: "构建数据基础设施，培养AI人才，重塑组织文化" }
  ];

  insights.forEach((ins, i) => {
    const y = 2.0 + i * 1.1;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.0, y: y, w: 4.5, h: 0.9,
      fill: { color: theme.secondary }, line: { type: 'none' }
    });

    slide.addText(ins.title, {
      x: 5.15, y: y + 0.1, w: 4.2, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });

    slide.addText(ins.desc, {
      x: 5.15, y: y + 0.45, w: 4.2, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "90e0ef",
      align: "left", valign: "middle", margin: 0
    });
  });

  // 页码
  slide.addText("19", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary:   "000814",
    secondary: "003566",
    accent:    "ffc300",
    light:     "ffd60a",
    bg:        "001d3d"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-19-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
