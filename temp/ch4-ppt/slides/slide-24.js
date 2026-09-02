// slide-24.js - 跑偏类型与救场话术
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 24,
  title: '跑偏类型与救场话术'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("跑偏类型与救场话术", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // 表格数据
  const tableData = [
    {跑偏类型: "方向偏了", 症状: "AI在回答一个你没有问的问题", 救场话术: "\"停一下，我想要的其实是XXX，请重新按这个方向来\""},
    {跑偏类型: "信息可能有误", 症状: "AI给了你不确定的数据或结论", 救场话术: "\"请告诉我第X段里那组数据的信息来源是什么\""},
    {跑偏类型: "太宽泛", 症状: "输出太笼统，没有具体内容", 救场话术: "\"针对第X点，请展开到更具体的层面\""},
    {跑偏类型: "太冗长", 症状: "输出过长，主要信息找不到", 救场话术: "\"请保留核心内容，精简到XXX字以内\""},
    {跑偏类型: "上下文丢失", 症状: "AI忘了前面轮次的背景", 救场话术: "\"前面我们确认了XXX，基于此，请继续……\""}
  ];

  // 表头
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.15, w: 9, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText("跑偏类型", {
    x: 0.5, y: 1.15, w: 1.5, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("症状", {
    x: 2.0, y: 1.15, w: 2.3, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("你可以这样说", {
    x: 4.3, y: 1.15, w: 5.2, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // 数据行
  tableData.forEach((row, idx) => {
    const y = 1.6 + idx * 0.75;
    const bgColor = idx % 2 === 0 ? "FFFFFF" : "F8F8F8";

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.75,
      fill: { color: bgColor }
    });

    slide.addText(row.跑偏类型, {
      x: 0.5, y: y, w: 1.5, h: 0.75,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });
    slide.addText(row.症状, {
      x: 2.0, y: y, w: 2.3, h: 0.75,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "middle"
    });
    slide.addText(row.救场话术, {
      x: 4.3, y: y, w: 5.2, h: 0.75,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle"
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C43C3C", secondary: "4A4A4A", accent: "C43C3C", light: "888888", bg: "F5F5F5" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "./output/slide-24-preview.pptx" });
}

module.exports = { createSlide, slideConfig };