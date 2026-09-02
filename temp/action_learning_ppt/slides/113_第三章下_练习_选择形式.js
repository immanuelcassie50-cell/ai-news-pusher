// 页 113: 练习 选择形式 - 解释
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 113,
  title: '练习 选择形式'
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
  slide.addText("练习  ·  选择一种形式", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("如何选择使用哪种形式", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("三种形式对应不同的卡点情况 —— 选最适合你课题的那一种", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 三栏对照
  const cards = [
    {
      x: 0.5,
      title: "陌生人审计",
      scene: "团队在这个问题上工作了很久，对很多不合理已经习以为常",
      action: "停下来，保留奇怪感"
    },
    {
      x: 3.7,
      title: "跨行业原理迁移",
      scene: "感觉其他行业可能有成熟的解法，但不知道怎么移植",
      action: "先抽象化，再找场景"
    },
    {
      x: 6.9,
      title: "极端用户视角",
      scene: "一直在为平均用户优化，但效果遇到瓶颈",
      action: "找到被边缘化的群体"
    }
  ];

  cards.forEach((c) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: c.x, y: 2.1, w: 2.8, h: 2.8,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: c.x, y: 2.1, w: 2.8, h: 0.5,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(c.title, {
      x: c.x, y: 2.1, w: 2.8, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
    slide.addText("适用卡点", {
      x: c.x + 0.2, y: 2.75, w: 2.4, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, charSpacing: 4, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(c.scene, {
      x: c.x + 0.2, y: 3.05, w: 2.4, h: 1.2,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: c.x + 0.2, y: 4.3, w: 0.3, h: 0.03,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText("关键动作", {
      x: c.x + 0.2, y: 4.35, w: 2.4, h: 0.25,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.light, italic: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(c.action, {
      x: c.x + 0.2, y: 4.55, w: 2.4, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });
  });

  // 底部金句
  slide.addText("可以选择一种深度完成，也可以快速过三种，再选最有收获的那种深化。", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "113", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "113_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
