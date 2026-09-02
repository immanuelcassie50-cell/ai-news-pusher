// 页 98: 形式一：陌生人审计 - 解释
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 98,
  title: '形式一 陌生人审计'
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
  slide.addText("形式一  ·  STRANGER AUDIT", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("陌生人审计", {
    x: 0.5, y: 0.85, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("不需要真的找一个外部人 —— 切换一种角色扮演就够了", {
    x: 0.5, y: 1.55, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧：操作
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.15, w: 5.4, h: 3.0,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.15, w: 0.08, h: 3.0,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  slide.addText("怎么操作", {
    x: 0.75, y: 2.25, w: 5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText([
    { text: "1.  把自己想象成\"第一天来报到的新员工\"\n", options: { fontSize: 13, color: theme.secondary } },
    { text: "    或者\"来做独立评估的外部顾问\"\n\n", options: { fontSize: 11, color: theme.light, italic: true } },
    { text: "2.  带着这个身份，重新看工作流程、问题现场、解决方案\n\n", options: { fontSize: 13, color: theme.secondary } },
    { text: "3.  只记录\"感觉奇怪的地方\"，暂时不允许解释\n", options: { fontSize: 13, color: theme.accent, bold: true } },
    { text: "    （关键规则，下一页讲）\n\n", options: { fontSize: 11, color: theme.light, italic: true } },
    { text: "4.  完成记录后再回头审视这些\"奇怪的地方\"", options: { fontSize: 13, color: theme.secondary } }
  ], {
    x: 0.75, y: 2.7, w: 5.0, h: 2.4,
    fontFace: "Microsoft YaHei",
    align: "left", valign: "top", margin: 0,
    paraSpaceAfter: 4
  });

  // 右侧：核心金句
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.1, y: 2.15, w: 3.4, h: 3.0,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("内部人在这个练习中", {
    x: 6.3, y: 2.4, w: 3.0, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("最容易犯的错是", {
    x: 6.3, y: 2.75, w: 3.0, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("一边记录\"奇怪感\"，", {
    x: 6.3, y: 3.4, w: 3.0, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("一边立刻给它找到一个内部理由。", {
    x: 6.3, y: 3.8, w: 3.0, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "top", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.3, y: 4.5, w: 0.4, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("然后奇怪感就消失了。", {
    x: 6.3, y: 4.65, w: 3.0, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "98", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "98_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
