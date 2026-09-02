// slide-27_第一章_知识要点 - 列表展示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 27,
  title: '第一章知识要点'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 页面标题
  slide.addText("第一章知识要点", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 要点列表
  const points = [
    "AI发展经历了三次浪潮，当前以大语言模型为代表的生成式AI正在重塑创新规则",
    "AI创新的成本结构与以往不同——边际成本趋零、涌现能力、即插即用",
    "企业AI采用仍处早期，55%已尝试但仅15%规模化应用",
    "不同行业AI渗透率差异显著，科技金融领先，政府传统行业落后",
    "先行者红利窗口期约3-5年，追赶者可借鉴经验、降低成本",
    "AI是真实变革而非泡沫，但需要理性预期、聚焦落地"
  ];

  points.forEach((point, i) => {
    const y = 1.2 + i * 0.65;

    // 编号
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: y + 0.08, w: 0.35, h: 0.35,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(String(i + 1), {
      x: 0.5, y: y + 0.08, w: 0.35, h: 0.35,
      fontSize: 12, fontFace: "Arial",
      color: theme.primary, bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // 内容
    slide.addText(point, {
      x: 1.0, y: y, w: 8.5, h: 0.55,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      align: "left", valign: "middle", margin: 0
    });
  });

  // 页码
  slide.addText("27", {
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
  pres.writeFile({ fileName: "slide-27-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
