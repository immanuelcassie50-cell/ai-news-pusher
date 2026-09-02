// 页 16: 2x2 矩阵 - 4种天花板
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 16,
  title: '第一章 四种天花板导览'
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
  slide.addText("总览  /  OVERVIEW", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("常规方案的四种天花板", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("它们以四种固定的形式出现 —— 识别自己的方案属于哪种类型，是找到突破口的第一步。", {
    x: 0.5, y: 1.35, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 2x2 矩阵
  const cards = [
    { x: 0.5, y: 1.95, num: "01", title: "在问题的定义范围内找答案", desc: "问题被怎么定义，方案就在那个框架内涌现。", color: theme.primary },
    { x: 5.0, y: 1.95, num: "02", title: "把假设当成约束", desc: "「做不到」的判断从来没被认真测试过。", color: theme.accent },
    { x: 0.5, y: 3.55, num: "03", title: "只在熟悉的解法空间里找", desc: "所有方案都是行业已知做法，没有外部借鉴。", color: theme.secondary },
    { x: 5.0, y: 3.55, num: "04", title: "只解决了症状，没动系统条件", desc: "点方案短期有效，停止推进就回来。", color: theme.primary }
  ];

  cards.forEach(c => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: c.x, y: c.y, w: 4.5, h: 1.45,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: c.x, y: c.y, w: 0.1, h: 1.45,
      fill: { color: c.color }, line: { type: 'none' }
    });
    slide.addText(c.num, {
      x: c.x + 0.25, y: c.y + 0.1, w: 0.8, h: 0.6,
      fontSize: 32, fontFace: "Georgia",
      color: c.color, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(c.title, {
      x: c.x + 1.1, y: c.y + 0.15, w: 3.3, h: 0.45,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(c.desc, {
      x: c.x + 1.1, y: c.y + 0.65, w: 3.3, h: 0.7,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
  });

  // 页脚
  addFooter(slide, pres, theme, "16", "第一章 看清常规方案的天花板");
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
  pres.writeFile({ fileName: "16_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
