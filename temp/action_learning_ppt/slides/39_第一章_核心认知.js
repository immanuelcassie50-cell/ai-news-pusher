// 页 39: 大字 - 第一章核心认知 收尾总结
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 39,
  title: '第一章 核心认知'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 顶部标识
  slide.addText("第一章 核心认知  /  CORE INSIGHT", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 装饰大字
  slide.addText("01", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Georgia",
    color: theme.light, charSpacing: 8, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 大字引述
  slide.addText("常规方案不是因为不够好", {
    x: 0.5, y: 1.4, w: 9, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("才有天花板，", {
    x: 0.5, y: 2.0, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("而是因为它们", {
    x: 0.5, y: 2.55, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("全部来自同一套思考框架。", {
    x: 0.5, y: 3.1, w: 9, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 分割线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.5, y: 3.85, w: 1, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 四种来源
  slide.addText("天花板有四种来源", {
    x: 0.5, y: 4.0, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle", margin: 0
  });

  // 4个小标签
  const sources = ["问题定义的边界", "被当作约束的假设", "熟悉的解法空间", "点方案对系统原因的忽视"];
  sources.forEach((s, i) => {
    const x = 0.5 + i * 2.3;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 4.4, w: 2.2, h: 0.6,
      fill: { color: "FFFFFF" }, line: { color: theme.primary, width: 1 }
    });
    slide.addText(`0${i + 1}`, {
      x: x, y: 4.45, w: 2.2, h: 0.25,
      fontSize: 10, fontFace: "Georgia",
      color: theme.accent, bold: true,
      align: "center", valign: "middle", margin: 0
    });
    slide.addText(s, {
      x: x + 0.05, y: 4.7, w: 2.1, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "middle", margin: 0
    });
  });

  // 结尾金句
  slide.addText("识别你的方案属于哪种类型 —— 是找到突破口的第一步。", {
    x: 0.5, y: 5.07, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "39", "第一章 看清常规方案的天花板");
  return slide;
}

function addFooter(slide, pres, theme, pageNum, sectionName) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.42, w: 3, h: 0.02,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.5, y: 5.42, w: 3, h: 0.02,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addText(`行动学习 · 创新解决方案  /  ${pageNum}`, {
    x: 0.5, y: 5.46, w: 5, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'left', valign: 'middle', margin: 0
  });
  slide.addText(sectionName, {
    x: 6, y: 5.46, w: 3.5, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'right', valign: 'middle', margin: 0
  });
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary:   "6B0F0F",
    secondary: "3D3D3D",
    accent:    "B8232C",
    light:     "D4C5BE",
    bg:        "F5F0EC"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "39_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
