// 页 168: Closing - 致谢
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'closing',
  index: 168,
  title: '致谢'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧 1/3 主色块（与第一节扉页呼应）
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 3.3, h: 5.625,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  // 左侧大数字 168
  slide.addText("168", {
    x: 0.4, y: 1.6, w: 2.5, h: 1.8,
    fontSize: 96, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧小标识
  slide.addText("页  /  END", {
    x: 0.4, y: 3.5, w: 2.5, h: 0.4,
    fontSize: 14, fontFace: "Georgia",
    color: theme.light, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 右侧标题
  slide.addText("致谢", {
    x: 3.8, y: 1.5, w: 5.8, h: 0.9,
    fontSize: 42, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.8, y: 2.5, w: 0.6, h: 0.05,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 致谢正文
  slide.addText("感谢你 168 页的同行。", {
    x: 3.8, y: 2.7, w: 5.8, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("感谢你的认真、你的思考、你的行动 ——", {
    x: 3.8, y: 3.2, w: 5.8, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("也感谢所有让这门课成为可能的人 ——", {
    x: 3.8, y: 3.55, w: 5.8, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("愿意面对真问题的人，都是勇敢的人。", {
    x: 3.8, y: 3.9, w: 5.8, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 底部装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.8, y: 4.4, w: 1.0, h: 0.04,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  // 落款
  slide.addText("行动学习 · 创新解决方案", {
    x: 3.8, y: 4.5, w: 5.8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("授课版本  /  第二版", {
    x: 3.8, y: 4.85, w: 5.8, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, charSpacing: 2,
    align: "left", valign: "middle", margin: 0
  });

  return slide;
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
  pres.writeFile({ fileName: "168_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
