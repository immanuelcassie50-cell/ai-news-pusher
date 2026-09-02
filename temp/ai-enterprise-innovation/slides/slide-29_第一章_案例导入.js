// slide-29_第一章_案例导入 - 案例框展示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 29,
  title: '案例导入'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 案例标签
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.4, w: 1.2, h: 0.35,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("CASE", {
    x: 0.5, y: 0.4, w: 1.2, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页面标题
  slide.addText("制造企业的AI转型之路", {
    x: 0.5, y: 0.9, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 案例背景框
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.7, w: 9, h: 1.5,
    fill: { color: theme.secondary }, line: { type: 'none' }
  });

  slide.addText("案例背景", {
    x: 0.7, y: 1.85, w: 2, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("某大型制造企业A公司，拥有3万名员工、年营收500亿元。面对AI浪潮，CEO张总面临抉择：是等待技术成熟再入场，还是现在就开始布局？", {
    x: 0.7, y: 2.25, w: 8.6, h: 0.85,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "top", margin: 0
  });

  // 关键数据
  slide.addText("关键数据", {
    x: 0.5, y: 3.4, w: 2, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  const dataPoints = [
    { label: "AI试点项目", value: "12个" },
    { label: "年度AI投入", value: "8000万" },
    { label: "员工AI培训", value: "15%" },
    { label: "业务覆盖率", value: "23%" }
  ];

  dataPoints.forEach((dp, i) => {
    const x = 0.5 + i * 2.3;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 3.85, w: 2.1, h: 1.0,
      fill: { color: theme.secondary }, line: { type: 'none' }
    });

    slide.addText(dp.value, {
      x: x, y: 3.9, w: 2.1, h: 0.5,
      fontSize: 22, fontFace: "Georgia",
      color: theme.accent, bold: true,
      align: "center", valign: "middle", margin: 0
    });

    slide.addText(dp.label, {
      x: x, y: 4.4, w: 2.1, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "90e0ef",
      align: "center", valign: "middle", margin: 0
    });
  });

  // 页码
  slide.addText("29", {
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
  pres.writeFile({ fileName: "slide-29-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
