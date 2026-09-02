// 49_第二章_第二类_需要深化 - 大字型
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 49,
  title: '第二类方案的处理方式：深化'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部装饰：右侧大色块
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 9.6, y: 0, w: 0.4, h: 5.625,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  // 顶部小标
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("THE  KEY  /  处理方式", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("关于第二类方案", {
    x: 0.5, y: 0.85, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 居中大引述
  slide.addText("方向经过验证", {
    x: 0.5, y: 1.7, w: 9, h: 1.1,
    fontSize: 64, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("真正要做的是在同一方向上找到更系统、更能持续的解法。", {
    x: 1.0, y: 3.0, w: 8, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle", margin: 0
  });

  // 关键强调
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.0, y: 3.85, w: 2, h: 0.5,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("深  化", {
    x: 4.0, y: 3.85, w: 2, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, charSpacing: 8,
    align: "center", valign: "middle", margin: 0
  });

  // 底部说明
  slide.addText("不是放弃，不是替换——是在正确方向上加力度、加机制。", {
    x: 0.5, y: 4.6, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "49", "第二章 系统盘点");
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
  pres.writeFile({ fileName: "49_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
