// 页 167: Closing - 课程闭环（完整路径）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'closing',
  index: 167,
  title: '课程闭环'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部色条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.8,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  slide.addText("课程闭环  /  The Complete Path", {
    x: 0.5, y: 0, w: 9, h: 0.8,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("168 页", {
    x: 7.0, y: 0, w: 2.5, h: 0.8,
    fontSize: 12, fontFace: "Georgia",
    color: theme.light, italic: true,
    align: "right", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("走过的路，构成的回路", {
    x: 0.5, y: 1.0, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 6 个节点 - 横向
  const stops = [
    { num: "01", title: "看清天花板", ch: "第一章", color: theme.primary },
    { num: "02", title: "系统盘点", ch: "第二章", color: theme.accent },
    { num: "03", title: "换一套假设", ch: "第三章", color: theme.primary },
    { num: "04", title: "换一个视角", ch: "第三章", color: theme.accent },
    { num: "05", title: "评估与组合", ch: "第四+五章", color: theme.primary },
    { num: "06", title: "出发", ch: "现在", color: theme.accent }
  ];

  stops.forEach((s, i) => {
    const x = 0.5 + i * 1.55;
    // 圆点
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.4, y: 2.0, w: 0.6, h: 0.6,
      fill: { color: s.color }, line: { type: 'none' }
    });
    slide.addText(s.num, {
      x: x + 0.4, y: 2.0, w: 0.6, h: 0.6,
      fontSize: 14, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
    // 连接线
    if (i < stops.length - 1) {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: x + 1.0, y: 2.27, w: 0.95, h: 0.06,
        fill: { color: theme.light }, line: { type: 'none' }
      });
    }
    // 章节
    slide.addText(s.ch, {
      x: x, y: 2.7, w: 1.4, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, charSpacing: 2,
      align: "center", valign: "middle", margin: 0
    });
    // 标题
    slide.addText(s.title, {
      x: x, y: 3.0, w: 1.4, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle", margin: 0
    });
  });

  // 底部
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.0, w: 0.5, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("起点", {
    x: 0.5, y: 4.15, w: 1.0, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 2,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("不是分析本身，而是带着方案真正改变局面 ——", {
    x: 0.5, y: 4.55, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("这是终点，也是新的起点。", {
    x: 0.5, y: 4.95, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, italic: true,
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
  pres.writeFile({ fileName: "167_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
