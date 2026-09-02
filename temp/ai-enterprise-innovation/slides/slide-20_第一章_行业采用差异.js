// slide-20_第一章_行业采用差异 - 对比展示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 20,
  title: '行业采用差异'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 页面标题
  slide.addText("行业AI渗透率差异", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 行业采用率数据
  const industries = [
    { name: "科技与软件", value: 85, level: "极高" },
    { name: "金融服务", value: 72, level: "高" },
    { name: "医疗健康", value: 58, level: "中高" },
    { name: "零售与电商", value: 65, level: "高" },
    { name: "制造业", value: 45, level: "中" },
    { name: "教育", value: 42, level: "中" },
    { name: "政府与公共", value: 28, level: "较低" },
    { name: "传统媒体", value: 25, level: "较低" }
  ];

  // 绘制水平进度条
  industries.forEach((ind, i) => {
    const y = 1.2 + i * 0.5;
    const barWidth = (ind.value / 100) * 6;

    // 行业名称
    slide.addText(ind.name, {
      x: 0.5, y: y, w: 2.0, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      align: "left", valign: "middle", margin: 0
    });

    // 进度条背景
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 2.6, y: y + 0.1, w: 6, h: 0.25,
      fill: { color: theme.primary }, line: { type: 'none' }
    });

    // 进度条（根据值变色）
    const barColor = ind.value >= 70 ? theme.accent : (ind.value >= 50 ? theme.light : theme.secondary);
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 2.6, y: y + 0.1, w: barWidth, h: 0.25,
      fill: { color: barColor }, line: { type: 'none' }
    });

    // 百分比
    slide.addText(ind.value + "%", {
      x: 2.6 + barWidth + 0.1, y: y, w: 0.6, h: 0.4,
      fontSize: 11, fontFace: "Arial",
      color: barColor, bold: true,
      align: "left", valign: "middle", margin: 0
    });
  });

  // 底部说明
  slide.addText("💡 不同行业因数据成熟度、监管环境、技术储备等因素，AI采用率差异显著", {
    x: 0.5, y: 5.3, w: 9, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "90e0ef",
    align: "left", valign: "middle", margin: 0
  });

  // 页码
  slide.addText("20", {
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
  pres.writeFile({ fileName: "slide-20-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
