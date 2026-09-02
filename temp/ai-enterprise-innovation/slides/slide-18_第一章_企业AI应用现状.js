// slide-18_第一章_企业AI应用现状 - 数据可视化
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 18,
  title: '企业AI应用现状'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 页面标题
  slide.addText("企业AI应用现状", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧大数字
  slide.addText("55%", {
    x: 0.5, y: 1.3, w: 3.5, h: 1.5,
    fontSize: 72, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("全球企业已开始\n尝试或使用AI技术", {
    x: 0.5, y: 2.8, w: 3.5, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "90e0ef",
    align: "center", valign: "top", margin: 0
  });

  // 右侧采用阶段分布
  slide.addText("企业AI采用阶段分布", {
    x: 4.3, y: 1.2, w: 5.2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  const stages = [
    { label: "已规模化应用", value: 15, width: 4.5 },
    { label: "试点项目中", value: 25, width: 3.5 },
    { label: "探索尝试中", value: 30, width: 2.5 },
    { label: "尚未开始", value: 30, width: 1.5 }
  ];

  stages.forEach((stage, i) => {
    const y = 1.75 + i * 0.7;
    const barColor = i === 0 ? theme.accent : (i === 1 ? theme.light : theme.secondary);

    // 标签
    slide.addText(stage.label, {
      x: 4.3, y: y, w: 2.0, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      align: "left", valign: "middle", margin: 0
    });

    // 进度条背景
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 6.3, y: y + 0.1, w: 3.2, h: 0.25,
      fill: { color: theme.primary }, line: { type: 'none' }
    });

    // 进度条
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 6.3, y: y + 0.1, w: stage.width, h: 0.25,
      fill: { color: barColor }, line: { type: 'none' }
    });

    // 百分比
    slide.addText(stage.value + "%", {
      x: 6.3 + stage.width + 0.1, y: y, w: 0.6, h: 0.4,
      fontSize: 11, fontFace: "Arial",
      color: barColor, bold: true,
      align: "left", valign: "middle", margin: 0
    });
  });

  // 底部关键洞察
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.4, w: 9, h: 0.7,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.4, w: 0.08, h: 0.7,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("关键洞察：仅有15%的企业进入规模化应用阶段，大部分企业仍处于试点或探索阶段", {
    x: 0.7, y: 4.4, w: 8.6, h: 0.7,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });

  // 页码
  slide.addText("18", {
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
  pres.writeFile({ fileName: "slide-18-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
