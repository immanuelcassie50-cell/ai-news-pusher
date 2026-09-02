// 页 73: 第三章上 - 思维实验 - 重构二（思维实验 3/3）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 73,
  title: '思维实验 - 重构二 3/3'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标
  slide.addText("思维实验  /  3 / 3  ·  再换一个定义", {
    x: 0.5, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 序号标识
  slide.addText("03", {
    x: 8.5, y: 0.4, w: 1, h: 0.4,
    fontSize: 14, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "right", valign: "middle", margin: 0
  });

  // 进度小点
  for (let i = 0; i < 3; i++) {
    slide.addShape(pres.shapes.OVAL, {
      x: 4.4 + i * 0.25, y: 0.5, w: 0.12, h: 0.12,
      fill: { color: i === 2 ? theme.accent : theme.light }, line: { type: 'none' }
    });
  }

  // 顶部小标签
  slide.addText("再换一次", {
    x: 0.5, y: 0.9, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 4,
    align: "center", valign: "middle", margin: 0
  });

  // 大字引述
  slide.addText("「如何设计工作环境，", {
    x: 0.5, y: 1.7, w: 9, h: 0.8,
    fontSize: 40, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  slide.addText("让员工设备出问题时损失最小？」", {
    x: 0.5, y: 2.5, w: 9, h: 0.8,
    fontSize: 40, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.6, y: 3.45, w: 0.8, h: 0.04,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  // 解法空间变化提示
  slide.addText("又是完全不同的方向", {
    x: 0.5, y: 3.65, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 三个解法
  const solutions = [
    "云端工作",
    "备用设备池",
    "关键数据自动备份"
  ];

  solutions.forEach((s, i) => {
    const xPos = 1.5 + i * 2.5;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: xPos, y: 4.2, w: 2.0, h: 0.6,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(s, {
      x: xPos, y: 4.2, w: 2.0, h: 0.6,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
  });

  // 底部结论
  slide.addText("三个问题定义，三组完全不同的解法 —— 但都在描述同一个现实情况", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "73", "第三章（上）换一套假设思考");
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
  pres.writeFile({ fileName: "73_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
