// 页 132: 解释说明 - 发散后要收敛
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 132,
  title: '发散之后要收敛'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("章节导言  /  Introduction", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("发散之后要收敛", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧情境描述
  slide.addText("你手里现在有了什么", {
    x: 0.5, y: 1.6, w: 4.4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 3,
    align: "left", valign: "middle", margin: 0
  });

  const items = [
    "原有方案深化来的方向",
    "问题重构找到的新入口",
    "打破假约束后的新可能",
    "跨行业原理迁移的方案",
    "几个方向的重新组合"
  ];
  items.forEach((m, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: 2.05 + i * 0.42, w: 0.08, h: 0.3,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(m, {
      x: 0.7, y: 2.0 + i * 0.42, w: 4.2, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
  });

  // 右侧核心论断
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 1.6, w: 4.2, h: 3.4,
    fill: { color: "FFFFFF" }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 1.6, w: 4.2, h: 0.5,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("现在最大的风险", {
    x: 5.3, y: 1.6, w: 4.2, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, charSpacing: 4,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("凭感觉选", {
    x: 5.5, y: 2.3, w: 3.8, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("「看起来最有冲击力」的", {
    x: 5.5, y: 2.8, w: 3.8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.5, y: 3.3, w: 0.5, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("而不是", {
    x: 5.5, y: 3.4, w: 3.8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("「最可能真正有效」的", {
    x: 5.5, y: 3.8, w: 3.8, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 底部金句
  slide.addText("收敛需要一个可以依靠的框架 —— 不然你会花大量时间在「感觉怎么样」上，而不是「依据是什么」上。", {
    x: 0.5, y: 4.3, w: 9, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "132", "第四五章 从候选到落地");
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
  pres.writeFile({ fileName: "132_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
