// slide-04_导言_一个令人不安的事实 - 大数字展示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 4,
  title: '一个令人不安的事实'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部标签
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.4, w: 0.08, h: 0.4,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("KEY STATISTICS", {
    x: 0.7, y: 0.4, w: 3, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: theme.accent, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });

  // 页面标题
  slide.addText("一个令人不安的事实", {
    x: 0.5, y: 0.9, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 三个大数字并排
  const stats = [
    { value: "87%", label: "全球CEO认为AI将重塑\n其业务运营模式" },
    { value: "72h", label: "AI模型能力翻倍\n所需时间（2023-2025）" },
    { value: "40%", label: "现有工作岗位\n将在10年内改变或消失" }
  ];

  const cardWidth = 2.8;
  const startX = 0.7;
  const gap = 0.35;
  const y = 1.8;

  stats.forEach((stat, i) => {
    const x = startX + i * (cardWidth + gap);

    // 数字背景
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardWidth, h: 2.4,
      fill: { color: theme.secondary }, line: { type: 'none' }
    });

    // 大数字
    slide.addText(stat.value, {
      x: x, y: y + 0.3, w: cardWidth, h: 1.0,
      fontSize: 56, fontFace: "Georgia",
      color: theme.accent, bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // 说明文字
    slide.addText(stat.label, {
      x: x + 0.2, y: y + 1.4, w: cardWidth - 0.4, h: 0.9,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      align: "center", valign: "top", margin: 0
    });
  });

  // 底部强调
  slide.addText("这些数字背后，是每一个企业都必须面对的生存命题。", {
    x: 0.5, y: 4.6, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页码
  slide.addText("4", {
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
  pres.writeFile({ fileName: "slide-04-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
