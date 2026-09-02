// 页 71: 第三章上 - 思维实验 - 原问题（思维实验 1/3）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 71,
  title: '思维实验 - 原问题 1/3'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标
  slide.addText("思维实验  /  1 / 3  ·  原问题", {
    x: 0.5, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 序号标识
  slide.addText("01", {
    x: 8.5, y: 0.4, w: 1, h: 0.4,
    fontSize: 14, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "right", valign: "middle", margin: 0
  });

  // 进度小点
  for (let i = 0; i < 3; i++) {
    slide.addShape(pres.shapes.OVAL, {
      x: 4.4 + i * 0.25, y: 0.5, w: 0.12, h: 0.12,
      fill: { color: i === 0 ? theme.accent : theme.light }, line: { type: 'none' }
    });
  }

  // 顶部小标签
  slide.addText("IT 设备报障场景", {
    x: 0.5, y: 0.9, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, charSpacing: 4,
    align: "center", valign: "middle", margin: 0
  });

  // 问题陈述
  slide.addText("面对的问题：", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle", margin: 0
  });

  // 大字引述
  slide.addText("「如何更快地处理", {
    x: 0.5, y: 2.05, w: 9, h: 0.8,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  slide.addText("员工的 IT 设备报障请求？」", {
    x: 0.5, y: 2.85, w: 9, h: 0.8,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.6, y: 3.8, w: 0.8, h: 0.04,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  // 你会想到什么
  slide.addText("在这个问题定义下，你会想到：", {
    x: 0.5, y: 4.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  slide.addText("增加 IT 人员  ·  自助服务台  ·  优化报障流程  ·  智能客服处理初级问题", {
    x: 0.5, y: 4.35, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle", margin: 0
  });

  // 底部
  slide.addText("方向没错，但解法空间被锁在「处理速度」这一个维度里", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "71", "第三章（上）换一套假设思考");
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
  pres.writeFile({ fileName: "71_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
