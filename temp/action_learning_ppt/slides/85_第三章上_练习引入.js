// 页 85: 第三章上 - 练习引入（引述）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 85,
  title: '练习引入 - 重构你的问题陈述'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 顶部小标
  slide.addText("练习  /  重构你的问题陈述", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("✋ 练习  /  重构你的问题陈述", {
    x: 0.5, y: 0.8, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 中央大引号
  slide.addText("「", {
    x: 0.5, y: 1.4, w: 1.5, h: 1.5,
    fontSize: 140, fontFace: "Georgia",
    color: theme.light,
    align: "left", valign: "top", margin: 0
  });

  // 练习目的
  slide.addText("这个练习的目的", {
    x: 1.8, y: 1.8, w: 7.5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("对你的课题生成多个问题重构版本，", {
    x: 1.8, y: 2.2, w: 7.5, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("找到能打开最大解法空间的那个表述。", {
    x: 1.8, y: 2.7, w: 7.5, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.8, y: 3.4, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 三个产出
  slide.addText("完成本练习后你会得到：", {
    x: 1.8, y: 3.55, w: 7.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  const outputs = [
    "一份新的问题陈述（可能与最初表述非常不同）",
    "三个方向的重构对比结果",
    "判断哪个版本最有价值的结论"
  ];

  outputs.forEach((o, i) => {
    const yPos = 3.95 + i * 0.32;
    slide.addShape(pres.shapes.OVAL, {
      x: 1.8, y: yPos + 0.1, w: 0.1, h: 0.1,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(o, {
      x: 2.0, y: yPos, w: 7.3, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
  });

  // 底部提示
  slide.addText("完成方式  /  把真实课题填进模板，沿三个方向完成重构，最后做出判断", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "85", "第三章（上）换一套假设思考");
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
  pres.writeFile({ fileName: "85_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
