// 页 67: 第三章上 - 为什么找不到（解释说明）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 67,
  title: '为什么找不到更好的解法'
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
  slide.addText("问题诊断  /  根本原因", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("为什么找不到更好的解法", {
    x: 0.5, y: 0.8, w: 9, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧：现状说明
  slide.addText("方案盘点后的处境", {
    x: 0.5, y: 1.7, w: 4.4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("你正面对第二类和第三类方案：", {
    x: 0.5, y: 2.15, w: 4.4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 两个状态卡
  const states = [
    { num: "01", title: "方向对但深度不够", desc: "方向没错，但只能做表面改善" },
    { num: "02", title: "关键领域完全空白", desc: "最重要的方向上根本没有解法" }
  ];

  states.forEach((s, i) => {
    const yPos = 2.55 + i * 0.85;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: yPos, w: 4.4, h: 0.75,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: yPos, w: 0.08, h: 0.75,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(s.num, {
      x: 0.7, y: yPos + 0.05, w: 0.5, h: 0.3,
      fontSize: 14, fontFace: "Georgia", color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(s.title, {
      x: 1.2, y: yPos + 0.05, w: 3.1, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(s.desc, {
      x: 1.2, y: yPos + 0.38, w: 3.1, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
  });

  // 右侧：根本原因
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.7, w: 4.3, h: 3.2,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  slide.addText("根本原因", {
    x: 5.4, y: 1.85, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("不是因为不够努力", {
    x: 5.4, y: 2.2, w: 4, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("也不是因为不够聪明", {
    x: 5.4, y: 2.6, w: 4, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 分割线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.4, y: 3.15, w: 0.4, h: 0.03,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  slide.addText("而是因为：", {
    x: 5.4, y: 3.3, w: 4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("你在一套特定的假设框架里思考", {
    x: 5.4, y: 3.65, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("框架决定了你会考虑什么，也决定了你看不到什么", {
    x: 5.4, y: 4.05, w: 4, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 底部提示
  slide.addText("这一章介绍两种方法，专门针对「框架本身」下手", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "67", "第三章（上）换一套假设思考");
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
  pres.writeFile({ fileName: "67_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
